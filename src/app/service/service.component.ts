import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {
  items: any = [];
  constructor() { }

  ngOnInit() {
    this.items = [{
      "name": "Astrology",
      "img": "../../assets/images/Astrology.jpg"
    },
    {
      "name": "Tarot Reading",
      "img": "../../assets/images/tarot-reading-secrets.jpg"
    }, {
      "name": "Numerology",
      "img": "../../assets/images/offer-1.jpg"
    }, {
      "name": "Vastu Healing with Crystals",
      "img": "../../assets/images/offer-3.jpg"
    }, {
      "name": "Astrology",
      "img": "../../assets/images/Astrology.jpg"
    }]
  }

}
