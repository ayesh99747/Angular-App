import { PreviouslyBookedVehiclesService } from './../services/previously-booked-vehicles.service';
import { Booking } from './../model/booking';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-previously-booked-vehicles',
  templateUrl: './previously-booked-vehicles.component.html',
  styleUrls: ['./previously-booked-vehicles.component.css']
})
export class PreviouslyBookedVehiclesComponent implements OnInit, AfterViewInit {

  constructor(private PreviouslyBookedVehiclesService: PreviouslyBookedVehiclesService) {

  }
 @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: false}) sort: MatSort;
 @ViewChild(MatTable, {static: false}) table: MatTable<Booking>;

 @Input() message: string;
 @Output() emittedText = new EventEmitter<string>();


 dataSource: MatTableDataSource<any>;
 public columnsToDisplay = ['plateNumber','bookedDate', 'pickUpDate', 'dropOffDate'];

 ngOnInit() {
   this.getServiceData();
 }
 ngAfterViewInit() {
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
   this.table.dataSource = this.dataSource;
 }
 getServiceData() {
   this.PreviouslyBookedVehiclesService.findAll().subscribe(
     data => {
       this.dataSource = new MatTableDataSource(data);
       console.log(data);
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
