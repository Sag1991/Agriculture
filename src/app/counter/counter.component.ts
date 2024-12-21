import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss'
})
export class CounterComponent {
    private speed = 50;
    private hasAnimated = false;


    counters: any[] = [
        { count: 245, title: 'New Product' },
        { count: 382, title: 'Special offers' },
        { count: 1267, title: 'Satisfied clients' },
        { count: 474, title: 'Partners' }
    ];

    constructor(private elementRef: ElementRef) { }

    @HostListener('window:scroll', [])
    onScroll(): void {
        this.checkIfVisible();
    }

    checkIfVisible(): void {
        if (!this.hasAnimated && this.isElementInViewport(this.elementRef.nativeElement)) {
            this.animateCountBoxes();
            this.hasAnimated = true;
        }
    }

    isElementInViewport(el: HTMLElement): boolean {
        const rect = el.getBoundingClientRect();
        return (
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    animateCountBoxes(): void {
        this.counters.forEach((counter, index) => {
            const elementId = `nbr${index}`;
            const element = document.getElementById(elementId);
            if (element) {
                this.incrementNumber(0, counter.count, element);
            }
        });
    }

    incrementNumber(start: number, end: number, element: HTMLElement): void {
        if (start <= end) {
            element.innerHTML = start.toString();
            setTimeout(() => {
                this.incrementNumber(start + 1, end, element);
            }, this.speed);
        }
    }
}
