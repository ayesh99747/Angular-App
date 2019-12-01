import { GetAllVehiclesService } from './../services/get-all-vehicles.service';
import { Car } from './../model/car';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-all-cars-table',
  templateUrl: './all-cars-table.component.html',
  styleUrls: ['./all-cars-table.component.css']
})
export class AllCarsTableComponent implements OnInit, AfterViewInit {

  constructor(private GetAllVehiclesService: GetAllVehiclesService) {

  }
 @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: false}) sort: MatSort;
 @ViewChild(MatTable, {static: false}) table: MatTable<Car>;

 @Input() message: string;
 @Output() emittedText = new EventEmitter<string>();


 dataSource: MatTableDataSource<any>;
 columnsToDisplay = ['plateNumber', 'make', 'model', 'yearOfManufacture', 'transmissionType', 'numberOfPassengers', 'combinedEfficiency',  'numberOfFreeMiles', 'fuelType', 'rate'];
 sendPlateNumber(plateNumber : string){
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
   this.GetAllVehiclesService.getAllCars().subscribe(
     data => {
       this.dataSource = new MatTableDataSource(data);
       console.log(data);
       if (data.length === 0) {
        alert('No cars available!');
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
