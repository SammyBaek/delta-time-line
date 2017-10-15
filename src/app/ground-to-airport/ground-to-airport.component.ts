import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {HttpClient} from "@angular/common/http";
declare var google: any;

@Component({
  selector: 'app-ground-to-airport',
  templateUrl: './ground-to-airport.component.html',
  styleUrls: ['./ground-to-airport.component.css']
})
export class GroundToAirportComponent implements OnInit {
  constructor(private appService: UserService,) { }
  results: string[];
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.showMap);
  }
  showMap(position) {
    const directionsService = new google.maps.DirectionsService();

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // const uluru = {lat: latitude, lng: longitude};
    // const end = {lat: 33.640411, lng: -84.419853};
    const start = new google.maps.LatLng(latitude, longitude);
    const end = new google.maps.LatLng(33.640411, -84.419853);
    const directionsDisplay = new google.maps.DirectionsRenderer();
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: start
    });
    directionsDisplay.setMap(map);
    const request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(result);
      }
    });
    // this.http.get('/api/items').subscribe(data => {
    //   // Read the result field from the JSON response.
    //   this.results = data['results'];
    // });
  }

}
