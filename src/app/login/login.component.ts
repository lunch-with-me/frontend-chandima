import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  successMessage: String = '';
  constructor(private _myservice: MyserviceService,private _router: Router,private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {
    if(this._myservice.loggedIn())  
      this._router.navigate(['/dash']);
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data['token']);
            localStorage.setItem('role', data['']);
            localStorage.setItem('username', data['name']);
            localStorage.setItem('email', data['email']);
            this._router.navigate(['/dash']);
          },
          error => {
            console.log(error);
            this.successMessage = 'Email and Password does not match or valid your email please';
          }
        );
    }
  }

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }

  changePassword() {
    this._router.navigate(['../change_password'], { relativeTo: this._activatedRoute });
  }
}
