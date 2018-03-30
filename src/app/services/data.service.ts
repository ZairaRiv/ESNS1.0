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
   loggedInStatus = false;

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
      {link: '/contact', title: 'Contact'},
      {link: '/login', title: 'Login'}
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
     return this.httpc.post(this.dataUrl + '/login_api.php', {
       username,
       password
    });
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
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

