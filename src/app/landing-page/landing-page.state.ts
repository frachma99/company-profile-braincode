import { DataAction, Payload, StateRepository } from '@ngxs-labs/data/decorators';
import { Select, State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { Immutable } from "@ngxs-labs/data/typings";
import { LandingPageModel } from "./landing-page.model";

@StateRepository()
@State<LandingPageModel>({
  name: 'landing',
  defaults: new LandingPageModel()
})
@Injectable({
  providedIn: 'root'
})
export class LandingPageState extends NgxsImmutableDataRepository<LandingPageModel> {
  @Select("landing.landingData") selectLanding;
  constructor() {
    super();
  }

  @DataAction()
  public setLandingData(@Payload('landingData') str): void {
    this.ctx.setState(
      (state: Immutable<LandingPageModel>): Immutable<LandingPageModel> => ({
        ...state,
        landingData: str
      }));
  }
}
