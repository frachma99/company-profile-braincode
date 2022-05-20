import { DataAction, Payload, StateRepository } from '@ngxs-labs/data/decorators';
import { Select, State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { Immutable } from "@ngxs-labs/data/typings";
import { NewsDetailModel } from "./news-detail.model";

@StateRepository()
@State<NewsDetailModel>({
  name: 'news',
  defaults: new NewsDetailModel()
})
@Injectable({
  providedIn: 'root'
})
export class NewsDetailState extends NgxsImmutableDataRepository<NewsDetailModel> {
  @Select("news.newsDetailData") selectNews;
  constructor() {
    super();
  }

  @DataAction()
  public setNewsDetailData(@Payload('newsDetailData') str): void {
    this.ctx.setState(
      (state: Immutable<NewsDetailModel>): Immutable<NewsDetailModel> => ({
        ...state,
        newsDetailData: str
      }));
  }

  @DataAction()
  public setJudulData(@Payload('judulData') str): void {
    this.ctx.setState(
      (state: Immutable<NewsDetailModel>): Immutable<NewsDetailModel> => ({
        ...state,
        judulData: str
      }));
  }
}
