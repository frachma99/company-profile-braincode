import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { ConsoleHelper } from 'src/app/shared/shared.helpers';
import { Router } from '@angular/router';
import { ProjectsPageState } from './projects.state'

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit, AfterViewInit {

  leftSide = []
  rightSide = []
  public arr: any
  belah2

  constructor(
    private projectService: ProjectsService,
    private router: Router,
    private projectState: ProjectsPageState
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.getProjects();
  }


  getProjects() {
    this.projectService.getProjectsTitle().subscribe(x => {
      ConsoleHelper.log("Data : ", x);
      console.log("Ini Data: ", x)
      // this.belah2 = x.length / 2;
      // var result = this.chunkArray(x, this.belah2);
      // this.leftSide = result[0];
      // this.rightSide = result[1]
      this.arr = x;
    });
  }

  chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    var myChunk;
    for (index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }
    return tempArray;
  }

  getDetail(detail: any) {
    console.log("Detail", detail)
    this.projectState.setProjectsData(detail)
    this.router.navigate(['company-profile/projects/details/projects-detail']).then(r => {
      ConsoleHelper.log("Responds Console: ", r)
    }, e => {
      ConsoleHelper.log("Trouble: ", e)
    });
  }

}
