import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarPlate } from 'src/app/models/CarPlate';

@Component({
  selector: 'app-car-plate-search',
  templateUrl: './car-plate-search.component.html',
  styleUrls: ['./car-plate-search.component.css']
})

export class CarPlateSearchComponent implements OnInit {
  @Output() searchCarPlates:EventEmitter<string> = new EventEmitter();
  @Output() createNewCarPlate:EventEmitter<object> = new EventEmitter();
  search:string = '';
  owner_name:string = '';
  plate_number:string = '';
  show_create_plate:boolean = false;
  on_create_error:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event) {
    event.preventDefault();
    this.searchCarPlates.emit(this.search);
  }

  setModalClasses = () => ({
    'modal--shown': this.show_create_plate,
    'modal--hidden': !this.show_create_plate
  });

  setErrorClasses = () => ({
    'error--shown': this.on_create_error,
    'error--hidden': !this.on_create_error
  })

  toggleModal = (bool:boolean) => this.show_create_plate = bool;

  createCarPlate = (event) => {
    event.preventDefault();
    if (this.owner_name.length && this.plate_number.length === 6) {
      const plate_number = this.plate_number.split('');
      plate_number.splice(3, 0, '-');
      this.createNewCarPlate.emit({
        owner_name: this.owner_name,
        plate_number: plate_number.join('')
      });
    }
  }

  setCreateError = (bool:boolean) => {
    if (bool) this.on_create_error = bool;
    else {
      this.owner_name = '';
      this.plate_number = '';
      this.on_create_error = false;
      this.show_create_plate = false;
    }
  }
}
