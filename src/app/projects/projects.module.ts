import {NgModule} from '@angular/core';
import {NgxsModule} from "@ngxs/store";
import {ProjectsComponent} from "../projects/projects.component";
import {ProjectsRoutingModule} from "./projects-routing.module";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from "@angular/common";
import {ProjectsService} from "./projects.service";
import {ProjectsDetailComponent} from "./details/projects-detail/projects-detail.component";
import {ProjectsPageState} from "./projects.state";

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsDetailComponent,
  ],

  imports: [
    ProjectsRoutingModule,
    MatCardModule,
    MatButtonModule,
    NgxsModule.forFeature([ProjectsPageState]),
    CommonModule
  ],

  providers: [
    ProjectsService
  ],

})

export class ProjectsModule {
}
