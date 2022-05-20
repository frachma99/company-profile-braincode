import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page.component";
import {DetailComponent} from "./detail/detail.component";

const newsRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
    children: [

    ]
  },
  {
    path: 'landing-detail',
    component: DetailComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(newsRoutes)],
  exports: [RouterModule]
})

export class LandingPageRoutingModule {

}
