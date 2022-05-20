import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from "./projects.component";
import { InternetMonitoringComponent } from './details/internet-monitoring/internet-monitoring.component';
import { CamComponent } from './details/cam/cam.component';
import { GeisaComponent } from './details/geisa/geisa.component';
import { EProcComponent } from './details/e-proc/e-proc.component';
import { MandiriKpiComponent } from './details/mandiri-kpi/mandiri-kpi.component';
import { IpranComponent } from './details/ipran/ipran.component';
import { BigDataComponent } from './details/big-data/big-data.component';
import { EOperationComponent } from './details/e-operation/e-operation.component';
import { EFinanceComponent } from './details/e-finance/e-finance.component';
import { NmsIpBackboneComponent } from './details/nms-ip-backbone/nms-ip-backbone.component';
import { MandiriNbsComponent } from './details/mandiri-nbs/mandiri-nbs.component';
import { NmsAvailabilityComponent } from './details/nms-availability/nms-availability.component';
import { ProjectsDetailComponent } from './details/projects-detail/projects-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    pathMatch: 'full',
    children: [
    ]
  },

  {
    path: 'details/projects-detail',
    component: ProjectsDetailComponent
  },

  {
    path: 'details/internet-monitoring',
    component: InternetMonitoringComponent
  },

  {
    path: 'details/cam',
    component: CamComponent
  },

  {
    path: 'details/geisa',
    component: GeisaComponent
  },

  {
    path: 'details/e-proc',
    component: EProcComponent
  },

  {
    path: 'details/mandiri-kpi',
    component: MandiriKpiComponent
  },

  {
    path: 'details/ipran',
    component: IpranComponent
  },

  {
    path: 'details/big-data',
    component: BigDataComponent
  },

  {
    path: 'details/e-operation',
    component: EOperationComponent
  },

  {
    path: 'details/e-finance',
    component: EFinanceComponent
  },

  {
    path: 'details/nms-ip-backbone',
    component: NmsIpBackboneComponent
  },

  {
    path: 'details/mandiri-nbs',
    component: MandiriNbsComponent
  },

  {
    path: 'details/nms-availability',
    component: NmsAvailabilityComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectsRoutingModule {

}
