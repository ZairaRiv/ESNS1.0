import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { take, count } from 'rxjs/operators';
import { range } from 'rxjs/observable/range';

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

  public obj = {
    totalStudents: 0
  };

  public totalStudents = 0;
  public totalSchools: number;
  public massShootings: number;
  public massDeaths: number;
  public injuries: number;
  public threatsPerDay: number; // goo.gl/JPRLz1


  public timeToCount = 1000; // ms

  ngOnInit() {
    this.getUserCount();
    this.getSchoolCount();
    this.getMassShootings();
    this.getMassDeaths();
    this.getInjuries();
    this.getThreatsPerDay();
  }

  getUserCount() {
    this.dataService.getUserCount().subscribe(data => {
      if ((data as any)) {

        const tick = this.timeToCount / data[0].total;
        let total: number;
        total = data[0].total as number;
        total++;

        const source = range(1, total);
        const interval = timer(0, tick);
        const countDown = interval.pipe(take(total));
        const subscribe = countDown.subscribe(val => this.totalStudents = val);
      }
    });
  }

  getSchoolCount() {
    this.dataService.getSchoolCount().subscribe(data => {
      if ((data as any)) {
        const tick = this.timeToCount / data[0].total;
        let total: number;
        total = data[0].total as number;
        total++;

        const source = range(1, total);
        const interval = timer(0, tick);
        const countDown = interval.pipe(take(total));
        const subscribe = countDown.subscribe(val => this.totalSchools = val);
      }
    });
  }

  getMassShootings() {
    const tick = this.timeToCount / 4;
    let total: number;
    total = 4 as number;
    total++;

    const source = range(1, total);
    const interval = timer(0, tick);
    const countDown = interval.pipe(take(total));
    const subscribe = countDown.subscribe(val => this.massShootings = val);
  }

  getMassDeaths() {
    const tick = this.timeToCount / 25;
    let total: number;
    total = 25 as number;
    total++;

    const source = range(1, total);
    const interval = timer(0, tick);
    const countDown = interval.pipe(take(total));
    const subscribe = countDown.subscribe(val => this.massDeaths = val);
  }

  getInjuries() {
    const tick = this.timeToCount / 34;
    let total: number;
    total = 34 as number;
    total++;

    const source = range(1, total);
    const interval = timer(0, tick);
    const countDown = interval.pipe(take(total));
    const subscribe = countDown.subscribe(val => this.injuries = val);
  }

  getThreatsPerDay() {
    const tick = this.timeToCount / 70;
    let total: number;
    total = 70 as number;
    total++;

    const source = range(1, total);
    const interval = timer(0, tick);
    const countDown = interval.pipe(take(total));
    const subscribe = countDown.subscribe(val => this.threatsPerDay = val);
  }
}
