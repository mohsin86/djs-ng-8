import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute }      from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  path:string = '';
  bannerTittle:string = '';
  bannerSubTittle:string = '';

  constructor(public route : ActivatedRoute) { 
    
  }

  

  ngOnInit() {
    var snapshot = this.route.snapshot;
    this.path = snapshot.routeConfig.path;
    console.log(snapshot.routeConfig.path); //This will give you the name of current active pathe

    if(this.path=='shows'){
      this.bannerTittle = 'Shows';
      this.bannerSubTittle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    }else if(this.path=='events'){
      this.bannerTittle = 'News & Events';
      this.bannerSubTittle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    }else if(this.path=='contact'){
      this.bannerTittle = 'Contact Us';
      this.bannerSubTittle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    }else if(this.path=='about'){
      this.bannerTittle = 'About Us';
      this.bannerSubTittle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    }else if(this.path=='dj'){
      this.bannerTittle = 'Our DJ';
      this.bannerSubTittle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    }else{
      // Home Page
      this.bannerTittle = 'Turn On The Feeling With Music';
      this.bannerSubTittle = '';
    }
  

  }
}
