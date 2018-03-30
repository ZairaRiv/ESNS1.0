import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username);
    console.log(password);

    this.dataService.getUser(username, password).subscribe(data => {
      if (data.success) {
        // go to admin page
      } else {
        window.alert(data.message);
      }
    });
  }

}
