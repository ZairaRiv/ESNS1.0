import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
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
      {link: '/school', title: 'School'},
      {link: '/findstudent', title: 'Find Student'},
      {link: '/messaging', title: 'Messaging'},
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

  getUserCount() {
    return this.httpc.get(this.dataUrl + '/services/getstudentcount_api.php');
  }

  getSchoolCount() {
    return this.httpc.get(this.dataUrl + '/services/getschoolcount_api.php');
  }

  getSchools() {
    return this.httpc.get(this.dataUrl + '/services/getschools_api.php');
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

