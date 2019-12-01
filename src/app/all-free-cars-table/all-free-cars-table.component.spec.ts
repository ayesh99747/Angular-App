import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFreeCarsTableComponent } from './all-free-cars-table.component';

describe('AllFreeCarsTableComponent', () => {
  let component: AllFreeCarsTableComponent;
  let fixture: ComponentFixture<AllFreeCarsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFreeCarsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFreeCarsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
