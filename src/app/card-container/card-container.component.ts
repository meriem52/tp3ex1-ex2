import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from '../image/image.component';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CommonModule, ImagesComponent,],
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {
  @Input() name!: string;
  @Input() profession!: string;
  @Input() motto!: string;
  @Input() jobDescription!: string;
  @Input() followers!: number;
  @Input() following!: number;
  @Input() projects!: number;
  @Input() image!: string;
 
}
