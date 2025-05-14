import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    StudentComponent,
    ProfileComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }
