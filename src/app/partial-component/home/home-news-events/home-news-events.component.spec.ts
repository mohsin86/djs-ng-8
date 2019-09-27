import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsEventsComponent } from './home-news-events.component';

describe('HomeNewsEventsComponent', () => {
  let component: HomeNewsEventsComponent;
  let fixture: ComponentFixture<HomeNewsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
