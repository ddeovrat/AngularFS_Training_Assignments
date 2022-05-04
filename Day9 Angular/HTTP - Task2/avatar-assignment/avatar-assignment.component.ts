import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-avatar-assignment',
  templateUrl: './avatar-assignment.component.html',
  styleUrls: ['./avatar-assignment.component.css']
})
export class AvatarAssignmentComponent {

  constructor(private _httpclient: HttpClient) { }


  avatarArray : any  = {};
 
  get_data()
  {
    let  url = "https://reqres.in/api/users/";

    this._httpclient.get(url).subscribe(data => {
    this.avatarArray = data;
    console.log(this.avatarArray);
  })
  }

}
