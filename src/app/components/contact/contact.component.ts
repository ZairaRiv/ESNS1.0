import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  issues = [
    {value: 'admin-issue', viewValue: 'Administrator Issue'},
    {value: 'comment-issue', viewValue: 'Comments'},
    {value: 'suggestion-issue', viewValue: 'Suggestion'}
  ];

  constructor() { }
  ngOnInit() {
  }
}
