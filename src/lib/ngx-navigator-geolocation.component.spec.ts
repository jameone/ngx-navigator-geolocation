import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNavigatorGeolocationComponent } from './ngx-navigator-geolocation.component';

describe('NgxNavigatorGeolocationComponent', () => {
  let component: NgxNavigatorGeolocationComponent;
  let fixture: ComponentFixture<NgxNavigatorGeolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNavigatorGeolocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNavigatorGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
