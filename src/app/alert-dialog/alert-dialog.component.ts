import { Component, OnInit,Inject } from '@angular/core';
import{MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  
  constructor( public dialogRef: MatDialogRef<AlertDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private myService:MyserviceService,private _router: Router) {}


  ngOnInit() {
  }

save(){
  this.dialogRef.close("It was saved");
  this._router.navigate(['/main/login']);
}

}
