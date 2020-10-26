import { NgModule } from '@angular/core';
import { NgxNavigatorGeolocationComponent } from './ngx-navigator-geolocation.component';
import { NavigatorGeolocationDirective } from './store/navigator-geolocations.directive';



@NgModule({
  declarations: [NavigatorGeolocationDirective, NgxNavigatorGeolocationComponent],
  imports: [
  ],
  exports: [NgxNavigatorGeolocationComponent]
})
export class NgxNavigatorGeolocationModule { }
