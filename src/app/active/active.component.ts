import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  successMessage: String = '';

  constructor(private _myservice: MyserviceService, private _router: Router,private _activatedRoute: ActivatedRoute) {

   
  this._myservice.active()
  
  .subscribe(
    data => {
  console.log(data);
     // localStorage.setItem('token', data.toString());
      //this._router.navigate(['/dash']);
    },
    error => this.successMessage = 'Email and Password does not match'
  );


  }

  ngOnInit() {
  }


  next(){
    this._router.navigate(['/registerdetails']);
  }
}
