import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Response} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http: Http,
  ) { }

  get() {
    return this.http.get("http://localhost:3000/cars").pipe(map((data: Response) => {
      return data.json();
    }));
  }

  post(data) {
    return this.http.post("http://localhost:3000/cars", data).pipe(map((data: Response) => {
      return data.json();
    }));
  }

  putColor(car) {
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car).pipe(map((data: Response) => {
      return data.json();
    }));
  }
}
