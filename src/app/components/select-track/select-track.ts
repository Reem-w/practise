import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-track',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-track.html',
  styleUrl: './select-track.scss',
})
export class SelectTrack {
  tracks: { Name: string; Locations: string[] }[] = [
    {
      Name: 'Dotnet',
      Locations: ['Menofia', 'Smart'],
    },
    {
      Name: 'PHP',
      Locations: ['Alex', 'Smart'],
    },
    {
      Name: 'Security',
      Locations: [],
    },
  ];
  selectedTrack: string = '';
  Locations: string[] = [];
  showLocations() {
    console.log(this.selectedTrack);
    // console.log(this.tracks[0]);
    this.tracks.find((t) => {
      if (t.Name == this.selectedTrack) {
        this.Locations = t.Locations;
      }
    });
    console.log(this.Locations);
    // this.Locations= this.tracks[index][this.Locations];
  }
}
