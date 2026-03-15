import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, SupportedLanguage } from '../../services/language.service';

type LanguageOption = {
  code: SupportedLanguage;
  label: string;
  shortLabel: string;
  country: string;
  flag: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() isScrolled = false;
  logoLoadError = false;
  languageMenuOpen = false;

  readonly languageOptions: LanguageOption[] = [
    { code: 'fr', label: 'Français', shortLabel: 'FR', country: 'France', flag: '/images/flags/fr.png' },
    { code: 'en', label: 'English', shortLabel: 'US', country: 'United States', flag: '/images/flags/us.png' },
    { code: 'es', label: 'Espanol', shortLabel: 'ES', country: 'Spain', flag: '/images/flags/es.png' },
    { code: 'ar', label: 'العربية', shortLabel: 'MA', country: 'Morocco', flag: '/images/flags/ma.png' }
  ];

  constructor(public languageService: LanguageService) {}

  setLanguage(lang: SupportedLanguage): void {
    this.languageService.setLanguage(lang);
  }

  get selectedLanguage(): LanguageOption {
    return this.languageOptions.find(language => language.code === this.languageService.currentLang) || this.languageOptions[0];
  }

  toggleLanguageMenu(event: Event): void {
    event.stopPropagation();
    this.languageMenuOpen = !this.languageMenuOpen;
  }

  selectLanguage(lang: SupportedLanguage): void {
    this.setLanguage(lang);
    this.languageMenuOpen = false;
  }

  trackByLanguageCode(_index: number, language: LanguageOption): SupportedLanguage {
    return language.code;
  }

  @HostListener('document:click')
  closeLanguageMenu(): void {
    this.languageMenuOpen = false;
  }

  onLogoError(): void {
    this.logoLoadError = true;
  }
}
