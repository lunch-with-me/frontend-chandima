import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainDeskComponent } from './main-desk/main-desk.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { SettingsComponent } from './settings/settings.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ActiveComponent } from './active/active.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainDeskComponent, children:
      [
        {path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'change_password', component: ChangePasswordComponent },
        {path:'active',component:ActiveComponent},
        
      ]
  },

  {path: 'dash' , component: UserDashboardComponent},
  {path: 'registerdetails' , component: RegisterDetailsComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'settings',component:SettingsComponent},
  {path:'alertdialog',component:AlertDialogComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
