import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CarDetailsComponent } from './car-details.component';

describe('CarDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDetailsComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } }
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CarDetailsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should return fallback whatsapp link when car is missing', () => {
    const fixture = TestBed.createComponent(CarDetailsComponent);
    const component = fixture.componentInstance;
    component.car = undefined;
    expect(component.whatsappLink()).toContain('wa.me');
  });
});
