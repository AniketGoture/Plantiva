import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {

  photos = [
    'assets/IMG_5535.jpg',
    'assets/IMG_5536.jpg',
    'assets/IMG_5537.jpg',
    'assets/IMG_5538.jpg'
  ];
}
