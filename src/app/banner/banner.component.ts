import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  slides = [
    {
      image: '../../assets/images/farming.jpg',
      title1: 'Tasty Way to Healthier Life',
      title2: 'Our organic drinks contain all necessary elements and vitamins for your health.',
      buttonLink: 'grid-shop.html'
    },
    {
      image: '../../assets/images/farming-2.jpeg',
      title1: 'New Drink, New Day',
      title2: 'With our wide variety of smoothies and healthy drinks, we are sure to help you make the right choice to start your day.',
      buttonLink: 'grid-shop.html'
    }
    // Add more slide data as needed
  ];
  
  currentSlideIndex = 0; // Initial slide index


  // ngOnInit() {
  //   setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  //   }, 5000); // Change slide every 5 seconds (adjust as needed)
  // }
}
