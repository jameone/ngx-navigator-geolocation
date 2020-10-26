import { TestBed } from '@angular/core/testing';

import { NgxNavigatorGeolocationService } from './ngx-navigator-geolocation.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialNavigatorGeolocationsState } from './store/navigator-geolocations.reducer';

describe('NgxNavigatorGeolocationService', () => {
  let service: NgxNavigatorGeolocationService;
  const initialState = initialNavigatorGeolocationsState;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({initialState})],
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    service = TestBed.inject(NgxNavigatorGeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
