import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { ProductComponent } from './components/product/product.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
  
 
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    IntroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
  providers: [StorageService,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
