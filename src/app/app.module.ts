import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partial-component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './partial-component/footer/footer.component';
import { EventsComponent } from './component/events/events.component';
import { OurDjsComponent } from './partial-component/our-djs/our-djs.component';
import { DjsComponent } from './component/djs/djs.component';
import { SocialMediaComponent } from './partial-component/social-media/social-media.component';
import { ShowsComponent } from './component/shows/shows.component';
import { BannerComponent } from './partial-component/banner/banner.component';
import { ListenerTestimonialComponent } from './partial-component/home/listener-testimonial/listener-testimonial.component';
import { HomeOurDjsComponent } from './partial-component/home/home-our-djs/home-our-djs.component';
import { HomeNewsEventsComponent } from './partial-component/home/home-news-events/home-news-events.component';
import { HomeFeaturePodcastComponent } from './partial-component/home/home-feature-podcast/home-feature-podcast.component';
import { HomeUpdcomingShowsComponent } from './partial-component/home/home-updcoming-shows/home-updcoming-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    EventsComponent,
    OurDjsComponent,
    DjsComponent,
    SocialMediaComponent,
    ShowsComponent,
    BannerComponent,
    ListenerTestimonialComponent,
    HomeOurDjsComponent,
    HomeNewsEventsComponent,
    HomeFeaturePodcastComponent,
    HomeUpdcomingShowsComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
