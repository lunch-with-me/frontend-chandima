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
  telephone='';
  gender='';
  message=''; 
  profession='';
  constructor(private myService:MyserviceService,private _router: Router) { 

    
   //  this.email= this.myService.getEmail();
     
     
    this.myService.getUserName()
    .subscribe(
      data => {
        console.log(data)
      //  this.email= data.email.toString()
      //   this.fullname= data.fullname.toString()
      //  this.gender=data.gender.toString()
      //   this.telephone= data.telephone.toString()
      //   this.message=data.message.toString()
      //   this.profession=data.profession.toString()
      }
      
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
