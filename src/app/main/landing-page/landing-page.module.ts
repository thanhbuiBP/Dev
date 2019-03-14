import { NgModule } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LandingPageRoutingModule } from '../landing-page/landing-page-routing.module';
import { RoomsModule } from '../landing-page/rooms/rooms.module'


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
      LandingPageRoutingModule,
      RoomsModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class LandingPageModule { }
