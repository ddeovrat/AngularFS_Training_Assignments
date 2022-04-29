import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { GradePipePipe } from './grade-pipe.pipe';
import { EmpFilterSalaryComponent } from './emp-filter-salary/emp-filter-salary.component';
import { EmployeeSalaryFilterPipePipe } from './employee-salary-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    EmpListComponent,
    GradePipePipe,
    EmpFilterSalaryComponent,
    EmployeeSalaryFilterPipePipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,FormsModule]
})
export class AppModule { }
