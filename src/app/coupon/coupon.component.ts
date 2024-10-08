import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coupon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})
export class CouponComponent {
  enteredCoupon = ''; 

  coupons = [
    { couponID: 'CARTBRAND123' },
    { couponID: 'SUMMERDEAL50' },
    { couponID: 'FREESHIP2024' },
    { couponID: 'SAVE10NOW' },
    { couponID: 'NEWUSER2024' },
  ];

  applyCoupon() {
    this.enteredCoupon = this.enteredCoupon.toUpperCase();
    const couponExists = this.coupons.some(
      (coupon) => coupon.couponID === this.enteredCoupon
    );

    if (couponExists) {
      console.log('Matches');
    } else {
      console.log('Not Match');
    }
  }
}
