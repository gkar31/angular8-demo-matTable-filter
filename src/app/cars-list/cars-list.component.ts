import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router }  from '@angular/router';

import { CarsService } from './../cars.service';
import { ICar } from './../car';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

const CAR_DATA: ICar[] = [
  {_id: "0",
couple: 0,
cylindree: 0,
cylindres: 0,
image: "",
perf: 0,
marque: "Loading...",
modele: "from Server",
prix: "",
puissance: 0,
serie: "",
vitesse: 0,
acc_0_100: 0,
acc_0_200: 0,
acc_1000m_DA: 0,
acc_400m_DA: 0}
];

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, AfterViewInit {

  public cars:ICar[] = [];

  displayedColumns: string[] = ['picture', 'marque', 'puissance', 'couple', 'perf'];

  dataSource = new MatTableDataSource(CAR_DATA);

  carsLoading = false;




  constructor(private router: Router, private _carService: CarsService) { }


@ViewChild(MatSort, {static: false}) sort: MatSort;
  ngOnInit() {
    this.carsLoading = true;
    this._carService.getCars()
    .subscribe(data => {
      this.carsLoading=false;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort= this.sort;
    });


  }


ngAfterViewInit(){
  console.log("sort :"+this.sort);
    this.dataSource.sort= this.sort;
}

  displayCarsDetail(car){
    //console.log(car);
    this._carService.currentCar = car;
    this.router.navigate(['/carsList', car._id ]);
  }


applyFilter(filterValue: String){
  console.log("filter :"+filterValue);
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
