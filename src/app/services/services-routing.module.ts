import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from "./services.component";
import { MadComponent } from './detail/mad/mad.component';
import { InfoSysComponent } from './detail/info-sys/info-sys.component';
import { EnteSolComponent } from './detail/ente-sol/ente-sol.component';
import { EcoWebComponent } from './detail/eco-web/eco-web.component';
import { ServiceDetailComponent } from './detail/service-detail/service-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    pathMatch: 'full',
    children: [

    ]
  },

  {
    path: 'detail/service-detail',
    component: ServiceDetailComponent
  },

  {
    path: 'detail/mad',
    component: MadComponent
  },

  {
    path: 'detail/info-sys',
    component: InfoSysComponent
  },

  {
    path: 'detail/ente-sol',
    component: EnteSolComponent
  },

  {
    path: 'detail/eco-web',
    component: EcoWebComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicesRoutingModule {

}
