import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCarsTableComponent } from './all-cars-table.component';

describe('AllCarsTableComponent', () => {
  let component: AllCarsTableComponent;
  let fixture: ComponentFixture<AllCarsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCarsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCarsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
