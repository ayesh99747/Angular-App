import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookVehicleFormComponent } from './book-vehicle-form.component';

describe('BookVehicleFormComponent', () => {
  let component: BookVehicleFormComponent;
  let fixture: ComponentFixture<BookVehicleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookVehicleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
