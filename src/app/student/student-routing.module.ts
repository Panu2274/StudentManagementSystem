import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: '',
    component: StudentComponent,  
    children: [
      { path: 'view', component: ViewComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add',component:AddComponent},
      { path: 'profile/:id', component: ProfileComponent }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class StudentRoutingModule { }
