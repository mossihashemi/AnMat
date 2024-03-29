import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;
  
  constructor(private formBuilder: FormBuilder,
              private auth: AuthService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });

  
  }

  onLoginSubmit() {
    alert(this.user.email + ' ' + this.user.password);
  }

  loginGoogle(){
    this.auth.login();
  }

}
