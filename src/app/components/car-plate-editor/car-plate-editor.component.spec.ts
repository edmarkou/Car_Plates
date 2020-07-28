import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPlateEditorComponent } from './car-plate-editor.component';

describe('CarPlateEditorComponent', () => {
  let component: CarPlateEditorComponent;
  let fixture: ComponentFixture<CarPlateEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPlateEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPlateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
