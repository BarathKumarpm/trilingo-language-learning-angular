import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

type LessonProgress = 'Completed' | 'In Progress' | 'Locked';

interface Lesson {
  id: number;
  title: string;
  progress: LessonProgress;
  offset: number; // for S-curve layout
  content: string;
}

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn.component.html',
})
export class LearnComponent {
  constructor(private router: Router) {}

  /* ===============================
     Header / Course Info
     =============================== */

  courseName = 'Spanish Basics';
  heartsRemaining = 4;

  sectionTitle = 'Section 1';
  unitTitle = 'Unit 1';
  unitDescription = 'Greetings, basics, and pronunciation';

  /* ===============================
     Lessons (Duolingo-style)
     =============================== */

  lessons: Lesson[] = [
    { id: 1, title: 'Greetings', progress: 'Completed', offset: 0, content: 'greetings' },
    { id: 2, title: 'Introductions', progress: 'In Progress', offset: 40, content: 'introductions' },
    { id: 3, title: 'Alphabet', progress: 'Locked', offset: 0, content: 'alphabets' },
    { id: 4, title: 'Pronunciation', progress: 'Locked', offset: 40, content: 'pronunciations' },
  ];

  /* ===============================
     Navigation
     =============================== */

  openLesson(lesson: Lesson): void {
    if (lesson.progress === 'Locked') return;

    this.router.navigate(['/lesson', lesson.id], {
      state: { lessonData: lesson }
    });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
