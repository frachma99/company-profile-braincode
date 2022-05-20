import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'company-profile/landing-page',
    pathMatch: 'full'
  },
  {
    path: 'gitlab/login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'company-profile/landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule),
  },
  // |=======>>> Company Profile Module:
  {
    path: 'company-profile/about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'company-profile/careers',
    loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule),
  },
  {
    path: 'company-profile/client',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
  },
  {
    path: 'company-profile/contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'company-profile/news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
  },
  {
    path: 'company-profile/projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
  },
  {
    path: 'company-profile/services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
