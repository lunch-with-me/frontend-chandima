import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  myForm: FormGroup;
  successMessage: String = '';
  constructor(private _myservice: MyserviceService,private _router: Router,private _activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.required),
     // password: new FormControl(null, Validators.required),
      newpassword: new FormControl(null, Validators.required),
      newcnfpass: new FormControl(null, this.passValidator)
    });

    this.myForm.controls.newpassword.valueChanges
    .subscribe(
      x => this.myForm.controls.newcnfpass.updateValueAndValidity()
    );
}



  ngOnInit() {
  }

  
  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const newcnfpassValue = control.value;

      const passControl = control.root.get('newpassword');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== newcnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  abc() {
    console.log(this.myForm.value);


    localStorage.setItem("email",this.myForm.value.email)
    
        if (this.myForm.valid) {
  
         this._myservice.resetpassword(this.myForm.value)
            .subscribe(
              data => {
                console.log("reset password is succeeded");
                this.successMessage = 'Successfully updated yor new password!.';
               
                // this._router.navigate(['/registerdetails']);
              
              },
          error => this.successMessage = 'Invalid Email Address'
        );
        alert('Successfully updated yor new password!.');
    }
    
  }


}
