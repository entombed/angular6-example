import { Component, OnInit } from '@angular/core';
import {CarsService} from '@services/cars.service';
import {CarDB} from '@share/car';

@Component({
  selector: 'app-client-server',
  templateUrl: './client-server.component.html',
  styleUrls: ['./client-server.component.css']
})
export class ClientServerComponent implements OnInit {

  cars: CarDB[];
  carObj: CarDB;
  carName: string;
  carColor: string
  colors: string[] = ["red", "blue", "yellow", "black", "green"];

  constructor(
    private _carsService: CarsService,
  ) { }

  ngOnInit() {

  }

  loadCars() {
    this._carsService.get().subscribe((data: CarDB[]) => {
      this.cars = data;
    });
  }

  postCar() {
    this.carObj = {
      name: this.carName,
      color: this.carColor
    }
    this._carsService.post(this.carObj).subscribe(() => {
      this.loadCars()
    });
  }

  changeColor(car: CarDB) {
    const randomColor = Math.round(Math.random() * (this.colors.length - 1));

    console.log(this.colors[randomColor], randomColor)
    car.color = this.colors[randomColor];
    this._carsService.putColor(car).subscribe();
  }
}
