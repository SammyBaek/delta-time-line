import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportToGroundComponent } from './airport-to-ground.component';

describe('AirportToGroundComponent', () => {
  let component: AirportToGroundComponent;
  let fixture: ComponentFixture<AirportToGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportToGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportToGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
