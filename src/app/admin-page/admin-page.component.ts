import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //WHen the page loads, it validates if you have logged in
    if (sessionStorage.getItem('validAdminSession') === 'false' || sessionStorage.getItem('validAdminSession') === null) {
      alert('You have not been logged in!');
      this.router.navigate(['']);
    }

  }

  // When the logout button is clicked, this method is executed
  logOut() {
    sessionStorage.removeItem('validSession');
    sessionStorage.setItem('validAdminSession', 'false');
    this.router.navigate(['']);
  }

}
