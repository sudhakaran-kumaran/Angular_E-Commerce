import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  users: User[] = [{ id: 1, email: 'abc@gmail.com', password: 'abcdef' }];

  loadusers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string) as User[];
  }
  setuser(user: User) {
    if (user) {
      this.users.push({
        id: this.users.length + 1,
        email: user.email,
        password: user.password,
        confirmpassword: user.confirmpassword,
      });

      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  setLoggedinuser(users: User) {
    localStorage.setItem('user', JSON.stringify(users));
  }
  removeuser() {
    localStorage.removeItem('user');
  }
  isloggedinuser() {
    return localStorage.getItem('user') !== null;
  }

  getcacheproducts(): Product[] {
    let product = JSON.parse(localStorage.getItem('product') as string);
    if (!product) product = [];
    return product;
  }
  getcart(): Product[] {
    let cart = JSON.parse(localStorage.getItem('cart') as string)!;
    if (!cart) cart = [];
    return cart;
  }
  setcart(cart: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  loadCartProducts(cart: Product[]): void {
    if (!localStorage.getItem('carts')) {
      localStorage.setItem('carts', JSON.stringify(cart));
    }
  }
  clearcart() {
    let order: Product[] = JSON.parse(localStorage.getItem('cart') as string);
    localStorage.setItem('order', JSON.stringify(order) as string);
    return localStorage.setItem('cart', JSON.stringify([]) as string);
  }
}
