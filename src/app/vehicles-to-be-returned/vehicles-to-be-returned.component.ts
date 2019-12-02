import { Car } from './../model/car';
import { Vehicle } from './../model/vehicle';
import { GetVehiclesToBeReturnedService } from './../services/get-vehicles-to-be-returned.service';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-vehicles-to-be-returned',
  templateUrl: './vehicles-to-be-returned.component.html',
  styleUrls: ['./vehicles-to-be-returned.component.css']
})
export class VehiclesToBeReturnedComponent implements OnInit, AfterViewInit {


  constructor(private GetVehiclesToBeReturnedService: GetVehiclesToBeReturnedService) {

  }
 @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: false}) sort: MatSort;
 @ViewChild(MatTable, {static: false}) table: MatTable<Car>;

 dataSource: MatTableDataSource<any>;
 columnsToDisplay = ['plateNumber', 'make', 'model', 'yearOfManufacture'];

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
   this.GetVehiclesToBeReturnedService.getAllVehicles().subscribe(
     data => {
       this.dataSource = new MatTableDataSource(data);
       console.log(data);
       if (data.length === 0) {
        alert('No booked vehicles to be returned!');
       }
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
