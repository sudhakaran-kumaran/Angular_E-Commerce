import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageservice : StorageService) { }
  isValiduser(user:User) : boolean{
    let users : User[] = this.storageservice.getAllUsers();
    let isUser : boolean = false;
    for(let u of users){
      if(u.email === user.email && u.password === user.password){
        isUser=true;
        this.storageservice.setLoggedinuser(u)
      }
    }
    
    return isUser;
  }
  isloggedinuser() : boolean{
    return this.storageservice.isloggedinuser();
    
  }

}
