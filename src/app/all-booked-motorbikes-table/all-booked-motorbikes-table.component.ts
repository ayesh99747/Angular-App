import { Motorbike } from './../model/motorbike';
import { GetAllBookedVehiclesService } from './../services/get-all-booked-vehicles.service';
import { GetAllFreeVehiclesService } from './../services/get-all-free-vehicles.service';
import { Car } from './../model/car';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-all-booked-motorbikes-table',
  templateUrl: './all-booked-motorbikes-table.component.html',
  styleUrls: ['./all-booked-motorbikes-table.component.css']
})
export class AllBookedMotorbikesTableComponent implements OnInit, AfterViewInit {

  constructor(private GetAllVehiclesService: GetAllBookedVehiclesService) {

  }
 @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: false}) sort: MatSort;
 @ViewChild(MatTable, {static: false}) table: MatTable<Motorbike>;

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
   this.GetAllVehiclesService.getAllBookedMotorbikes().subscribe(
     data => {
       this.dataSource = new MatTableDataSource(data);
       console.log(data);
       if (data.length === 0) {
        alert('No booked motorbikes available!');
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
