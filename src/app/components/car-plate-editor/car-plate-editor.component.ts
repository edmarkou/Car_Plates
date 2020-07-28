import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarPlateService } from 'src/app/services/car-plate.service';
import { CarPlate } from 'src/app/models/CarPlate';

@Component({
  selector: 'app-car-plate-editor',
  templateUrl: './car-plate-editor.component.html',
  styleUrls: ['./car-plate-editor.component.css']
})
export class CarPlateEditorComponent implements OnInit {
  car_plate:CarPlate = { _id: '', owner_name: '', plate_number: '' };
  error:string = '';
  constructor(
    private route: ActivatedRoute,
    private carPlateService: CarPlateService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCarPlate();
  }

  getCarPlate():void {
    this.carPlateService.getCarPlate(this.route.snapshot.paramMap.get('id')).subscribe(car_plate => {
      this.car_plate = car_plate;
    });
  }

  setPageClasses = () => ({
    'hide-page': !this.car_plate,
    'show-page': !!this.car_plate
  });

  setErrorClasses = () => ({
    'error--shown': this.error,
    'error--hidden': !this.error
  });

  saveCarPlate():void{
    if (this.car_plate.owner_name.length && this.car_plate.plate_number.length === 7) {
      this.carPlateService.updateCarPlate(this.car_plate).subscribe(res => {
        if (res.error) this.error = res.error;
        else this.location.back();
      });
    } else this.error = 'Invalid input.';
  }
}
