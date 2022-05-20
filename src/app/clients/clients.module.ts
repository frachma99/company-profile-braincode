import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ClientsComponent } from './clients.component';
import {ClientsRoutingModule} from './clients-routing.module';


@NgModule({
  declarations: [
    ClientsComponent
  ],

  imports: [
    ClientsRoutingModule,

    NgxsModule.forFeature([])
  ],

  providers: [

  ],

})

export class ClientsModule { }
