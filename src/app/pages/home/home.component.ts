import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  appName = 'Trilingo';
  tagline = 'Learn languages the fun way!';
  description =
    'Trilingo helps you learn languages interactively and intuitively, with gamified lessons and personalized tracking.';

  // Local features data, no API
  features: string[] = [
    'Gamified lessons for all ages',
    'Track your progress easily',
    'Interactive quizzes & exercises',
    'Learn at your own pace',
  ];

  constructor(private router: Router) {}

  onGetStarted() {
    this.router.navigate(['/learn']);
  }
}
