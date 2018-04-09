import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  private schools: any;
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  private currentSchool: any;
  public schoolSelected: boolean; // display school or search

  constructor(private dataService: DataService, private router: Router) {
    this.getCurrentSchool();
    this.getSchools();
   }

  ngOnInit() {
  }

  getCurrentSchool() {
    this.currentSchool = {
      'schoolName': 'No School Selected'
    };

    if (localStorage.getItem('currentSchool') !== null)  {
      this.currentSchool = JSON.parse(localStorage.getItem('currentSchool'));
      this.schoolSelected = true;
    } else {
      this.schoolSelected = false;
    }
    console.log(this.currentSchool);
  }

  getSchools() {
    this.dataService.getSchools().subscribe(data => {
      if ((data as any)) {
        this.schools = data;
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(val => this.filterSchools(val))
        );
      }
    });
  }

  showSchoolSearch() {
    this.schoolSelected = false;
    this.currentSchool = {};
  }

  filterSchools(val: string): string[] {
    return this.schools.filter(
      option => this.matches(option, val));
  }

  matches(option: any, val: string) {
    let booly: boolean;
    // if val is suddenly not a string, that means a selection was made
    // this is some weird bullshit by typescript
    if (typeof val !== 'string') {
      this.currentSchool = val;
      localStorage.setItem('currentSchool', JSON.stringify(val));
      this.schoolSelected = true;
      this.myControl.reset();
      return;
    }
    booly = option.schoolName.toLowerCase().includes(val.toLowerCase());
    return booly;
  }

  displayFn(school): string {
    return school ? school.schoolName : school;
  }
}
