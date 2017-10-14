export class User {
  name: 'Bob';
  airportDepart: {};
  passportType: 'US';
  flight: [{
    gateNumber: '100',
    departingTime: '9:00',
    arrivingLocation: 'NYC'
  }];
  travelerLevel: 2;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}
