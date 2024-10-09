import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-coupon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})
export class CouponComponent {
  enteredCoupon = '';
  message = '';
  isValidCoupon = false;
  discountPercentage = 0; 

  coupons = [
    { couponID: 'CARTBRAND123', discount: 5 },
    { couponID: 'SUMMERDEAL50', discount: 50 },
    { couponID: 'FREESHIP2024', discount: 0 }, 
    { couponID: 'SAVE10NOW', discount: 10 },
    { couponID: 'NEWUSER2024', discount: 20 },
  ];

  constructor(private cartService: CartService) {}

  applyCoupon() {
    this.enteredCoupon = this.enteredCoupon.toUpperCase();
    const coupon = this.coupons.find(
      (coupon) => coupon.couponID === this.enteredCoupon
    );

    if (coupon) {
      this.isValidCoupon = true;
      this.discountPercentage = coupon.discount;
      this.message = `Coupon applied! You get a discount of ${this.discountPercentage}%`;

      this.cartService.applyDiscount(this.discountPercentage);
    } else {
      this.isValidCoupon = false;
      this.discountPercentage = 0;
      this.message = 'Invalid coupon';
      this.cartService.applyDiscount(0);
    }
  }
}
