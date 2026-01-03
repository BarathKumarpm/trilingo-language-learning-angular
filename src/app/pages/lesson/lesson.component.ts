import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="min-h-screen flex justify-center bg-white px-4">
      <div class="w-full max-w-2xl py-10 space-y-6">

        <button
          routerLink="/learn"
          class="text-sm font-semibold text-blue-600"
        >
          ← Back to Learn
        </button>

        <h1 class="text-2xl font-extrabold text-gray-800">
          Lesson {{ lessonId }}
        </h1>

        <!-- Display title if available from state -->
        <h2 *ngIf="lessonContent?.title" class="text-xl text-gray-700 font-bold">
           {{ lessonContent.title }}
        </h2>

        <p class="text-gray-600">
          This is dynamically loaded based on the route.
        </p>

        <div class="bg-white border-neutral-300 border-2 p-6 rounded-xl shadow">
          <p class="font-medium">
            <!-- Fallback text if state is lost (e.g., refresh) -->
            Lesson content goes here: 
            <span class="text-indigo-600 font-bold">
              {{ lessonContent?.content || 'No content available (direct access)' }}
            </span>
          </p>
        </div>

      </div>
    </div>
  `,
})
export class LessonComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  lessonId = this.route.snapshot.paramMap.get('id');
  lessonContent: any;

  ngOnInit() {
    // 1. Try to get state from history (Angular 7.2+)
    // 'history.state' contains the object passed in navigation
    const navigation = history.state;
    
    if (navigation && navigation.lessonData) {
      this.lessonContent = navigation.lessonData;
      console.log('Received lesson data:', this.lessonContent);
    } else {
      // Handle page refresh (state is lost on direct URL load/refresh)
      // You would typically fetch data by ID here using a service
      console.warn('No state data found (page refreshed?)');
    }
  }
}
