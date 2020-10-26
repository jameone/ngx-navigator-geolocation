import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromNavigatorGeolocations from './navigator-geolocations.reducer';
import * as NavigatorGeolocationsSelectors from './navigator-geolocations.selectors';

@Injectable()
export class NavigatorGeolocationsFacade {
  loaded$ = this.store.pipe(
    select(NavigatorGeolocationsSelectors.getNavigatorGeolocationsLoaded)
  );
  allNavigatorGeolocations$ = this.store.pipe(
    select(NavigatorGeolocationsSelectors.getAllNavigatorGeolocations)
  );
  selectedNavigatorGeolocations$ = this.store.pipe(
    select(NavigatorGeolocationsSelectors.getSelectedNavigatorGeolocation)
  );

  constructor(
    private store: Store<fromNavigatorGeolocations.NavigatorGeolocationsPartialState>
  ) {}

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
