import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img [src]="'assets/images/' + imageName" alt="User Image" class="img-circle">
  `,
  styles: [`
    .img-circle {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  `]
})
export class ImagesComponent {
  @Input() imageName: string = '';   // 🔥 input from parent
}
