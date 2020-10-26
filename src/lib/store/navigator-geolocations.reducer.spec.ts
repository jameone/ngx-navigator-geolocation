import { NavigatorGeolocationsEntity, nullPosition } from './navigator-geolocations.models';
import * as NavigatorGeolocationActions from './navigator-geolocations.actions';
import {
  NavigatorGeolocationsState,
  initialNavigatorGeolocationsState,
  NGX_NAVIGATOR_GEOLOCATION_REDUCER,
} from './navigator-geolocations.reducer';
import { Action } from '@ngrx/store';

describe('NavigatorGeolocation Reducer', () => {
  // load initial queries
  let action: Action;
  let result: NavigatorGeolocationsState;

  const createNavigatorGeolocationsEntity = (id: string, position = nullPosition) =>
    ({
      id,
      position,
    } as NavigatorGeolocationsEntity);

  beforeEach(() => {
    const navigatorGeolocations = [
      createNavigatorGeolocationsEntity('Test-0'),
      createNavigatorGeolocationsEntity('Test-1')
    ];
    // load initial queries
    action = NavigatorGeolocationActions.loadNavigatorGeolocationsSuccess({
      navigatorGeolocations,
    });
    result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(initialNavigatorGeolocationsState, action);
  });

  describe('valid NavigatorGeolocation actions', () => {
    it('loadNavigatorGeolocationSuccess should return set the list of known NavigatorGeolocation', () => {
      const navigatorGeolocations = [
        createNavigatorGeolocationsEntity('PRODUCT-AAA'),
        createNavigatorGeolocationsEntity('PRODUCT-zzz'),
      ];
      action = NavigatorGeolocationActions.loadNavigatorGeolocationsSuccess(
        { navigatorGeolocations }
      );

      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(initialNavigatorGeolocationsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      action = {} as any;

      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(initialNavigatorGeolocationsState, action);

      expect(result).toBe(initialNavigatorGeolocationsState);
    });
  });

  describe('error loading media queries', () => {
    it('should return stat with error', () => {
      const loadError = new Error('error loading media queries');
      action = NavigatorGeolocationActions.loadNavigatorGeolocationsFailure({
        error: loadError,
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(initialNavigatorGeolocationsState, action);

      expect(result.error).toBe(loadError);
    });
  });

  describe('selectNavigatorGeolocation()', () => {
    it('should select ids ', () => {
      action = NavigatorGeolocationActions.selectNavigatorGeolocation({ id: 'Test-0' });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);

      expect(result.selectedId).toBe('Test-0');
    });

    it('should have undefined selected id', () => {
      action = NavigatorGeolocationActions.selectNavigatorGeolocation({ id: 'Test-100' });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);

      expect(result.selectedId).toBeUndefined();
    });
  });

  describe('addNavigatorGeolocation()', () => {
    it('should add media query', () => {
      action = NavigatorGeolocationActions.addNavigatorGeolocation({
        navigatorGeolocation: {
          id: 'Test-2',
          position: nullPosition
        }
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
    });
  });

  describe('setNavigatorGeolocation()', () => {
    it('should set a single media query', () => {
      action = NavigatorGeolocationActions.setNavigatorGeolocation({
        navigatorGeolocation: {
          id: 'Test-2',
          position: nullPosition
        }
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
      expect(result.entities['Test-2'].position).toBe(nullPosition);
    });
  });

  describe('upsertNavigatorGeolocation()', () => {
    it('should update a media query if it exists', () => {
      action = NavigatorGeolocationActions.upsertNavigatorGeolocation({
        navigatorGeolocation: {
          id: 'Test-1',
          position: nullPosition
        }
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-1'].position).toBe(nullPosition);
    });

    it('should add media query if it does not exist', () => {
      action = NavigatorGeolocationActions.upsertNavigatorGeolocation({
        navigatorGeolocation: {
          id: 'Test-4',
          position: nullPosition
        }
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
      expect(result.entities['Test-4'].position).toBe(nullPosition);
    });
  });

  describe('addNavigatorGeolocations()', () => {
    it('should add many media queries', () => {
      action = NavigatorGeolocationActions.addNavigatorGeolocations({
        navigatorGeolocations: [
          {
            id: 'Test-99',
            position: nullPosition
          },
          {
            id: 'Test-100',
            position: nullPosition
          }
        ]
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(4);
      expect(result.entities['Test-99'].position).toBe(nullPosition);
      expect(result.entities['Test-100'].position).toBe(nullPosition);
    });
  });

  describe('upsertNavigatorGeolocations()', () => {
    it('should upsert many media queries', () => {
      action = NavigatorGeolocationActions.upsertNavigatorGeolocations({
        navigatorGeolocations: [
          {
            id: 'Test-0',
            position: nullPosition
          },
          {
            id: 'Test-100',
            position: nullPosition
          }
        ]
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(3);
      expect(result.entities['Test-0'].position).toBe(nullPosition);
      expect(result.entities['Test-100'].position).toBe(nullPosition);
    });
  });

  describe('updateNavigatorGeolocation()', () => {
    it('should update a single media query if it exists', () => {
      action = NavigatorGeolocationActions.updateNavigatorGeolocation({
        update: {
          id: 'Test-0',
          changes: {
            position: nullPosition
          }
        },
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-0'].position).toBe(nullPosition);
    });

    it('should not update a single media if it does not exist', () => {
      action = NavigatorGeolocationActions.updateNavigatorGeolocation({
        update: {
          id: 'Test-100',
          changes: {
            position: nullPosition
          }
        },
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities[100]).toBeUndefined();
    });
  });

  describe('updateNavigatorGeolocations()', () => {
    it('should update many media queries', () => {
      action = NavigatorGeolocationActions.updateNavigatorGeolocations({
        updates: [
          {
            id: 'Test-0',
            changes: {
              position: nullPosition
            }
          },
          {
            id: 'Test-100',
            changes: {
              position: nullPosition
            }
          },
        ]
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-0'].position).toBe(nullPosition);
      expect(result.entities[100]).toBeUndefined();
    });
  });

  describe('mapNavigatorGeolocations()', () => {
    it('should map many media queries', () => {
      action = NavigatorGeolocationActions.mapNavigatorGeolocations({
        entityMap: (entity) => ({ ...entity, id: 'Test-' + entity.id.toString() })
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1']).toBeUndefined();
      expect(result.entities['Test-Test-0'].position).toBe(nullPosition);
      expect(result.entities['Test-Test-1'].position).toBe(nullPosition);
    });
  });

  describe('deleteNavigatorGeolocation()', () => {
    it('should delete a media single media query', () => {
      action = NavigatorGeolocationActions.deleteNavigatorGeolocation({
        id: 'Test-0',
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(1);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1'].position).toBe(nullPosition);
    });

    it('should retain state if id does not exist', () => {
      const initialResult = result;
      action = NavigatorGeolocationActions.deleteNavigatorGeolocation({
        id: 'Test-100',
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(2);
      expect(result).toBe(initialResult);
    });
  });

  describe('deleteNavigatorGeolocations()', () => {
    it('should delete many media queries', () => {
      action = NavigatorGeolocationActions.deleteNavigatorGeolocations({
        ids: ['Test-0', 'Test-100'],
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(1);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1'].position).toBe(nullPosition);
    });
  });

  describe('deleteNavigatorGeolocationsByPredicate()', () => {
    it('should delete many media queries by given predicate', () => {
      action = NavigatorGeolocationActions.deleteNavigatorGeolocationsByPredicate({
        predicate: entity => entity.id === 'Test-0',
      });
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(1);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1'].position).toBe(nullPosition);
    });
  });

  describe('clearNavigatorGeolocations()', () => {
    it('should clear many media queries', () => {
      action = NavigatorGeolocationActions.clearNavigatorGeolocations();
      result = NGX_NAVIGATOR_GEOLOCATION_REDUCER(result, action);
      expect(result.ids.length).toBe(0);
      expect(result.entities['Test-0']).toBeUndefined();
      expect(result.entities['Test-1']).toBeUndefined();
    });
  });
});
