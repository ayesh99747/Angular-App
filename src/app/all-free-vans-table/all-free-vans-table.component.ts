import { Van } from './../model/van';
import { GetAllFreeVehiclesService } from './../services/get-all-free-vehicles.service';
import { GetAllVehiclesService } from './../services/get-all-vehicles.service';
import { Car } from './../model/car';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-all-free-vans-table',
  templateUrl: './all-free-vans-table.component.html',
  styleUrls: ['./all-free-vans-table.component.css']
})
export class AllFreeVansTableComponent implements OnInit, AfterViewInit {

  constructor(private GetAllVehiclesService: GetAllFreeVehiclesService) {

  }
 @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: false}) sort: MatSort;
 @ViewChild(MatTable, {static: false}) table: MatTable<Van>;

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
   this.GetAllVehiclesService.getAllFreeVans().subscribe(
     data => {
       this.dataSource = new MatTableDataSource(data);
       console.log(data);
       if (data.length === 0) {
        alert('No free vans available!');
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
