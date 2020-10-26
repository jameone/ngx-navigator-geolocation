import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map } from 'rxjs/operators';

import * as NavigatorGeolocationsActions from './navigator-geolocations.actions';
import { NavigatorGeolocationsEntity } from './navigator-geolocations.models';
import { of } from 'rxjs';

@Injectable()
export class NavigatorGeolocationsEffects {
  loadNavigatorGeolocations$ = createEffect(() =>
      this.actions$.pipe(
        ofType(NavigatorGeolocationsActions.loadNavigatorGeolocations),
        map(() => {
          // Your custom service 'load' logic goes here.
          const navigatorGeolocations = this.loadNavigatorGeolocations();
          return NavigatorGeolocationsActions.loadNavigatorGeolocationsSuccess({navigatorGeolocations});
        }),
        catchError((error) => {
          console.error('Error', error);
          return of(NavigatorGeolocationsActions.loadNavigatorGeolocationsFailure({error}));
        })
      ),
    {dispatch: true, resubscribeOnError: false}
  );

  constructor(private actions$: Actions) {
  }

  loadNavigatorGeolocations(): NavigatorGeolocationsEntity[] {
    return [];
  }
}
