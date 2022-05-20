import {NgModule} from '@angular/core';
import {NgxsModule} from "@ngxs/store";
import {LandingPageComponent} from "./landing-page.component";
import {DetailComponent} from "./detail/detail.component";
import {LandingPageState} from "./landing-page.state";
import {LandingPageRoutingModule} from "./landing-page-routing.module";


@NgModule({
  declarations: [
    LandingPageComponent,
    DetailComponent
  ],

  imports: [
    LandingPageRoutingModule,
    NgxsModule.forFeature([LandingPageState]),
  ],

  providers: [

  ],
})

export class LandingPageModule {

}
