import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: number = 0;
  tax: number = 10; 

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.totalPrice$.subscribe((price: number) => {
      this.totalPrice = price;
    });

    this.totalPrice = this.cartService.getTotalPrice();
  }

  getFullPrice(): number {
    return this.totalPrice + this.tax;
  }
}
