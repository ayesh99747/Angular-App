import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookedVansTableComponent } from './all-booked-vans-table.component';

describe('AllBookedVansTableComponent', () => {
  let component: AllBookedVansTableComponent;
  let fixture: ComponentFixture<AllBookedVansTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBookedVansTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookedVansTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
