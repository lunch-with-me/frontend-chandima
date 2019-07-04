import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  successMessage: String = '';
  constructor(private _myservice: MyserviceService, private _router: Router,private _activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator)
    });

    this.myForm.controls.password.valueChanges
      .subscribe(
        x => this.myForm.controls.cnfpass.updateValueAndValidity()
      );
  }

  ngOnInit() {
    if(this._myservice.loggedIn())  
      this._router.navigate(['/dash']);
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  register() {
    console.log(this.myForm.value);


localStorage.setItem("email",this.myForm.value.email)

    if (this.myForm.valid) {
     this._myservice.submitRegister(this.myForm.value)
        .subscribe(
          data => {
            console.log("efrfrf4rffrf");
            this.successMessage = 'Account Registered!. Please check your Email for Activation Link';
            // this._router.navigate(['/registerdetails']);
          
          },
          error => this.successMessage = 'Internal error.Please try again'
        );
    }
  }

  movetologin() {
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }
}
