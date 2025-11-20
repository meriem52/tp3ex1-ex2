import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  @Input() name!: string;
  @Output() nameChange = new EventEmitter<string>();

  @Input() profession!: string;
  @Output() professionChange = new EventEmitter<string>();

  @Input() motto!: string;
  @Output() mottoChange = new EventEmitter<string>();

  @Input() jobDescription!: string;
  @Output() jobDescriptionChange = new EventEmitter<string>();

  @Input() followers!: number;
  @Output() followersChange = new EventEmitter<number>();

  @Input() following!: number;
  @Output() followingChange = new EventEmitter<number>();

  @Input() projects!: number;
  @Output() projectsChange = new EventEmitter<number>();

  @Input() image!: string;
  @Output() imageChange = new EventEmitter<string>();
}
