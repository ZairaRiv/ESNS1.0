import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() cardTitle1:string;
  @Input() cardText1: string;
  @Input() cardImage1: string;
  @Input() cardTitle2:string;
  @Input() cardText2: string;
  @Input() cardImage2: string;

  ngOnInit() {
  }

}
