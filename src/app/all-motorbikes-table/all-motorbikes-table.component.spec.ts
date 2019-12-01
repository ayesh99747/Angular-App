import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMotorbikesTableComponent } from './all-motorbikes-table.component';

describe('AllMotorbikesTableComponent', () => {
  let component: AllMotorbikesTableComponent;
  let fixture: ComponentFixture<AllMotorbikesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMotorbikesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMotorbikesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
