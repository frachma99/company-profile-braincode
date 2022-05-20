import { Component, OnInit } from '@angular/core';
import { ServicesPageState } from '../../services.state';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.sass']
})
export class ServiceDetailComponent implements OnInit {

  title
  subTitle
  content
  content2
  content3
  code

  constructor(
    private serviceState: ServicesPageState
  ) { }

  ngOnInit(): void {
    this.loadServiesDetail();
  }

  loadServiesDetail() {
    this.serviceState.state$.subscribe(x => {
      console.log("Ini Isi", x)
      this.code = x.servicesData.code
      this.title = x.servicesData.title
      this.subTitle = x.servicesData.subTitle
      this.content = x.servicesData.content
      this.content2 = x.servicesData.content2
      this.content3 = x.servicesData.content3
    })
  }

}
