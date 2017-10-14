import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundToAirportComponent } from './ground-to-airport.component';

describe('GroundToAirportComponent', () => {
  let component: GroundToAirportComponent;
  let fixture: ComponentFixture<GroundToAirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundToAirportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundToAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
