import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bigbox',
  templateUrl: './bigbox.component.html',
  styleUrls: ['./bigbox.component.css']
})
export class BigboxComponent implements OnInit {

  constructor() { }
  @Input() title = '';
  @Input() color = '';

  ngOnInit() {
  }


}
