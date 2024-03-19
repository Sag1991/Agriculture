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
            image: '../../assets/AgroPhotos/IMG-20240307-WA0018.jpg',
            // oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Strawberry',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0019.jpg',
            price: '$13.00',
            badge: 'New',
        },
        {
            name: 'Apple',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0020.jpg',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Carrots',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0021.jpg',
            price: '$13.00',
            badge: 'New',
        },
        {
            name: 'Guava',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0022.jpg',
            price: '$13.00',
            badge: 'New',
        },
        {
            name: 'Grapes',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0023.jpg',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Bananas',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0024.jpg',
            // oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Orange',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0025.jpg',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Bananas',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0026.jpg',
            // oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Orange',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0027.jpg',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Bananas',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0028.jpg',
            // oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Orange',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0029.jpg',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Bananas',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0030.jpg',
            // oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Orange',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0031.jpg',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Bananas',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0032.jpg',
            // oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Orange',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0033.jpg',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Bananas',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0034.jpg',
            // oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Orange',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0035.jpg',
            price: '$17.00',
            badge: 'New',
        },
        {
            name: 'Bananas',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0036.jpg',
            // oldPrice: '$30.00',
            price: '$23.00',
            badge: 'Sale',
        },
        {
            name: 'Orange',
            image: '../../assets/AgroPhotos/IMG-20240307-WA0037.jpg',
            price: '$17.00',
            badge: 'New',
        },
    ];
}
