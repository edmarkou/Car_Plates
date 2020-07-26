import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPlateSearchComponent } from './car-plate-search.component';

describe('CarPlateSearchComponent', () => {
  let component: CarPlateSearchComponent;
  let fixture: ComponentFixture<CarPlateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPlateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPlateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
