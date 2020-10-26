import { createAction, props } from '@ngrx/store';
import { NavigatorGeolocationsEntity } from './navigator-geolocations.models';
import { EntityMap, Predicate, Update } from '@ngrx/entity';

export enum NavigatorGeolocationsActionsEnum {
  LoadNavigatorGeolocations = '[NgxNavigatorGeolocation/API] Load Media Queries',
  LoadNavigatorGeolocationsSuccess = '[NgxNavigatorGeolocation/API] Load NavigatorGeolocations Success',
  LoadNavigatorGeolocationsFailure = '[NgxNavigatorGeolocation/API] Load NavigatorGeolocations Failure',
  AddNavigatorGeolocation = '[NgxNavigatorGeolocation/API] Add Media Query',
  SetNavigatorGeolocation = '[NgxNavigatorGeolocation/API] Set Media Query',
  UpsertNavigatorGeolocation = '[NgxNavigatorGeolocation/API] Upsert Media Query',
  AddNavigatorGeolocations = '[NgxNavigatorGeolocation/API] Add Media Queries',
  UpsertNavigatorGeolocations = '[NgxNavigatorGeolocation/API] Upsert Media Queries',
  UpdateNavigatorGeolocation = '[NgxNavigatorGeolocation/API] Update Media Query',
  UpdateNavigatorGeolocations = '[NgxNavigatorGeolocation/API] Update Media Queries',
  MapNavigatorGeolocations = '[NgxNavigatorGeolocation/API] Map Media Queries',
  DeleteNavigatorGeolocation = '[NgxNavigatorGeolocation/API] Delete Media Query',
  DeleteNavigatorGeolocations = '[NgxNavigatorGeolocation/API] Delete Media Queries',
  DeleteNavigatorGeolocationsByPredicate = '[NgxNavigatorGeolocation/API] Delete Media Queries By Predicate',
  ClearNavigatorGeolocations = '[NgxNavigatorGeolocation/API] Clear Media Queries',
  SelectNavigatorGeolocation = '[NgxNavigatorGeolocation/API] Select Media Query by ID'
}

export const loadNavigatorGeolocations = createAction(NavigatorGeolocationsActionsEnum.LoadNavigatorGeolocations);
export const loadNavigatorGeolocationsSuccess = createAction(
  NavigatorGeolocationsActionsEnum.LoadNavigatorGeolocationsSuccess, props<{ navigatorGeolocations: NavigatorGeolocationsEntity[] }>());
export const selectNavigatorGeolocation = createAction(
  NavigatorGeolocationsActionsEnum.SelectNavigatorGeolocation, props<{ id: string }>());
export const loadNavigatorGeolocationsFailure = createAction(
  NavigatorGeolocationsActionsEnum.LoadNavigatorGeolocationsFailure, props<{ error: Error }>());
export const addNavigatorGeolocation = createAction(
  NavigatorGeolocationsActionsEnum.AddNavigatorGeolocation, props<{ navigatorGeolocation: NavigatorGeolocationsEntity }>());
export const setNavigatorGeolocation = createAction(
  NavigatorGeolocationsActionsEnum.SetNavigatorGeolocation, props<{ navigatorGeolocation: NavigatorGeolocationsEntity }>());
export const upsertNavigatorGeolocation = createAction(
  NavigatorGeolocationsActionsEnum.UpsertNavigatorGeolocation, props<{ navigatorGeolocation: NavigatorGeolocationsEntity }>());
export const addNavigatorGeolocations = createAction(
  NavigatorGeolocationsActionsEnum.AddNavigatorGeolocations, props<{ navigatorGeolocations: NavigatorGeolocationsEntity[] }>());
export const upsertNavigatorGeolocations = createAction(
  NavigatorGeolocationsActionsEnum.UpsertNavigatorGeolocations, props<{ navigatorGeolocations: NavigatorGeolocationsEntity[] }>());
export const updateNavigatorGeolocation = createAction(
  NavigatorGeolocationsActionsEnum.UpdateNavigatorGeolocation, props<{ update: Update<NavigatorGeolocationsEntity> }>());
export const updateNavigatorGeolocations = createAction(
  NavigatorGeolocationsActionsEnum.UpdateNavigatorGeolocations, props<{ updates: Update<NavigatorGeolocationsEntity>[] }>());
export const mapNavigatorGeolocations = createAction(
  NavigatorGeolocationsActionsEnum.MapNavigatorGeolocations, props<{ entityMap: EntityMap<NavigatorGeolocationsEntity> }>());
export const deleteNavigatorGeolocation = createAction(
  NavigatorGeolocationsActionsEnum.DeleteNavigatorGeolocation, props<{ id: string }>());
export const deleteNavigatorGeolocations = createAction(
  NavigatorGeolocationsActionsEnum.DeleteNavigatorGeolocations, props<{ ids: string[] }>());
export const deleteNavigatorGeolocationsByPredicate = createAction(
  NavigatorGeolocationsActionsEnum.DeleteNavigatorGeolocationsByPredicate, props<{ predicate: Predicate<NavigatorGeolocationsEntity> }>());
export const clearNavigatorGeolocations = createAction(NavigatorGeolocationsActionsEnum.ClearNavigatorGeolocations);
