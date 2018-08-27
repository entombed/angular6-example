import { Component, OnInit } from '@angular/core';
import { Car } from '@share/car';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  listCars: string;
  arrayCars: Car[]
  constructor(
    private _messageService: MessageService,
  ) { }

  ngOnInit() {
    this.listCars = "Список машин";
    this.arrayCars = [
      {
        name: "BMW",
        year: "2007"
      },
      {
        name: "MERSEDES",
        year: "2000"
      },
      {
        name: "AUDI",
        year: "2010"
      }
    ];
  }
  addCarArrayCars(car: Car) {
    this.arrayCars.push(car);
  }
  setTxt(data) {
    console.dir(data)
    this._messageService.setMessage(data);
  }
  getTxt() {
    this._messageService.getMessage();
  }
}
