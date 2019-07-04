import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  imageUrl:string = "/assets/images/default.png";
  fileToUpload: File = null;


  username = '';
  email =  '';
  constructor(private myService:MyserviceService,private _router: Router) { 

    
     this.email= this.myService.getEmail();
     
     
    this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
    
    )

    }

  


  
  ngOnInit() {
  }



  movetodashboard() {
    this._router.navigate(['../dash']);
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
