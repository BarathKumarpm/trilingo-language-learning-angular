import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [RouterModule],
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

        <p class="text-gray-600">
          This is dynamically loaded based on the route.
        </p>

        <div class="bg-white border-neutral-300 border-2 p-6 rounded-xl shadow">
          <p class="font-medium">
            Lesson content goes here.
          </p>
        </div>

      </div>
    </div>
  `,
})
export class LessonComponent {
  private route = inject(ActivatedRoute);

  lessonId = this.route.snapshot.paramMap.get('id');
}
