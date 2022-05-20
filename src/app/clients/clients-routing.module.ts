import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from "./clients.component";

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    pathMatch: 'full',
    children: [

    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientsRoutingModule {

}
