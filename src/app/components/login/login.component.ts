import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }


  loginUser(event) {
    event.preventDefault();
    console.log(event);
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.dataService.getUser(username, password).subscribe(data => {
      if ((data as any).success) {
        console.log(data);
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.router.navigate(['admin']);
      } else {
        window.alert((data as any).message);
      }
    });
  }

}
