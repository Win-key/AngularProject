import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService : AuthService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  signUpForm : FormGroup;

  public initForm() {
    this.signUpForm = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    });
  }

  public onSignUp(){
    if(this.signUpForm.value['email'] && this.signUpForm.value['password']){
      this.authService.signUp(this.signUpForm.value);
      this.router.navigate(['/sign-in'],{relativeTo : this.activatedRoute});
    }
  }

}
