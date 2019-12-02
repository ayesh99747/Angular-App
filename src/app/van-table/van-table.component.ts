import { Van } from './../model/van';
import { GetVansService } from './../services/get-vans.service';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'app-van-table',
  templateUrl: './van-table.component.html',
  styleUrls: ['./van-table.component.css']
})

export class VanTableComponent implements OnInit, AfterViewInit {


  constructor(private GetVansService: GetVansService) {

   }
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Van>;

  @Input() message: string;
  @Output() emittedText = new EventEmitter<string>();

  dataSource: MatTableDataSource<any>;
  columnsToDisplay = ['plateNumber', 'make', 'model', 'yearOfManufacture', 'transmissionType', 'numberOfPassengers', 'combinedEfficiency',  'numberOfFreeMiles', 'fuelType', 'rate','bookVehicle'];
  sendPlateNumber(plateNumber : string){
    this.emittedText.emit(plateNumber);
    console.log(plateNumber);
   }

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
    this.GetVansService.findAll().subscribe(
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
