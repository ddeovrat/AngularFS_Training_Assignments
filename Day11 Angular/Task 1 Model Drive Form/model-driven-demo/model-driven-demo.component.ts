import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-demo',
  templateUrl: './model-driven-demo.component.html',
  styleUrls: ['./model-driven-demo.component.css']
})
export class ModelDrivenDemoComponent implements OnInit {

  public ownerForm: FormGroup = new FormGroup({
    ownName: new FormControl("",Validators.required),
    ownContact: new FormControl("",[Validators.minLength(10),Validators.required]),
    ownEmail:new FormControl("",[Validators.email,Validators.required]),
    ownVehicleRegNo: new FormControl("",[Validators.pattern("^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$")]),
    ownAddress: new FormControl("",Validators.required),
    ownVehicleModel: new FormControl("",Validators.minLength(10)),
    ownVehicleColor: new FormControl("",Validators.required),
    ownVehicleYear: new FormControl("",[Validators.min(2012),Validators.max(2022)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  public submit_click()
  {
    alert("Forms submitted successfully");
  }

}
