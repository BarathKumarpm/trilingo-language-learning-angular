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

// New Interface to define a Unit
interface Unit {
  id: number;
  sectionTitle: string;
  unitTitle: string;
  unitDescription: string;
  // Define color themes for the unit
  theme: {
    primary: string;    // Main card background (e.g., bg-violet-500)
    secondary: string;  // Border colors (e.g., border-violet-600)
  };
  lessons: Lesson[];
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

  /* ===============================
     Units & Lessons Data
     =============================== */
  units: Unit[] = [
    {
      id: 1,
      sectionTitle: 'Section 1',
      unitTitle: 'Unit 1',
      unitDescription: 'Greetings, basics, and pronunciation',
      theme: {
        primary: '#f66f3b',   // Orange
        secondary: '#ce5242'  // Darker Orange (for borders)
      },
      lessons: [
        { id: 1, title: 'Greetings', progress: 'Completed', offset: 0, content: 'greetings' },
        { id: 2, title: 'Introductions', progress: 'In Progress', offset: 40, content: 'introductions' },
        { id: 3, title: 'Alphabet', progress: 'Locked', offset: 0, content: 'alphabets' },
        { id: 4, title: 'Pronunciation', progress: 'Locked', offset: 40, content: 'pronunciations' },
      ]
    },
    {
      id: 2,
      sectionTitle: 'Section 1',
      unitTitle: 'Unit 2',
      unitDescription: 'Spanish numbers and grammar basics',
      theme: {
        primary: '#8b5cf6',   // Violet-500
        secondary: '#7c3aed'  // Violet-600 (Darker for borders)
      },
      lessons: [
        { id: 5, title: 'Numbers 1-10', progress: 'Completed', offset: 0, content: 'numbers_1_10' },
        { id: 6, title: 'Colors', progress: 'In Progress', offset: 40, content: 'colors' },
        { id: 7, title: 'Ser vs Estar', progress: 'Locked', offset: 0, content: 'ser_vs_estar' },
        { id: 8, title: 'Plurals', progress: 'Locked', offset: 40, content: 'plurals' },
      ]
    }
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
