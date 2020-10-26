import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { hot } from 'jasmine-marbles';
import { provideMockActions } from '@ngrx/effects/testing';

import { NavigatorGeolocationsEffects } from './navigator-geolocations.effects';
import * as NavigatorGeolocationsActions from './navigator-geolocations.actions';

describe('NavigatorGeolocationsEffects', () => {
  let actions$: Observable<any>;
  let effects: NavigatorGeolocationsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        NavigatorGeolocationsEffects,
        provideMockActions(() => actions$)
      ],
    });

    effects = TestBed.inject(NavigatorGeolocationsEffects);
  });

  describe('loadNavigatorGeolocations$', () => {
    it('should work', () => {
      actions$ = hot('-a-|', {a: NavigatorGeolocationsActions.loadNavigatorGeolocations()});

      const expected = hot('-a-|', {
        a: NavigatorGeolocationsActions.loadNavigatorGeolocationsSuccess({navigatorGeolocations: []}),
      });

      expect(effects.loadNavigatorGeolocations$).toBeObservable(expected);
    });

    it('should throw error', () => {

      const loadError = new Error('error loading media queries');

      spyOn(effects, 'loadNavigatorGeolocations').and.throwError(loadError);

      actions$ = hot('-|', {a: NavigatorGeolocationsActions.loadNavigatorGeolocations()});

      const expected = hot('-|', {
        a: NavigatorGeolocationsActions.loadNavigatorGeolocationsFailure({error: loadError}),
      });

      expect(effects.loadNavigatorGeolocations$).toBeObservable(expected);
    });
  });
});
