import { Component, OnDestroy, OnInit } from '@angular/core';
import { loadNavigatorGeolocations, clearNavigatorGeolocations } from './store/navigator-geolocations.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-ngx-navigator-geolocation',
  template: `
    <div libNgxNavigatorGeolocation></div>
  `,
  styles: []
})
export class NgxNavigatorGeolocationComponent implements OnInit, OnDestroy {

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadNavigatorGeolocations());
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearNavigatorGeolocations());
  }

}
