import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, SupportedLanguage } from '../../services/language.service';

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

  constructor(public languageService: LanguageService) {}

  setLanguage(lang: SupportedLanguage): void {
    this.languageService.setLanguage(lang);
  }

  onLogoError(): void {
    this.logoLoadError = true;
  }
}
