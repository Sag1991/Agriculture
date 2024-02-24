import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = [
    { label: 'Home', href: '../', isActive: true },
    { label: 'Pages', href: '#' },
    { label: 'Blog', href: 'grid-blog.html' },
    { label: 'Gallery', href: 'grid-gallery.html' },
    { label: 'Elements', href: '#' },
    { label: 'Shop', href: 'grid-shop.html' }
  ];
}
