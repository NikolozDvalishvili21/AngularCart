import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      name: 'Air Force 1',
      photo: 'https://placehold.jp/150x150.png',
      price: 29.99,
      seller: 'Nike',
      size: '42',
    },
    {
      name: 'Real Madrid Shirt',
      photo: 'https://placehold.jp/150x150.png',
      price: 49.99,
      seller: 'RMAFC',
      size: 'Large',
    },
    {
      name: 'Real Madrid Shorts',
      photo: 'https://placehold.jp/150x150.png',
      price: 19.99,
      seller: 'RMAFC',
      size: 'Small',
    },
  ];
}
