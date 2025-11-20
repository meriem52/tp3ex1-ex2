import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from '../image/image.component';
import { Profile } from '../models/profile.model';
import { FooterComponent } from '../footer/footer.component'; 
@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CommonModule, ImagesComponent,FooterComponent],
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {
  @Input() profile!: Profile; // Un seul @Input au lieu de 8 !
}