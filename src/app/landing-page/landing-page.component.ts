import { Component, OnInit } from '@angular/core';
import {ConsoleHelper} from "../shared/shared.helpers";
import {LandingPageState} from "./landing-page.state";
import {Router} from "@angular/router";

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private landingState: LandingPageState
  ) { }

  ngOnInit(): void {

  }

  seeDetail() {
    this.landingState.setLandingData({
      content: "Aku anak Gembala!",
      age: 21
    })

    this.router.navigate(['/company-profile/landing-page/landing-detail']).then(r => {
      ConsoleHelper.log("Responds Console: ", r)
    }, e => {
      ConsoleHelper.log("Trouble: ", e)
    });
  }

}
