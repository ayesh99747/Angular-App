import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFreeMotorbikesTableComponent } from './all-free-motorbikes-table.component';

describe('AllFreeMotorbikesTableComponent', () => {
  let component: AllFreeMotorbikesTableComponent;
  let fixture: ComponentFixture<AllFreeMotorbikesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFreeMotorbikesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFreeMotorbikesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
