import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCustomersAdminComponent } from './view-all-customers-admin.component';

describe('ViewAllCustomersAdminComponent', () => {
  let component: ViewAllCustomersAdminComponent;
  let fixture: ComponentFixture<ViewAllCustomersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllCustomersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCustomersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
