import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  
})
export class RegisterComponent {
  errors: string = '';
  constructor(private storageservice : StorageService,private router : Router){

  }
  onregister(registerform : NgForm){
    // console.log(registerform);
    // console.log(registerform.value);
    this.errors = 'Password Mismatch';
    this.storageservice.setuser(registerform.value);
    this.router.navigate(['login'],{replaceUrl:true});
    // console.log("sdf");
    
    
    

  }

}
