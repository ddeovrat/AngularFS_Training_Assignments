import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { AvatarAssignmentComponent } from './avatar-assignment/avatar-assignment.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentsListComponent } from './students-list/students-list.component';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoItemComponent,
    AvatarAssignmentComponent,
    StudentsListComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:CustomHttpInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
