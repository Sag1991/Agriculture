import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { CounterComponent } from './counter/counter.component';
import { FlavoursComponent } from './flavours/flavours.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { PeopleComponent } from './people/people.component';
import { TeamComponent } from './team/team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    // ServicesComponent,
    FlavoursComponent,
    CounterComponent,
    ProductsComponent,
    PeopleComponent,
    // GalleryComponent,
    TeamComponent,
    NewsletterComponent,
    FooterComponent,
    AboutUsComponent,
  ],
  // get imports() {
  //   return this._imports;
  // },
  // set imports(value) {
  //   this._imports = value;
  // },
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Agro';
}
