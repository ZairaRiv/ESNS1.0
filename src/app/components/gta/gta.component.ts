import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gta',
  templateUrl: './gta.component.html',
  styleUrls: ['./gta.component.css']
})
export class GtaComponent implements OnInit {

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
