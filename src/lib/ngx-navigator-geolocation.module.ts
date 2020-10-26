import { NgModule } from '@angular/core';
import { NgxNavigatorGeolocationComponent } from './ngx-navigator-geolocation.component';
import { NavigatorGeolocationDirective } from './store/navigator-geolocations.directive';
import { StoreModule } from '@ngrx/store';
import { NGX_NAVIGATOR_GEOLOCATION_FEATURE_KEY, NGX_NAVIGATOR_GEOLOCATION_REDUCER } from './store/navigator-geolocations.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NavigatorGeolocationsEffects } from './store/navigator-geolocations.effects';



@NgModule({
  declarations: [
    NavigatorGeolocationDirective,
    NgxNavigatorGeolocationComponent
  ],
  imports: [
    StoreModule.forFeature(NGX_NAVIGATOR_GEOLOCATION_FEATURE_KEY, NGX_NAVIGATOR_GEOLOCATION_REDUCER),
    EffectsModule.forFeature([NavigatorGeolocationsEffects])
  ],
  exports: [NgxNavigatorGeolocationComponent]
})
export class NgxNavigatorGeolocationModule { }
