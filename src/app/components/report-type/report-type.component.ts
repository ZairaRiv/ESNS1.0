import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-report-type',
  templateUrl: './report-type.component.html',
  styleUrls: ['./report-type.component.css']
})
export class ReportTypeComponent implements OnInit {

  constructor(private dataService:DataService) { }

  public reportTypes = [];

  ngOnInit() {
      this.reportTypes = this.getListItems();
  }

  getListItems() {
    return this.dataService.getReportTypes();
  }
}
