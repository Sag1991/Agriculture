import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TopHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', link: '#' },
    { label: 'About', link: '#' },
    { label: 'Blog', link: '#' },
    { label: 'Gallery', link: '#' },
    { label: 'Elements', link: '#' },
    { label: 'Shop', link: '#' }
  ];
}
