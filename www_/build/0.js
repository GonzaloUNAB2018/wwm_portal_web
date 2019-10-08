webpackJsonp([0],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPageModule", function() { return ChartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChartPageModule = (function () {
    function ChartPageModule() {
    }
    ChartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chart__["a" /* ChartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chart__["a" /* ChartPage */]),
            ],
        })
    ], ChartPageModule);
    return ChartPageModule;
}());

//# sourceMappingURL=chart.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChartPage = (function () {
    //datas: any[]
    function ChartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = [700, 300];
        this.data = [];
        this.data = this.generateData();
        //this.datas = navParams.get('datas');
        //console.log(this.datas);
    }
    ChartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChartPage');
        this.applyDimensions();
        window.addEventListener('resize', function () {
            _this.applyDimensions();
        }, false);
    };
    ChartPage.prototype.ionViewDidLeave = function () {
        clearInterval(this.interval);
        window.removeEventListener('resize', function () {
            alert('Bye');
        });
    };
    ChartPage.prototype.toggleRealTime = function (event) {
        var _this = this;
        event.preventDefault();
        this.isRealtime = !this.isRealtime;
        if (this.isRealtime) {
            this.interval = setInterval(function () {
                _this.updateData();
            }, 1000);
        }
        else {
            clearInterval(this.interval);
        }
    };
    ChartPage.prototype.updateData = function () {
        this.data = this.generateData();
    };
    ChartPage.prototype.applyDimensions = function () {
        var width = this.content.getContentDimensions().contentWidth - 50;
        var state = width >= 320;
        this.showXAxisLabel = state;
        this.showYAxisLabel = state;
        this.showLegend = state;
        this.view = [width, 300];
    };
    ChartPage.prototype.generateData = function () {
        return [
            {
                'name': 'Germany',
                'value': 31229
            },
            {
                'name': 'United States',
                'value': 19869
            },
            {
                'name': 'France',
                'value': 21359
            },
            {
                'name': 'United Kingdom',
                'value': 20598
            },
            {
                'name': 'Spain',
                'value': 56009
            },
            {
                'name': 'Italy',
                'value': 24090
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ChartPage.prototype, "content", void 0);
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"C:\Tesis\wwm_portal_web\src\pages\chart\chart.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>\n        Horizontal Bar Chart\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ngx-charts-bar-vertical\n      [view]="view"\n      [results]="data"\n      xAxis="true"\n      yAxis="true"\n      legend="true"\n      legendTitle="Countries"\n      showXAxisLabel="true"\n      showYAxisLabel="true"\n      xAxisLabel="Country"\n      yAxisLabel="GDP Per Capita">\n    </ngx-charts-bar-vertical>\n  </ion-content>\n      \n'/*ion-inline-end:"C:\Tesis\wwm_portal_web\src\pages\chart\chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ })

});
//# sourceMappingURL=0.js.map