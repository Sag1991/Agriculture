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
      image: '../../assets/images/farm1.jpg',
      title1: 'Tasty Way to Healthier Life',
      title2: 'Our organic drinks contain all necessary elements and vitamins for your health.',
      buttonLink: '#'
    },
    {
      image: '../../assets/images/farm2.jpg',
      title1: 'New Drink, New Day',
      title2: 'With our wide variety of smoothies and healthy drinks, we are sure to help you make the right choice to start your day.',
      buttonLink: '#'
    }
    // Add more slide data as needed
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
