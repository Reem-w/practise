import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AddStudents } from './components/add-students/add-students';
import { SelectTrack } from './components/select-track/select-track';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddStudents, SelectTrack, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('practise');
}
