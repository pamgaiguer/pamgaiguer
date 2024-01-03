(self["webpackChunkpamgaiguer"] = self["webpackChunkpamgaiguer"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 4696);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AppComponent = (_class = class AppComponent {
  constructor(router, location) {
    this.router = router;
    this.location = location;
  }
  ngOnInit() {
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    if (version) {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('ie-background');
    }
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    if (titlee === '/home') {
      return true;
    } else {
      return false;
    }
  }
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === 'signup' || titlee === 'nucleoicons') {
      return false;
    } else {
      return true;
    }
  }
}, _class.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
  }]
}], _class.propDecorators = {
  navbar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent]
  }]
}, _class);
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router, _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location])], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 4696);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ 5227);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__.PagesModule, _app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: []
})], AppRoutingModule);


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 8916);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss?ngResource */ 6444);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio */ 6100);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HomeComponent = (_class = class HomeComponent {
  constructor() {
    this.portfolio = _portfolio__WEBPACK_IMPORTED_MODULE_2__.portfolio;
  }
  ngOnInit() {
    const global = null;
    if (typeof global !== 'undefined') {
      // Code that uses the global object
    }
  }
}, _class.ctorParameters = () => [], _class);
HomeComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-home',
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), __metadata("design:paramtypes", [])], HomeComponent);


/***/ }),

/***/ 6100:
/*!*****************************************!*\
  !*** ./src/app/pages/home/portfolio.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "portfolio": () => (/* binding */ portfolio)
/* harmony export */ });
const portfolio = [{
  nome: 'Norsrsken Eventos',
  img: '../../../assets/img/portfolio/019-norrksken.png',
  url: 'https://norrskeneventos.com.br/',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Agência Galharufa - Casting Model Agency - New Version',
  img: '../../../assets/img/portfolio/018-galharufa.png',
  url: 'http://www.agenciagalharufa.com.br',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Agência Galharufa - Casting Model Agency',
  img: '../../../assets/img/portfolio/017-galharufa.png',
  url: 'http://www.agenciagalharufa.com.br',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Cliffe Cleaning - Cleaner company',
  img: '../../../assets/img/portfolio/016-cliffecleaning.png',
  url: 'https://www.cliffecleaning.com/',
  location: 'Brisbane/QLD/Australia'
}, {
  nome: 'Ação Covid 19 - Covid19 research webpage',
  img: '../../../assets/img/portfolio/015-acaocovid.png',
  url: 'http://www.acaocovid19.org',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Pão de Açúcar - Supermarket e-commerce webpage',
  img: '../../../assets/img/portfolio/014-paodeacucar.png',
  url: 'http://www.paodeacucar.com',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'MeSeems - Digital Research Web App',
  img: '../../../assets/img/portfolio/013-meseems.png',
  url: 'http://www.meseems.com',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'MindMiners - Digital Research Company',
  img: '../../../assets/img/portfolio/012-mindminers.png',
  url: 'http://www.mindminers.com',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Kademi',
  img: '../../../assets/img/portfolio/001-kademi.png',
  url: 'https://www.kademi.com.br/',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Noturnall - Brazilian Metal band',
  img: '../../../assets/img/portfolio/002-noturnall.png',
  url: '#',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Leo Zac Photography',
  img: '../../../assets/img/portfolio/003-leozac.png',
  url: '#',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Rds Codes Startup',
  img: '../../../assets/img/portfolio/004-rdscodes.png',
  url: 'https://www.rdsdigital.com.br/',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Rds Digital Startup',
  img: '../../../assets/img/portfolio/005-rdsdigital.png',
  url: 'https://www.rdsdigital.com.br/',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'ViSi Arq - Architecture Studio',
  img: '../../../assets/img/portfolio/007-visiarq.png',
  url: '#',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Edson Yassuo - Videographer',
  img: '../../../assets/img/portfolio/008-edsonyassuo.png',
  url: '#',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Seiki Alimentos - Food supplier',
  img: '../../../assets/img/portfolio/009-seiki.png',
  url: 'http://seikialimentos.com.br/',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Alpha Institute - Integrated Medicine Web Site',
  img: '../../../assets/img/portfolio/010-alpha.png',
  url: 'http://www.institutoalpha.com.br/',
  location: 'Sao Paulo/Brazil'
}, {
  nome: 'Focco Câmbio - Currency Exchange',
  img: '../../../assets/img/portfolio/011-focco.png',
  url: 'https://foccoturismo.com.br/',
  location: 'Sao Paulo/Brazil'
}];

/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5245);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let PagesModule = class PagesModule {};
PagesModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule],
  declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent]
})], PagesModule);


/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 6968);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 9765);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FooterComponent = (_class = class FooterComponent {
  constructor() {
    this.today = new Date();
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
FooterComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), __metadata("design:paramtypes", [])], FooterComponent);


/***/ }),

/***/ 4696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component.html?ngResource */ 9734);
/* harmony import */ var _navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss?ngResource */ 690);
/* harmony import */ var _navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let NavbarComponent = (_class = class NavbarComponent {
  constructor(location, element) {
    this.location = location;
    this.element = element;
    this.sidebarVisible = false;
  }
  ngOnInit() {
    const navbar = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');
    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    if (titlee === '/home') {
      return true;
    } else {
      return false;
    }
  }
}, _class.ctorParameters = () => [{
  type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
}], _class);
NavbarComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-navbar',
  template: _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef])], NavbarComponent);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4514);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 9595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6444:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/home.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9765:
/*!****************************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 690:
/*!****************************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>";

/***/ }),

/***/ 8916:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/home.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"main home\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"bg-top\">\n        <div class=\"header-content\">\n          <div class=\"inner\">\n            <h1 class=\"cursive\">Pam Gaiguer</h1>\n            <h4>Front End Developer</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section section-gray\" id=\"whoami\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6\">\n          <div class=\"whoami\">\n            <h1>Who Am I?</h1>\n            <p>\n              Hello, my name's Pam Gaiguer! <br />\n              I'm a Software engineer with focus on Front End Architecture by\n              trade and an musician during my free time.\n            </p>\n            <p>\n              I have 10 years of experience in Information Technology (IT),\n              including but not limited to: Business Process Modelling and\n              Notation (BPMN), Project Management and Gamification.\n              <br />\n              I also have 10 years of experience in Front-End web development\n              specialising in User Experience (UX), User Interface (UI), Angular\n              (12+) and React Typescript.\n            </p>\n            <p>\n              Click here to download my resume in English:\n              <a\n                href=\"../../../assets/PamGaiguerTechResumeEn.pdf\"\n                target=\"_blank\"\n                >Download</a\n              >\n              Or here to download my resume in Portuguese:\n              <a\n                href=\"../../../assets/PamGaiguerTechResumePTBR.pdf\"\n                target=\"_blank\"\n                >Download</a\n              >\n            </p>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6\">\n          <div class=\"whoami\">\n            <figure>\n              <img\n                src=\"../../../assets/img/pam_profile.jpg\"\n                class=\"pam-profile\"\n                alt=\"\"\n              />\n            </figure>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section section-black portfolio\" id=\"portfolio\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n          <h1>Portfolio</h1>\n          <p>\n            <small\n              >Disclaimer: Responsibility of all products occurs at the\n              development stage only. Status and continuation of websites by the\n              end user are outside the scope of our control. Therefore some\n              webpages may no longer be active.</small\n            >\n          </p>\n          <ul class=\"list-unstyled portf-list\">\n            <li *ngFor=\"let port of portfolio; let i = index\">\n              <figure>\n                <img src=\"{{ port.img }}\" alt=\"\" class=\"img-fluid\" />\n                <figcaption>\n                  {{ port.nome }}\n                  <br />\n                  <span\n                    >Company from: <strong>{{ port.location }}</strong></span\n                  >\n                  <br />\n                  <a href=\"{{ port.url }}\" target=\"_blank\">Visit website</a>\n                </figcaption>\n              </figure>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section section-gray resume-thanks\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n          <h1>Thank you :)</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 6968:
/*!****************************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav footer-link\">\n                <ul>\n\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    &copy; Updated in: {{ today | date: 'MM/yyyy'}}, made by <a href=\"http://pamgaiguer-dev.web.app/\" target=\"_blank\">Pam Gaiguer</a>\n                    with <i class=\"fa fa-heart heart\"></i> \n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n";

/***/ }),

/***/ 9734:
/*!****************************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\"\n        ><span class=\"logo-navbar\">Pam Gaiguer</span></a\n      >\n      <button\n        class=\"navbar-toggler navbar-burger\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarToggler\"\n        (click)=\"sidebarToggle()\"\n      >\n        <span class=\"navbar-toggler-bar\"></span>\n        <span class=\"navbar-toggler-bar\"></span>\n        <span class=\"navbar-toggler-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse\" id=\"navbarToggler\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink] [fragment]=\"'whoami'\">Who am I?</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink] [fragment]=\"'portfolio'\"\n            >Portfolio</a\n          >\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map