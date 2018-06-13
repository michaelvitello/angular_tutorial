import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordFComponent } from './change-password-f.component';

describe('ChangePasswordFComponent', () => {
  let component: ChangePasswordFComponent;
  let fixture: ComponentFixture<ChangePasswordFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
