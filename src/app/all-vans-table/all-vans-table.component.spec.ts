import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVansTableComponent } from './all-vans-table.component';

describe('AllVansTableComponent', () => {
  let component: AllVansTableComponent;
  let fixture: ComponentFixture<AllVansTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVansTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVansTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
