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
    const school = JSON.parse(localStorage.getItem('currentSchool'));

    console.log(obj);
    let message = 'Your status has been requested.<br><br>';
    message += '<a href="https://fast.esns.life/services/mapgen.html?schoolID=' + school.schoolID;
    message += '&typeID=0&studentID=' + obj.studentID + '">Update Your Status at ESNS</a>';
    message += '<br><br>';
    message += 'Thanks, <br>ESNS';

    this.dataService.sendEmail('ESNS Status Request', obj.Email, message , obj.firstName
    + ' ' + obj.lastName).subscribe(data => {
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
    const school = JSON.parse(localStorage.getItem('currentSchool'));

    console.log(obj);
    let message = 'Your status has been requested.  Please visit: \n\r';
    message += 'https://fast.esns.life/services/mapgen.html?schoolID=' + school.schoolID + '&typeID=0&studentID=' + obj.studentID;

    this.dataService.sendText(obj.phoneNumber, message).subscribe(data => {
      if ((data as any).httpStatusCode !== '401') {
      } else {
        window.alert((data as any).message);
      }
      this.textSending = false;
    });
  }
}
