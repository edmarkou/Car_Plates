import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarPlate } from 'src/app/models/CarPlate';

@Component({
  selector: 'app-car-plate',
  templateUrl: './car-plate.component.html',
  styleUrls: ['./car-plate.component.css']
})
export class CarPlateComponent implements OnInit {
  @Input() car_plate: CarPlate;
  @Output() removeCarPlate: EventEmitter<CarPlate> = new EventEmitter();
  show_confirmation:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setModalClasses = () => ({
    'modal--shown': this.show_confirmation,
    'modal--hidden': !this.show_confirmation
  });

  onRemove(car_plate:CarPlate) {
    this.removeCarPlate.emit(car_plate);
    this.show_confirmation = false;
  }

  toggleConfirmation(bool:boolean) {
    this.show_confirmation = bool;
  }
}
