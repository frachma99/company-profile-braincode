import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProjectsPageState } from '../../projects.state';
import {ConsoleHelper} from "../../../shared/shared.helpers";

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit, AfterViewInit {
  title
  background
  objective
  objective2
  codeName

  constructor(
    private projectState: ProjectsPageState) { }

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.loadProjectsDetails();
  }

  loadProjectsDetails() {
    this.projectState.state$.subscribe(x => {
      ConsoleHelper.log("Ini Isi", x)
      this.codeName = x.projectsDetail.codeName
      this.title = x.projectsDetail.title
      this.background = x.projectsDetail.background
      this.objective = x.projectsDetail.objective
      this.objective2 = x.projectsDetail.objective2
    })
  }

}
