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
    if (sessionStorage.getItem('validSession') === 'false' || sessionStorage.getItem('validSession') === '') {
      alert('You have not been logged in!');
      this.router.navigate(['']);
    }
  }

  logOut(){
    sessionStorage.removeItem('validSession');
    sessionStorage.setItem('validSession', 'false');
    this.router.navigate(['']);
  }

}
