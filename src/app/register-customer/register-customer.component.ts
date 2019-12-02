import { AddCustomerService } from './../services/add-customer.service';
import { Router } from '@angular/router';
import { AddManagerService } from './../services/add-manager.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as EmailValidator from 'email-validator';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  constructor(private router: Router, public service: AddCustomerService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      customerName: '',
      emailAddress: '',
      driversLicenseNumber: '',
      username: '',
      password: ''
    };
  }

  //This is executed on form submission
  onSubmit(form: NgForm) {
    if (this.validateEmailAddress()) {
      console.log(form.value);
      this.service.validateCustomerUsername(this.service.formData.username).subscribe(res => {
        console.log(res);
        console.log(this.service.formData.username);
        if (res === false) {
          this.service.addCustomer(form.value).subscribe(res2 => {
            this.resetForm();
            alert('Customer Added Successfully');
            this.router.navigate(['loginCustomer']);
          }
          );
        } else if (res === true) {
          alert('Username already exists!');
          this.resetForm();
        }
      }
      );
    } else {
      alert('Invalid Email Address!');
    }


  }

  //This function validates email addresses
  validateEmailAddress() {
    if (!EmailValidator.validate(this.service.formData.emailAddress)) {
      return false;
    }
    return true;
  }


}
