import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { AddEditDepartmentComponent } from './add-edit-department/add-edit-department.component';
import { ShowDepartmentComponent } from './show-department/show-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AddEditDepartmentComponent,
    ShowDepartmentComponent,
    StudentComponent,
    AddEditStudentComponent,
    ShowStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
