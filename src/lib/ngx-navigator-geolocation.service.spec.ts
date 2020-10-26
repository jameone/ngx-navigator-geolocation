import { TestBed } from '@angular/core/testing';

import { NgxNavigatorGeolocationService } from './ngx-navigator-geolocation.service';

describe('NgxNavigatorGeolocationService', () => {
  let service: NgxNavigatorGeolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNavigatorGeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
