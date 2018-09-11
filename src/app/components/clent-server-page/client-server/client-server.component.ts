import { Component, OnInit } from '@angular/core';
import {CarsService} from '@services/cars.service';

@Component({
  selector: 'app-client-server',
  templateUrl: './client-server.component.html',
  styleUrls: ['./client-server.component.css']
})
export class ClientServerComponent implements OnInit {

  cars: { id: number; name: string; color: string; }[];

  constructor(
    private _carsService: CarsService,
  ) { }

  ngOnInit() {

  }

  loadCars() {
    this._carsService.getCars().subscribe((data) => {
      console.log(data)
    });
  }

}
