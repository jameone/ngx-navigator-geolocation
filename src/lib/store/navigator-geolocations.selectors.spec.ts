import { NavigatorGeolocationsEntity, nullPosition } from './navigator-geolocations.models';
import {
  navigatorGeolocationsAdapter,
  initialNavigatorGeolocationsState,
} from './navigator-geolocations.reducer';
import * as NavigatorGeolocationsSelectors from './navigator-geolocations.selectors';

describe('NavigatorGeolocations Selectors', () => {
  const ERROR_MSG = new Error('No Error Available');
  const getNavigatorGeolocationsId = (it) => it.id;
  const createNavigatorGeolocationsEntity = (id: string, position = nullPosition) =>
    ({
      id,
      position,
    } as NavigatorGeolocationsEntity);

  let state;

  beforeEach(() => {
    state = {
      navigatorGeolocations: navigatorGeolocationsAdapter.setAll(
        [
          createNavigatorGeolocationsEntity('Test-0'),
          createNavigatorGeolocationsEntity('Test-1'),
          createNavigatorGeolocationsEntity('Test-2'),
        ],
        {
          ...initialNavigatorGeolocationsState,
          selectedId: 'Test-1',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('NavigatorGeolocations Selectors', () => {
    it('getAllNavigatorGeolocations() should return the list of NavigatorGeolocations', () => {
      const results = NavigatorGeolocationsSelectors.getAllNavigatorGeolocations(state);
      const selId = getNavigatorGeolocationsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('Test-1');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = NavigatorGeolocationsSelectors.getSelectedNavigatorGeolocation(state);
      const selId = getNavigatorGeolocationsId(result);

      expect(selId).toBe('Test-1');
    });

    it(
      'getNavigatorGeolocationsLoaded() should return the current \'loaded\' status', () => {
        const result = NavigatorGeolocationsSelectors.getNavigatorGeolocationsLoaded(state);

        expect(result).toBe(true);
      });

    it('getNavigatorGeolocationsError() should return the current \'error\' state', () => {
      const result = NavigatorGeolocationsSelectors.getNavigatorGeolocationsError(state);

      expect(result).toBe(ERROR_MSG);
    });

    it('getNavigatorGeolocationIds() should have length 3', () => {
      const result = NavigatorGeolocationsSelectors.getNavigatorGeolocationIds(state);

      expect(result.length).toBe(3);
    });
  });
});
