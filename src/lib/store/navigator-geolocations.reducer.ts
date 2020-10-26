import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as NavigatorGeolocationsActions from './navigator-geolocations.actions';
import { NavigatorGeolocationsEntity } from './navigator-geolocations.models';

export const NGX_NAVIGATOR_GEOLOCATION_FEATURE_KEY = 'navigatorGeolocations';

export interface NavigatorGeolocationsState extends EntityState<NavigatorGeolocationsEntity> {
  selectedId?: string; // which NavigatorGeolocations record has been selected
  loaded: boolean; // has the NavigatorGeolocations list been loaded
  error?: Error; // last known error (if any)
}

export interface NavigatorGeolocationsPartialState {
  readonly [NGX_NAVIGATOR_GEOLOCATION_FEATURE_KEY]: NavigatorGeolocationsState;
}

export const navigatorGeolocationsAdapter: EntityAdapter<NavigatorGeolocationsEntity> = createEntityAdapter<
  NavigatorGeolocationsEntity
>();

export const initialNavigatorGeolocationsState: NavigatorGeolocationsState = navigatorGeolocationsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const navigatorGeolocationsReducer = createReducer(
  initialNavigatorGeolocationsState,
  on(NavigatorGeolocationsActions.loadNavigatorGeolocations, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(NavigatorGeolocationsActions.loadNavigatorGeolocationsSuccess, (state, { navigatorGeolocations }) => {
    return navigatorGeolocationsAdapter.setAll(navigatorGeolocations, { ...state, loaded: true });
  }),
  on(NavigatorGeolocationsActions.loadNavigatorGeolocationsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(NavigatorGeolocationsActions.selectNavigatorGeolocation, (state, {id}) => ({
    ...state,
    selectedId: state.entities[id] !== undefined ? id : undefined
  })),
  on(NavigatorGeolocationsActions.addNavigatorGeolocation, (state, { navigatorGeolocation }) => {
    return navigatorGeolocationsAdapter.addOne(navigatorGeolocation, state);
  }),
  on(NavigatorGeolocationsActions.setNavigatorGeolocation, (state, { navigatorGeolocation }) => {
    return navigatorGeolocationsAdapter.setOne(navigatorGeolocation, state);
  }),
  on(NavigatorGeolocationsActions.upsertNavigatorGeolocation, (state, { navigatorGeolocation }) => {
    return navigatorGeolocationsAdapter.upsertOne(navigatorGeolocation, state);
  }),
  on(NavigatorGeolocationsActions.addNavigatorGeolocations, (state, { navigatorGeolocations }) => {
    return navigatorGeolocationsAdapter.addMany(navigatorGeolocations, state);
  }),
  on(NavigatorGeolocationsActions.upsertNavigatorGeolocations, (state, { navigatorGeolocations }) => {
    return navigatorGeolocationsAdapter.upsertMany(navigatorGeolocations, state);
  }),
  on(NavigatorGeolocationsActions.updateNavigatorGeolocation, (state, { update }) => {
    return navigatorGeolocationsAdapter.updateOne(update, state);
  }),
  on(NavigatorGeolocationsActions.updateNavigatorGeolocations, (state, { updates }) => {
    return navigatorGeolocationsAdapter.updateMany(updates, state);
  }),
  on(NavigatorGeolocationsActions.mapNavigatorGeolocations, (state, { entityMap }) => {
    return navigatorGeolocationsAdapter.map(entityMap, state);
  }),
  on(NavigatorGeolocationsActions.deleteNavigatorGeolocation, (state, { id }) => {
    return navigatorGeolocationsAdapter.removeOne(id, state);
  }),
  on(NavigatorGeolocationsActions.deleteNavigatorGeolocations, (state, { ids }) => {
    return navigatorGeolocationsAdapter.removeMany(ids, state);
  }),
  on(NavigatorGeolocationsActions.deleteNavigatorGeolocationsByPredicate, (state, { predicate }) => {
    return navigatorGeolocationsAdapter.removeMany(predicate, state);
  }),
  on(NavigatorGeolocationsActions.clearNavigatorGeolocations, state => {
    return navigatorGeolocationsAdapter.removeAll({ ...state, selectedId: null });
  })
);

export function NGX_NAVIGATOR_GEOLOCATION_REDUCER(
  state: NavigatorGeolocationsState | undefined, action: Action
): NavigatorGeolocationsState {
  return navigatorGeolocationsReducer(state, action);
}
