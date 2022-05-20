import { Component, OnInit } from '@angular/core';
import { ConsoleHelper } from 'src/app/shared/shared.helpers';
import { NewsDetailState } from '../news-detail.state';
import { formatDate } from "@angular/common";
// import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  images = [0].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public content: string;
  public title: string;

  public timestamp = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss a', 'en-US');

  constructor(
    private newsDetailState: NewsDetailState,
    // private NewsService: NewsService
  ) { }

  ngOnInit(): void {
    // this.getTitle();

    this.newsDetailState.state$.subscribe(x =>{

      this.title = x.judulData;
      this.content = x.newsDetailData;
      ConsoleHelper.log("State Subscribe Title: ", this.title)
      ConsoleHelper.log("State Subscribe Content: ", this.content)

    })

    this.newsDetailState.selectNews.subscribe(x => {
      ConsoleHelper.log("State Single Subscribe: ", x)
    })

    console.log("Ini Isi Json Snapshot", this.newsDetailState.snapshot)
    ConsoleHelper.log("State All Snapshot: ", this.newsDetailState.snapshot)
  }

  // getTitle() {
  //   this.NewsService.newsContent().subscribe( x => {
  //     console.log("INI JUDUL", x.title)
  //     this.title = x.title;
  //   })
  // }

}
