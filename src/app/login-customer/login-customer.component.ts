import { LoginCustomerService } from './../services/login-customer.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  constructor(private router: Router, public service: LoginCustomerService) { }

  ngOnInit() {
    this.resetForm;
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      username: '',
      password: ''
    };
  }

  //This is executed when teh form is submitted
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.validateLogin(form.value).subscribe(res => {
        console.log(res);
        if (res === true) {
          sessionStorage.setItem('username', this.service.formData.username);
          sessionStorage.setItem('validCustomerSession', 'true');
          this.router.navigate(['customerPortal']);
          this.resetForm();
        } else {
          alert('Invalid Credentials');
        }
      }
      );
  }

  // This is sexcuted if the customer clicks on register
  addCustomer(){
    this.router.navigate(['registerCustomer']);
  }

}
