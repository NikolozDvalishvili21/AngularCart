import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  name: string;
  photo: string;
  price: number;
  seller: string;
  size: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [
    { name: 'Air Force 1', photo: 'https://placehold.jp/150x150.png', price: 29.99, seller: 'Nike', size: '42', quantity: 1 },
    { name: 'Real Madrid Shirt', photo: 'https://placehold.jp/150x150.png', price: 49.99, seller: 'RMAFC', size: 'Large', quantity: 1 },
    { name: 'Real Madrid Shorts', photo: 'https://placehold.jp/150x150.png', price: 19.99, seller: 'RMAFC', size: 'Small', quantity: 1 }
  ];

  private discountPercentage = 0; // New property to store discount percentage

  // BehaviorSubject to emit the total price changes
  private totalPriceSubject = new BehaviorSubject<number>(this.getTotalPrice());
  totalPrice$ = this.totalPriceSubject.asObservable();

  getProducts(): Product[] {
    return this.products;
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
    this.updateTotalPrice();
  }

  updateQuantity(index: number, quantity: number) {
    this.products[index].quantity = quantity;
    this.updateTotalPrice();
  }

  // Method to calculate total price with discount
  getTotalPrice(): number {
    const total = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    const discountAmount = (this.discountPercentage / 100) * total; // Calculate discount
    return total - discountAmount; // Return total minus discount
  }

  // Emit the new total price
  updateTotalPrice() {
    const newTotalPrice = this.getTotalPrice();
    this.totalPriceSubject.next(newTotalPrice); // Notify the components
  }

  // Method to apply discount
  applyDiscount(discount: number) {
    this.discountPercentage = discount; // Store the discount percentage
    this.updateTotalPrice(); // Recalculate total price including discount
  }
}
