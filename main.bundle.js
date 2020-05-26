webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n</app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__ = __webpack_require__("./node_modules/ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_carousel__ = __webpack_require__("./src/app/common/carousel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_header_header_component__ = __webpack_require__("./src/app/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_footer_footer_component__ = __webpack_require__("./src/app/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_banner_banner_component__ = __webpack_require__("./src/app/common/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_service_component__ = __webpack_require__("./src/app/service/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__training_program_training_program_component__ = __webpack_require__("./src/app/training-program/training-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__consultation_consultation_component__ = __webpack_require__("./src/app/consultation/consultation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_7__common_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__common_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__common_banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__service_service_component__["a" /* ServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__training_program_training_program_component__["a" /* TrainingProgramComponent */],
                __WEBPACK_IMPORTED_MODULE_13__consultation_consultation_component__["a" /* ConsultationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__common_carousel__["a" /* CarouselComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service_component__ = __webpack_require__("./src/app/service/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_program_training_program_component__ = __webpack_require__("./src/app/training-program/training-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consultation_consultation_component__ = __webpack_require__("./src/app/consultation/consultation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_3__service_service_component__["a" /* ServiceComponent */] },
    { path: 'training', component: __WEBPACK_IMPORTED_MODULE_4__training_program_training_program_component__["a" /* TrainingProgramComponent */] },
    { path: 'consultation', component: __WEBPACK_IMPORTED_MODULE_5__consultation_consultation_component__["a" /* ConsultationComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_6__contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { enableTracing: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__service_service_component__["a" /* ServiceComponent */], __WEBPACK_IMPORTED_MODULE_4__training_program_training_program_component__["a" /* TrainingProgramComponent */], __WEBPACK_IMPORTED_MODULE_5__consultation_consultation_component__["a" /* ConsultationComponent */], __WEBPACK_IMPORTED_MODULE_6__contact_us_contact_us_component__["a" /* ContactUsComponent */]];


/***/ }),

/***/ "./src/app/common/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner row\">\r\n  <div class=\"horoscope bg-dark col-sm-12\">\r\n    <div class=\"your\">YOUR<span>Daily Horoscope</span></div>\r\n    <img src=\"../../../assets/images/btn-consult.png\"/>\r\n  </div>\r\n  <div class=\"clock-img\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banner',
            template: __webpack_require__("./src/app/common/banner/banner.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/common/carousel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.grid = {};
    }
    CarouselComponent.prototype.ngOnInit = function () {
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
        };
        this.carouselTileItems = this.carouselItems;
    };
    CarouselComponent.prototype.ngAfterViewInit = function () {
        //  this.carouselTileItems = this.carouselItems;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('carouselItems'),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "carouselItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('loop'),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "loop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('grid'),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('points'),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "points", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('interval'),
        __metadata("design:type", Number)
    ], CarouselComponent.prototype, "interval", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('carouselType'),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "carouselType", void 0);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'carousel',
            template: "\n       \n    <div *ngIf=\"carouselType == 'home'\">\n        <ngx-carousel [inputs]=\"carouselTile\">\n            <ngx-tile NgxCarouselItem *ngFor=\"let Tile of carouselTileItems\">\n                <div class=\"bg-img\" title=\"{{Tile.title}}\" [ngStyle]=\"{'background-image': 'url(' + Tile.src + ')'}\"></div>                \n                <h4>{{Tile.title}}</h4>\n            </ngx-tile>\n            <a NgxCarouselPrev href=\"javascript:void(0)\" class='leftRs'><svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"chevron-circle-left\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-chevron-circle-left fa-w-16 fa-3x\"><path fill=\"currentColor\" d=\"M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm-86.6-224.5l115.1-115c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L209 256l99.5 99.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0l-115.1-115c-4.6-4.8-4.6-12.4.1-17.1z\" class=\"\"></path></svg></a>\n            <a NgxCarouselNext href=\"javascript:void(0)\" class='rightRs'><svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"chevron-circle-right\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-chevron-circle-right fa-w-16 fa-3x\"><path fill=\"currentColor\" d=\"M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm86.6 224.5l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L303 256l-99.5-99.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.1 115c4.6 4.8 4.6 12.4-.1 17.1z\" class=\"\"></path></svg></a>\n        </ngx-carousel>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"row\">\r\n  <div class=\"bg-dark\">\r\n    <nav class=\"navbar navbar-expand-sm navbar-dark\">\r\n      <div class=\"navbar-collapse col-sm-9\">\r\n        <ul class=\"navbar-nav text-uppercase\">\r\n          <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a class=\"nav-link\" routerLink=\"/services\">Service</a>\r\n          </li>\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a class=\"nav-link\" routerLink=\"/training\">Training Program</a>\r\n          </li>\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a class=\"nav-link\" routerLink=\"/consultation\">Consultation Process</a>\r\n          </li>\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n            <a class=\"nav-link\" routerLink=\"/contact-us\">Contact us</a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <ul class=\"navbar-nav right-item\">\r\n          <li><img src=\"/assets/images/email.png\" /></li>\r\n          <li><img src=\"/assets/images/call.png\" /></li>\r\n          <li><img src=\"/assets/images/location.png\" /></li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n  <div class=\"footer-txt\">CHANDRIKA &copy; 2018 ALL RIGHT RESERVED | <a href=\"#\">PRIVACY POLICY</a></div>\r\n</footer>"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/common/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <div class=\"col-sm-2\">\r\n        <div class=\"logo\">\r\n            <div class=\"logo-img\" title=\"Chandrika Consultants\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row d-flex header bg-dark\">\r\n        <div class=\"col-12\">\r\n            <nav class=\"navbar navbar-expand-sm navbar-dark\">\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n                    <ul class=\"navbar-nav text-uppercase\">\r\n                        <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                            <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                            <a class=\"nav-link\" routerLink=\"/services\">Service</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                            <a class=\"nav-link\" routerLink=\"/training\">Training Program</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                            <a class=\"nav-link\" routerLink=\"/consultation\">Consultation Process</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                            <a class=\"nav-link\" routerLink=\"/contact-us\">Contact us</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/common/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/consultation/consultation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consultation/consultation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  consultation works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/consultation/consultation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsultationComponent = /** @class */ (function () {
    function ConsultationComponent() {
    }
    ConsultationComponent.prototype.ngOnInit = function () {
    };
    ConsultationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-consultation',
            template: __webpack_require__("./src/app/consultation/consultation.component.html"),
            styles: [__webpack_require__("./src/app/consultation/consultation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsultationComponent);
    return ConsultationComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contact-us works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-us',
            template: __webpack_require__("./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <app-banner></app-banner>\r\n    <div class=\"intro row\">\r\n        <div class=\"img col-6\"><img src=\"../../assets/images/intro.jpg\"></div>\r\n        <div class=\"intro-text col-6 bg-dark\">\r\n            <p><b>Chandrika Meetu Gupta,</b> a well known name in the field of tarot card reading. She is also a '<b>Reiki Healer','Numerologist' &amp; 'Vastu Consultant'.</b></p>\r\n            <p>She fully believes in karmic cycle whereas strongly believe in <b>\"What goes around, comes around\"</b>. Through\r\n                in the span of almost <b>past 10 years,</b> she has helped people from different walk of life, including\r\n                celebrities, with her simple east to do yet powerful &amp; effective remedies. By the Grace of God's &amp;\r\n                blessings of her aacharya, her predictions have achieved absolute accuracy &amp; promising satisfaction to\r\n                her clients.\r\n                <p><a href=\"#\">Read More</a></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row tag-line\">\r\n        <div class=\"col-sm-12\"><b>'Tarot Card'</b> reading is an age-old drivine methods of predicling past, present &amp; future of a person with\r\n            help of cards-deck &amp; psychic intuitions of the reader. This intuition not only includes a trust of tarot\r\n            cards and faith in angel guidance, through which he/she can receive destination messages. Tarot reading is one\r\n            of the fastest, safest, simplest methods of knowing past, present and future anybody.</div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <carousel [carouselType]=\"'home'\" [loop]=\"true\" [grid]=\"{ xs: 1, sm: 1, md: 2, lg: 3, all: 0 }\" [carouselItems]=\"offerIteams\"\r\n            [interval]=\"6000\"></carousel>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.offerIteams = [{
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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service-list\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"row service-item\" *ngFor=\"let item of items\">\r\n        <div class=\"col-2 service-img\" >\r\n          <img [src]=\"item.img\"/>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          {{item.name}}\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <img src=\"../../assets/images/btn-consult.png\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
        this.items = [];
    }
    ServiceComponent.prototype.ngOnInit = function () {
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
            }];
    };
    ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-service',
            template: __webpack_require__("./src/app/service/service.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/training-program/training-program.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/training-program/training-program.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  training-program works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/training-program/training-program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainingProgramComponent = /** @class */ (function () {
    function TrainingProgramComponent() {
    }
    TrainingProgramComponent.prototype.ngOnInit = function () {
    };
    TrainingProgramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-training-program',
            template: __webpack_require__("./src/app/training-program/training-program.component.html"),
            styles: [__webpack_require__("./src/app/training-program/training-program.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingProgramComponent);
    return TrainingProgramComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map