webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyjobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyjobsPage = /** @class */ (function () {
    function MyjobsPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.userData = { "username": "", "password": "" };
    }
    MyjobsPage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10)]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(12)]),
        });
    };
    MyjobsPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MyjobsPage.prototype.signin = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Success!',
            message: 'You are logged-in successfully... ',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MyjobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myjobs',template:/*ion-inline-start:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/myjobs/myjobs.html"*/'<ion-content>\n<div class="page-header">\n<h1>Ionic 3 Sample</h1>\n</div>\n\n\n<div class="page-content">\n  <h2>Please login...</h2>\n\n\n\n  <ion-list>\n    <form novalidate (ngSubmit)="signin()" [formGroup]="signupform">\n\n\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.username" formControlName="username" [class.error1]="!signupform.controls.username.valid && signupform.controls.username.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'username\').hasError(\'minlength\') || signupform.get(\'username\').hasError(\'maxlength\') ||signupform.get(\'username\').hasError(\'pattern\') ||signupform.get(\'username\').hasError(\'required\') ) && signupform.get(\'username\').touched">\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'required\') && signupform.get(\'username\').touched">\n          Please input your username\n        </div>\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'minlength\') && signupform.get(\'username\').touched">\n          Minimum 4 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'maxlength\') && signupform.get(\'username\').touched">\n          Maximum 10 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'pattern\') && signupform.get(\'username\').touched">\n          Just use alphabet character\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="userData.password" formControlName="password" [class.error1]="!signupform.controls.password.valid && signupform.controls.password.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'password\').hasError(\'minlength\') || signupform.get(\'password\').hasError(\'maxlength\') ||signupform.get(\'password\').hasError(\'required\') ) && signupform.get(\'password\').touched">\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'required\') && signupform.get(\'password\').touched">\n          Please input your password\n        </div>\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'minlength\') && signupform.get(\'password\').touched">\n          Minimum 6 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'maxlength\') && signupform.get(\'password\').touched">\n          Maximum 12 characters\n        </div>\n      </ion-item>\n      <button type="submit" ion-button block color="primary" [disabled]="signupform.invalid">SIGNIN</button>\n      <p class="right-align">Don\'t have account? Please <a href=\'#\' (click)="goToRegister()">Register</a> here <p>\n    </form>\n  </ion-list>\n\n\n\n\n\n\n\n\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/myjobs/myjobs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyjobsPage);
    return MyjobsPage;
}());

//# sourceMappingURL=myjobs.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myjobs_myjobs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myequipments_myequipments__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.profileRoot = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.myjobsRoot = __WEBPACK_IMPORTED_MODULE_3__myjobs_myjobs__["a" /* MyjobsPage */];
        this.myequipmentsRoot = __WEBPACK_IMPORTED_MODULE_4__myequipments_myequipments__["a" /* MyequipmentsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="help-circle-outline"></ion-tab>\n  <ion-tab [root]="profileRoot" tabTitle="Profile" tabIcon="help-circle-outline"></ion-tab>\n  <ion-tab [root]="myequipmentsRoot" tabTitle="My Equpiments" tabIcon="medkit"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyequipmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyequipmentsPage = /** @class */ (function () {
    function MyequipmentsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyequipmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myequipments',template:/*ion-inline-start:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/myequipments/myequipments.html"*/'<ion-content>\n<div class="page-header">\n<h1>Ionic 3 Sample</h1>\n</div>\n\n\n<div class="page-content">\n  <h2>My Equipments </h2>\n\n\n\n\n\n\n\n\n\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/myequipments/myequipments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyequipmentsPage);
    return MyequipmentsPage;
}());

//# sourceMappingURL=myequipments.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_myequipments_myequipments__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myjobs_myjobs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(195);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_myequipments_myequipments__["a" /* MyequipmentsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_myjobs_myjobs__["a" /* MyjobsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_myequipments_myequipments__["a" /* MyequipmentsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_myjobs_myjobs__["a" /* MyjobsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/raman/Desktop/Apps/ionic3/mendr/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/raman/Desktop/Apps/ionic3/mendr/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myjobs_myjobs__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.userData = { "username": "", "password": "", "email": "", "name": "" };
        if (window.localStorage.users_data) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
        }
    }
    HomePage.prototype.ngOnInit = function () {
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signupform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10)]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(12)]),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(EMAILPATTERN)]),
        });
    };
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__myjobs_myjobs__["a" /* MyjobsPage */]);
    };
    HomePage.prototype.signup = function () {
        var _this = this;
        console.log(this.signupform.value);
        window.localStorage.users_data = JSON.stringify(this.signupform.value);
        var alert = this.alertCtrl.create({
            title: 'Success!',
            message: 'You are registered successfully... ',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/home/home.html"*/'<ion-content>\n<div class="page-header">\n<h1>Ionic 3 Sample</h1>\n</div>\n\n\n<div class="page-content">\n  <h2>Create new account...</h2>\n\n\n\n  <ion-list>\n    <form novalidate (ngSubmit)="signup()" [formGroup]="signupform">\n      <ion-item>\n        <ion-label floating>Name </ion-label>\n        <ion-input type="text" [(ngModel)]="userData.name" formControlName="name" [class.error1]="!signupform.controls.name.valid && signupform.controls.name.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'name\').hasError(\'minlength\') || signupform.get(\'name\').hasError(\'maxlength\') ||signupform.get(\'name\').hasError(\'pattern\') ||signupform.get(\'name\').hasError(\'required\') ) && signupform.get(\'name\').touched">\n        <div class="error" *ngIf="signupform.get(\'name\').hasError(\'required\') && signupform.get(\'name\').touched">\n          Please input your name\n        </div>\n        <div class="error" *ngIf="signupform.get(\'name\').hasError(\'minlength\') && signupform.get(\'name\').touched">\n          Minimum 4 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'name\').hasError(\'maxlength\') && signupform.get(\'name\').touched">\n          Maximum 30 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'name\').hasError(\'pattern\') && signupform.get(\'name\').touched">\n          Just use alphabet character\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.email" formControlName="email" [class.error1]="!signupform.controls.email.valid && signupform.controls.email.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'email\').hasError(\'minlength\') || signupform.get(\'email\').hasError(\'pattern\') ||signupform.get(\'email\').hasError(\'required\') ) && signupform.get(\'email\').touched">\n        <div class="error" *ngIf="signupform.get(\'email\').hasError(\'required\') && signupform.get(\'email\').touched">\n          Please input your email\n        </div>\n        <div class="error" *ngIf="signupform.get(\'email\').hasError(\'pattern\') && signupform.get(\'email\').touched">\n          Email address invalid\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.username" formControlName="username" [class.error1]="!signupform.controls.username.valid && signupform.controls.username.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'username\').hasError(\'minlength\') || signupform.get(\'username\').hasError(\'maxlength\') ||signupform.get(\'username\').hasError(\'pattern\') ||signupform.get(\'username\').hasError(\'required\') ) && signupform.get(\'username\').touched">\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'required\') && signupform.get(\'username\').touched">\n          Please input your username\n        </div>\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'minlength\') && signupform.get(\'username\').touched">\n          Minimum 4 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'maxlength\') && signupform.get(\'username\').touched">\n          Maximum 10 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'pattern\') && signupform.get(\'username\').touched">\n          Just use alphabet character\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="userData.password" formControlName="password" [class.error1]="!signupform.controls.password.valid && signupform.controls.password.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'password\').hasError(\'minlength\') || signupform.get(\'password\').hasError(\'maxlength\') ||signupform.get(\'password\').hasError(\'required\') ) && signupform.get(\'password\').touched">\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'required\') && signupform.get(\'password\').touched">\n          Please input your password\n        </div>\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'minlength\') && signupform.get(\'password\').touched">\n          Minimum 6 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'maxlength\') && signupform.get(\'password\').touched">\n          Maximum 12 characters\n        </div>\n      </ion-item>\n      <button type="submit" ion-button block color="primary" [disabled]="signupform.invalid">SIGNUP</button>\n      <p class="right-align">Already registered? Please <a href=\'#\' (click)="goToLogin()"> Login</a> here <p>\n    </form>\n  </ion-list>\n\n\n\n\n\n\n\n\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        if (window.localStorage.users_data) {
            this.userData = JSON.parse(window.localStorage.users_data || '[]');
            console.log(this.userData.username);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    }
    ProfilePage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ProfilePage.prototype.signOut = function () {
        window.localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/profile/profile.html"*/'<ion-content>\n<div class="page-header">\n<h1>Ionic 3 Sample</h1>\n</div>\n\n\n<div class="page-content">\n  <h2>Your Profile Information</h2>\n\n\n<ion-list *ngIf="userData">\n\n    <ion-item>\n    Name: {{userData.name}}\n    </ion-item>\n\n    <ion-item>\n    Email: {{userData.email}}\n    </ion-item>\n\n    <ion-item>\n    Username: {{userData.username}}\n    </ion-item>\n\n<button (click)="signOut()"  type="button" ion-button block color="primary">SIGN OUT</button>\n\n</ion-list>\n\n<ion-list *ngIf="!userData">\n<p>No information found...</p>\n<button (click)="goToRegister()"  type="button" ion-button block color="primary">Register</button>\n\n</ion-list>\n\n\n\n\n\n\n\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/raman/Desktop/Apps/ionic3/mendr/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map