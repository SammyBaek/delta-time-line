import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-ground-to-airport',
  templateUrl: './ground-to-airport.component.html',
  styleUrls: ['./ground-to-airport.component.css']
})
export class GroundToAirportComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.showMap);
  }
  showMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const uluru = {lat: latitude, lng: longitude};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

}
