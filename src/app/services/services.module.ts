import { NgModule } from '@angular/core';
import { NgxsModule } from "@ngxs/store";
import { CommonModule } from '@angular/common';
import { ServicesComponent } from "./services.component";
import { ServicesRoutingModule } from "./services-routing.module";
import { ServicesService } from "../services/services.service";
import { MadComponent } from './detail/mad/mad.component';
import { InfoSysComponent } from './detail/info-sys/info-sys.component';
import { EnteSolComponent } from './detail/ente-sol/ente-sol.component';
import { EcoWebComponent } from './detail/eco-web/eco-web.component';
import { ServicesPageState } from './services.state'
import { ServiceDetailComponent } from './detail/service-detail/service-detail.component'

@NgModule({
  declarations: [
    ServicesComponent,
    MadComponent,
    InfoSysComponent,
    EnteSolComponent,
    EcoWebComponent,
    ServiceDetailComponent
  ],

  imports: [
    ServicesRoutingModule,
    CommonModule,
    NgxsModule.forFeature([ServicesPageState])
  ],

  providers: [
    ServicesService
  ],

})

export class ServicesModule { }
