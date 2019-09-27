import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpdcomingShowsComponent } from './home-updcoming-shows.component';

describe('HomeUpdcomingShowsComponent', () => {
  let component: HomeUpdcomingShowsComponent;
  let fixture: ComponentFixture<HomeUpdcomingShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUpdcomingShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUpdcomingShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
