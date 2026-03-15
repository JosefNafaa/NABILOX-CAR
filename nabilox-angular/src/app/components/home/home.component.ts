import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CARS_DATA } from '../../data/cars.data';
import { Car } from '../../models/car.model';
import { GoogleReview, GoogleReviewsService } from '../../services/google-reviews.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  featuredCars: Car[] = CARS_DATA.slice(0, 4);
  reviews: GoogleReview[] = [];
  reviewsError = false;
  googleRating = 4.8;
  googleTotalReviews = 20;
  googlePlaceUrl = 'https://www.google.com/maps/place/Nabilox+Car/@34.0225759,-6.8490753,17z/data=!3m1!4b1!4m6!3m5!1s0xda76d006af9e653:0x8853df2f82fc368d!8m2!3d34.0225715!4d-6.8465004!16s%2Fg%2F11ykmlb81_';
  teamImageSrc = 'images/about/team.jpg';
  heroImageIndex = 0;
  private readonly heroImagesCount = 3;
  private heroRotationIntervalId: ReturnType<typeof setInterval> | null = null;
  private reviewsSubscription: Subscription | null = null;

  constructor(
    private languageService: LanguageService,
    private googleReviewsService: GoogleReviewsService
  ) {}

  ngOnInit(): void {
    this.loadGoogleReviews();
    this.startHeroBackgroundRotation();
  }

  ngOnDestroy(): void {
    if (this.heroRotationIntervalId) {
      clearInterval(this.heroRotationIntervalId);
      this.heroRotationIntervalId = null;
    }

    this.reviewsSubscription?.unsubscribe();
    this.reviewsSubscription = null;
  }

  ngAfterViewInit(): void {
    this.languageService.applyTranslations();
  }

  private loadGoogleReviews(): void {
    this.reviewsError = false;

    this.reviewsSubscription?.unsubscribe();
    this.reviewsSubscription = this.googleReviewsService.getNabiloxReviews().subscribe({
      next: data => {
        this.googleRating = data.rating || 0;
        this.googleTotalReviews = data.totalReviews || 0;
        this.googlePlaceUrl = data.placeUrl || this.googlePlaceUrl;
        this.reviews = data.reviews.slice(0, 3);
      },
      error: () => {
        this.reviewsError = true;
        this.reviews = [];
      }
    });
  }

  stars(rating: number): number[] {
    const count = Math.max(0, Math.min(5, Math.round(rating)));
    return Array.from({ length: count });
  }

  get basedOnReviewsText(): string {
    const total = this.googleTotalReviews;
    if (this.languageService.currentLang === 'fr') {
      return `(Basé sur ${total} avis Google)`;
    }
    if (this.languageService.currentLang === 'ar') {
      return `(بناءً على ${total} تقييم على جوجل)`;
    }
    return `(Based on ${total} Google Reviews)`;
  }

  submitContactForm(form: HTMLFormElement): void {
    const lang = this.languageService.currentLang;
    const message =
      lang === 'en'
        ? 'Thank you for your message! We will contact you soon.'
        : lang === 'fr'
          ? 'Merci pour votre message! Nous vous contacterons bientôt.'
          : 'شكراً لرسالتك! سنتواصل معك قريباً.';
    alert(message);
    form.reset();
  }

  whatsappLink(car: Car): string {
    return `https://wa.me/212661841971?text=${encodeURIComponent(`I'm interested in ${car.brand} ${car.model} ${car.year}`)}`;
  }

  onTeamImageError(): void {
    this.teamImageSrc = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80';
  }

  trackByCarId(_index: number, car: Car): number {
    return car.id;
  }

  trackByReview(_index: number, review: GoogleReview): string {
    return `${review.authorName}-${review.relativeTime}-${review.rating}`;
  }

  trackByIndex(index: number): number {
    return index;
  }

  private startHeroBackgroundRotation(): void {
    this.heroRotationIntervalId = setInterval(() => {
      this.heroImageIndex = (this.heroImageIndex + 1) % this.heroImagesCount;
    }, 6000);
  }
}
