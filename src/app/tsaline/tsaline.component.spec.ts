import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsalineComponent } from './tsaline.component';

describe('TsalineComponent', () => {
  let component: TsalineComponent;
  let fixture: ComponentFixture<TsalineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsalineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsalineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
