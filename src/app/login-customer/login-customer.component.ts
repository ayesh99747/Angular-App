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

  constructor(private router: Router, private service: LoginCustomerService) { }

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

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.validateLogin(form.value).subscribe(res => {
        console.log(res);
        if (res === true) {
          sessionStorage.setItem('username', this.service.formData.username);
          sessionStorage.setItem('validSession', 'true');
          this.router.navigate(['customerPortal']);
          this.resetForm();
        } else {
          alert('Invalid Credentials');
        }
      }
      );
  }

  addCustomer(){
    this.router.navigate(['registerCustomer']);
  }

}
