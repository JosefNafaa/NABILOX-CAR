import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  currentYear = new Date().getFullYear();
  isScrolled = false;
  showFloatingButtons = false;

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.languageService.initializeLanguage();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => setTimeout(() => this.languageService.applyTranslations(), 0));
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.showFloatingButtons = window.scrollY > 300;
  }
}
