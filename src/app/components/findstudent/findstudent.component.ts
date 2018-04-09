import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Component({
  selector: 'app-findstudent',
  templateUrl: './findstudent.component.html',
  styleUrls: ['./findstudent.component.css']
})
export class FindstudentComponent implements OnInit {

  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  public studentSelected: boolean;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getCurrentSchool();
    this.getStudents();

    if (localStorage.getItem('currentStudent') !== null)  {
      this.studentSelected = true;
    } else {
      this.studentSelected = false;
    }
    console.log(this.studentSelected);
  }

  public getStudentName() {
    const name = JSON.parse(localStorage.getItem('currentStudent'));
    return name.firstName + ' ' + name.lastName;
  }

  getStudents() {
    this.dataService.getStudents().subscribe(data => {
      if ((data as any)) {
        console.log(data);
        this.dataService.students = data;
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(val => this.filterStudents(val))
        );
      }
    });
  }

  filterStudents(val: string): string[] {
    return this.dataService.students.filter(
      option => this.matches(option, val));
  }

  matches(option: any, val: string) {
    let booly: boolean;
    // if val is suddenly not a string, that means a selection was made
    // this is some weird bullshit by typescript
    if (typeof val !== 'string') {
      localStorage.setItem('currentStudent', JSON.stringify(val));
      this.myControl.reset();
      this.studentSelected = true;
      return;
    }
    booly = option.firstName.toLowerCase().includes(val.toLowerCase());
    return booly;
  }

  displayFn(student): string {
    return student ? student.firstName + ' ' + student.lastName : student;
  }

  showStudentSearch() {
    this.studentSelected = false;
  }
}
