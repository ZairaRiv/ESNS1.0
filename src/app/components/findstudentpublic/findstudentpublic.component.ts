import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-findstudentpublic',
  templateUrl: './findstudentpublic.component.html',
  styleUrls: ['./findstudentpublic.component.css']
})
export class FindstudentpublicComponent implements OnInit {
  Name: string;
  Key: string;
  phone: string;
  safety: safetyInterface = {
    safe: 'unknown'
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
  }

  showSubmit() {
    this.dataService.getSafetyReport(this.phone).subscribe(data => {
      if ((data as safetyInterface)) {
        console.log(data);
        this.safety = data[0];
      }});
  }
}

interface safetyInterface {
  safe: string;
}
