import { Routes } from '@angular/router';
import { AddStudents } from './components/add-students/add-students';
import { SelectTrack } from './components/select-track/select-track';

export const routes: Routes = [
  { path: 'add-students', component: AddStudents },
  { path: 'select-track', component: SelectTrack },
  { path: '', redirectTo: '/add-students', pathMatch: 'full' },
];
