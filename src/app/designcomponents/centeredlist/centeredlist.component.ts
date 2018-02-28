import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-centeredlist',
  templateUrl: './centeredlist.component.html',
  styleUrls: ['./centeredlist.component.css']
})
export class CenteredlistComponent implements OnInit {

  constructor() { }
  @Input() listItems: any[] = [];
  ngOnInit() {
  }

}
