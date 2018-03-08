import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gta',
  templateUrl: './rape.component.html',
  styleUrls: ['./rape.component.css']
})
export class RapeComponent implements OnInit {

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
