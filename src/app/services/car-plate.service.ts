import { Injectable } from '@angular/core';
import { CarPlate } from '../models/CarPlate';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarPlateService {
  constructor(private http:HttpClient) { }

  getCarPlates():Observable<CarPlate[]> {
    return this.http.get<CarPlate[]>('/api/car-plates/get/all');
  }

  removeCarPlate(car_plate:CarPlate):Observable<any> {
    return this.http.delete(`/api/car-plates/delete/${car_plate._id}`, httpOptions);
  }

  createCarPlate(car_plate:object):Observable<any> {
    return this.http.put('/api/car-plates/create', car_plate, httpOptions);
  }

  getCarPlate(id:string):Observable<any> {
    return this.http.get<CarPlate>(`/api/car-plates/get/${id}`);
  }

  updateCarPlate(car_plate:CarPlate):Observable<any> {
    return this.http.post<CarPlate>(`/api/car-plates/update`, car_plate, httpOptions);
  }
}
