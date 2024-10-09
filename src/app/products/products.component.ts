import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  photo: string;
  price: number;
  seller: string;
  size: string;
  quantity: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private cartService: CartService) {
    this.products = this.cartService.getProducts();
  }

  removeProduct(index: number) {
    this.cartService.removeProduct(index);
    this.updateTotalPrice();
  }

  updateQuantity(index: number, event: any) {
    const quantity = +event.target.value;
    this.cartService.updateQuantity(index, quantity);
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.cartService.updateTotalPrice();
  }
}
