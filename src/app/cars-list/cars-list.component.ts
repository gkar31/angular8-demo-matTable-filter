import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { CarsService } from './../cars.service';
import { ICar } from './../car';
import { MatTableDataSource } from '@angular/material/table';

const CAR_DATA: ICar[] = [
  {_id: "0",
Couple_Nm: 0,
Cylindree: 0,
Cylindres: 0,
Image: "",
Indice_Perf: 0,
Marque: "Loading...",
Modele: "from Server",
Prix: "",
Puissance_ch: 0,
Serie: "",
VitesseMax_Kmh: 0,
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
export class CarsListComponent implements OnInit {

  public cars:ICar[] = [];

  displayedColumns: string[] = ['Picture', 'Name', 'Power', 'Couple', 'Perf'];

  dataSource = new MatTableDataSource(CAR_DATA);

  carsLoading = false;




  constructor(private router: Router, private _carService: CarsService) { }

  ngOnInit() {
    this.carsLoading = true;
    this._carService.getCars()
    .subscribe(data => {
      this.carsLoading=false;
      this.dataSource = new MatTableDataSource(data);
    });


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
