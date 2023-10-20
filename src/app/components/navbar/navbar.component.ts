import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent {
  constructor(private storageservice : StorageService,private router : Router){

  }
  logout(){
    this.storageservice.removeuser();
    this.router.navigate(['/login'],{replaceUrl:true});
  }
  

}
