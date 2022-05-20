import { DataAction, Payload, StateRepository } from '@ngxs-labs/data/decorators';
import { Select, State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { Immutable } from "@ngxs-labs/data/typings";
import { ProjectsPageModel } from './projects.model';

@StateRepository()
@State<ProjectsPageModel>({
  name: 'projects',
  defaults: new ProjectsPageModel()
})
@Injectable({
  providedIn: 'root'
})
export class ProjectsPageState extends NgxsImmutableDataRepository<ProjectsPageModel> {
//   @Select("landing.landingData") selectLanding;
  constructor() {
    super();
  }

  @DataAction()
  public setProjectsData(@Payload('projectsData') str): void {
    this.ctx.setState(
      (state: Immutable<ProjectsPageModel>): Immutable<ProjectsPageModel> => ({
        ...state,
        projectsDetail: str
      }));
  }
}
