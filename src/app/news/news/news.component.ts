import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import { stringify } from 'querystring';
import {ConsoleHelper} from 'src/app/shared/shared.helpers';
import {NewsService} from '../news.service';
import {NewsDetailState} from '../news-detail.state';


@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
  images = [0, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public newsContent: any;


  constructor(
    private newsService: NewsService,
    private router: Router,
    private newsDetailState: NewsDetailState
  ) {
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.newsContent().subscribe(x => {
      ConsoleHelper.log("Data News Content: ", x.title);
      this.newsContent = x;
    });
  }

  seeDetail(titleValue: string, contentValue: string) {
    ConsoleHelper.log("Isi Params Title: ", titleValue)
    ConsoleHelper.log("Isi Params Content: ", contentValue)
    this.newsDetailState.setJudulData(titleValue)
    this.newsDetailState.setNewsDetailData(contentValue)

    this.router.navigate(['/company-profile/news/news-detail']).then(r => {
      ConsoleHelper.log("Responds Console: ", r)
    }, e => {
      ConsoleHelper.log("Trouble: ", e)
    });
  }

}
