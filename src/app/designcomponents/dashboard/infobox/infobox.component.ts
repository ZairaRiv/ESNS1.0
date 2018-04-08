import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public totalStudents: number;

  ngOnInit() {
    this.getUserCount();
  }

  getUserCount() {
    this.dataService.getUserCount().subscribe(data => {
      console.log(data);
      if ((data as any)) {
        console.log(data);
        this.totalStudents = data[0].total;
      }
    });
  }

}
