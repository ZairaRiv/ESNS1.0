import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-optionsbuttons',
  templateUrl: './optionsbuttons.component.html',
  styleUrls: ['./optionsbuttons.component.css']
})
export class OptionsbuttonsComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  ngOnInit() {
  }

}
