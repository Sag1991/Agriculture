import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
    { path: 'about', component: AboutUsComponent},
    { path: 'product-page', component: ProductPageComponent},
];
