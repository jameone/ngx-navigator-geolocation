import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavigatorGeolocationsEntity } from './store/navigator-geolocations.models';
import { getSelectedNavigatorGeolocation } from './store/navigator-geolocations.selectors';
import { clearNavigatorGeolocations } from './store/navigator-geolocations.actions';

@Injectable({
  providedIn: 'root'
})
export class NgxNavigatorGeolocationService {

  constructor(private store: Store) {
  }

  getSelectedNavigatorGeolocation$(): Observable<NavigatorGeolocationsEntity> {
    return this.store.pipe(select(getSelectedNavigatorGeolocation));
  }

  clearNavigatorGeolocations(): void {
    this.store.dispatch(clearNavigatorGeolocations());
  }

}
