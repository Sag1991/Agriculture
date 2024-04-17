import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { FlavoursComponent } from './flavours/flavours.component';
import { CounterComponent } from './counter/counter.component';
import { ProductsComponent } from './products/products.component';
import { PeopleComponent } from './people/people.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    BannerComponent, 
    ServicesComponent, 
    FlavoursComponent, 
    CounterComponent, 
    ProductsComponent, 
    PeopleComponent, 
    GalleryComponent, 
    TeamComponent, 
    NewsletterComponent, 
    FooterComponent,
    AboutUsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Agro';
}
