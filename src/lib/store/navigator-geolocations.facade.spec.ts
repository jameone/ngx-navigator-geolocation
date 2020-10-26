import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';


// import { NavigatorGeolocationsEntity, nullNavigatorGeolocation } from './navigator-geolocations.models';
import { NavigatorGeolocationsEffects } from './navigator-geolocations.effects';
import { NavigatorGeolocationsFacade } from './navigator-geolocations.facade';

// import * as NavigatorGeolocationsActions from './navigator-geolocations.actions';
import {
  NGX_NAVIGATOR_GEOLOCATION_FEATURE_KEY,
  NavigatorGeolocationsState,
  NGX_NAVIGATOR_GEOLOCATION_REDUCER,
} from './navigator-geolocations.reducer';

interface TestSchema {
  navigatorGeolocations: NavigatorGeolocationsState;
}

describe('NavigatorGeolocationsFacade', () => {
  let facade: NavigatorGeolocationsFacade;
  let store: Store<TestSchema>;
  // const createNavigatorGeolocationsEntity = (id: string, query = nullNavigatorGeolocation) =>
  //   ({
  //     id,
  //     query,
  //   } as NavigatorGeolocationsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(NGX_NAVIGATOR_GEOLOCATION_FEATURE_KEY, NGX_NAVIGATOR_GEOLOCATION_REDUCER),
          EffectsModule.forFeature([NavigatorGeolocationsEffects]),
        ],
        providers: [NavigatorGeolocationsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(NavigatorGeolocationsFacade);
    });

    // /**
    //  * The initially generated facade::loadAll() returns empty array
    //  */
    // it('loadAll() should return a list with a single element and with with loaded == true', async (done) => {
    //   try {
    //     let list = await readFirst(facade.allNavigatorGeolocations$);
    //     let isLoaded = await readFirst(facade.loaded$);
    //
    //     expect(list.length).toBe(0);
    //     expect(isLoaded).toBe(false);
    //
    //     facade.dispatch(NavigatorGeolocationsActions.loadNavigatorGeolocations());
    //
    //     list = await readFirst(facade.allNavigatorGeolocations$);
    //     isLoaded = await readFirst(facade.loaded$);
    //
    //     expect(list.length).toBe(0);
    //     expect(isLoaded).toBe(true);
    //
    //     done();
    //   } catch (err) {
    //     done.fail(err);
    //   }
    // });
    //
    // /**
    //  * Use `loadNavigatorGeolocationsSuccess` to manually update list
    //  */
    // it('allNavigatorGeolocations$ should return the loaded list; and loaded flag == true', async (done) => {
    //   try {
    //     let list = await readFirst(facade.allNavigatorGeolocations$);
    //     let isLoaded = await readFirst(facade.loaded$);
    //
    //     expect(list.length).toBe(0);
    //     expect(isLoaded).toBe(false);
    //
    //     facade.dispatch(
    //       NavigatorGeolocationsActions.loadNavigatorGeolocationsSuccess({
    //         navigatorGeolocations: [
    //           createNavigatorGeolocationsEntity('Test-0'),
    //           createNavigatorGeolocationsEntity('Test-1'),
    //         ],
    //       })
    //     );
    //
    //     list = await readFirst(facade.allNavigatorGeolocations$);
    //     isLoaded = await readFirst(facade.loaded$);
    //
    //     expect(list.length).toBe(2);
    //     expect(isLoaded).toBe(true);
    //
    //     done();
    //   } catch (err) {
    //     done.fail(err);
    //   }
    // });
  });
});
