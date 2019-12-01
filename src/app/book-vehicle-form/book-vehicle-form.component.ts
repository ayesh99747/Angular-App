import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookVehicleFormService } from './../services/book-vehicle-form.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Booking } from './../model/booking';

@Component({
  selector: 'app-book-vehicle-form',
  templateUrl: './book-vehicle-form.component.html',
  styleUrls: ['./book-vehicle-form.component.css']
})
export class BookVehicleFormComponent implements OnInit {

  minDate = new Date();

  pickUpDate = new FormControl(new Date());

  plateNumber: string;

  constructor(public router: Router, public service: BookVehicleFormService, private snackBar: MatSnackBar) {}

  bookingModel = new Booking(sessionStorage.getItem('username'), '', null, null, new Date());

  ngOnInit() {
    this.resetForm();
  }

  getText(e) {
    this.plateNumber = e;
    this.bookingModel.plateNumber = e;
  }
  resetForm(){
    this.bookingModel.username = sessionStorage.getItem('username');
    this.bookingModel.plateNumber = '';
    this.bookingModel.pickUpDate = null;
    this.bookingModel.dropOffDate = null;
    this.bookingModel.bookedDate = new Date();

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
  }

  validateForm(): boolean {
    if (this.bookingModel.username === '') {
      this.openSnackBar(('Please enter username!'), 'Close');
      return false;
    }
    if (this.bookingModel.plateNumber === '') {
      this.openSnackBar(('Please enter plate number!'), 'Close');
      return false;
    }
    if (this.bookingModel.pickUpDate === null) {
      this.openSnackBar(('Please select drop off date!'), 'Close');
      return false;
    }
    if (this.bookingModel.dropOffDate === null) {
      this.openSnackBar(('Please select pick up date!'), 'Close');
      return false;
    }
    if (this.bookingModel.bookedDate === null) {
      this.bookingModel.bookedDate=new Date();
      this.openSnackBar(('Please retry submitting!'), 'Close');
      return false;
    }
    console.log('Form Validation Successful!');
    return true;
  }

  OnSubmit() {
    console.log(this.bookingModel);
    if (this.validateForm() === true){
      this.service.bookVehicle(this.bookingModel).subscribe(
        data => {
          console.log('Success!', data);
          this.openSnackBar(('Please pay : £' + data), 'Close');
          window.location.reload();
        },
        error => {
          console.log('Error', error);
          this.openSnackBar(('Unable to process request'), 'Close');
        },
      );
    }
  }
}

