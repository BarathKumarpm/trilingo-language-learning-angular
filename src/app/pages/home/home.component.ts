import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  appName = 'Trilingo';
  tagline = 'Learn languages the fun way!';
  description =
    'Trilingo helps you learn languages interactively and intuitively, with gamified lessons and personalized tracking.';

  features: string[] = [];
  private featuresApiUrl = 'https://api.example.com/features';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadFeatures();
  }

  loadFeatures() {
    this.http.get<string[]>(this.featuresApiUrl).subscribe({
      next: (data) => (this.features = data),
      error: () => {
        this.features = [
          'Gamified lessons for all ages',
          'Track your progress easily',
          'Interactive quizzes & exercises',
          'Learn at your own pace',
        ];
      },
    });
  }

  onGetStarted() {
    this.router.navigate(['/learn']);
  }
}
