import { Component, OnInit } from '@angular/core';
import { LoginState } from './login.state';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  css_fadeout = '';
  submitted = false;
  loading = false;
  hide = true;
  transformCardValue = 'none';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  // termsFormControl = new FormControl('', [
  //   Validators.required,
  // ])
  ceked = false;
  constructor(public login: LoginState) { }

  ngOnInit(): void {

  }
  

  formBlurAnimate(): void {}
  
  onSubmit(email, password) {
    this.submitted = true;
    this.login.setSubmittedLogin({
      // username: 'hunter@tvri80an.com',
      // password: '1234'
      username: email,
      password: password
    });
  }

  onLogin(emails, pass){
    console.log("login",emails,pass)
  }

}
