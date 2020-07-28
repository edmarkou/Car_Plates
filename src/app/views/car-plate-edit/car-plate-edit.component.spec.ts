import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPlateEditComponent } from './car-plate-edit.component';

describe('CarPlateEditComponent', () => {
  let component: CarPlateEditComponent;
  let fixture: ComponentFixture<CarPlateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPlateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPlateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
