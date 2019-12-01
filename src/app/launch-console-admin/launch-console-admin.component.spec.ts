import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchConsoleAdminComponent } from './launch-console-admin.component';

describe('LaunchConsoleAdminComponent', () => {
  let component: LaunchConsoleAdminComponent;
  let fixture: ComponentFixture<LaunchConsoleAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchConsoleAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchConsoleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
