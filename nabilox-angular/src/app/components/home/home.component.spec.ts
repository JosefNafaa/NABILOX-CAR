import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { GoogleReviewsService } from '../../services/google-reviews.service';

class GoogleReviewsServiceMock {
  getNabiloxReviews() {
    return of({
      placeName: 'Nabilox Car',
      rating: 4.8,
      totalReviews: 20,
      reviews: []
    });
  }
}

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: GoogleReviewsService, useClass: GoogleReviewsServiceMock }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should update team image source on image error', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    component.onTeamImageError();
    expect(component.teamImageSrc).toContain('images.unsplash.com');
  });
});
