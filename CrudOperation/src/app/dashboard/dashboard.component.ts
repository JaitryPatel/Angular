import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { EmployeeModel } from './employee-dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new  EmployeeModel();
  api: any;
  constructor(private formbuilder: FormBuilder){}
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })
    
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("Employee Added Successfully")
      this.formValue.reset();
      
    }, 
    (err: any) => {
      console.log(err);
        alert("something Went Wrong");
      })
  }
}
