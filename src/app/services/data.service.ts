import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http, private httpc: HttpClient) {
    console.log('Data Service Connected.');
    console.log('Data Service intializing test data.');
   }

   private dataUrl = 'https://fast.esns.life';
   private _data: any;
   private currentUser: any;
   public students: any;

   public store (data: any) {
     this._data = data;
   }

   public restore (): any {
     return this._data;
   }

   getPosts() {
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
     .map(res => res.json());
   }

   getMenu() {
    const menu: MenuItems[] = [
      {link: '', title: 'Home'},
      {link: '/about', title: 'About'},
      {link: '/findstudentpublic', title: 'Find Student'},
      {link: '/contact', title: 'Contact'},
      {link: '/login', title: 'Admin'}
    ];
    return menu;
   }

   getAdminMenu() {
    const menu: MenuItems[] = [
      {link: '/map', title: 'Active Map'},
      {link: '/admin', title: 'Admin'},
      {link: '/logout', title: 'Logout'}
    ];
    return menu;
   }

   getReportTypes() {
     const reportTypes: GridItems[] = [
       {link: '/shooting/', title: 'Shooting', color: '#78C0E0', image: 'https://www.esns.life/images/shooting.png'},
       {link: '/rape/', title: 'Rape', color: '#449DD1', image: 'https://www.esns.life/images/rape.png'},
       {link: '/stalking/', title: 'Stalking', color: '#449DD1', image: 'https://www.esns.life/images/stalking.png'},
       {link: '/gta/', title: 'Grand Theft Auto', color: '#78C0E0', image: 'https://www.esns.life/images/gta.png'},
       {link: '/injury/', title: 'Injury', color: '#78C0E0', image: 'https://www.esns.life/images/injury.png'},
       {link: '/flood/', title: 'Flood', color: '#449DD1', image: 'https://www.esns.life/images/flood.png'}
     ];
     return reportTypes;
   }

   getUser(username, password) {
     return this.httpc.post(this.dataUrl + '/services/login_api.php', {
       username,
       password
    });
  }

  sendEmail(subject, to, message, name) {
    return this.httpc.post(this.dataUrl + '/services/sendemail_api.php', {
      subject, to, message, name
    });
  }

  getUserCount() {
    return this.httpc.get(this.dataUrl + '/services/getstudentcount_api.php');
  }

  getSchoolCount() {
    return this.httpc.get(this.dataUrl + '/services/getschoolcount_api.php');
  }

  sendText(phNum, message) {
    const obj = [ {
      'phoneNumber': phNum,
      'message': message
    }];

    // Authorization: Basic Y2JmODNiZTMxYjRmOjQ4MTBlMGI0YTJiZTFlNGE=
    let headers = new HttpHeaders();
    const usernamepassword = 'cbf83be31b4f:4810e0b4a2be1e4a';
    // btoa turns the usernamepassword into Y2JmO....
    headers = headers.append('Authorization', 'Basic ' + btoa(usernamepassword));
    return this.httpc.post('https://api.callfire.com/v2/texts?', obj, {headers: headers});
  }

  getSchools() {
    return this.httpc.get(this.dataUrl + '/services/getschools_api.php');
  }

  getStudents() {
    const schoolID = this.getCurrentSchool().schoolID;
    return this.httpc.get(this.dataUrl + '/services/getstudents_api.php?schoolID=' + schoolID);
  }

  get isLoggedIn() {
    if (localStorage.getItem('currentUser') === null) {
      return false;
    } else {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (this.currentUser.adminlevel > 0) {
        return true;
      }
    }
    return false;
  }

  setLogOut() {
    localStorage.removeItem('currentUser');
  }

  getCurrentSchool() {
    let currentSchool = {
      'schoolName': 'No School Selected',
      'schoolID': '-1'
    };
    if (localStorage.getItem('currentSchool') !== null)  {
      currentSchool = JSON.parse(localStorage.getItem('currentSchool'));
    }
    return currentSchool;
  }
}




interface MenuItems {
  link: string;
  title: string;
}

interface GridItems {
  link: string;
  title: string;
  color: string;
  image: string;
}

