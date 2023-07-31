import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {

  images: string[] = [
    '/assets/imagen.jpeg',
    '/assets/imagen.jpeg',
    '/assets/image3.jpg',
  ];
}