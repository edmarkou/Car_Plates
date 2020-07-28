import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { CarPlate } from '../../models/CarPlate';
import { CarPlateService } from '../../services/car-plate.service';
import { CarPlateSearchComponent } from '../car-plate-search/car-plate-search.component';

const sortCarPlates = (a, b) => {
  if (a.owner_name > b.owner_name) return 1;
  else if (a.owner_name < b.owner_name) return -1;
  else return 0;
}
@Component({
  selector: 'app-car-plates',
  templateUrl: './car-plates.component.html',
  styleUrls: ['./car-plates.component.css']
})
export class CarPlatesComponent implements OnInit, AfterViewInit  {
  @ViewChild(CarPlateSearchComponent) car_plate_search:CarPlateSearchComponent;
  car_plates:CarPlate[] = [];
  constructor(private carPlateService:CarPlateService) { }

  ngOnInit():void {
    this.carPlateService.getCarPlates().subscribe(car_plates => this.car_plates = car_plates);
  }
  ngAfterViewInit() { }

  removeCarPlate(car_plate:CarPlate) {
    this.car_plates = this.car_plates.filter(cp => cp._id !== car_plate._id);
    this.carPlateService.removeCarPlate(car_plate).subscribe();
  }

  searchCarPlates(search:string) {
    this.carPlateService.getCarPlates().subscribe(car_plates => {
      this.car_plates = car_plates.filter(plate => plate.owner_name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    });
  }

  createNewCarPlate = async (car_plate:object) => {
    this.carPlateService.createCarPlate(car_plate).subscribe(response => {
      if (!response.error) {
        this.car_plates.unshift(response);
        this.car_plates = this.car_plates.filter(plate => (
          plate.owner_name.toLowerCase().indexOf(this.car_plate_search.search.toLowerCase()) !== -1
        )).sort(sortCarPlates);
        this.car_plate_search.setCreateError('');
      } else {
        this.car_plate_search.setCreateError(response.error);
      }
    })
  }
}
