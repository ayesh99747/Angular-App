import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookedMotorbikesTableComponent } from './all-booked-motorbikes-table.component';

describe('AllBookedMotorbikesTableComponent', () => {
  let component: AllBookedMotorbikesTableComponent;
  let fixture: ComponentFixture<AllBookedMotorbikesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBookedMotorbikesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookedMotorbikesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
