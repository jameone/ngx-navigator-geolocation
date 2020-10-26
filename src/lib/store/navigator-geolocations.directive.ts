import { Directive, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNavigatorGeolocation } from './navigator-geolocations.actions';

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
    this.store.dispatch(addNavigatorGeolocation({
      navigatorGeolocation: {
        id: position.timestamp.toString(),
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
  }

  get navigatorGeolocation(): Geolocation {
    return navigator.geolocation;
  }

}
