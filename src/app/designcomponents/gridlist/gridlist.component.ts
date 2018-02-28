import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.css']
})
export class GridlistComponent implements OnInit {

  constructor() { }
  @Input() listItems: any[] = [];
  ngOnInit() {
  }


}
