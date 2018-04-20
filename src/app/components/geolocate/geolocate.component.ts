import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geolocate',
  templateUrl: './geolocate.component.html',
  styleUrls: ['./geolocate.component.css']
})
export class GeolocateComponent implements OnInit {
  location = {};
  constructor(private router: Router) { }

  ngOnInit() {
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords);
        console.log(position.coords.latitude + ',' + position.coords.longitude);
        localStorage.setItem('location', JSON.stringify(this.location));
        this.router.navigate(['/reportType']);
      },
    error => {
    },
  {
    enableHighAccuracy: false,
  });
  }
    }


}
