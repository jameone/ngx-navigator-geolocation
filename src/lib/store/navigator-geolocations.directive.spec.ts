import { NavigatorGeolocationDirective } from './navigator-geolocations.directive';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { async, TestBed } from '@angular/core/testing';
import { initialNavigatorGeolocationsState } from './navigator-geolocations.reducer';
import { NavigatorGeolocationsActionsEnum } from './navigator-geolocations.actions';

describe('NavigatorGeolocationDirective', () => {
  const initialState = initialNavigatorGeolocationsState;
  let mockStore: MockStore;
  let directive: NavigatorGeolocationDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({initialState})],
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    directive = new NavigatorGeolocationDirective(mockStore);

  }));

  it('should have a navigatorGeolocation', () => {
    expect(directive.navigatorGeolocation).toBeTruthy();
  });

  it('dispatch null position on init', () => {
    Object.defineProperty(directive, 'navigatorGeolocation', {
      writable: true,
      value: {
        clearWatch: () => {
        },
        getCurrentPosition: () => {
        },
        watchPosition: () => {
        }
      },
    });
    spyOn(directive.navigatorGeolocation, 'watchPosition').and.returnValue(
      0
    );
    directive.ngOnInit();
    expect(directive.navigatorGeolocation.watchPosition).toHaveBeenCalledTimes(1);
    mockStore.scannedActions$.subscribe((action) => {
      expect(action.type).toEqual(NavigatorGeolocationsActionsEnum.LoadNavigatorGeolocations);
    });
  });

  it('dispatch null position on via success call back', () => {
    Object.defineProperty(directive, 'navigatorGeolocation', {
      writable: true,
      value: {
        clearWatch: () => {
        },
        getCurrentPosition: () => {
        },
        watchPosition: () => {
        },
      }
    });
    spyOn(directive.navigatorGeolocation, 'watchPosition').and.returnValue(
      0
    );
    directive.ngOnInit();
    expect(directive.navigatorGeolocation.watchPosition).toHaveBeenCalledTimes(1);
    mockStore.scannedActions$.subscribe((action) => {
      expect(action.type).toEqual(NavigatorGeolocationsActionsEnum.LoadNavigatorGeolocations);
    });
  });

});
