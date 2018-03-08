import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flood',
  templateUrl: './flood.component.html',
  styleUrls: ['./flood.component.css']
})
export class FloodComponent implements OnInit {

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
