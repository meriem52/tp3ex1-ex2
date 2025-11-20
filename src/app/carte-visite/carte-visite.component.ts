import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import child components from their folders
import { CardContainerComponent } from '../card-container/card-container.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { ImagesComponent } from '../image/image.component';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [CommonModule, FormsModule, CardContainerComponent, ProfileFormComponent, ImagesComponent],
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  name = 'Sellaouti';
  profession = 'Formateur';
  motto = "Tant qu'il y a de la vie il y a de l'espoir";
  jobDescription = "J'enseigne aux étudiants les technologies du Web";
  followers = 235;
  following = 114;
  projects = 35;
  image = 'rotating_card_profile1.png';
}
