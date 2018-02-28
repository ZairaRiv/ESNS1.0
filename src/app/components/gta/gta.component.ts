import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gta',
  templateUrl: './gta.component.html',
  styleUrls: ['./gta.component.css']
})
export class GtaComponent implements OnInit {

  constructor() { }
  private step:number = 0;
  ngOnInit() {
  }

  Increment() {
    this.step++;
  }

  CurrentStep(){
    return this.step;
  }

}
