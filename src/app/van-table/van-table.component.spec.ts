import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanTableComponent } from './van-table.component';

describe('VanTableComponent', () => {
  let component: VanTableComponent;
  let fixture: ComponentFixture<VanTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
