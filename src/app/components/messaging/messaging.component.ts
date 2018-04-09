import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  public emailSending = false;
  public textSending = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  studentSelected() {
    if (localStorage.getItem('currentStudent') === null ) {
      return false;
    }
    return true;
  }

  sendEmail() {
    this.emailSending = true;
    const obj = JSON.parse(localStorage.getItem('currentStudent'));
    console.log(obj);
    this.dataService.sendEmail('ESNS Test', obj.Email, 'This is only a test.', obj.firstName + ' ' + obj.lastName).subscribe(data => {
      if ((data as any).success) {
        this.emailSending = false;
      } else {
        window.alert((data as any).message);
        this.emailSending = false;
      }
    });
  }

  sendText() {
    this.textSending = true;
    const obj = JSON.parse(localStorage.getItem('currentStudent'));
    console.log(obj);
    this.dataService.sendText(obj.phoneNumber, 'Testing 123').subscribe(data => {
      if ((data as any).httpStatusCode !== '401') {
      } else {
        window.alert((data as any).message);
      }
      this.textSending = false;
    });
  }
}
