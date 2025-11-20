import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  standalone: true,
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent {
  
  changeColor(colorInput: HTMLInputElement, colorDiv: HTMLDivElement) {
    colorDiv.style.backgroundColor = colorInput.value;
  }

  resetColor(colorDiv: HTMLDivElement) {
    colorDiv.style.backgroundColor = 'grey';
  }
}