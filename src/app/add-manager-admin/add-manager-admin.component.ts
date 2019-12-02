import { Router } from '@angular/router';
import { AddManagerService } from './../services/add-manager.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-manager-admin',
  templateUrl: './add-manager-admin.component.html',
  styleUrls: ['./add-manager-admin.component.css']
})
export class AddManagerAdminComponent implements OnInit {

  constructor(public service: AddManagerService) { }

  ngOnInit() {
    this.resetForm();
  }

  // This resets the form
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      Id: '',
      employeeID: '',
      username: '',
      password: ''
    };
  }

  // This is performed on form submission
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.validateManagerUsername(this.service.formData.username).subscribe(res => {
      console.log(res);
      console.log(this.service.formData.username);
      if (res === false) {
        this.service.addManager(form.value).subscribe(res2 => {
          this.resetForm();
          alert('Manager Added Successfully');
        }
        );
      } else if (res === true) {
        alert('Username already exists!');
        this.resetForm();
      }
    }
    );

  }

}
