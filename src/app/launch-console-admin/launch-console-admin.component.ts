import { StartConsoleService } from './../services/start-console.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-console-admin',
  templateUrl: './launch-console-admin.component.html',
  styleUrls: ['./launch-console-admin.component.css']
})
export class LaunchConsoleAdminComponent implements OnInit {

  constructor(private startConsoleService: StartConsoleService, private snackBar: MatSnackBar) {

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
    window.location.reload();
  }

  ngOnInit() {
    this.getServiceData();
    this.openSnackBar('Console has been launched', 'Close');
  }

  //This function lauches the console
  getServiceData() {
    this.startConsoleService.startConsole().subscribe(
      res => {
        alert(res);
        console.log(res);
      }
    );
  }

}
