import { Car } from '../models/car.model';

type BaseCar = Omit<Car, 'seats'>;

const BASE_CARS: BaseCar[] = [
  { id: 1, brand: 'Mercedes', model: 'C220d', year: 2025, fuel: 'Diesel', transmission: 'Auto', price: 2500, image: 'https://www.mercedes-benz.co.za/content/dam/hq/passengercars/cars/c-class/c-class-saloon-w206-pi/overview/spa/02-2025/images/mercedes-benz-c-class-w206-spa-front-2400x2400-02-2025.jpg' },
  { id: 2, brand: 'Mercedes', model: 'A200d', year: 2026, fuel: 'Diesel', transmission: 'Auto', price: 2000, image: 'https://www.mercedes-benz.co.za/content/dam/hq/passengercars/cars/a-class/hatchback-w177-fl-pi/overview/spa/05-2025/images/mercedes-benz-a-class-w177-spa-a-class-2400x2400-05-2025.jpg' },
  { id: 3, brand: 'Volkswagen', model: 'Touareg', year: 2025, fuel: 'Diesel', transmission: 'Auto', price: 1200, image: 'https://assets.volkswagen.com/is/image/volkswagenag/MG_16-9-B?Zml0PWNyb3AsMSZmbXQ9cG5nJndpZD04MDAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYzRiMA=%3D' },
  { id: 4, brand: 'Volkswagen', model: 'Touareg', year: 2023, fuel: 'Diesel', transmission: 'Auto', price: 1200, image: 'https://assets.volkswagen.com/is/image/volkswagenag/MG_16-9-B?Zml0PWNyb3AsMSZmbXQ9cG5nJndpZD04MDAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYzRiMA=%3D' },
  { id: 5, brand: 'Volkswagen', model: 'T-Roc', year: 2023, fuel: 'Diesel', transmission: 'Auto', price: 600, image: 'https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg' },
  { id: 6, brand: 'Volkswagen', model: 'T-Roc', year: 2024, fuel: 'Diesel', transmission: 'Auto', price: 600, image: 'https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg' },
  { id: 7, brand: 'Volkswagen', model: 'T-Roc', year: 2025, fuel: 'Diesel', transmission: 'Auto', price: 600, image: 'https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg' },
  { id: 8, brand: 'Volkswagen', model: 'T-Roc', year: 2025, fuel: 'Diesel', transmission: 'Auto', price: 600, image: 'https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg' },
  { id: 9, brand: 'Volkswagen', model: 'T-Roc', year: 2025, fuel: 'Diesel', transmission: 'Auto', price: 600, image: 'https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg' },
  { id: 10, brand: 'Cupra', model: 'Formentor', year: 2025, fuel: 'Diesel', transmission: 'Auto', price: 800, image: 'https://cdn.netcarshow.com/Cupra-Formentor-2025-1600-01.jpg' },
  { id: 11, brand: 'Volkswagen', model: 'Golf 8', year: 2023, fuel: 'Diesel', transmission: 'Auto', price: 800, image: 'https://cdn.netcarshow.com/Volkswagen-Golf-2024-1600-01.jpg' },
  { id: 12, brand: 'Volkswagen', model: 'Golf 8', year: 2026, fuel: 'Diesel', transmission: 'Auto', price: 800, image: 'https://cdn.netcarshow.com/Volkswagen-Golf-2024-1600-01.jpg' },
  { id: 13, brand: 'Seat', model: 'Ibiza', year: 2025, fuel: 'Essence', transmission: 'Auto', price: 400, image: 'https://www.larevueautomobile.com/images/fiche-technique/2009/Seat/Ibiza/Seat_Ibiza_001.jpg' },
  { id: 14, brand: 'Opel', model: 'Corsa', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://cdn.netcarshow.com/Opel-Corsa-2024-1600-01.jpg' },
  { id: 15, brand: 'Opel', model: 'Corsa', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://cdn.netcarshow.com/Opel-Corsa-2024-1600-01.jpg' },
  { id: 16, brand: 'Hyundai', model: 'Accent', year: 2022, fuel: 'Diesel', transmission: 'Auto', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s' },
  { id: 17, brand: 'Hyundai', model: 'Accent', year: 2024, fuel: 'Essence', transmission: 'Auto', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s' },
  { id: 18, brand: 'Hyundai', model: 'Accent', year: 2025, fuel: 'Essence', transmission: 'Auto', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s' },
  { id: 19, brand: 'Hyundai', model: 'Accent', year: 2025, fuel: 'Essence', transmission: 'Auto', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s' },
  { id: 20, brand: 'Hyundai', model: 'Accent', year: 2025, fuel: 'Essence', transmission: 'Auto', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s' },
  { id: 21, brand: 'Hyundai', model: 'Tucson', year: 2023, fuel: 'Diesel', transmission: 'Auto', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiqP91UG1RKvozS1cORfs8PVembx28Zu2fw&s' },
  { id: 22, brand: 'Hyundai', model: 'Tucson', year: 2026, fuel: 'Diesel', transmission: 'Auto', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiqP91UG1RKvozS1cORfs8PVembx28Zu2fw&s' },
  { id: 23, brand: 'Renault', model: 'Clio 5', year: 2023, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp' },
  { id: 24, brand: 'Renault', model: 'Clio 5', year: 2024, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp' },
  { id: 25, brand: 'Renault', model: 'Clio 5', year: 2024, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp' },
  { id: 26, brand: 'Renault', model: 'Clio 5', year: 2024, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp' },
  { id: 27, brand: 'Renault', model: 'Clio 5', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp' },
  { id: 28, brand: 'Renault', model: 'Clio 5', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp' },
  { id: 29, brand: 'Renault', model: 'Clio 5', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp' },
  { id: 30, brand: 'Renault', model: 'Clio 5', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp' },
  { id: 31, brand: 'Renault', model: 'Clio 5', year: 2025, fuel: 'Essence', transmission: 'Auto', price: 300, image: 'https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp' },
  { id: 32, brand: 'Renault', model: 'Clio 4', year: 2020, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJNJ74E2krHGMpCkqFImfBOVBMBRevRdiag&s' },
  { id: 33, brand: 'Peugeot', model: '208', year: 2024, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 34, brand: 'Peugeot', model: '208', year: 2024, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 35, brand: 'Peugeot', model: '208', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 36, brand: 'Peugeot', model: '208', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 37, brand: 'Peugeot', model: '208', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 38, brand: 'Peugeot', model: '208', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 39, brand: 'Peugeot', model: '208', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 40, brand: 'Peugeot', model: '208', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 41, brand: 'Peugeot', model: '208', year: 2025, fuel: 'Essence Hybrid', transmission: 'Auto', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 42, brand: 'Peugeot', model: '208', year: 2025, fuel: 'Essence Hybrid', transmission: 'Auto', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s' },
  { id: 43, brand: 'Dacia', model: 'Logan', year: 2022, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg' },
  { id: 44, brand: 'Dacia', model: 'Logan', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg' },
  { id: 45, brand: 'Dacia', model: 'Logan', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg' },
  { id: 46, brand: 'Dacia', model: 'Logan', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg' },
  { id: 47, brand: 'Dacia', model: 'Logan', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 300, image: 'https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg' },
  { id: 48, brand: 'Dacia', model: 'Duster', year: 2025, fuel: 'Diesel', transmission: 'Manuel', price: 400, image: 'https://cdn2.gcdata.gr/c3/p_1920_1811024.webp' }
];

export const CARS_DATA: Car[] = BASE_CARS.map(car => ({
  ...car,
  seats: 5
}));
