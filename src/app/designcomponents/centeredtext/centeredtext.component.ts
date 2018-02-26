import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-centeredtext',
  templateUrl: './centeredtext.component.html',
  styleUrls: ['./centeredtext.component.css']
})
export class CenteredtextComponent implements OnInit {

  constructor() { }

  @Input() text: string;
  @Input() title: string;
  ngOnInit() {
  }

}
