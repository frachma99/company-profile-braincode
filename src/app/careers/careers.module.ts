import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CareersComponent } from './careers.component';
import {CareersRoutingModule} from './careers-routing.module';


@NgModule({
  declarations: [
    CareersComponent
  ],

  imports: [
    CareersRoutingModule,

    NgxsModule.forFeature([])
  ],

  providers: [

  ],

})

export class CareersModule { }
