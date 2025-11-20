import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  @Input() profile!: Profile;
  @Output() profileChange = new EventEmitter<Profile>();

  onFieldChange(field: keyof Profile, value: string | number): void {
    // Crée un nouvel objet avec spread operator + conversion de type
    const updatedData = {
      ...this.profile,
      [field]: value
    };
    
    // Crée une nouvelle instance de Profile avec les données mises à jour
    const updatedProfile = Object.assign(new Profile(), updatedData);
    this.profileChange.emit(updatedProfile);
  }
}