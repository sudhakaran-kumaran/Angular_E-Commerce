import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { CartComponent } from './components/cart/cart.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './common/auth.guard';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path : "login",component:LoginComponent},
  // {path: " ",component : HomeComponent},
  
  {path: "home" , component : HomeComponent},
  {path : "cart",component : CartComponent , canActivate : [authGuard]},
  {path : "register",component : RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
