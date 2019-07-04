import { Component, OnInit, Input } from '@angular/core';
//import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import{MatDialog}from '@angular/material';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';




 

@Component({
  selector: 'app-register-details', 
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css'],
  
})


export class RegisterDetailsComponent implements OnInit {


  // @Input('username') userName:string;

  

  imageUrl:string = "/assets/images/default.png";
  fileToUpload: File = null;

  selected: ['pizza-1'];
  
  foods=[
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  

  registerForm: FormGroup= new FormGroup({
    //username: new FormControl(null, Validators.required),
  
    fullname: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    date_of_birth:new FormControl(null, Validators.required),
    message:new FormControl(null, Validators.required),
    telephone:new FormControl(null, Validators.required),
   profession:new FormControl(null, Validators.required),
   image:new FormControl(null),
 // favFruits: this.addFruitsControls(),
  })
 
  constructor(public dialog:MatDialog,private myService:MyserviceService,private _router: Router) { 
  }

// alert dialgo box part
  openDialog(): void {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result);
    });
  }



  ngOnInit() {
   
  }
  


  register() {
    if (!this.registerForm.valid) {
    //  this._myservice.submitRegi(this.myForm.value)
      console.log('Invalid form'); return;
          //   this._router.navigate(['/']);  
    }
    
var obj = this.registerForm.value;
obj.email = localStorage.getItem("email");

console.log("send data - "+JSON.stringify(obj))

    var useemail = localStorage.getItem("email")
    console.log("email - "+useemail)
    this.myService.submitRegi(JSON.stringify(obj))
   // console.log(JSON.stringify(this.registerForm.value));
.subscribe(
  data=>{console.log(data);
    localStorage.removeItem("email")
   // this._router.navigate(['/main/login']);
    this.openDialog();
    error=>console.error(error)
  }
)  

  }


  handleFileInput(file :FileList){
    this.fileToUpload = file.item(0);
    //show image preview
  
    var reader = new FileReader();
    reader.onload =(event:any)=>{
      this.imageUrl = event.target.result;
    }
  reader.readAsDataURL(this.fileToUpload);
  }

}
