/**
 * Interface for a single media query.
 */
export interface GeolocationCoordinates {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
}

// This interface is essentially a non-readonly
// version of es5 TS `Position`, except for all values
// may be null.
export interface NavigatorGeolocation {
  coords: GeolocationCoordinates;
  timestamp: number;
}


export const nullPosition = {
  coords: {
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null
  },
  timestamp: null
};

/**
 * Interface for the 'NavigatorGeolocations' data
 */
export interface NavigatorGeolocationsEntity {
  id: string; // Primary ID
  position: NavigatorGeolocation;
}
