import { GetAllBookedVehiclesService } from './../services/get-all-booked-vehicles.service';
import { GetAllFreeVehiclesService } from './../services/get-all-free-vehicles.service';
import { Car } from './../model/car';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-all-booked-cars-table',
  templateUrl: './all-booked-cars-table.component.html',
  styleUrls: ['./all-booked-cars-table.component.css']
})
export class AllBookedCarsTableComponent implements OnInit, AfterViewInit {

  constructor(private GetAllVehiclesService: GetAllBookedVehiclesService) {

  }

 @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: false}) sort: MatSort;
 @ViewChild(MatTable, {static: false}) table: MatTable<Car>;

 dataSource: MatTableDataSource<any>;
 columnsToDisplay = ['plateNumber', 'make', 'model', 'yearOfManufacture', 'transmissionType', 'numberOfPassengers', 'combinedEfficiency',  'numberOfFreeMiles', 'fuelType', 'rate'];


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
   this.GetAllVehiclesService.getAllBookedCars().subscribe(
     data => {
       this.dataSource = new MatTableDataSource(data);
       console.log(data);
       if (data.length === 0) {
        alert('No booked cars available!');
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
