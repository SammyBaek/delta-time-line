import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageClaimComponent } from './baggage-claim.component';

describe('BaggageClaimComponent', () => {
  let component: BaggageClaimComponent;
  let fixture: ComponentFixture<BaggageClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggageClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
