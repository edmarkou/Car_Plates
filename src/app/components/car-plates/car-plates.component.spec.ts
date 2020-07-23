import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPlatesComponent } from './car-plates.component';

describe('CarPlatesComponent', () => {
  let component: CarPlatesComponent;
  let fixture: ComponentFixture<CarPlatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPlatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
