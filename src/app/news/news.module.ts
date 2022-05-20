import { NgModule } from '@angular/core';
import { NgxsModule } from "@ngxs/store";
import { TruncatePipe } from './news.pipe';

import { NewsComponent } from "./news/news.component";

import { NewsRoutingModule } from "./news-routing.module";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsDetailState } from './news-detail.state';
import { NewsService } from './news.service';


@NgModule({
  declarations: [
    TruncatePipe,
    NewsComponent,
    NewsDetailComponent
  ],

  imports: [
    NgxsModule.forFeature([NewsDetailState]),
    NewsRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],

  providers: [
    NewsService
  ],

})

export class NewsModule { }
