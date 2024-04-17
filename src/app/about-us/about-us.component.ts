import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TopHeaderComponent } from '../header/top-header/top-header.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    HeaderComponent,
    TopHeaderComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
