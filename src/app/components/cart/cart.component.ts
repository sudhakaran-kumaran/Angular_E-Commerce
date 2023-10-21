import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  constructor(private cartService: CartService,private storageService:StorageService,private router : Router) {
  }
  carts = this.storageService.getcart();
  clearcart() {
    this.storageService.clearcart();
    this.router.navigate(['/home'],{replaceUrl:true});
    
  }
}
