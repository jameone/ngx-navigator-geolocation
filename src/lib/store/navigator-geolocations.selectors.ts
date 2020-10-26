import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  NGX_NAVIGATOR_GEOLOCATION_FEATURE_KEY,
  NavigatorGeolocationsState,
  NavigatorGeolocationsPartialState,
  navigatorGeolocationsAdapter,
} from './navigator-geolocations.reducer';

// Lookup the 'NavigatorGeolocations' feature state managed by NgRx
export const getNavigatorGeolocationsState = createFeatureSelector<
  NavigatorGeolocationsPartialState,
  NavigatorGeolocationsState
>(NGX_NAVIGATOR_GEOLOCATION_FEATURE_KEY);

const { selectAll, selectEntities } = navigatorGeolocationsAdapter.getSelectors();

export const getNavigatorGeolocationsLoaded = createSelector(
  getNavigatorGeolocationsState,
  (state: NavigatorGeolocationsState) => state.loaded
);

export const getNavigatorGeolocationsError = createSelector(
  getNavigatorGeolocationsState,
  (state: NavigatorGeolocationsState) => state.error
);

export const getAllNavigatorGeolocations = createSelector(
  getNavigatorGeolocationsState,
  (state: NavigatorGeolocationsState) => selectAll(state)
);

export const getNavigatorGeolocationsEntities = createSelector(
  getNavigatorGeolocationsState,
  (state: NavigatorGeolocationsState) => selectEntities(state)
);

export const getSelectedNavigatorGeolocationId = createSelector(
  getNavigatorGeolocationsState,
  (state: NavigatorGeolocationsState) => state.selectedId
);

export const getNavigatorGeolocationIds = createSelector(
  getNavigatorGeolocationsState,
  (state: NavigatorGeolocationsState) => state.ids
);

export const getSelectedNavigatorGeolocation = createSelector(
  getNavigatorGeolocationsEntities,
  getSelectedNavigatorGeolocationId,
  (entities, selectedId) => entities[selectedId]
);
