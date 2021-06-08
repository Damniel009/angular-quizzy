import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Car } from '../dtos/car';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  baseUrl = 'http://localhost/api';
  cars: Car[];
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  getAll(): Observable<Car[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
      }, catchError(this.handleError))
    );
  }

  store(car: Car): Observable<Car[]> {
    return this.http.post(`${this.baseUrl}/store`, { data: car }).pipe(
      map((res) => {
        this.cars.push(res['data']);
        return this.cars;
      }),
      catchError(this.handleError)
    );
  }

  update(car: Car): Observable<Car[]> {
    return this.http.put(`${this.baseUrl}/update`, { data: car }).pipe(
      map((res) => {
        const theCar = this.cars.find((item) => {
          return +item['id'] === +car['id'];
        });
        if (theCar) {
          theCar['price'] = +car['price'];
          theCar['model'] = car['model'];
        }
        return this.cars;
      }),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<Car[]> {
    const params = new HttpParams().set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete`, { params: params }).pipe(
      map((res) => {
        const filteredCars = this.cars.filter((car) => {
          return +car['id'] !== +id;
        });
        return (this.cars = filteredCars);
      }),
      catchError(this.handleError)
    );
  }
}
