import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor(private storageservices: StorageService) {}
  getcount(): number {
    let count: number = 0;
    for (let c of this.cart) {
      if (c.count) count += c.count;
    }
    return count;
  }
  

  addToCart(id: number): void {
    const products = this.storageservices.getcacheproducts()!;
    // const user = this.storageservices.isloggedinuser();
    let cart = this.storageservices.getcart();
    let clickedProduct = products.find((prod) => prod.id === id)!;
    if (clickedProduct) {
      let existingCartItem = cart.find((item) => item.id === id);
      if (!existingCartItem) {
        cart.push({ ...clickedProduct, id: id, count: 1 });
      } else {
        cart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, count: (item.count || 0) + 1 };
          } else {
            return item;
          }
        });
      }

      this.storageservices.setcart(cart);
    }
  }
}
