import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPlaneComponent } from './on-plane.component';

describe('OnPlaneComponent', () => {
  let component: OnPlaneComponent;
  let fixture: ComponentFixture<OnPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
