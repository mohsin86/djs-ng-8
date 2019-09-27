import { Component, OnInit } from '@angular/core';
import {TestimonialModel} from './testimonial.model';

@Component({
  selector: 'app-listener-testimonial',
  templateUrl: './listener-testimonial.component.html',
  styleUrls: ['./listener-testimonial.component.css']
})
export class ListenerTestimonialComponent implements OnInit {
  testimonials: TestimonialModel[] = [
    new TestimonialModel('assets/images/person_1.jpg', 'Megan Smith', '&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;'),
    new TestimonialModel('assets/images/person_2.jpg', 'Brooke Cagle', '&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;'),
    new TestimonialModel('assets/images/person_3.jpg', 'Philip Martin', '&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;'),
    new TestimonialModel('assets/images/person_2.jpg', 'Nathan Dumlao', '&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;'),
   new TestimonialModel('assets/images/person_1.jpg', 'Megan Smith', '&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;')
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.testimonials);
  }


}
