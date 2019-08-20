import { EventEmitter } from '@angular/core';
import { Credential } from './creds.modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
    
  private isLoggedIn : boolean = false;

  credentials : Credential[] = [
    new Credential('admin@gmail.com','default')
  ];
  public singIn(creds : Credential){
    this.isLoggedIn = this.credentials.some(credElement => {
      return credElement.email == creds.email && credElement.password == creds.password;
    });
    
    return this.isLoggedIn;
  }

  public signUp(creds : Credential){
    this.credentials.push(creds);
  }

  public getLogIn(){
    return this.isLoggedIn;
  }

  public logOut(){
    this.isLoggedIn = false;
  }

}
