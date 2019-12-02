import { Van } from './../model/van';
import { GetAllVehiclesService } from './../services/get-all-vehicles.service';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-all-vans-table',
  templateUrl: './all-vans-table.component.html',
  styleUrls: ['./all-vans-table.component.css']
})
export class AllVansTableComponent implements OnInit, AfterViewInit {

  constructor(private GetAllVehiclesService: GetAllVehiclesService) {

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
 getServiceData() {
   this.GetAllVehiclesService.getAllVans().subscribe(
     data => {
       this.dataSource = new MatTableDataSource(data);
       console.log(data);
       if (data.length === 0) {
        alert('No vans available!');
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
