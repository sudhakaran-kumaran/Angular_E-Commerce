import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent implements OnInit{
  constructor(private storageservice:StorageService,private authservice : AuthService){
    
  }
  ngOnInit() : void{
    this.storageservice.loadusers();
  }
  title = 'Angular_Routing';
  isloggedinuser():boolean{
    return this.authservice.isloggedinuser();
    
  }
  
}
