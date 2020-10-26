import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNavigatorGeolocationComponent } from './ngx-navigator-geolocation.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialNavigatorGeolocationsState } from './store/navigator-geolocations.reducer';

describe('NgxNavigatorGeolocationComponent', () => {
  let component: NgxNavigatorGeolocationComponent;
  let fixture: ComponentFixture<NgxNavigatorGeolocationComponent>;
  let mockStore: MockStore;
  const initialState = initialNavigatorGeolocationsState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({initialState})],
      declarations: [ NgxNavigatorGeolocationComponent ]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
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
