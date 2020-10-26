import { Directive, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNavigatorGeolocation, selectNavigatorGeolocation } from './navigator-geolocations.actions';

@Directive({
  selector: '[libNgxNavigatorGeolocation]'
})
export class NavigatorGeolocationDirective implements OnInit {

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.navigatorGeolocation.watchPosition((position: Position) => {
      this.dispatchPosition(position);
    });
  }

  dispatchPosition(position: Position): void {
    const id = position.timestamp.toString();
    this.store.dispatch(addNavigatorGeolocation({
      navigatorGeolocation: {
        id,
        position: {
          coords: {
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            speed: position.coords.speed
          },
          timestamp: position.timestamp
        }
      }
    }));
    this.store.dispatch(selectNavigatorGeolocation({ id }));
  }

  get navigatorGeolocation(): Geolocation {
    return navigator.geolocation;
  }

}
