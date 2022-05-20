import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Router } from '@angular/router';
import { ServicesPageState } from './services.state';
import { ConsoleHelper } from '../shared/shared.helpers';


@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit, AfterViewInit {

  public getServicesName: any;
  public arr: any

  constructor(
    private servicesService: ServicesService,
    private router: Router,
    private serviceState: ServicesPageState
  ) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.getServices();
  }

  getServices() {
    this.servicesService.serviceGet().subscribe(x => {
      console.log("Ini Data :", x)
      // this.getServicesName = x
      this.arr = x;
    });
  }

  getServicesDetail(detail: any) {
    console.log("Detail", detail)
    this.serviceState.setServicesData(detail)
    this.router.navigate(['company-profile/services/detail/service-detail']).then(r => {
      ConsoleHelper.log("Responds Console: ", r)
    }, e => {
      ConsoleHelper.log("Trouble: ", e)
    });
  }

}
