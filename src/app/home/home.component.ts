import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public offerIteams: any = [{
    "title": "Daily Horoscope",
    "src": "../../assets/images/offer-2.jpg"
  }, {
    "title": "Numerology",
    "src": "../../assets/images/offer-1.jpg"
  }, {
    "title": "Healing with Crystals",
    "src": "../../assets/images/offer-3.jpg"
  }, {
    "title": "Numerology",
    "src": "../../assets/images/offer-1.jpg"
  }, {
    "title": "Healing with Crystals",
    "src": "../../assets/images/offer-3.jpg"
  }];
  constructor() { }

  ngOnInit() {
  }

}
