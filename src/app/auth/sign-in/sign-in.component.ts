import { Credential } from './../creds.modal';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService : AuthService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
  }
  onSign(formRef : NgForm){
    let email = formRef.form.value.email;
    let password = formRef.form.value.password;
    let credential : Credential = new Credential(email, password);
    if (email && password && this.authService.singIn(credential)){
        this.router.navigate(["/recipe"],{relativeTo : this.activatedRoute});
      }
  }
}
