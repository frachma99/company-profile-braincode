import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const newsRoutes: Routes = [
  {
    path: '',
    component: NewsComponent,
    pathMatch: 'full',
    children: [

    ]
  },
  {
    path: 'news-detail',
    component: NewsDetailComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(newsRoutes)],
  exports: [RouterModule]
})

export class NewsRoutingModule {

}
