import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooting',
  templateUrl: './shooting.component.html',
  styleUrls: ['./shooting.component.css']
})
export class ShootingComponent implements OnInit {

  constructor() { }
  private currentStep = 1;
  private previousStep = 0;

  ngOnInit() {
  }

  gotoStep(nextstep) {
    this.previousStep = this.currentStep;
    this.currentStep = nextstep;
  }

  getStep()  {
    return this.currentStep;
  }

  zairasRedirect(url) {
    window.location.replace(url);
    }
}

