import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  error: string = '';
  constructor(private authservice: AuthService, private router: Router) {}

  onsubmit(loginform: NgForm) {
    // console.log(loginform);
    // console.log(loginform.value);
    if (this.authservice.isValiduser(loginform.value)) {
      this.router.navigate(['/home'],{replaceUrl:true});
    } else {
      this.error = 'Invalid Crediantials';
    }
  }
  
}
