import {Airport} from './Airport';
import {Time} from './Time';

export class Flight{
  constructor(public airportDepart: Airport, public airportArrive: Airport, public departureTime: Time, public arrivalTime: Time) {}
}
