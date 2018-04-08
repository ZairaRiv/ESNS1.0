import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public totalStudents: any;
  public totalSchools: number;
  public massShootings: number;
  public massDeaths: number;
  public injuries: number;
  public timeToCount = 10000; // ms

  ngOnInit() {
    this.getUserCount();
    this.getSchoolCount();
  }

  getUserCount() {
    this.dataService.getUserCount().subscribe(data => {
      if ((data as any)) {
        /**
        console.log(this.timeToCount / data[0].total);
        const counter = data[0].total;
        const tick = this.timeToCount / data[0].total;

        this.totalStudents = Observable.timer(0, tick)
        .take(counter)
        .map(() => this.totalStudents++);
        console.log(this.totalStudents);*/
        this.totalStudents = data[0].total;
      }
    });
  }

  getSchoolCount() {
    this.dataService.getSchoolCount().subscribe(data => {
      if ((data as any)) {
        this.totalSchools = data[0].total;
      }
    });
  }

  sleep(i, time) {
    setTimeout( () => {
      i++;
      return i;
    }, time );
  }
}
