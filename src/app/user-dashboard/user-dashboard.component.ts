import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  username='' ;
  email: string ='' ;

  constructor(private myService:MyserviceService,private _router: Router) {

  }


  

  ngOnInit() {
    //this.username= this.myService.getUserName(); 
    if(!this.myService.loggedIn())  
      this._router.navigate(['/main/login']);
  }

  logout(){
    this.myService.logout();
    this._router.navigate(['/main/login']);
  }


  movetoprofile() {
    this._router.navigate(['/myprofile']);
  }
  movetosettings(){
    this._router.navigate(['/settings']); 
  }
  
}
