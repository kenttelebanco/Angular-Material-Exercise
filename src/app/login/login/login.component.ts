import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  openRegister = true;
  openRecover = true;
  submitted: boolean = false;

  signinform = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  registerform = this.fb.group({
    email: ['', [Validators.required, Validators.email,Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    checkbox: [false, [Validators.requiredTrue]],
  }, {validator: this.MustMatch('password', 'confirmPassword')
  });

  recoverPassword = this.fb.group({
    email: ['', [Validators.required, Validators.email,Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }


  get f() { return this.registerform.controls; } 

  MustMatch(controlName: string, matchingControlName: string) {return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {return;}
        if (control.value !== matchingControl.value) {
         matchingControl.setErrors({ mustMatch: true });
        } else {matchingControl.setErrors(null);}
  }}

  ngOnInit(): void {
  }

  login() : void {
    if(this.signinform.valid){
    this.authService.isLoggedIn=true;
     this.router.navigate(["/homescreen"]);
    }else {
      alert("Invalid credentials");
    }
  }

  register() : void {
    if(this.registerform.valid){
      this.authService.isLoggedIn=true;
     this.router.navigate(["/homescreen"]);
    }else {
      alert("Invalid credentials");
    }
  }

  recover() : void {
    if(this.recoverPassword.valid){
      this.openRecover = true;
    }else {
      alert("Invalid credentials");
    }
  }

  clickToRegister() : void {
    this.openRegister = false;
  }

  clickToLogin() : void {
    this.openRegister = true;
  }

  clickToRecover() : void {
    this.openRecover = false;
  }

  }

