import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CarsService} from '@services/cars.service';
import {CarDB} from '@share/car';

@Component({
  selector: 'app-input-car',
  templateUrl: './input-car.component.html',
  styleUrls: ['./input-car.component.css']
})
export class InputCarComponent implements OnInit {

  carName: string;
  carColor: string
  carObj: CarDB;

  constructor(
    private _carsService: CarsService,
  ) { }
  @Output() refresh = new EventEmitter();
  ngOnInit() {
  }


  postCar() {
    this.carObj = {
      name: this.carName,
      color: this.carColor
    }
    this._carsService.post(this.carObj).subscribe(() => {
      this.refresh.emit();
    });

  }
}
