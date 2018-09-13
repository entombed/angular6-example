import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {CarsService} from '@services/cars.service';
import {CarDB} from '@share/car';
 
@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  id: string;
  car: CarDB;

  constructor(
    private _carsService: CarsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params);
    // this.id = this.route.snapshot.params['id'];
    this.getIdOfCar()
  }

  loadCar() {
    this._carsService.getSingleCar(this.id).subscribe(
      (data: CarDB) => {
        this.car = data;
      },
      (error) => {
        alert(error);
      }
    );
  }

  getIdOfCar() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadCar()
    })
    
  }

}
