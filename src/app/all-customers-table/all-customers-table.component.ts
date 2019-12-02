import { Customer } from './../model/customer';
import { GetAllCustomersService } from './../services/get-all-customers.service';
import { GetAllVehiclesService } from './../services/get-all-vehicles.service';
import { Car } from './../model/car';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-all-customers-table',
  templateUrl: './all-customers-table.component.html',
  styleUrls: ['./all-customers-table.component.css']
})
export class AllCustomersTableComponent implements OnInit, AfterViewInit {

  constructor(private GetAllCustomersService: GetAllCustomersService) {

  }
 @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: false}) sort: MatSort;
 @ViewChild(MatTable, {static: false}) table: MatTable<Customer>;

 dataSource: MatTableDataSource<any>;
 columnsToDisplay = ['customerName','emailAddress','driversLicenseNumber','username'];


 ngOnInit() {
   //When the page loads the table is populated
   this.getServiceData();
 }
 ngAfterViewInit() {
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
   this.table.dataSource = this.dataSource;
 }
 //This function gets the data to populate the table
 getServiceData() {
   this.GetAllCustomersService.getAllCustomers().subscribe(
     data => {
       this.dataSource = new MatTableDataSource(data);
       console.log(data);
     }
   );
 }

 applyFilter(filtervalue: string){
   this.dataSource.filter = filtervalue.trim().toLowerCase();
   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }

}
