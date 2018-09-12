import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { map, catchError, delay } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http: Http,
  ) { }

  get() {
    return this.http.get("http://localhost:3000/cars").pipe(
      map((data: Response) => {
        return data.json();
      }),
      catchError((error) => {
        console.log(error)
        return throwError(error)
      })
    );
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

  delete(car) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`).pipe(map((data: Response) => {
      return data.json();
    }));
  }
}
