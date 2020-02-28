import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 1.6,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    autoplay:true,
  };
  
  constructor() {}

}
