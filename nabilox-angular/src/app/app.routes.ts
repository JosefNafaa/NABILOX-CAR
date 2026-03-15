import { Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'cars', component: CarsComponent },
	{ path: 'cars/:id', component: CarDetailsComponent },
	{ path: '**', redirectTo: '' }
];
