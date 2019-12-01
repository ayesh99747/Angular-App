import { GetMotorbikesService } from './../services/get-motorbikes.service';
import { Motorbike } from './../model/motorbike';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-motorbike-table',
  templateUrl: './motorbike-table.component.html',
  styleUrls: ['./motorbike-table.component.css']
})
export class MotorbikeTableComponent implements OnInit, AfterViewInit {


  constructor(private GetMotorbikesService: GetMotorbikesService) {

   }
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Motorbike>;

  @Input() message: string;
  @Output() emittedText = new EventEmitter<string>();

  dataSource: MatTableDataSource<any>;
  columnsToDisplay = ['plateNumber', 'make', 'model', 'yearOfManufacture', 'transmissionType', 'numberOfPassengers', 'combinedEfficiency',  'numberOfFreeMiles', 'fuelType', 'rate','bookVehicle'];
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
    this.GetMotorbikesService.findAll().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        console.log(data);
        if (data.length === 0) {
          alert('No free motorbikes available!');
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
