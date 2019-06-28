import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDjsComponent } from './our-djs.component';

describe('OurDjsComponent', () => {
  let component: OurDjsComponent;
  let fixture: ComponentFixture<OurDjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurDjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
