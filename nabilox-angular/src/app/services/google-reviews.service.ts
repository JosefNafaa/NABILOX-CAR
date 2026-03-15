import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { from, Observable } from 'rxjs';

export interface GoogleReview {
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhotoUrl?: string;
}

export interface GoogleReviewsPayload {
  placeName: string;
  placeUrl?: string;
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

declare const google: any;

@Injectable({ providedIn: 'root' })
export class GoogleReviewsService {
  private readonly placeQuery = 'Nabilox Car';
  private readonly placeLocation = { lat: 34.0225715, lng: -6.8465004 };
  private scriptLoadPromise: Promise<void> | null = null;
  private readonly renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  getNabiloxReviews(): Observable<GoogleReviewsPayload> {
    return from(this.getNabiloxReviewsInternal());
  }

  private async getNabiloxReviewsInternal(): Promise<GoogleReviewsPayload> {
    await this.loadGoogleMapsPlacesSdk();

    if (this.placeId) {
      try {
        return await this.fetchPlaceDetailsByPlaceId(this.placeId);
      } catch {
        return this.fetchPlaceDetailsByTextSearch();
      }
    }

    return this.fetchPlaceDetailsByTextSearch();
  }

  private get apiKey(): string {
    const rawValue = ((window as any).GOOGLE_MAPS_API_KEY || '').trim();
    if (!rawValue || /^YOUR_/i.test(rawValue)) {
      return '';
    }

    return rawValue;
  }

  private get placeId(): string {
    const rawValue = ((window as any).GOOGLE_PLACE_ID || '').trim();
    if (!rawValue || /^YOUR_/i.test(rawValue)) {
      return '';
    }

    return rawValue;
  }

  private loadGoogleMapsPlacesSdk(): Promise<void> {
    if ((window as any).google?.maps?.places) {
      return Promise.resolve();
    }

    if (this.scriptLoadPromise) {
      return this.scriptLoadPromise;
    }

    if (!this.apiKey) {
      return Promise.reject(new Error('Google Maps API key is missing. Set window.GOOGLE_MAPS_API_KEY in index.html.'));
    }

    this.scriptLoadPromise = new Promise<void>((resolve, reject) => {
      const existingScript = this.document.getElementById('google-maps-sdk');
      if (existingScript) {
        const unlistenLoad = this.renderer.listen(existingScript, 'load', () => {
          unlistenLoad();
          unlistenError();
          resolve();
        });
        const unlistenError = this.renderer.listen(existingScript, 'error', () => {
          unlistenLoad();
          unlistenError();
          reject(new Error('Google Maps SDK failed to load.'));
        });
        return;
      }

      const script = this.renderer.createElement('script');
      this.renderer.setProperty(script, 'id', 'google-maps-sdk');
      this.renderer.setProperty(script, 'async', true);
      this.renderer.setProperty(script, 'defer', true);
      this.renderer.setProperty(script, 'src', `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(this.apiKey)}&libraries=places`);

      const unlistenLoad = this.renderer.listen(script, 'load', () => {
        unlistenLoad();
        unlistenError();
        resolve();
      });

      const unlistenError = this.renderer.listen(script, 'error', () => {
        unlistenLoad();
        unlistenError();
        reject(new Error('Google Maps SDK failed to load.'));
      });

      this.renderer.appendChild(this.document.head, script);
    });

    return this.scriptLoadPromise;
  }

  private fetchPlaceDetailsByTextSearch(): Promise<GoogleReviewsPayload> {
    return new Promise((resolve, reject) => {
      const placesHost = this.renderer.createElement('div');
      const service = new google.maps.places.PlacesService(placesHost);

      service.textSearch(
        {
          query: this.placeQuery,
          location: new google.maps.LatLng(this.placeLocation.lat, this.placeLocation.lng),
          radius: 2500
        },
        (results: any[], searchStatus: string) => {
          if (searchStatus !== google.maps.places.PlacesServiceStatus.OK || !results?.length) {
            reject(new Error('Place not found from text search.'));
            return;
          }

          this.fetchBestDetailsFromCandidates(results).then(resolve).catch(reject);
        }
      );
    });
  }

  private async fetchBestDetailsFromCandidates(results: any[]): Promise<GoogleReviewsPayload> {
    const brandSearchMaxReviews = this.getBrandSearchMaxReviews(results);
    const fallbackCandidate = this.pickBestSearchCandidate(results);
    const candidateIds = this.pickCandidatePlaceIds(results).slice(0, 5);

    if (!candidateIds.length) {
      throw new Error('No candidate place IDs available from text search results.');
    }

    let bestPayload: GoogleReviewsPayload | null = null;
    let bestScore = Number.NEGATIVE_INFINITY;

    for (const candidateId of candidateIds) {
      try {
        const payload = await this.fetchPlaceDetailsByPlaceId(candidateId);
        const normalizedName = (payload.placeName || '').toLowerCase();
        const matchesBrand = normalizedName.includes('nabilox');
        const score = (matchesBrand ? 1000 : 0) + (payload.totalReviews || 0);

        if (score > bestScore) {
          bestScore = score;
          bestPayload = payload;
        }
      } catch {
      }
    }

    if (!bestPayload) {
      if (!fallbackCandidate) {
        throw new Error('Unable to resolve place details from candidates.');
      }

      return {
        placeName: fallbackCandidate.name || 'Nabilox Car',
        rating: Number(fallbackCandidate.rating || 0),
        totalReviews: Number(fallbackCandidate.user_ratings_total || 0),
        reviews: []
      };
    }

    const bestName = (bestPayload.placeName || '').toLowerCase();
    const shouldUseSearchMax = bestName.includes('nabilox') && brandSearchMaxReviews > 0;

    return {
      ...bestPayload,
      totalReviews: shouldUseSearchMax
        ? Math.max(bestPayload.totalReviews || 0, brandSearchMaxReviews)
        : bestPayload.totalReviews
    };
  }

  private fetchPlaceDetailsByPlaceId(placeId: string): Promise<GoogleReviewsPayload> {
    return new Promise((resolve, reject) => {
      const placesHost = this.renderer.createElement('div');
      const service = new google.maps.places.PlacesService(placesHost);

      service.getDetails(
        {
          placeId,
          fields: ['name', 'rating', 'user_ratings_total', 'reviews', 'url']
        },
        (place: any, detailsStatus: string) => {
          if (detailsStatus !== google.maps.places.PlacesServiceStatus.OK || !place) {
            reject(new Error('Failed to retrieve place details.'));
            return;
          }

          const reviews: GoogleReview[] = Array.isArray(place.reviews)
            ? place.reviews.map((item: any) => ({
                authorName: item.author_name || 'Google user',
                rating: item.rating || 0,
                text: item.text || '',
                relativeTime: item.relative_time_description || '',
                profilePhotoUrl: item.profile_photo_url
              }))
            : [];

          resolve({
            placeName: place.name || 'Nabilox Car',
            placeUrl: place.url,
            rating: place.rating || 0,
            totalReviews: place.user_ratings_total || reviews.length,
            reviews
          });
        }
      );
    });
  }

  private pickCandidatePlaceIds(results: any[]): string[] {
    const normalizedTarget = 'nabilox car';

    return results
      .filter(result => !!result?.place_id)
      .map(result => {
        const name = String(result.name || '').toLowerCase();
        const matchesName = name.includes(normalizedTarget);
        const ratingsTotal = Number(result?.user_ratings_total || 0);

        const lat = result?.geometry?.location?.lat?.();
        const lng = result?.geometry?.location?.lng?.();
        const distance = typeof lat === 'number' && typeof lng === 'number'
          ? this.distanceInMeters(lat, lng, this.placeLocation.lat, this.placeLocation.lng)
          : Number.MAX_SAFE_INTEGER;

        let score = 0;
        if (matchesName) score += 1000;
        score += ratingsTotal * 50;
        score -= Math.min(distance, 20000) / 100;

        return { result, score };
      })
      .sort((a, b) => b.score - a.score)
      .map(item => item.result.place_id)
      .filter((placeId: string) => !!placeId);
  }

  private pickBestSearchCandidate(results: any[]): any | null {
    const target = 'nabilox';

    const scored = results
      .filter(result => !!result)
      .map(result => {
        const name = String(result?.name || '').toLowerCase();
        const matchesName = name.includes(target);
        const reviewCount = Number(result?.user_ratings_total || 0);
        const rating = Number(result?.rating || 0);
        const score = (matchesName ? 1000 : 0) + (reviewCount * 10) + rating;
        return { result, score };
      })
      .sort((a, b) => b.score - a.score);

    return scored[0]?.result || null;
  }

  private getBrandSearchMaxReviews(results: any[]): number {
    const target = 'nabilox';
    const candidates = results.filter(result => String(result?.name || '').toLowerCase().includes(target));

    if (!candidates.length) {
      return 0;
    }

    return candidates.reduce((maxCount, result) => {
      const value = Number(result?.user_ratings_total || 0);
      return Math.max(maxCount, Number.isFinite(value) ? value : 0);
    }, 0);
  }

  private distanceInMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const earthRadius = 6371000;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius * c;
  }
}
