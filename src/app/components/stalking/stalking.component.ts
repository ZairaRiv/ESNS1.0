import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stalking',
  templateUrl: './stalking.component.html',
  styleUrls: ['./stalking.component.css']
})
export class StalkingComponent implements OnInit {

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

}
