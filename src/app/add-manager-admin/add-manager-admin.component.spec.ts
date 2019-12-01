import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagerAdminComponent } from './add-manager-admin.component';

describe('AddManagerAdminComponent', () => {
  let component: AddManagerAdminComponent;
  let fixture: ComponentFixture<AddManagerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManagerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManagerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
