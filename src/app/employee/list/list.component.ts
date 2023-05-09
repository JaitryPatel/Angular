import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  employeeform!: FormGroup;
  public data : any | datamodel[];
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.employeeform = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      phonenumber: ['', Validators.required],

    })
    this.getemployee();
  }
  addemployee(data : datamodel) {
// console.log(data);
// debugger
this.api.addemployee(data).subscribe((res =>{
  this.employeeform.reset();
}))

  }
  getemployee(){
    // debugger
    this.api.getemployee().subscribe(res => {
      this.data = res;
    })
  }
}

