import { NgForm } from '@angular/forms';
import { LoginAdminService } from './../services/login-admin.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private router: Router, private service: LoginAdminService) { }

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
          this.router.navigate(['adminPortal']);
          sessionStorage.setItem('validSession', 'true');
          this.resetForm();
        } else {
          alert('Invalid Credentials');
        }
      }
      );
  }


}