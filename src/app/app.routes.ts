import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LearnComponent } from './pages/learn/learn.component';
import { LessonComponent } from './pages/lesson/lesson.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'lesson/:id', component: LessonComponent },
  { path: '**', redirectTo: '' },
];
