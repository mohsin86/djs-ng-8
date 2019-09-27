import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerTestimonialComponent } from './listener-testimonial.component';

describe('ListenerTestimonialComponent', () => {
  let component: ListenerTestimonialComponent;
  let fixture: ComponentFixture<ListenerTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
