import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import {EventsComponent} from './component/events/events.component';
import {DjsComponent} from './component/djs/djs.component';
import {AboutComponent} from './component/about/about.component';
import {ShowsComponent} from './component/shows/shows.component';
import {ContactComponent} from './component/contact/contact.component';



const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'events', component: EventsComponent },
  {path:'dj', component: DjsComponent },
  {path:'about', component: AboutComponent },
  {path:'shows', component: ShowsComponent },
  {path:'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
