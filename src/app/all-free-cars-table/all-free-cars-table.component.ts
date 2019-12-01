import { GetAllFreeVehiclesService } from './../services/get-all-free-vehicles.service';
import { Car } from './../model/car';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-all-free-cars-table',
  templateUrl: './all-free-cars-table.component.html',
  styleUrls: ['./all-free-cars-table.component.css']
})
export class AllFreeCarsTableComponent implements OnInit, AfterViewInit {

  constructor(private GetAllVehiclesService: GetAllFreeVehiclesService) {

  }
 @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: false}) sort: MatSort;
 @ViewChild(MatTable, {static: false}) table: MatTable<Car>;

 @Input() message: string;
 @Output() emittedText = new EventEmitter<string>();


 dataSource: MatTableDataSource<any>;
 columnsToDisplay = ['plateNumber', 'make', 'model', 'yearOfManufacture', 'transmissionType', 'numberOfPassengers', 'combinedEfficiency',  'numberOfFreeMiles', 'fuelType', 'rate'];
 sendPlateNumber(plateNumber: string) {
   this.emittedText.emit(plateNumber);
   console.log(plateNumber);
  }

 ngOnInit() {
   this.getServiceData();
 }
 ngAfterViewInit() {
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
   this.table.dataSource = this.dataSource;
 }
 getServiceData() {
   this.GetAllVehiclesService.getAllFreeCars().subscribe(
     data => {
       this.dataSource = new MatTableDataSource(data);
       console.log(data);
       if (data.length === 0) {
        alert('No free cars available!');
       }
     }
   );
 }

 applyFilter(filtervalue: string) {
   this.dataSource.filter = filtervalue.trim().toLowerCase();
   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }

}
