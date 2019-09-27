import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurDjsComponent } from './home-our-djs.component';

describe('HomeOurDjsComponent', () => {
  let component: HomeOurDjsComponent;
  let fixture: ComponentFixture<HomeOurDjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOurDjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOurDjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
