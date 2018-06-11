import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCaserComponent } from './title-caser.component';

describe('TitleCaserComponent', () => {
  let component: TitleCaserComponent;
  let fixture: ComponentFixture<TitleCaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
