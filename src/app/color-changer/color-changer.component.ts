import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  standalone: true,
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent {

  currentColor: string = 'grey';

  // On récupère l'input du DOM
  @ViewChild('colorInput') colorInput!: ElementRef;

  changeColor() {
    const value = this.colorInput.nativeElement.value;
    this.currentColor = value;
  }

  resetColor() {
    this.currentColor = 'grey';
    this.colorInput.nativeElement.value = '';  // optionnel : vide l'input
  }
}
