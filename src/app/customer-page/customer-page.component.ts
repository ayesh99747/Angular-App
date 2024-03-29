import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('validCustomerSession') === 'false' || sessionStorage.getItem('validCustomerSession') === null ) {
      alert('You have not been logged in!');
      this.router.navigate(['']);
    }

  }

  //This function is called when the logoutbutton is called
  logOut(){
    sessionStorage.removeItem('username');
    sessionStorage.setItem('validCustomerSession', 'false');
    this.router.navigate(['']);
  }

}
