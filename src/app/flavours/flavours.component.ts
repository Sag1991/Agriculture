import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-flavours',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './flavours.component.html',
    styleUrl: './flavours.component.scss'
})
export class FlavoursComponent {
    products = [
        {
            name: 'Mango',
            image: '../../assets/images/products.webp',
            oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Strawberry',
            image: '../../assets/images/products.webp',
            price: '$13.00',
            badge: 'New',
        },
        {
            name: 'Apple',
            image: '../../assets/images/products.webp',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Carrots',
            image: '../../assets/images/products.webp',
            price: '$13.00',
            badge: 'New',
        },
        {
            name: 'Guava',
            image: '../../assets/images/products.webp',
            price: '$13.00',
            badge: 'New',
        },
        {
            name: 'Grapes',
            image: '../../assets/images/products.webp',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Bananas',
            image: '../../assets/images/products.webp',
            oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Orange',
            image: '../../assets/images/products.webp',
            price: '$17.00',
            badge: 'New',
        }
    ];
}
