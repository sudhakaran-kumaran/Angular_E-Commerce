import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  usercarts: Product[] = [];
  constructor(
    private router: Router,
    private productservice: ProductService,
    private cartservices: CartService
  ) {}
  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe({
      next: (data: Product[]) => {
        // console.log(data);
        this.products = data;
        localStorage.setItem('product', JSON.stringify(this.products));
      },

      complete: () => {
        console.log('completed');
      },
      error: (error: Error) => {
        console.log('Message');
      },
    });
  }
  add(id: number) {
    
    this.cartservices.addToCart(id);
  }
    
    
  }

