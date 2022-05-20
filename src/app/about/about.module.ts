import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AboutComponent
  ],

  imports: [
    AboutRoutingModule,
    MatCardModule,
    NgbModule,
    NgxsModule.forFeature([])
  ],

  providers: [

  ],

})

export class AboutModule { }
