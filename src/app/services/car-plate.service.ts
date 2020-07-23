import { Injectable } from '@angular/core';
import { CarPlate } from '../models/CarPlate';

@Injectable({
  providedIn: 'root'
})
export class CarPlateService {
  car_plates:CarPlate[] = [
    {
      id: 'sdfsdf',
      plate_number: "342-NNN",
      owner_name: 'Edvardas'
    },
    {
      id: 'eraasdf',
      plate_number: "312-GFD",
      owner_name: 'Andrius'
    },
    {
      id: '4tegdfgs',
      plate_number: "112-HNB",
      owner_name: 'Lenny'
    }
  ];

  constructor() { }

  getCarPlates() {
    return this.car_plates;
  }

  removeCarPlate(car_plate:CarPlate) {
    this.car_plates.filter(cp => cp.id !== car_plate.id);
  }
}
