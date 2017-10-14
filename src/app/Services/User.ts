import {Flight} from './Flight';

export class User {
  travelerLevel: 2;

  constructor(public name: String, public passportType: PassportType, public level: TravelerLevel, public flights: Flight[]) {}
}
export enum PassportType {
  US,
  International
}
export enum TravelerLevel{
  Premium,
  Business,
  Economy
}
