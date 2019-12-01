import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomersTableComponent } from './all-customers-table.component';

describe('AllCustomersTableComponent', () => {
  let component: AllCustomersTableComponent;
  let fixture: ComponentFixture<AllCustomersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCustomersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCustomersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
