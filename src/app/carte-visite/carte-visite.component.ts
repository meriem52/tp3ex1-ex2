import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardContainerComponent } from '../card-container/card-container.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [CommonModule, FormsModule, CardContainerComponent, ProfileFormComponent],
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  profile = new Profile(
    'Sellaouti',
    'Formateur',
    "Tant qu'il y a de la vie il y a de l'espoir",
    "J'enseigne aux étudiants les technologies du Web",
    235,
    114,
    35,
    'rotating_card_profile1.png'
  );
}