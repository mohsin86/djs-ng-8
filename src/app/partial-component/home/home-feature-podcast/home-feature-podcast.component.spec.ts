import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturePodcastComponent } from './home-feature-podcast.component';

describe('HomeFeaturePodcastComponent', () => {
  let component: HomeFeaturePodcastComponent;
  let fixture: ComponentFixture<HomeFeaturePodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFeaturePodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeaturePodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
