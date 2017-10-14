import {Places} from './Places';
import {ParkingLocation} from './ParkingLocation';

export class Airport {
  constructor(public name: String, public abbrev: String, public parkings: ParkingLocation[], public places: Places[]) {}
}
