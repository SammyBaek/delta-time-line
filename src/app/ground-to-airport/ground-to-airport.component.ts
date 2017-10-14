import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
declare var google: any;

@Component({
  selector: 'app-ground-to-airport',
  templateUrl: './ground-to-airport.component.html',
  styleUrls: ['./ground-to-airport.component.css']
})
export class GroundToAirportComponent implements OnInit {
  constructor(private appService: AppService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.showMap);
    document.write(this.appService.getUser().getName());
  }
  showMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const uluru = {lat: latitude, lng: longitude};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

}
