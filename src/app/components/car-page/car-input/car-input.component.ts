import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Car } from '@share/car';

@Component({
  selector: 'app-car-input',
  templateUrl: './car-input.component.html',
  styleUrls: ['./car-input.component.css']
})
export class CarInputComponent implements OnInit {
  nameCar: string;
  yearCar: string;
  add: string;
  car: Car;
  @ViewChild('refInputName') inputName: ElementRef;
  @Output() pullCar = new EventEmitter<{ name: string, year: string }>()
  constructor() { }

  ngAfterViewInit() {
    this.inputName.nativeElement.focus();
  }

  ngOnInit() {
    this.nameCar = '';
    this.yearCar = '';
    this.add = "Добавить";
  }

  addCar() {
    console.log(this.inputName)
    this.car = {
      name: this.nameCar,
      year: this.yearCar
    }
    this.pullCar.emit(this.car);
    this.nameCar = '';
    this.yearCar = '';
  }
}
