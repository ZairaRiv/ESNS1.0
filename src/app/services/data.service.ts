import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data Service Connected.');
    console.log('Data Service intializing test data.');
    
   }

   getPosts(){
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
     .map(res=>res.json());
   }

   getMenu(){
    var menu: MenuItems[] = [
      {link: '/', title:"Home"},
      {link: "/about/", title: "About"}, 
      {link: "/contact/", title: "Contact"}, 
      {link: "/admin/", title: "Admin"}
    ]
    return menu;
   }

   getReportTypes() {
     var reportTypes: MenuItems[] = [
       {link: '/shooting/', title: "Shooting"}, 
       {link: '/rape/', title: "Rape"}, 
       {link: '/stalking/', title: "Stalking"}, 
       {link: '/gta/', title: 'Grand Theft Auto'}, 
       {link: '/injury/', title: 'Injury'}, 
       {link: '/flood/', title: 'Flood'}
     ]
     return reportTypes;
   }
}

interface MenuItems {
  link:string,
  title:string,
}

