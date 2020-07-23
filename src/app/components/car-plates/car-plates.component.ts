import { Component, OnInit } from '@angular/core';
import { CarPlate } from '../../models/CarPlate';
import { CarPlateService } from '../../services/car-plate.service';

@Component({
  selector: 'app-car-plates',
  templateUrl: './car-plates.component.html',
  styleUrls: ['./car-plates.component.css']
})
export class CarPlatesComponent implements OnInit {
  car_plates:CarPlate[] = [
    
  ];
  constructor(private carPlateService:CarPlateService) { }

  ngOnInit(): void {
    this.car_plates = this.carPlateService.getCarPlates();
  }

  removeCarPlate(car_plate:CarPlate) {
    this.car_plates = this.car_plates.filter(cp => cp.id !== car_plate.id);
    this.carPlateService.removeCarPlate(car_plate);
  }

}
