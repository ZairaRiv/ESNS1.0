import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findstudent',
  templateUrl: './findstudent.component.html',
  styleUrls: ['./findstudent.component.css']
})
export class FindstudentComponent implements OnInit {

  private students: any;
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  private currentStudent: any;
  private currentSchool: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getCurrentSchool();
    this.getStudents();
  }

  getCurrentSchool() {
    this.currentSchool = {
      'schoolName': 'No School Selected'
    };
    if (localStorage.getItem('currentSchool') !== null)  {
      this.currentSchool = JSON.parse(localStorage.getItem('currentSchool'));
    }
    console.log(this.currentSchool);
  }

  getStudents() {
    this.dataService.getStudents(this.currentSchool.schoolID).subscribe(data => {
      if ((data as any)) {
        console.log(data);
        this.students = data;
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(val => this.filterStudents(val))
        );
      }
    });
  }

  filterStudents(val: string): string[] {
    return this.students.filter(
      option => this.matches(option, val));
  }

  matches(option: any, val: string) {
    let booly: boolean;
    // if val is suddenly not a string, that means a selection was made
    // this is some weird bullshit by typescript
    if (typeof val !== 'string') {
      this.currentStudent = val;
      localStorage.setItem('currentStudent', JSON.stringify(val));
      console.log(this.currentStudent.lastName);
      this.myControl.reset();
      return;
    }
    booly = option.firstName.toLowerCase().includes(val.toLowerCase());
    return booly;
  }

  displayFn(student): string {
    return student ? student.firstName + ' ' + student.lastName : student;
  }
}
