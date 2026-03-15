import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CARS_DATA } from '../../data/cars.data';
import { Car } from '../../models/car.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements AfterViewInit {
  searchTerm = '';
  brandFilter = 'all';
  fuelFilter = 'all';
  transmissionFilter = 'all';

  readonly carsData: Car[] = CARS_DATA;
  readonly brandOptions = ['Mercedes', 'Volkswagen', 'Peugeot', 'Renault', 'Hyundai', 'Dacia', 'Seat', 'Opel', 'Cupra'];

  constructor(public languageService: LanguageService) {}

  ngAfterViewInit(): void {
    this.languageService.applyTranslations();
  }

  get filteredCars(): Car[] {
    const term = this.searchTerm.toLowerCase().trim();
    return this.carsData.filter(car => {
      const matchesSearch = car.brand.toLowerCase().includes(term) || car.model.toLowerCase().includes(term);
      const matchesBrand = this.brandFilter === 'all' || car.brand === this.brandFilter;
      const matchesFuel = this.fuelFilter === 'all' || car.fuel.toLowerCase().includes(this.fuelFilter.toLowerCase());
      const matchesTransmission = this.transmissionFilter === 'all' || car.transmission === this.transmissionFilter;
      return matchesSearch && matchesBrand && matchesFuel && matchesTransmission;
    });
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.brandFilter = 'all';
    this.fuelFilter = 'all';
    this.transmissionFilter = 'all';
  }

  whatsappLink(car: Car): string {
    return `https://wa.me/212661841971?text=${encodeURIComponent(`I'm interested in ${car.brand} ${car.model} ${car.year}`)}`;
  }

  trackByBrand(_index: number, brand: string): string {
    return brand;
  }

  trackByCarId(_index: number, car: Car): number {
    return car.id;
  }
}
