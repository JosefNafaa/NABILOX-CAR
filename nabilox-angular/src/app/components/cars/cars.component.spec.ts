import { TestBed } from '@angular/core/testing';
import { CarsComponent } from './cars.component';

describe('CarsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CarsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should reset filters', () => {
    const fixture = TestBed.createComponent(CarsComponent);
    const component = fixture.componentInstance;
    component.searchTerm = 'test';
    component.brandFilter = 'Mercedes';
    component.resetFilters();
    expect(component.searchTerm).toBe('');
    expect(component.brandFilter).toBe('all');
  });
});
