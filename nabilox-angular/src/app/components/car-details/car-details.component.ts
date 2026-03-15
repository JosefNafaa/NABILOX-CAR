import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CARS_DATA } from '../../data/cars.data';
import { Car } from '../../models/car.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './car-details.component.html'
})
export class CarDetailsComponent implements OnInit {
  car: Car | undefined;

  constructor(
    private route: ActivatedRoute,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car = CARS_DATA.find(item => item.id === id);
    setTimeout(() => this.languageService.applyTranslations(), 0);
  }

  whatsappLink(): string {
    if (!this.car) {
      return 'https://wa.me/212661841971';
    }
    return `https://wa.me/212661841971?text=${encodeURIComponent(`I'm interested in ${this.car.brand} ${this.car.model} ${this.car.year}`)}`;
  }
}
