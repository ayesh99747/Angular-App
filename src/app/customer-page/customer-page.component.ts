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
    if (sessionStorage.getItem('validSession') === 'false' || sessionStorage.getItem('validSession') === '' ) {
      alert('You have not been logged in!');
      this.router.navigate(['']);
    }

  }

  logOut(){
    sessionStorage.removeItem('username');
    sessionStorage.setItem('validSession', 'false');
    this.router.navigate(['']);
  }

}
