import { Component, OnInit } from '@angular/core';
import {ConsoleHelper} from "../../shared/shared.helpers";
import {LandingPageState} from "../landing-page.state";

@Component({
  selector: 'detail-page',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private landingState: LandingPageState) { }

  ngOnInit(): void {
    this.landingState.state$.subscribe(x => {
      console.log("Ini Isi", x)
      ConsoleHelper.log("State All Subscribe: ", x)
    })

    this.landingState.selectLanding.subscribe(x => {
      ConsoleHelper.log("State Single Subscribe: ", x)
    })

    console.log("Ini Isi Json Snapshot", this.landingState.snapshot)
    ConsoleHelper.log("State All Snapshot: ", this.landingState.snapshot)
  }

}
