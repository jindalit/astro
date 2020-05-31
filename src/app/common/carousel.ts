import { Component, Input, ViewChild } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
@Component({
    selector: 'carousel',
    template: `
       
    <div *ngIf="carouselType == 'home'">
        <ngx-carousel [inputs]="carouselTile">
            <ngx-tile NgxCarouselItem *ngFor="let Tile of carouselTileItems">
                <div class="bg-img" title="{{Tile.title}}" [ngStyle]="{'background-image': 'url(' + Tile.src + ')'}"></div>                
                <h4>{{Tile.title}}</h4>
            </ngx-tile>
            <a NgxCarouselPrev href="javascript:void(0)" class='leftRs'><svg aria-hidden="true" data-prefix="fal" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-chevron-circle-left fa-w-16 fa-3x"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm-86.6-224.5l115.1-115c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L209 256l99.5 99.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0l-115.1-115c-4.6-4.8-4.6-12.4.1-17.1z" class=""></path></svg></a>
            <a NgxCarouselNext href="javascript:void(0)" class='rightRs'><svg aria-hidden="true" data-prefix="fal" data-icon="chevron-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-chevron-circle-right fa-w-16 fa-3x"><path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm86.6 224.5l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L303 256l-99.5-99.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.1 115c4.6 4.8 4.6 12.4-.1 17.1z" class=""></path></svg></a>
        </ngx-carousel>
    </div>
  `,
})
export class CarouselComponent {
    public carouselTileItems: Array<any>;
    public carouselTile: NgxCarousel;
    //private carouselType: any;
    @Input('carouselItems') carouselItems: any;
    @Input('loop') loop: any;
    @Input('grid') grid: any = {};
    @Input('points') points: boolean;
    @Input('interval') interval: number;
    @Input('carouselType') carouselType: any;
    constructor() { }
    ngOnInit() {

        this.carouselTile = {
            grid: this.grid,
            speed: 400,
            animation: 'lazy',
            interval: this.interval,
            loop: this.loop,
            point: {
                visible: this.points
            },
            load: 2,
            touch: true,
            easing: 'ease'
        }
        this.carouselTileItems = this.carouselItems;
    }

    ngAfterViewInit() {

        //  this.carouselTileItems = this.carouselItems;
    }
}