import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { RouterModule } from '@angular/router';
import { GroundToAirportComponent } from './ground-to-airport/ground-to-airport.component';
import { ParkingInfoComponent} from './parking-info/parking-info.component';
import { CheckInComponent} from './check-in/check-in.component';
import { TsalineComponent } from './tsaline/tsaline.component';
import { FreeTimeComponent } from './free-time/free-time.component';
import { OnPlaneComponent } from './on-plane/on-plane.component';
import { BaggageClaimComponent } from './baggage-claim/baggage-claim.component';
import { AirportToGroundComponent } from './airport-to-ground/airport-to-ground.component';
import { BoardingComponent } from './boarding/boarding.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GroundToAirportComponent,
    TsalineComponent,
    FreeTimeComponent,
    OnPlaneComponent,
    BaggageClaimComponent,
    AirportToGroundComponent,
    BoardingComponent,
    ParkingInfoComponent,
    CheckInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'signIn',
        component: SignInComponent
      },
      {
        path: 'groundToAirport',
        component: GroundToAirportComponent
      },
      {
        path: 'parking',
        component: ParkingInfoComponent
      },
      {
        path: 'checkIn',
        component: CheckInComponent
      },
      {
        path: 'boarding',
        component: BoardingComponent
      },
      {
        path: 'onPlane',
        component: OnPlaneComponent
      },
      {
        path: 'baggageClaim',
        component: BaggageClaimComponent
      },
      {
        path: 'airportToGround',
        component: AirportToGroundComponent
      },
      {
        path: '',
        redirectTo: '/signIn',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
