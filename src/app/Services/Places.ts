export class Places {
  constructor( public name: String, public lat: number, public lon: number, public type: Type, public gate: String) {}
}
export enum Type  {
  Food,
  Lounge,
  Store
}
