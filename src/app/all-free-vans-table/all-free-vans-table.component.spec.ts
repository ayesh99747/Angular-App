import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFreeVansTableComponent } from './all-free-vans-table.component';

describe('AllFreeVansTableComponent', () => {
  let component: AllFreeVansTableComponent;
  let fixture: ComponentFixture<AllFreeVansTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFreeVansTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFreeVansTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
