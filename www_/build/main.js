webpackJsonp([2],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.email === "a@a.cl") {
            this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            });
        }
        else {
            alert('Su Email no tiene privilegios!');
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Tesis\wwm_portal_web\src\pages\login\login.html"*/'<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n\n      </ion-col>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n\n        <p padding class="title">Portal de Datos</p>\n        <p class="title2">Walk With Me</p>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button outline block round (click)="login()">LOGIN</button>\n        \n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n    <p class="pieDeFirma">Aplicación en desarrollo. Versión 0.0.5</p>\n</ion-footer>\n'/*ion-inline-end:"C:\Tesis\wwm_portal_web\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export ProfilePhoto */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_angularfire_angularfire__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, afAuth, afDb, afProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.afProvider = afProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.myUser = this.afAuth.auth.currentUser;
        this.uid = this.myUser.uid;
        this.photo = ProfilePhoto.profilePhotoDefault;
        console.log(this.uid);
        this.loadingContent = 'Obteniendo datos de usuarios';
        this.loading(this.loadingContent);
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.afProvider.getUsersList().valueChanges().subscribe(function (users) {
            _this.users = users;
            //console.log(this.users);
            if (_this.users) {
                _this.loadingAlert.dismiss();
                console.log(_this.users.length);
                for (var n = 0; n <= _this.users.length; n++) {
                    console.log(_this.users[n]);
                    if (_this.users[n].User_Info.profilePhoto === undefined) {
                        _this.users[n].User_Info.profilePhoto = _this.photo;
                    }
                    ;
                    if (n === _this.users.length - 1) {
                        console.log(n + 'Final');
                        break;
                    }
                }
            }
        });
    };
    ;
    HomePage.prototype.toUserDataBase = function (uid, nickName, run, photo) {
        console.log(uid, nickName, run);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserPage */], { uid: uid, nickName: nickName, run: run, photo: photo });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirme',
            message: '¿Realmente desea salir de la sesión?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.signOut();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.signOut = function () {
        var _this = this;
        this.loadingContent = 'Cerrando Sesión';
        this.loading(this.loadingContent);
        this.afAuth.auth.signOut().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]).then(function () {
                _this.loadingAlert.dismiss();
            });
        });
    };
    HomePage.prototype.loading = function (loadingContent) {
        this.loadingAlert = this.loadingCtrl.create({
            content: loadingContent,
        });
        this.loadingAlert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Tesis\wwm_portal_web\src\pages\home\home.html"*/'<ion-content padding>\n  \n<ion-grid>\n  <ion-row>\n    <ion-col>\n\n    </ion-col>\n    <ion-col col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4>\n      <ion-buttons start>\n        <button ion-button round outline (click)="logout()"><ion-icon name="power"></ion-icon></button>\n      </ion-buttons>\n      <ion-title align="center">Listado de Usuarios</ion-title>\n      <br>\n      <ion-list inset>\n        <button ion-item *ngFor="let user of users" (click)="toUserDataBase(user.User_Info.uid, user.User_Info.name, user.User_Info.run, user.User_Info.profilePhoto)">\n          <ion-avatar item-start>\n            <img src="{{user.User_Info.profilePhoto}}">\n          </ion-avatar>\n          {{user.User_Info.name}} {{user.User_Info.run}}\n          <ion-icon item-end name="arrow-dropright"></ion-icon>\n        </button> \n      </ion-list>\n    </ion-col>\n    <ion-col>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Tesis\wwm_portal_web\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_angularfire_angularfire__["a" /* AngularfireProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

var ProfilePhoto = (function () {
    function ProfilePhoto() {
    }
    ProfilePhoto.profilePhotoDefault = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAYAAAAMzckjAABLH0lEQVR42u3d53ocR4Km7TdMZlbBA/SeFCnTre4xe+13/gcwOzMtR0+QBAnvgXLpIr4fWQCNHEWLKjz3LrelbrktVSKejIyINC9XVqMAAABwalg+AgAAAAIQAAAABCAAAAAIQAAAABCAAAAAIAABAABAAAIAAIAABAAAAAEIAAAAAhAAAAAEIAAAAAhAAAAAEIAAAAAgAAEAAAhAAAAAEIAAAAAgAAEAAEAAAgAAgAAEAAAAAQgAAAACEAAAAAQgAAAACEAAAAAQgAAAACAAAQAAQAACAACAAAQAAAABCAAAQAACAACAAAQAAAABCAAAAAIQAAAABCAAAAAIQAAAABCAAAAAIAABAABAAAIAAIAABAAAAAEIAAAAAhAAAAAEIAAAAAEIAAAAAhAAAAAEIAAAAAhAAAAAEIAAAAAgAAEAAEAAAgAAgAAEAAAAAQgAAAACEAAAAAQgAAAACEAAAAAQgAAAACAAAQAACEAAAAAQgAAAACAAAQAAQAACAACAAAQAAAABCAAAAAIQAAAABCAAAAAIQAAAABCAAAAAIAABAABAAAIAAIAABAAAIAABAABAAAIAAIAABAAAAAEIAAAAAhAAAAAEIAAAAAhAAAAAEIAAAAAgAAEAAEAAAgAAgAAEAAAAAQgAAAACEAAAAAQgAAAAAQgAAAACEAAAAAQgAAAACEAAAAAQgAAAACAAAQAAQAACAACAAAQAAAABCAAAAAIQAAAABCAAAAAIQAAAABCAAAAAIAABAAAIQAAAABCAAAAAIAABAABAAAIAAIAABAAAAAEIAAAAAhAAAAAEIAAAAAhAAAAAEIAAAAAgAAEAAEAAAgAAgAAEAAAgAAEAAEAAAgAAgAAEAAAAAQgAAAACEAAAAAQgAAAACEAAAAAQgAAAACAAAQAAQAACAACAAAQAAAABCAAAAAIQAAAABCAAAAABCAAAAAIQAAAABCAAAABGlucjADDOgiSF8EH3yZZbZQAEIACckLh7K+zssNSMkYyxMkbyxsoY0/wa/nHmD/6a8fX/jFEhRsXhr9f/nr/39wYAAhAAPnLsGWtlhsHlvZe1VtZIRkZBUSGE5lcdVNZBZVWqKivVoW5irg6qY1QMQXUIijHKGDP86xgZa+WslbHNf5d4r8Qn8t7JOSvvnKyzsqYJvhijQmz+fnH4z/kqDpk9BEAAAsBfij1r7Zu/jFFUVF3XKspKea+nPC/U7/fVz3P1+wOVZaWyrlRXtUKoFaOG/xkVZd6Y/nt9JjDqzd8xiseziNY6WSd56+USr8R5ZVmqiXZb7XamVtZSlmVKE680TeSMVYxR1VGMvhaFzBQCIAAB4DeCL00TWWMVJVVVqX6vp25/oINuV73DrrqDnoqiUl1XCiE2JWeM7NGvYWR5749/1L1PeMUQjsMwhKCqrlWUpXqS4n4YPh6WnLWy1ihNErXaLU1NTGhqakqTExOaaLWUpqmcMapjVFVVBCGAL868XFmNfAwAvkT0GWPknDt+rBpj0CAv1e10tXdwoP2DA/X7A+VFobquJdM87nXeywwfr74dUOGDNny8m9/7e4YQVNdBdWweLTtjlKSJJlotTU9NaW5uVjNTU2plqZx1vwpCYhAAAQhgLKPveJbPe8laFXmug8OO9g4OtLd/oE6vp7IoFIeh5Z07fvwrYz5b5L1/HBodPVw+Crt6+EshKElSTUy0NTvdBOHc9LSyVkvGRFVVOA5CWcs5XQAIQACjHX3eN5s2YjTq9wfaO9jT1vau9g4OlA/y5lGqazZaHEXiSY+9d47CYbzGGFXHqFBVqoZBmCapZmandXZhQQtzc5qYaMtao6qqj2OQmUEABCCAkYi+48e73ssYqdcbaGtnR1vb2zo47KosS1lrXu3ktVZSbNb0jTkrSbbZKFLXTejVMSqxVpNTUzq7MK9zCwuamp6StWrWO4agSAwCIAABnMTwe30TR14W2t7Z09rGpvb29lTWtZyxwyNVnIwxYzHD98FBOIzBOFwTWFW1rDWanZnW+XPndPbMgibaLcUoVVWhqo7NrCIAEIAAvpQYo5xzSlOvEKTd3V2tbm5pe2dX+SBvdsim6fGBzETfH/xQHh5iHUKzHrCsa6U+0fzcjC6eP68z83NK0lRVUaisa0lGtCAAAhDAZ4o+SYpKkkTOOZVFofWtbS2vrenw4FDGNI93nXPHkYi/GoNN2dUhqioLhRDUnpjQ5QvndenCeU1MtI/XCh4daA0ABCCATxB+UZJRknh573XYOdTK+qbW1zc0yHP54bo/ay0zfR9Rcwi2VNa1qqJQkqQ6d2Zely9d0tzstCSjoigIQQAEIIBPFX5We/uHWnq5rM2tbdV1VJoezfZFMdn3iX9wDx+j52UpK2ludlbXr17R2fm55mgdQhAAAQjgw8JPkqKyLJMxRrv7+3rxYlmb29uSpCRNm9kpqu+LhGCMUUVVKda15mZndO3qFZ07c0bOGOVFoUAIAiAAAfy1+Dta42e1u7evZy+WtbOzI0nHmzoIv5MRgopRZVWpqirNTM/oxvXLOn/2rIyxyvNcbBYBQAAC+NPw884pSRIdHna0uLSkjc0tGWMIvxMdgpJkVJalqqrS3OysvrpxXWfPLKiqa5VlyWwgAAIQwK/Dz1qrLMs06Pf19MVLrayuKcZI+I3SD/ZhDeZlqVjXOnf2jL66cV0z09NNHNY1IQgQgAQggCb+sixTCLWWXq5oaXlFRVEqS5Pjg4oxYj/gj9YIFoWMpMuXLurm9Wtqt1vK8+L4jS0ACEAApzD8Eu/lk0RbW1t6uPhUh92esuH5foTfeIRgCEF5nitNM31187quXr6kGIIKHgsDBCCA0xcGWZaq3x/o8dNnWlvfkBuu/SP8xvPfd13XKspS87Oz+vr2Lc3PzCgvCtXMBgIEIIDx1uzu9bLWaXl1VU+eLaksS7XStPnf+YjGPgTzopRR1NXLl/TVjety3ivPcyIQIAABjGv8tVotdXt93X/4SNs7O8qyjMe9pzACQwjKi0KT7ba++/prnT07p8GAtYEAAQhgrMLP++b1bcsrq3r0dFF1FZRlGeF3ykOwrCrVda3r167qzs0bkqKKgrWBAAEIYOTjr5VlGhSFHj5+ovWNLSVpIs+sH9QcGxNi1CAvNDszre++vqP5mWkNhq+UA0AAAhi1i9wYtdJUa5tbuv/4sYqiVItZP/zOd6UoSylGfXXzhm5ev6Zq+HYRZgMBAhDACDh65Ouc15OnT/Vs6cXxI2DiD38UgSEEDYpCF86e1d+/+Vo+ccrzgggECEAAJz3+sixTXhS6e++BtnZ31coyBnD8pRDs57kmWy19/923mpttjovh5gEgAAGc0IG7laXa2t3Tz/ceqCwKNnrgvb9LZVkqxqhv7nyla1euKM9zdgkDBCCAkyJKssYoyzI9W3qpx4uLcs7xyBcfNkio2SCS57muXr6k776+rTpE1gUCI87yEQBjEH8xyg/f4HHv4SM9fPxYScIuX3ycGwtjjNrttl6srOl/fvxFMQRlacp3CyAAAXzJ+EuTRFLUv37+RUsvV9Rut2WM4Y0e+Kjfs4l2S7v7+/qvf/2gXm/AbnKAAATwpQblbHi+3//735+0vbOriXaLQRmf7PvWyjINBoX+618/aGdvV60W3zeAAATwWQfjdivTwcGh/ut/flC332NGBp/le5emzYzzf//4i5ZXVzXRmuB7B4wYz0cAjGr8tbS9u6Mffr4nGcOaLHzW75/3XtZa3X3wSHUddPPaFQ1yjokBRgUzgMAIDr4T7bbWN7f0r59+kTFGCTt98QW+h2Z44/Hg0WM9fvpcGWdNAiODGUBg1OKv1dLyyqp+efBIaZrIGkP84Ysxw6OHHj99rqqq9O2d2xwYDYwAZgCBEYu/58sr+vn+Q6Vpwk5fnJgInGi39Gzphe4+eKQ0TZkJBAhAAB8l/iZaWlpZ0f2Hj5RlDLA4id/RCb1YXtG9h4+UpjwOBghAAB82sLZberG8qvsPH7POCic8Att6sbKqB48eDb+rfC4AAQjgveJvZXVD93i0hlH5zg6XKjx49FhZ1uJDAQhAAH9lIG21Wlpd39TP9x8QfxitCExTPXuxrIePn6jNYdEAAQjg3QbQdpZpa3dHP9+7f7zhAxiZ7/BwY8jTpRd68uy5JohAgAAE8Mfxl2WZDjod/fzzPTnnZIk/jOh3uZVlerz4VC/X19Rut4lAgAAE8FsDZpokGuS5fvjlroIk7z1HvWBkHZ0TeO/+I23vbKvN6woBAhDA6/HXxF6IQT/8dFd5XipNEgZLjP5AY4ycc/rx53va73R4bSFAAAI4vhitkXVGP/5yT4e9rrKMQRJjcnOj4c2NpB9+uadBUSjh5gYgAIFTP0AO1/09eLSo7Z1dHpNhLL/jaZKoyAv9fPe+jDGyliEIIACBUzwwTrRbevFyWS+XV1gojzG/0Um1t3+ge4+aQ835rgMEIHBKB8RM27v7evD4CQMiTsV3vt1uaXllVc9fvOR4GIAABE7fQJgkifK80E/37stayyMxnJrvfivL9OjJorZ297jxAQhA4BRdfNbKGunne/dVsigep/D775zTz/fva5DnSrzn+w8QgMB4izGqlaZ6tPhMO3v7zIDgVF4D3nuVRam79x/KOscMOEAAAmMef1mm9a1tLb1cVovjXnCKr4Usy7S9s6unz5fUanEjBBCAwDgOeGrOQxsUhe49eiTvPa95AzdErUyLz5e0tbXLbDhAAAJjeMEZI++97j18pLIoec0boFfrAX95+FBV2VwXAAhAYCwcrft7tvRCm9s7zHQAr10biffK81z3Hz1mQwhAAALjMsBJSZJo/7CjxWfP1eJdqMCvb5CyTGsbm1peX1Ob9YAAAQiM/IVmm9dePXj8RFFityPwOxGYJKkePX6mQZ7zKBggAIHRHtSyLNXzFy+1s7+vjNk/4Hd571RUpR48XlSS8CgYIACBUYw/NY9+O51Oc8wF8Qf86Q1TO8u0vrGp1dUNtVkrCxCAwMhdYKZ59Hv/0aJCjDz6Bd4xApMk1cOni8qLQt47PhSAAARGZxDL0lTLK6va3t3j0S/wF3jvlOelHi0+VZJw7QAEIDAinHPK81yLz5aUpbznF3ifG6i1jU3t7O4qy7iGAAIQGInBK9Hi8yXlZSnneIQF/OUBykjGWj1efKYYLUsoAAIQOMnxJ2VJop29Ay2vrjH7B7zvtSQpTRLtHhxoZXWVZRQAAQic4IvKNv/Pk8WnkmXWAviwG6qoLEm0+GxJeZ4zmw4QgMDJHKzSJNXK2rp29vaUJcz+AR/KOae8LLT4/AXXFEAAAifwgrJWVVXp+dILeQYq4KPdWGVpqpW1NR10O0qShA8FIACBEzRIZalWVtfU6feV8Bor4KPeXMUY9fT5C3nPG0IAAhA4IZxzKvJCz5ZXeEwFfIIbrCRNtbG5pV2WVwAEIHBSBqcsSbS0vMJCdeBTDVjGSJKeLr2QcU7D3wVAAAJfhnNO3cFAL5ZXlTIzAXy6G60s0/b2jra3t5WmvCcYIACBLzkoJYmWXi6rrDj0GfjUjHN69uKlpCjDNCBAAAJfgnNO/cFAa2sbzP4Bn+mGa3dvXzs7e0o5HBogAIEvNRi9XF1Twewf8NkYY7S0ssIMIEAAAp+fc06DstDy2jqzf8BnvPFK01Q7O7va3d9nRzBAAAKfeRBKEq2srmvAzl/gszqa+XvxckWWMzcBAhD4XJxzKstSy6urzEAAX+IGLE21tb2tg/0D3g4CEIDApxdCUOq91re21e0NmP0DvgBjjOoY9XJtTYlz3IQBBCDwiS8caxUkra6tKfFOEgMP8LnFGJV6r43NbfVZhgEQgMCnFIaDzt7+gfYPDofvJeVzAb4E55zystD65obSxCtwMQIEIPApGEnWOy2vrivo1eupAHx+MUYlzmlldVN1XXM9AgQg8Gk459TrDbS1va3UM+MAfGlJ4nXY7Wp7d19pmnJNAgQg8HGF4dEvaxsbHPwMnBhG1kjLa2uyppmlB0AAAh/vgjFGdQha39hi1yFwQhwdCbO7u6dOr8+RMAABCHw8IUSlabP5o9PryXP4LHBiGGNU1rU2t7blnVUIgQ8FIACBjzHASM44bWxuKiqy2Bw4SYabQTa3thRCkLUMbwABCHwEzjnlRaXN7R02fwAnrf8kee91cNjR/mFX3nsFLlGAAAQ+RAhBiffa2dvVYMCbP4ATOaAZoyBpY3NTiXMyHNAOEIDAhzDGyBhpdWNT1trjF9EDOEE3asND2re2d1SUpRzXKUAAAh/COafBINfe3l7zaIkF5sDJHNSsVa/f1/7BgXyacq0CBCDwfo4f/+4fqCgrHv8CJzwAozHa3NltZgCZBQQIQOB9GGNkrLS1vS1nDY9/gRN+w+at1e7unsq6Yrc+QAAC78c5pyIvtbt/wONfYAR479Xr93XY6Sphxz5AAAJ/VQhB3nvtHRwoHxQ8/gVGYWCzViFGbe/scs0CBCDwHoyRM0Zb2zuSZTkRMApiCPLOaWt3V3WoeQwMEIDAX+ONUVGW2t3bbw5/5mRZ4OQHoJrHwN1OV71un9c2AgQg8O5ClKz36vb76g8GvFoKGKXBzRhVIWjv8FDe8m5ggAAE3lVsdhPu7+2rjpEABEbJcPnG7t5eM9LxGBggAIF3Gz+sZKSdgwPeKACMmKMNXAeHHZVlJe+4hgECEHgHzlkVRanDww7HvwCjOMBZq8FgoE63J2u9uIQBAhD409kD55wOuz3lRcnjX2BEA7COUXv7B/LOSqIAAQIQ+BPOWu3t7yvGQAACo3odG6O9vQNFSYbrGCAAgT+bOYiK2j88kDVcJsAoOloH2O11VVWVHAEIEIDAnwVgVVXDM8Qc6/+AEb6W86JQv9cc5cSVDBCAwB8OGv3eQHlR8PgXGOVreXgeYKfbbWYAuZkDCEDgt4QQ5KxVp9tVFQKvkQJGmTEyxmj/8JBrGSAAgT+fNdjvdGSM4QBZYJQND3TvdHsc6A4QgMAfXBTDoyM6na68tVLkkREwqkJsrulur6+SJR0AAQj8UQCWRaFer98sGo98JsCoX9NVVarb78vxXmCAAAR+NVswHCz6ea6qrpktAMYkAOsY1ev1OQoGIACB3yrAZgNIfzBoApD1f8BYMMao2+s163oBEIDAbw0UvV6/2fvBYAGMx2BnjLr9gYLYCAIQgMBvF6C63R6zf8CYODraadDvq65rPhCAAATeuiCsVV1X6uXDtwawWBwYk/s6o7woVRQVM4AAAQj8OgCrslbezxkkgLG7uas1yAfsBAYIQODtQcIoL3JVNbMEwNgFYAjqD2f3AQIQgKRmnZA1VkVRMjsAjCFjpHxQsLcLIACBtwcIo0FRHJ8HCGC8CnCQ5zKiAAFGOOCtAMzznOEBGMsBz6gYFIqKEjd4IAABHAegpDzPOf8PGDMxhGaNb1WoDoHBDwQgHwEwvBisVZA0KArOAATGLQB19J7vZo0vSzxAAAI4FkKtIi9ljWEjCDCGQ15Z1SrLio8CXA18BEDDGKNQB5V1yewAMI4Dnm1u8qqKY54ArgDg9QBUVF0x8weMqxilqq5lJGb5QQACaFRVrRijDLMDwPgNeNYohKiqqrjGwfXARwAcDQ5WdVUphJpjYICxZBRNVFVXXONgzOMjAJpHQUZSVQfFyOcBjLOy5CYPIACBo7kBa1RVlUKMsowOwHhe55LKsuSsTxCAfATA0cBgVIdKMUbJcGkA43mhNzd65B8IQADH6jqKkQEYbyGwzgMgAIGjiQFJMXIsBDDu1zkBCBCAwBsiAwMw9kKsmekHAchHALxSD3cDAxhPzUx/VORKBwEI4GhkiJwBA4y9ZqKf5R4gAAEMC5AABMb9MjcyMTbnffI2EBCAACRmAIHToB6+A5gBEAQggOPZAQBjfpkz8wcQgMArUZYABMb9Mpcxza8QWAcIAhBAlAwBCJySGz2GPxCAAI4uCGvFKkBgrO/zZIyR4UoHAQjg+IJgBhAYe8YY0X8gAAG8mhmwBCAw7hybQAACEHhjZsAyMwCM/Y0eM/0AAQi8PjAkzss0L4viAwHG9EJPkoQrHAQgHwEwHBdCkPde1hqFwPAAjGsBOuckDn0HAQjgaPevt46zoIGxzj9mAAECEHh9YAhBznt2AgNjzMSoxHsCEAQgHwHwambAOytjHW8IAMZQCEHGOnnvee83CEA+AuC1C8JZecdlAYztNW6MnLNNAHIcDAhAACEEGRk559kEAowpY9Q8Ao6BARAEIICGc1ZpOhwcmB0Axu4mz3k/DEA+DxCAAIaDgzVWaZoqMDoAY3iNR2VpIuc963xBAPIRAK9ESe1Wi9kBYNwGO2sVYlCapszuAwQg8HYBRmVZqsghEcAYXt6xCUCJGUAQgHwEwCtBUVmayUTDmwKAMQzAdpZxewcQgMDrV4NVCFFpmsg5yzpAYNwCUFKWppwBCBCAwJsXQwhBrTSVs4ZHRMAYCaE59qWVZdzcAQQg8OtBwideWdZikADGjHNO7XZbIdRsBAEByEcAvBaAMco7p1Y7U6gZJIBxurnL0lRp6hVqZvcBRjfgdTFKMpqamBBDBDAmA521qutarVYm7xybQAACEPitBoyabLdZKA6MkTpGTbTbssayvhcgAIFfCyGoNdGWM2wEAcbqxm5yghs7gAAEfuOCsFZ1CJrIMjnnCEBgTG7qrKSJVls1AQgQgMDvDRZJmgx3CxKAwDhc094nmpiYUM3mLoAABH53sLBOUxOTqkNgsADG4Jput1vKspSbOoAABH5fjFEzM1OcBQiM+iA3XNYxNdGWt2wAAQhA4A/UIWh6apKNIMAYCDFqZmaGDSAAAQj8+YzBRKutJOWRETDS8ReCnDGanmyWdAAgAIE/HDSS1Guy3WrWARrDhwKM7LWcauLoWmZNL0AAAn80aFhjNT01pZrXRgGjOcAZozoETbbbStKE2XyAAATeIQJj1PzcrCTx6ihgFBmjuq41NzvDG0AAAhB4hwvDWlVVpZnpKaVporqu+VCAUbuJC0FG0vzcHPEHEIDAuw8eWdrS1MSE6jrIWtYBAiN3DWeZpicnVHEANEAAAu88e2Ck+blZ1YEZQGCkBrejWfyp4Sw+M4AAAQi8qzoEzc3OyhirEFgJCIzU9RujZmdnJEmRAAQIQOCdLg5rVde1picnlLKDEBgpR+f/zc3OqKqDZBjuAAIQeEd1XStNEs3NTKuqKtYQASOiqipNtNuanppsrl2W8AIEIPCujl4dde7sguoQeZUUMAoDm7WqQtDC/JwS53mnN0AAAn99ICmqSnOzc0oTjoMBRkEIQSZGnV1YUB2DRAACBCDwPoNJu9XS7CyPgYFRuWaz42uW418AAhB4z8Hk1WwCj4GBEz2oWauyqjQ/O6M0SVQxaw8QgMD7Diiv1hM5AhA4wWKMiiHo3JkzqkPk8S9AAALvr9lR2NLM9LSKqpI1bCkETqK6rpW1WpqfnWXJBkAAAh8mhCArowvnzqquazGnAJzAAW24aevMwrxaWcqmLYAABD7SwHJmQZlPFBhYgBN5o2Zi1MWzZ1mvCxCAwMdR17Um2m3Nz8+qrCoZHi0BJ0pVVZqcmNDc3IyKouDxL0AAAh8uxqgQgi6eP9+8Fo7ZBeDkDGbWqKprnTu7oMR5Zv8AAhD4WANMc7zEwvysJtpt1hcBJ0gIUdZYXTh7TmVdK7JRCyAAgY82yNS1Up/o7NkzKspKhkEG+OKMMcM39kxranr47l8+FoAABD7mQFPWtS5fOC9nDY+ZgJNyc1bVunTpkqxMs0QDAAEIfExVVWl6elrz8/MqioJZQOALazZotXT+zHxzTiebPwACEPjYQgiKMerKxQsKTAACX5QxRkVZ6vy5s0o8r34DCEDgU1001qooCp1ZmNPUZFtlWfKhAF/shizKO6/LFy+qqmve0gMQgMCnE2Mz6Fy6cEFlXfMYGPgCjDEqS27GAAIQ+IwDT1GWunj+vLKEV04BX/Jm7PLFiwpRvKIRIACBT6+ua020Ml26cE5FWTILCHzmm7CyLDU/N6szC82GLB7/AgQg8NkGoKtXLivxjqMngM+sqoKuXbkiSRzJBBCAwOdT1rWm2m1dPH9eObOAwOe5+ZJUlqVmZqd07izHMQEEIPC5B6LhwdBXr1ySM0aBc2GAz3Hhqapq3bhyRZJl9g8gAIHPryxLTU9N69zZMypLZiKAz3PNTejc2bNccwABCHwZxhhVVaWb167KGF5DBXz6663WjatXZS2z7gABCHxBZVlqZmZaFy6cZ0cw8JmutZJrDSAAgS/paBbw1rVrctYyCwh8quusDrp1/Rqz7QABCJwMZVlpaqKtK5cuKmdXIvDR4y8vSy3Mzer82QV2/gIEIHCyBqgb164qTXk7CPAxxSjFOujWjeuKMuz8BQhA4OSo61qtLNO1y5eUF6xPAj7WzVVR5Dp7dkFn5meV5znXFkAAAidroMqLQjeuXR2+nL7iQwE+UAhBxjrduXVDVR2IP4AABE7mYGWt1Z1bN1VVNYMV8KE3VXmu61cuaWZySmVZ8qEABCBwQgesotD5c+d0/twCj6uAD1BVlSbabd28fpXXLQIEIHDCI1DNesDbt27IclwF8N43U2VZ6vbNm0qcZ2MVQAACJ19ZlpqZnNLVK1eYBQTeI/7yvNCZhXldvHhWA459AQhAYFQGsEFR6NbNq5qcnFBZsSEEeFchBBkj3fnqluqaI18AAhAYsUHMWa/vvr6tuqo4uwx415unQaFbN65rbnqajR8AAQiM3kCW57nOLCzo6uXLvCEEeIdrpihLzc/N6Ma1Kzz6BQhAYIQHtKLUna9uaKLdVsWjYOB3hRCkGPXNndtSFBuoAAIQGF11Xcs5r29uf6WSR8HA794sDfJCN69f0/zMtAqOfQEIQGDUB7Y8z3X+3BldvXxJec5jLeDta6TIc83PTuvm9Ws8+gUIQGCcIrDQN7dvaXpqitkN4DVHr3v727dfSzHy6BcgAIExG+SM0fcMcsBbN0e5vrlzS9OT3BwBBCAwhgNdUZSanZ3Wna9uacCjYHBNqD/IdenCBV29fFn9wYBrAiAAgfEc8Hp5oetXr+jCuTMa8JYQnOJroSxLTbZb+u6b2ypLbogAAhAY54EvRlVVpb9/87XaWaaSR144hUIIqkPQ37/7Rs46VRXv+gUIQGDMVVUl772+/9u3iqwHxGm7CRqu+/vu6zuan5vlkHSAAARO0QBYFJqfm9O3X99RzqNgnKLvfq8/0LUrl3XtymX1+6z7AwhA4JQNhP1+X9cuX9T1q1fVYwE8TsONT55rYW6WGx+AAARO94A4yAt9c+crnZ2fY0DEWH/Xy7JUkqb6x9+/UwiBpQ8AAQicXiEE1XWtf/ztO2WtloqCTSEYP1UVFGPUv/39O2VJwuYngAAETjdjzPGmkP/85/dy3qisKgZHjI0Yo6qq0Pd/+1bzs2z6AAhAAMcRWBSFJttt/dvfv1cMQVXF4zGMx3c7z3N9e+e2Ll04z2HPAAEI4O2BcpDnWpif0/d/+1ZVVSjGyAeDkf5O9wYD3bp+XTeuXVGv1yf+AAIQwG8NmP1+X5fOn9e3d24rz3OJARMj/F2+fOG87tzh1YcAAQjgTwfOXr+v69eu6Patm805acwEYgTj7/y5s/r+u29V5MxmAwQggHcaQAf9gW7fuqmvblxTryiIQIxO/A0GOnv2jP7597+prmviDyAAAfyFkVSDwUBf3/5KN69eaSKQR2g48fGX68z8nP79+78fH3EEgAAE8Bfl+UDffn1HN65cZhE9TnT8DQa55udm9O//IP4AAhDAB4lRzTEaX9/R9auX1ev1iECcuPjrDwaam53Rf/7ze8UoVcQfcGJ5PgJgVCIwqigK/e2br2W917PnL9TKUkIQJyb+zswv6N//8V0Tf1XN5nXgBGMGEBixCMyLQt/d/kp3bt1QnucsrscXj79ev68L587qP/5tOPNXVcQfcMIxAwiMYAQO8ly3b92Q914PHj9RlqayxogUxGePv95AV65c0vfffq2iKBViZFYaIAABfKoI7PcHunn9ipxzuvvgkRLv5L1nRhCf7zs4GOjG9av69s5tFUVzzh/pB4wGHgEDI+po9uXapYv6P//8XpJRUZbMvuCTf+/qulZRFPrm9lf67us7x/EHgAAE8LkicDDQmYV5/d///Kdaaao8z4lAfLLvW1mWikH6t+//rq+uX1O/3yf+AAIQwJcYlAd5rsn2hP7vf/675mZn1O9zViA+/vcsz3P5xOv//Mc/deHcWfUGA75nAAEI4IsOzkUha63+89/+qcsXL6nX6zEzg4/2/er3B5qentb/9x//rpnpSfWJP2CksQkEGKNBuqoqWWv1j79/q+npST16sihrnZKEzSF4v+9UCEGDwUBXr1zWt3duK4agPOeVhMDIX98vV1YZFYAxHLhbWabt3T3dvf9A/TxXK8uIQPyl71BRlpKMvr39la5euaQ8zxVCIP4AAhDASRVjVJalKqtKv9x/pM3NbbVaqay1hCD+NP76g4GmJib0j799q+npaQ145AsQgABGJwK99/LOa/H5cz19viRrrZIkIQLxm+FX1bXKotClCxf03de35ZxTXvDIFyAAAYzkwN5KU+3s7evew0fqdLtqtzPFyKCOV9+RPM/lndc3X9/S5YuXVJbF8J2+fE8AAhDASGoeCWcKIejRk6d6ubLSzA7y9pBTH37NRo9C584s6Ntvbmui3eaRL0AAAhinCHTWKc0SbWxu6f7jJxr0C2VZwtrAUxp/eZ7LGqPbX93S9atXVFeVyqoi/gACEMA4hmA7yzQoSy0+fabl1XU5x9rA0xR+R2v9ziyc0Td3bmp6cko5r3QDCEAA4x+BzjllaaKtnT09XFzUwf6hWq2M2cAxDr8QgvK8VNZK9PXNm7p06aLqulbJe6QBAhDA6QrBbHhG4PMXL/Vs6YWqENRKUxljCMExir+iLBVC0JWLF3X75nVlrVT5oFCIEu0HEIAATmEEWmvVSlMd9rp68nRJG1tbsrJKMx4Lj3r4lWWpqqo0Pzurr766oTPz8yqLUlXNDl+AAARACMaoJEnkrdX2/r4Wnz3X7u6evPesDxzB8KvrWnlRaGpyQjdv3NCl8+ekGJQXPO4FCEACEMBvhGCWZJKV1jc39fTZkg47PaVZIu8cITgC4VeUpbIk1fXrV3Tt8mU5a1WUhUKIxB8AAhDA70egNUZJmiqEWiur63qxvKJOt68k9Uo4P/DEhl+aprpy8byuXr6idqulvOAdvgAIQAB/NQStVZYmquqg1bV1LS2vqNPrKXFOSZIc/3H4suGXJamuXL6oq5cuKmu1VJalatb5ASAAAXxICDrnlHqvKgStrW/oxfKqDjuHst4r9V7WGAVC8LNEX4xRVVWpqmtlWaarl5rwa2WZcsIPAAEI4GOHoLVWWZKoCrW2tne1vLqq3b19BUmp93LOSTGKHy4fP/xCjCqHBzZPT0/r8sULOn/urFppqoLwA0AAAvj0IWiUJM15gfsHB1pZW9fG5rbKspBzTt57WWsUAj9m3pe1ViGEZravquW91ZmFBV26eFFn5ufkjFFRVYQfAAIQwOcTQpC1Vt57eec0yAda39zU2saWDg87CkFKUy9nrWStYgh8aO8QfTFG1XWtqqoUY9TExITOnVnQpYvnNT01rRAqFUWlMNysAwAEIIDPrln6N1wnmHqFIB0cHGp9c1NbOzvq9foyxgxnBe3xzBZ+O/pCiMrSVGcWFnTx/FnNzc3IO9+8w7csFaNkLeEHgAAEcEK8PiuYOKeirrW7u6f1zU3t7h8oHwwUo5H39jgIj/680xN8RlLzbt4QgoqqkkJQmmWanZnW+XNndHZhQVmaKoSooiiY7QNAAAIYgRCMklGUM0Y+TWWNUVmV2t8/1PbOjrb3DtTrdRVCHAajO54dHLcgtMZI5lXw1SGormoZI7XbLc3NzOnsmXnNzc4oS1MZ6Xht39HGGwAgAAGMVgwODyJuNoc4OWNVhaDDTkc7u3vaOzhQp9NVnpeKCrKvPy4extOoROHb/7zHwVcHGUmJ95qamtDM9LTOLCxoZnpSiU8Uhke71CEoDmdRAYAABDA2MSjptc0jVlFGZVGo0+tpb/9AeweH6nQ7KotSdR0ka2RljmcJj/78IzEGfe4jCN8ItBgVYnwVeyE0ZycaI+8TTU22NTc9rZnZWc1MTSrNsubcxBBU1TUzfQAIQACnKAajpBiOH/06Z+WsVZRUFpUG+UDdXl+dbleH3a66vZ7KolJdVwpqzsazwxh7OwyP1tl9zGgNze8cz+wFNUfimGjknJFPEk22W5qcnNT05KQmJyc00WopSRNZY49n+Y7+/F+FJAAQgABOXRC+FkVv/DJGUVJVlsrzUoN8oEGeqzcYaNDvKy9KDfJ8eGyKFEKtEKRo4qsEfG0DhXntP49+CL7xw3C4qzlKMjHKWidjJGudnLVKW6myNFO7lWmi1VKrlamVNb984uXMcFfvcDaQ4ANwkng+AgAnyetxFEJQFYL0RhQaZa1U7YmW3NFau+Gj1LquVFe1yrpSWdWqyqoJxuEbMuoYFeu6eVRbR4XYPHY1xsgaI+ucrDEyxsg4J2+t0iRRkiRKkuacw+aRtZfzzWylic1r2YJerfcrivKNtYq/9cgaAL4kZgABjKS3N4NYa5twG8acMUbGGjX/R8ezf288EDZSlJFRfGP67/g3h4sKg6QYguJrf98m9uLrfzSBB2BkMAMIYCT9VmzFGN+YjfvUf8+PucYQAAhAAPgEgQgAGP6M5CMAAAAgAAEAADDGeAQM4ER717V87/LI92gzyOubQiRJMb46CuYdTpNu/pHCu/xDcZcNgAAEgN8LutcDrtnRKxljZdQc9nwUbuZVyR1vv4jGDDeABElm+J/63d+O0tGLipvfsc1h0oqSnGt2BUtStDL26LclY60Uo6xtdhm/sXn49YhUHP7zvNqY8vr/39/lMwAAAhDAyAbe62fgGWOUeP/qeJbXQq7Zudsc3hzq5iy/uqpVhaBQ182BylWlKoTmfbmv/XYIQVUVFGPdHAIdY3OEc5RiaMLw+PdjVNAwzkJs/llis6M3muY9vkZGMlbGNv901gz/NzVHy3jXHAbtvJc7ep3d8LeP/zvnZF1zVmDivJx38kkiOzxM2hwF43DX8tGr7N48ZubtULSiEQEQgABOVOAdvbHDHh3QLCnEJmTqqlZR1SqrUuXRAc1FoaIsVZSlyqpSVVYqy1JlVSuE+nj27PjXG2f5maP/++rRrjFvHcry6o/RcXC+KYYmxELd/H4lvfEWkNdfMDz8r5t/FsXfnP1T1JtnERoja9QEYuKUuOZQ6TRJlKZpc9B0mijxiZJhJCbeKUm8nPNNKL510PTvBSIziAAIQAAfL/SO3pRh7XAGzw4j71WI1FXdvJatKJTnhfI8V38waCIvL1SUR++/fesVbUePdo+iyTaPfb33fz1uohQV9Na5zh/MHLekef0Z9B/8c4TmHcevfZZVXasoS/U0UBy+Q/goHN9+1VzinZI0VStNlbUytVsttbJMaZooS1MliVfivZx/FYh1jAp1rRikoPCbbyIBgOOfa7wJBDjlodcUyhuhYK1tHmdaO3zVWlRV1arKWv18oMEgV7fXU78/UF4OA2/4WDaE5hFr8+i0Wcd3tKbv1V//dw5QPgqjMfZ7MfZqZq/5t3IU1s3j4TiMRCvnfBOI2TAQs0wT7bYmWi212y2laSLn3PG7iIOi6jo0vx0IQwAEIHDqY+/1X84YBUl1XakoKw0GA/X6A3X7ffV7PfX7ufIyV1U2kaej9XJvBZ7RcLPEsTh8ZRr+0g/nX32OOg5ChV8HopXknFeaerVaLU202pqcnFC71dJEu60sS+SclxtumKljVF3XRCFAAAI4TbFXx6CqrNQbDNTr93R42FW339egP1BelKrrWnUMzaNZNY8mrTXHfw0C7wv/8B7Orr4eh0f/WddBdWxm/Ywk77x84tXOMrVbmaanpzU1Oal2u6UsTeWclQJRCBCAAEYv+I4GbGPkjZEd7ka1b8det6eDTledble9fl9lWamu6+YoFGPkhrt13w69T/FuXXwarz9if313cX00azicMfQ+UbudanJiUjPTk8MonPjTKCQIAQIQwBcOvuNZvaM1e1Yqy0r93kAH3a46nY463Z66w9gLoZaMkTPNESX2eEOHIfTGPQzf+vf8+q/67ShsT2pqalIz09OammgrTRMZYxViPD56hyAECEAAnzn4vHOy1ipKKotCnV5fhwcH2js8VKfT1SDPVYXmEe5RHL4Zezy6hd4IuN+LwiRJNTXZ1uzMjGZmpjU9OaksS+Wta3Yfh1pVVR/PNhKEAAEI4H2DrxmRZYbx5r2TNVYhBhVFqU6nq/3DQ+0Pg68oCtUxyhkj7/2bsRejQuRSx/tHYT1cW6goJYnX5ERb01NTmpud0fT0lFpZS941M4ShrlUNHxu//tcCQAAC+K3oG87YmWHEeWslI+V5qcPOobb393Wwf9g8zi2K4VvMhnH42po9HuPiowfh8NzHGNXM+g3fxKIQ5b1Xu9XS9NSUFuZmNDM7o4l2W9YYhRhUVc2bXGIIvB8ZIAABNI9g46vHut7LGqOqrtTr97W7d6Dd3T3tdzoq8lwxGjn/2uNcgg9fKgglydrjt7QcrwuMUd45TU5OamFuRvOzc5qemlKWJVLU8ev7jv48ZgcBAhA4RdHX7NRs3iHrFGNQv19o/3Bfu7sH2tvfV6/f//UjXWvF2j2c2Ch8KwirKsiYqDTLNDs9pfm5Oc3PNbOD3vnjDSV1XRODAAEIjGP0DTdjGCOfejnjVIWgg8OOdnZ3tbO3p06np7IsJGvlj2YDmeHDqA4uw3MKj9YQVlV1fEMzMdHW3MyszizMaW5uVlmaSSGoeG13MTEIEIDAaEefc8ePdsuq1MFhV1vb29re3VWv11cIUc67ZqeuczLGEHwYO6/fzFTH6weDslZL8zPTOnt2QXOzc2q3WjImqipfbSQhBgECEBit6LNWRZ5r7+BAWzu72tndVb8/UIxG3h/N8h2dy8aliNMVhHF4yHQ1fId0kiSanZ3RuYV5LczPqz3RljVRVRWO1xgSgwABCJyQ6Gvei+tfi77+YKC9/X1tbW1rd/9Ag7yQjJQcvZ3DWmb5gN+LweFGkunpKZ1dWNDZ+XlNTk3KWqkqK1U1j4kBAhD4YuHXDEBp4uWsU1GV2tnd1/rmpnZ291UUxfFGD2etDNEHvHMMxhhVVpWqupa3VjPTUzp/7pzOnlnQRLulGMUGEoAABD5v9Hnv5Z1THYL2Dw60vrGl7Z0d9fr94/+d9XzAB8bg0WvrhruFy7pW4pzm5uZ08ew5nVmYU9ZKFUJUVRSqhoedH/15AAhA4IOi72hdX5p6hSB1Oh1tbG1rc2tHnW5HMqZ5vEv0AZ9msBpGXYxRRVEoxKgsSbWwMKcL585pfm5GqU9U1bVK1gsCBCDw/uEXZa1Rmqay1qjbG2hre1sbm5s6OOyoroO8f7Xuj+gDPm8MHq0ZjFGaaLd0ZmFBF86f1ezMjKyk4ugRsZgVBAhA4A+j783ZvrqO2t3d0+r6hrZ2dlWUhbz3Soa7d9m5C3zhQcxaafiu4qKoZK00PTOtyxfO6/yZM8qyTKGuj88YZFYQIACB18Lvzdm+Xn+gzY1NrWxuqnPYGb6bN5FzVkbNmiQAJ8vRTVlRVQp1rSzLdO7Mgi5dON/MClqpKJgVBAhAnHoxxjdm+/b297SytqGt7Wa2L/H++Kw+ZvuAERnYXntEfDQrODszo0sXzuvcmQVlWaaatYIgAAlAnC4hRhlJSZLIO6f+YKCNrW2trm/o8PCwme1LErnhcRQARtdvzQqeP7OgixcuaG525o1NJcwIggAExjT8rDFKvZf1XgcHh1peW9P6xobKsnrjlW084gXGbLB7fVawqmQlzc/N6urlyzp7ZkHOmONNI4YQBAEIjL7mkFijLEkVJO3u7evl8oq2dnZUx6h0eHwLs33A6XB0k1dUlUJVaXpqWlcuX9TFC2eV+lRVWaqsa8kYkYIgAIERDL9mfV+qqiq1ubWjlyur2tvflzHNhg9jDOEHnNYBcDjTV5alqrpWK8t0+eIFXbp4QZPttqrXXk3H42EQgMCIhF+WJBrkhdY2N7W8sqpOt9u8wcN7wg/Ar2Kwruvh5q9UF86d0eVLFzU7M6PIMTIgAIERCL8sUbc70PLqilZWNzQoCyXOKUkSSVF0H4A/CsEQgvKylJW0sDCvG1cva2F+4dWGkeGxUQABCJyE8EsSdfsDvVhe1srahsqqVJokrO8D8F4heBR8MUYtzC/o5vXLWpifU4zm+L9nwwgIQOALhF/inJIsUbfb14vlFa2sbaiqSiWEH4BPEoJzunH9qhbm5iQRgiAAgS8Sfp1uXy9eLmt1bV1VHZQk7OgF8OlDcH5uTjevXdXCAiEIAhD45OF3tMav0+kPH/WuqwqBo1wAfLYQVIzKj0NwdhiC85KM8jyXkRHnx4AABD5C+FlrlWWpBv2Bnr14SfgBOGEhOKdbN67rzPysqjqoLEtmA0EAAh8Ufkmisq70YnlVS8srKopCaZLKOV7VBuAEhKCkPM8Vo9H5cwu6df26Zqanjs8XJARBAALvGH5HBzVLUStr63q+9FKdXk9ZmjLjB+BEhuDRGkFjjC5fvKhb16+q1W6pyAvVIRCCIACBP4q/LElknNPm1rYWl5Z0sH8onyRKPOEH4OSHYAhBeVEq9U7Xrl7RtauXlXqvvCgVCEEQgMCb4ed9c1jz3v6BFp8vaWt7R3Z4vh/hB2DUQrAOQXleqN1u6db1q7p88aKMGW4UIQJBAOK0h1+zwSNTr9/X4tMlrW2sSzLKsvT4jwGAUQ3Bqq5VlqWmJyd1+9ZNnT93VlVVsVEEBCBOb/xlWaYYg16urOnp0gsVZaksSWQtGzwAjFcIlmWpuq514fw53b51U5PttvKi4LEwCECcnvBrHvem2t7Z1aPFp9o/PFTG2zsAjHkEhhhVFoWcs7p57ZquXb0sax2PhUEAYrzD7+g8v15/oKdPl7SyvibnmrV/hB+A0xKCdQgqi0JTk1P6+qubOnv2DI+FQQBiPOMvy1LFKC2vrGpx6YXKslTK414ApzgEy7JUWde6PHwsPMFjYRCAGJfwc84pTRLt7O3q4eIz7R/wuBcAmgiUQtTwsbDXzetXdf3qZSlKBbOBIAAxqvGXZZnqEPRk8ZleLq/IOsvjXgD4VQga1XVzbMz83LS+uXNH8zPTGjAbCAIQoxR+bnh+39buju4/WlR3+BYPHvcCwB+HYFGWUoy6ef2abl6/JimqKJgNBAGIEx5/WZaprio9efZcL5bX5Jxh1g8A/kIEhhA0KArNTk/r2zu3tTA7w2wgCECczPBzzilLE21u7ejBkyfq9vrNrJ8x4ksGAH89BIuyVAxBN69f060b12Uk5cP3DQMEIL54/GVZpqqumrV+K6tyzitJPLN+APCBERhC0CAvNDMzpe/u3Nb87Cw7hUEA4suGn7VWrVaqje0dPXj4RL1+M+vHDyUA+LghWJalQgi6fvWKbt+6qRgj5waCAMTnj78kSWSN1eLTp3r6Ynl4oDOzfgDwqSLwaG3gwsyM/vbdN5qamFB/MCACQQDi88Rfu52p2+3p7oPH2tnfV4u1fgDw2UIwz3M5b/XtV7d1+fIllUWhqq4JQRCA+DTh551TkqZaXlvXw0dPVNf18A0ffI0A4HNGYFUHlUWuyxcv6Nuvb8s5pzxngwgIQHzk+MuyVHVV68Hjp1pZW1WSpvK8zQMAvmgI9vsDTU5O6O/ffnN8XAw/l0EA4qP8gGmlqXYPDnT3/kN1uj212y1+wADACfkZ3WwQibp984Zu3rimqqpUVRWzgSAA8dcdPfL1idfSyxU9erIoa3mVGwCcxAgMIWgwKHTu3Ly+/+ZbJannkTAIQPz1+EuTRFFR9x481sr6hloZr3IDgJMegoM8VzvL9I+/f6e52Rn1++wSBgGId4y/VpapNxjop7v3dXh4qFaLR74AMCoRWFalYoj629e3dfnyZeV5rhCjyEAc8XwEeDv+JiZaWt/c1i/3HiqEmvgDgBH7OZ74RCEE/Xz/oQ46XX1z57bqumZdIAhA/PoHhvdO3id6+nRJj54+k/deacoRLwAwij/TjTHKskzPXy6r0+3r+799oyzLlOc5EQgeAePN9X53HzzS6samWrzODQDGY6AfHhydZqn++bfvND83p36/z894ApAAPO3xl2WZ+v2BfvzlnjrdDo98AWAMI7CqKtV10Ldf39a1K5eU55wXeJrxCPiUx1+73dLO7r5+vHtPVVURfwAwpj/vvfeyNujeg4caDPq689VXKspSgVfIEYA4XT8MJlotra5v6pf7D2StVcZ6PwAY65/7xhi1220tPnupwaDQ37/7RmE4O0gEni6Wj+D0OfoB8GzphX66e0/eOnnviT8AOC0TABMtra5v6H9//EkxRKUpB/wTgBjzuz+rNE314OFjPXiyqDRNZRyHOwPAaRsP2u2WdvcP9P/+9YMGeaEsyxgLCECM48WeeC/vnX785a6evVxWu91myh8ATvG40Moy9QcD/b9//aCDg0O1WQdOAGK8LvI0TRVC0P/88KPWN7Y00eYiBwDGh2Z8qKug//7hR61vMj4QgBirizvPc/3X//6g/YNDtbm4AQCvjRNJ4mW914+/3NWL5RVNMBM49tgFPOYXdZZl6vX7+p8ff1JRlKzxAAD85njhjJFNU919+Fh1iLp57YoGnBU4tpgBHPP46/a6+u8fflJZVBzzAgD4Q8YYZWmqB48e68mzJbUy3gpFAGKk4q+dZeocdvTfP/ysqq7Y4g8AePcIzDI9WnyqR4vP1coyInAM8Qh4HOOvlWl3/0D/+umuoqJST/wBAP5aBLayTE+ePVeMQV/f/kp5njOWjBFmAMcu/lra2dvX//74s6Tm6BcuWADA+0VgqqdLL3T/4aPm3FhmAglAnLz4a7Va2tre0f/++LOMMbzdAwDwwRHYbrX0/MWy7hGBBCBOXvy1W1kTf7/clbWW+AMAfLQxZmKirRcvV3TvwUOlKWsCCUCciAuzlTVr/n66e1/eWnnniD8AwMePwOUVPXj0WFmWSYwzBCC+3AWZZZkOOx3966e7Mkby3olLEgDwaSJwQs9fLuvx4lO1220mGwhAfIkLMU3T4SHPvyjGMHzsy2cDAPiEEdhu6cmz51p8vsQbQwhAfP74S5QXhf7nx59V17WShKNeAACfZwxqt1p69GRRS7w2jgDEZ4y/JFFV1vrfH35SWRQc8gwA+OyyLNP9R4/1cn1DE7xjngDEp40/771CDPqfn39WfzBQyuvdAABfgDFGaZrq3v0HWtvYUouZQAIQn+hflrVy1uqHn++q0+kqyzIuNgDAF41AlyT68d597e7tK8uYlCAA8dEvsizL9MuDh9rZ21eL+AMAnAB+ODnx0y/31B/kSlmTTgDi44gxqpWmevL0mVbWN9Rmmh0AcILGqMR7lXWlH3++p3B0KgUfDQGID7uw2q2WXq5v6MnTZ2qx5g8AcALHqixNddjr6qd7D5U4J8vbQghAfMAFlaXa2dvXvQcPlWW8fgcAcHLHrHaWaXNrW/eGbwthwoIAxHtcSGmSqN/P9ePde7LWylr+dQEATvbYNdFuaWl5VU+fL2ligiVLBCD+wgUkee9Vx6AffrmnuqqUeM9FBAAYiQhsZakeLz7V6jrHwxCAePd/KdbIO6ef791Xp9flrD8AwEgxxsinqe7ef6CDw0PGMQIQ73TnlKZ68uy5Njd31GYNBQBgBHlrFSX9cu+BQojyLGMiAPEH8ZdlWt/e1tPnS2q1iD8AwOiOaWmSqNPr6d7Dh0qyVDGykZEAxK8ulCRJ1M9z3X3wSN57Nn0AAEZ+bGu3Wlpd39TzF8uaaPEomADEm/8ihrt8f7n3QFVZNYdocpEAAMYgAltZqkdPFrW9v8/xMAQgfuvi2NnnXYoAgDGLjeEkx917D1SVJSdbEIBgehwAcBrGuqNlTj8/eCTHMicCkAvCq9PrskAWADD2Y14ry7S5va3FZ8/V4mkXAXhqP3xrZa3TvQePVdeBLfIAgPGPwDTV0+dL2t7dV5ayHpAAPJV3QqmeLb0YrvvjIgAAnILwGK4HvP/wkUKseRRMAJ6u+EuTRPv7h815f5yQDgA4RWNgMjwf8PHT54yBBODpuvuRMbr76LFkDHc/AIBTF4FZmurFy2Vt7e7wFIwAPB1f+larWf+wf3ioNEn40gMATl+AGCPvve4+fKK6ruSc40MhAMf4jidLtbO7r2dLL5j2BgCc3jFRkvdeg35fjxafKU2ZECEAx/XDtlYhBN17+OR4ESwAAKc2Aoe7gpdXVrWxucWjYAJwfL/kT56+UKfbUcKjXwAAFIePgu8/XlRVljwKJgDH6MstKUkS7R4c6MXyS2U8+gUA4Jj3XoPBQIvPl5QxQUIAjs2HbCRnrR4vPpMMj34BAHjd0a7g5ZU17R4cNE/J+FgIwFH/UqdJqtW1de3s7ipjkSsAAL8OEmsVjfR48ZmctbK8GZUAHGXOOZVlqcfPllj3BwDA7ziaBdzZ3dXy2rqyhOVSBOAof5mTRIvPX2iQD+S950MBAOAPxs0kSbX47LkKNoQQgCP5JdarjR/LK6ts/AAA4B147zTIcy0+X+JlCQTgaH6wdrjxIxqx8QMAgHdw9Cj45cqq9g4OhhHI50IAjsiXN0lTra4fbfxg9g8AgHeOE2slY/R48ZmMNTJsCCEAR+WLG0Kt50sv5b0n/gAA+AtebQjZ0+bWjlImUgjA0fjSJlpZ29Bhr6ckSfhQAAD46wOqvHd6/uKlYpQs58IQgCeZc05lVWnp5UulnsWrAAC8V/+p2Uy5t7+vjc1NJRwLQwCe3JuVqDRJ9HJlTd3+QN6zfR0AgA8ZV733erb0UjHWbKgkAE8m55zyvNDS8grvMgQA4CNIkkQH3Y5W1jYZWwnAk3mXkqWJXqysKM9zDq8EAOAjja+J91p68VJVVck50oUAPEGcc+r2B3q5usrBlQAAfESJ9+r0+1peX1PKWkAC8CTdnWRJohfLyyoKXl0DAMCnGGefv1xlnCUATw7nmtfWrK5tMvsHAMAnGmv7g4HWNjeVcsYuAXgS7krSJNHK+obysuCuBACATzTeJs5peWVNVahleT0IAfhFP0BrVda1VtbWlDhm/wAA+FSSJNFh51BbO7tK0lSBMZcA/GJ3I0miza1tdbt9JQmzfwAAfNJw8V4vl1dliBgC8Esxw+nnFysrw0OfuRMBAOBTOVp2tbu/r939faVJwiwgAfh5hRiUpql2dnZ1sH+gJEnEdxAAgE/LDH+9XF6V9V6sBCQAP/MX0Moa6eXq6vFMIAAA+LRijErSRFvbuzrsHCpJEj4UAvDzSRKvg4OONnd2laYcSgkAwGeLF2NVhVrLK+tKnGMMJgA/492Hc1rd2FAMka3oAAB85nE4Tbw2traUFxzBRgB+rg/NORVVqc3tbaWJZwEqAACfmXNOg0Gu7d09Jd4rhMCHQgB+OiEEJd5rZ3dfvX7OXQcAAF8qYqzR6samZJpzeUEAfjLGGFkjrW1syPLkFwCALyLGqDRNtbe3p26vL+89HwoB+Ok459TrD7Szu6/E8+YPAAC+FGOMqrrWxuaWvHM8BiYAP40QolLvtbm9o6IqZR0fHwAAX0qMUd45rW9tqw6Bx8AE4Cf6sKxRUND6xqYS58TJzwAAfFnee3U6Xe0fHDQbMwNjMwH4EYXYfMn2Dzo6ODyU954XvwEA8KVDxhhFRa1tbMpZJ05mIwA/dgIqcU4bm1sKkd1GAACciNE5NsuztnZ2lVclp3MQgB/7DsOqCkE7+/vyzrLQFACAkzJGW6t8MNDB/oE8ZwISgB/t7kLN499up6tel63mAACctACMxmhrZ1fOGPEcmAD8SAUY5J3V9t6uqlDz6jcAAE7UMB3krdXO3oHKumKcJgA/3p1FiFHbO3usLQAA4ATy3qvX66rb6TWPgdmpSQB+8JfKWvUHuQ47XaWed/8CAHDigsYYhRi1tbsr75wUWQdIAH6AEIK899rd21dRlTJMKwMAcCI557Szu6cQI6d1EIAfxhgjWWl7Z0fOGAIQAIATKMSoxHsddjrq9dmwSQB+hLuJfFBq7+CQreUAAJxgxhiVda3d3T15y5FtBOD73k2EIOecOr2OijxnOhkAgBMegM4Y7e7vS5bjYAjAD+Cs0f5BR1G8/QMAgJMshCDrmncDVxXHwRCA73snYa2ipIP9Q75EAACMAO+s+oOB+r0B6wAJwPfjrFVZVer0uqz/AwBgFMLGGFUh6LDTkWMdIAH4V4XQPPLtd/sasP4PAIDRMDyxY++Qp3cE4PsloLy12u90VHOeEAAAozF6D18Ld3DQaV7fyvhNAP7VOwhZo739/ebF0gAAYCR479UfDDTICzkCkAD8Sx+MMaqqSp1OV9Y61hAAADAijDHNGv5OV441/ATgX7p7cE79QaF+nst7xwcCAMAIBaAUtX9wwDpAAvDdNecIWfX6PdVV4MsDAMCoBY4x6vX7iooyhtwhAN/5gzHq9fqSiZwkDgDACGkmcpx6/Vx1XTOME4Dvzhijbrc/nEYGAAAjFTjGKM9zFWXFTmAC8B0/FGtVx6j+oN/sHoqRDwUAgFEby+tKg0HOgdAE4Lt/aaq6Uj8fyFqrQAACADB6ARijev0+R8EQgO/4oRijvJ+rKjlAEgCAUcVyLgLwnR0vHM0HqqqaLw0AACMbOUb9fk9BUYYJHQLwXT6Uox3ABCAAAKPn+Ei3Qb/ZCcxHQgD+GWOMuv0ex78AADDKkWOM8rxQxU5gAvDPPxGroKiqqDgAGgCAkR7Sm92/RVnKWsZ0AvBPPpDjL4sxEtvGAQAYWSFKZVXLGI6CIQD/7MsSpLIsZawVXxUAAEY0cqxVCLXKo0kdEIB/+GWpq+ZugY8DAIDRZozyomBMJwD/7HtiVFZ1s3uIBaMAAIz8uF4UORs7CcDfF0KQNUZFWSqEmg8EAIBRNnyTV55XzAC+xfMRvHWnYK3KqpQkOWvFS+AAABjN+DPWylurqioVJJ7sEYB/EIBqDoHuDgaSpDqQgAAAjOSYbqSyqnTY6aiuKz6Q1z+blyurFM5rrLXq9fvqdLpy3okpQAAARleIQc4aLcwvcAzMa5gBfPuLEoKmJic0OzWlaAxrBgAAGPkIjKrKkg+CAPxjVVWrCHxRAAAYF6z/IwD5ogAAgNPdOXwEAAAABCAAAAAIQAAAABCAAAAAIAABAABAAAIAAIAABAAAAAEIAAAAAhAAAAAEIAAAAAhAAAAAEIAAAAAgAAEAAEAAAgAAEIAAAAAgAAEAAEAAAgAAgAAEAAAAAQgAAAACEAAAAAQgAAAACEAAAAAQgAAAACAAAQAAQAACAACAAAQAAAABCAAAAAIQAACAAAQAAAABCAAAAAIQAAAABCAAAAAIQAAAABCAAAAAIAABAABAAAIAAIAABAAAAAEIAAAAAhAAAAAEIAAAAAhAAAAAAhAAAAAEIAAAAAhAAAAAEIAAAAAgAAEAAEAAAgAAgAAEAAAAAQgAAAACEAAAAAQgAAAACEAAAAAQgAAAACAAAQAAQAACAAAQgAAAABh7/z+GWkhknzVudQAAAABJRU5ErkJggg==';
    return ProfilePhoto;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciceDataListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_export_to_csv__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_export_to_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_export_to_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExerciceDataListPage = (function () {
    function ExerciceDataListPage(navCtrl, navParams, afProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afProvider = afProvider;
        this.loadingCtrl = loadingCtrl;
        this.exercices = [];
        this.numbers = [];
        this.array = [];
        this.uid = navParams.get('uid');
        this.id = navParams.get('id');
        this.nickName = navParams.get('nickName');
        this.run = navParams.get('run');
        this.type = navParams.get('type');
        console.log(this.uid, this.id, this.nickName, this.run, this.type);
        this.afProvider.getExerciceData(this.uid, this.id).valueChanges().subscribe(function (list) {
            if (list) {
                _this.exercices = list;
                console.log(_this.exercices);
            }
        });
    }
    ExerciceDataListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExerciceDataListPage');
    };
    ExerciceDataListPage.prototype.toExcerciceData = function (eid, type, save_time) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__data_data__["a" /* DataPage */], {
            id: this.id,
            eid: eid,
            type: this.type,
            save_time: save_time,
            nickName: this.nickName,
            run: this.run,
            uid: this.uid
        });
    };
    ExerciceDataListPage.prototype.downloadAllData = function (data) {
        var h = 0;
        for (var n = 0; n <= this.exercices.length; n++) {
            //console.log(this.exercices[n].Datos);      
            if (n === this.exercices.length - 1) {
                break;
            }
        }
        ;
        return this.exercices[n].Datos;
    };
    ExerciceDataListPage.prototype.result = function () {
        console.log(this.downloadAllData(this.array));
    };
    ExerciceDataListPage.prototype.exportToCSV = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading Please Wait...'
        });
        loading.present();
        setTimeout(function () {
            var today = new Date();
            var seg = Number(today.getSeconds());
            var ss = String(today.getSeconds());
            var min = Number(today.getMinutes());
            var mi = String(today.getMinutes());
            var hh = String(today.getHours());
            var dd = String(today.getDate());
            var mm = String(today.getMonth() + 1); //January is 0!
            var yyyy = today.getFullYear();
            _this.deteNow = yyyy + '-' + mm + '-' + dd;
            if (min >= 0 && min < 10) {
                mi = 0 + mi;
            }
            ;
            if (seg >= 0 && seg < 10) {
                ss = 0 + ss;
            }
            ;
            _this.hr = hh + ':' + mi + ':' + ss;
            var options = {
                fieldSeparator: ',',
                filename: _this.type + '_' + _this.nickName + '_' + _this.run + '_' + _this.deteNow + '_' + _this.hr,
                quoteStrings: '"',
                decimalSeparator: '.',
                showLabels: true,
                showTitle: true,
                title: '',
                useTextFile: false,
                useBom: true,
                useKeysAsHeaders: true,
            };
            var csvExporter = new __WEBPACK_IMPORTED_MODULE_4_export_to_csv__["ExportToCsv"](options);
            csvExporter.generateCsv(_this.array);
        }, 2000);
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    ExerciceDataListPage.prototype.toChartPage = function () {
        alert('En desarrollo');
    };
    ExerciceDataListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exercice-data-list',template:/*ion-inline-start:"C:\Tesis\wwm_portal_web\src\pages\exercice-data-list\exercice-data-list.html"*/'<ion-header>\n  <ion-navbar>\n      <!--ion-buttons end>\n        <button ion-button round outline (click)="result()">Descarga todos los ejercicios</button>\n      </ion-buttons-->\n    \n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n\n      </ion-col>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-title>Ejercicios {{type}}</ion-title>\n        <ion-list inset>\n          <button ion-item *ngFor="let exercice of exercices" \n          (click)="toExcerciceData( \n            exercice.eid,\n            exercice.type,\n            exercice.save_time\n            )">\n            {{exercice.eid}} || {{exercice.type}} || {{exercice.save_time}}\n          </button>\n        </ion-list>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Tesis\wwm_portal_web\src\pages\exercice-data-list\exercice-data-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__["a" /* AngularfireProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ExerciceDataListPage);
    return ExerciceDataListPage;
}());

//# sourceMappingURL=exercice-data-list.js.map

/***/ }),

/***/ 190:
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
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chart/chart.module": [
		490,
		0
	],
	"../pages/data/data.module": [
		243
	],
	"../pages/exercice-data-list/exercice-data-list.module": [
		491,
		1
	],
	"../pages/login/login.module": [
		244
	],
	"../pages/profile-user/profile-user.module": [
		249
	],
	"../pages/user-rates/user-rates.module": [
		251
	],
	"../pages/user/user.module": [
		250
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 232;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_export_to_csv__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_export_to_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_export_to_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataPage = (function () {
    function DataPage(navCtrl, navParams, afProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afProvider = afProvider;
        this.loadingCtrl = loadingCtrl;
        this.data = {
            alt: null,
            date: null,
            id: null,
            lat: null,
            lng: null,
            speed: null,
            steps: null,
            time: null,
            type: null,
            x: null,
            y: null,
            z: null,
        };
        this.number = 30;
        this.eid = navParams.get('eid');
        this.id = navParams.get('id');
        this.type = navParams.get('type');
        if (this.type === 'Caminata') {
            this.caminata = true;
        }
        else if (this.type === 'Saltos') {
            this.saltos = true;
        }
        else if (this.type = 'Abdominales') {
            this.abdominales = true;
        }
        this.uid = navParams.get('uid');
        this.run = navParams.get('run');
        this.nickName = navParams.get('nickName');
        console.log(this.eid, this.id, this.type, this.uid, this.run, this.nickName);
    }
    DataPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('Ejercicios_Pacientes/Ejercicios/' + this.uid + '/' + this.id + '/Grupos/' + this.eid);
        this.afProvider.getExerciceDetailData(this.uid, this.id, this.eid, 10).valueChanges().subscribe(function (datas) {
            _this.datas = datas;
            console.log(_this.datas);
            for (var n = 0; n <= _this.datas.length; n++) {
                console.log(_this.datas[n].id);
                if (n = _this.datas.length) {
                    break;
                }
            }
            if (_this.type === "Caminata") {
                _this.caminata = true;
            }
            else {
                _this.caminata = false;
            }
        });
    };
    DataPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.number = this.number + 15;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.afProvider.getExerciceDetailData(_this.uid, _this.id, _this.eid, _this.number).valueChanges().subscribe(function (datas) {
                _this.datas = datas;
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    DataPage.prototype.exportToCSV = function () {
        var _this = this;
        this.afProvider.getAllExerciceData(this.uid, this.id, this.eid).valueChanges().subscribe(function (allDatas) {
            _this.allDatas = allDatas;
        });
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'Loading Please Wait...'
        });
        loading.present();
        setTimeout(function () {
            var today = new Date();
            var seg = Number(today.getSeconds());
            var ss = String(today.getSeconds());
            var min = Number(today.getMinutes());
            var mi = String(today.getMinutes());
            var hh = String(today.getHours());
            var dd = String(today.getDate());
            var mm = String(today.getMonth() + 1); //January is 0!
            var yyyy = today.getFullYear();
            _this.deteNow = yyyy + '-' + mm + '-' + dd;
            if (min >= 0 && min < 10) {
                mi = 0 + mi;
            }
            ;
            if (seg >= 0 && seg < 10) {
                ss = 0 + ss;
            }
            ;
            _this.hr = hh + ':' + mi + ':' + ss;
            var options = {
                fieldSeparator: ',',
                filename: _this.type + '_' + _this.nickName + '_' + _this.run + '_' + _this.deteNow + '_' + _this.hr,
                quoteStrings: '"',
                decimalSeparator: '.',
                showLabels: true,
                showTitle: true,
                title: '',
                useTextFile: false,
                useBom: true,
                useKeysAsHeaders: true,
            };
            var csvExporter = new __WEBPACK_IMPORTED_MODULE_3_export_to_csv__["ExportToCsv"](options);
            csvExporter.generateCsv(_this.allDatas);
        }, 2000);
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    DataPage.prototype.toChartPage = function () {
        alert('En desarrollo');
    };
    DataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-data',template:/*ion-inline-start:"C:\Tesis\wwm_portal_web\src\pages\data\data.html"*/'<!--\n  Generated template for the DataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--ion-buttons start>\n      <button ion-button round outline (click)="exportToCSV()">Desde</button>\n    </ion-buttons-->\n    <ion-title align="center">{{tipo}} de {{nickName}}</ion-title>\n    <ion-buttons end>\n      <button ion-button round outline (click)="exportToCSV()">Export To CSV</button>\n      <button ion-button round outline (click)="toChartPage()">Graficar</button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-grid *ngIf="abdominales">\n      <ion-row>\n        <ion-col>\n          <p align="center">ID</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Fecha</p>\n        </ion-col>\n        <!--ion-col>\n          <p align="center">Hora</p>\n        </ion-col-->\n        <ion-col>\n          <p align="center">Vector X</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Vector Y</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Vector Z</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Giroscopio X</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Giroscopio Y</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Giroscopio Z</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid *ngIf="saltos">\n      <ion-row>\n        <ion-col>\n          <p align="center">ID</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Fecha</p>\n        </ion-col>\n        <!--ion-col>\n          <p align="center">Hora</p>\n        </ion-col-->\n        <ion-col>\n          <p align="center">Vector X</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Vector Y</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Vector Z</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-grid *ngIf="caminata">\n      <ion-row>\n        <ion-col>\n          <p align="center">ID</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Fecha</p>\n        </ion-col>\n        <!--ion-col>\n          <p align="center">Hora</p>\n        </ion-col-->\n        <ion-col>\n          <p align="center">Latitud</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Longitud</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Altura (cota)</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Pasos</p>\n        </ion-col>\n        <ion-col>\n          <p align="center">Velocidad</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list>\n    <div *ngFor="let data of datas">\n      <ion-grid *ngIf="abdominales">\n        <ion-row>\n          <ion-col>\n            <p align="center">{{data.id}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.date}}</p>\n          </ion-col>\n          <!--ion-col>\n            <p align="center">{{data.time}}</p>\n          </ion-col-->\n          <ion-col>\n            <p align="center">{{data.x}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.y}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.z}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.giroscope_x}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.giroscope_y}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.giroscope_z}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid *ngIf="saltos">\n        <ion-row>\n          <ion-col>\n            <p align="center">{{data.id}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.date}}</p>\n          </ion-col>\n          <!--ion-col>\n            <p align="center">{{data.time}}</p>\n          </ion-col-->\n          <ion-col>\n            <p align="center">{{data.x}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.y}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.z}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid *ngIf="caminata">\n        <ion-row>\n          <ion-col>\n            <p align="center">{{data.id}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.date}}</p>\n          </ion-col>\n          <!--ion-col>\n            <p align="center">{{data.time}}</p>\n          </ion-col-->\n          <ion-col>\n            <p align="center">{{data.lat}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.lng}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.alt}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.steps}}</p>\n          </ion-col>\n          <ion-col>\n            <p align="center">{{data.speed}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>   \n    </div>\n  </ion-list>\n  \n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"C:\Tesis\wwm_portal_web\src\pages\data\data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__["a" /* AngularfireProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], DataPage);
    return DataPage;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPageModule", function() { return DataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataPageModule = (function () {
    function DataPageModule() {
    }
    DataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataPage */]),
            ],
        })
    ], DataPageModule);
    return DataPageModule;
}());

//# sourceMappingURL=data.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_user_profile_user__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_rates_user_rates__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exercice_data_list_exercice_data_list__ = __webpack_require__(156);
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
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams, afProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afProvider = afProvider;
        this.loadingCtrl = loadingCtrl;
        this.uid = navParams.get('uid');
        this.nickName = navParams.get('nickName');
        this.run = navParams.get('run');
        this.photo = navParams.get('photo');
    }
    UserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.uid);
        console.log('ionViewDidLoad UserPage');
        if (this.uid != 0) {
            this.afProvider.getUserExercisesData(this.uid).valueChanges().subscribe(function (exercices) {
                _this.exercices = exercices;
                if (_this.exercices) {
                    console.log(_this.exercices.length);
                }
            });
        }
    };
    UserPage.prototype.toUserData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_user_profile_user__["a" /* ProfileUserPage */], { uid: this.uid, photo: this.photo });
    };
    UserPage.prototype.toExreciceData = function (id, type) {
        console.log(id, type);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__exercice_data_list_exercice_data_list__["a" /* ExerciceDataListPage */], { id: id, type: type, uid: this.uid, nickName: this.nickName, run: this.run });
    };
    UserPage.prototype.toRates = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_rates_user_rates__["a" /* UserRatesPage */], { uid: this.uid, nickName: this.nickName, run: this.run });
    };
    UserPage.prototype.loadingData = function () {
        this.loadingNewData = this.loadingCtrl.create({
            content: 'Obteniendo datos'
        });
        this.loadingNewData.present();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Tesis\wwm_portal_web\src\pages\user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title align="center"> {{nickName}} </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n\n      </ion-col>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <ion-list inset>\n          <button ion-item (click)="toUserData()">\n            Datos del Paciente\n            <ion-icon item-end name="arrow-dropright"></ion-icon>\n          </button>\n          <ion-item-group>\n            <ion-item-divider>Datos de Ejercicios</ion-item-divider>\n            <button ion-item *ngFor="let exercice of exercices" (click)="toExreciceData(exercice.id, exercice.type)">\n              {{exercice.id}} {{exercice.type}}\n              <ion-icon item-end name="arrow-dropright"></ion-icon>\n            </button>\n            <ion-item-divider>Datos de pulsos cardíacos</ion-item-divider>\n            <button ion-item (click)="toRates()">\n              <p>Obtener información</p>\n              <ion-icon item-end name="arrow-dropright"></ion-icon>\n            </button>\n          </ion-item-group>\n        </ion-list>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Tesis\wwm_portal_web\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__["a" /* AngularfireProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rut_js__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rut_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rut_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileUserPage = (function () {
    function ProfileUserPage(navCtrl, navParams, afProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afProvider = afProvider;
        this.uid = this.navParams.get('uid');
        this.photo = this.navParams.get('photo');
    }
    ProfileUserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfileUserPage');
        this.afProvider.getUserInfo(this.uid).valueChanges().subscribe(function (user) {
            _this.usr_ = user;
            if (_this.usr_) {
                _this.profilePhoto = _this.photo;
                _this.run = Object(__WEBPACK_IMPORTED_MODULE_3_rut_js__["format"])(_this.usr_.run);
                _this.age = _this.getAge(_this.usr_.dateBirth);
            }
        });
        this.userFromFB = this.afProvider.getUserInfo(this.uid).valueChanges();
    };
    ProfileUserPage.prototype.getAge = function (dateBirth) {
        var date = dateBirth;
        var d = new Date(date).getTime();
        var toDay = new Date().getTime();
        var calc = toDay - d;
        var seconds = calc / 1000;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var mounths = days / 30.5;
        var years = mounths / 12;
        return Math.trunc(years);
    };
    ProfileUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-user',template:/*ion-inline-start:"C:\Tesis\wwm_portal_web\src\pages\profile-user\profile-user.html"*/'<!--\n  Generated template for the ProfileUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-grid>\n    <ion-row>\n      <ion-col>\n\n      </ion-col>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n    <ion-title>Perfil de {{ (userFromFB | async)?.name }}</ion-title>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n  \n        </ion-col>\n        <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n          \n          <div align="center" *ngIf="usr_">\n            <img class="profilePhoto" src="{{profilePhoto}}">\n          </div>\n          <ion-list *ngIf="usr_" padding-right>\n            <ion-item>\n              <ion-label class="item-text">Nombre: </ion-label>\n              <p item-end class="item-text"> {{ (userFromFB | async)?.name }} {{ (userFromFB | async)?.surname }} </p>\n            </ion-item>\n            <ion-item>\n              <ion-label class="item-text">RUN: </ion-label>\n              <p item-end class="item-text"> {{run}} </p>\n            </ion-item>\n            <ion-item>\n              <ion-label class="item-text">Fecha de Nacimiento: </ion-label>\n              <p item-end class="item-text"> {{ (userFromFB | async)?.dateBirth }} </p>\n            </ion-item>\n            <ion-item>\n              <ion-label class="item-text">Edad: </ion-label>\n              <p item-end class="item-text"> {{age}} años</p>\n            </ion-item>\n            <ion-item>\n              <ion-label class="item-text">Estatura: </ion-label>\n              <p item-end class="item-text"> {{ (userFromFB | async)?.height }} Mts </p>\n            </ion-item>\n            <ion-item>\n              <ion-label class="item-text">Peso: </ion-label>\n              <p item-end class="item-text"> {{ (userFromFB | async)?.weight }} Kg </p>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <ion-col>\n  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n'/*ion-inline-end:"C:\Tesis\wwm_portal_web\src\pages\profile-user\profile-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__["a" /* AngularfireProvider */]])
    ], ProfileUserPage);
    return ProfileUserPage;
}());

//# sourceMappingURL=profile-user.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_export_to_csv__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_export_to_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_export_to_csv__);
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
 * Generated class for the UserRatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserRatesPage = (function () {
    function UserRatesPage(navCtrl, navParams, afProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afProvider = afProvider;
        this.loadingCtrl = loadingCtrl;
        this.tipo = 'Pulsos_Cardiacos';
        this.rates = 0;
        this.hableButton = false;
        this.uid = navParams.get('uid');
        this.run = navParams.get('run');
        this.nickName = navParams.get('nickName');
        console.log(this.nickName);
    }
    UserRatesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad UserRatesPage');
        var loading_one = this.loadingCtrl.create({
            content: 'Obteniendo informacion de pulsaciones...'
        });
        loading_one.present();
        setTimeout(function () {
            _this.afProvider.getUserHearthRates(_this.uid).valueChanges().subscribe(function (allRates) {
                _this.allRates = allRates;
                if (_this.allRates) {
                    _this.rates = _this.allRates.length;
                    if (_this.rates > 0) {
                        _this.hableButton = true;
                    }
                    ;
                    loading_one.dismiss();
                }
            });
        }, 1000);
    };
    UserRatesPage.prototype.exportToCSV = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
        loading.present();
        setTimeout(function () {
            var today = new Date();
            var seg = Number(today.getSeconds());
            var ss = String(today.getSeconds());
            var min = Number(today.getMinutes());
            var mi = String(today.getMinutes());
            var hh = String(today.getHours());
            var dd = String(today.getDate());
            var mm = String(today.getMonth() + 1); //January is 0!
            var yyyy = today.getFullYear();
            _this.deteNow = yyyy + '-' + mm + '-' + dd;
            if (min >= 0 && min < 10) {
                mi = 0 + mi;
            }
            ;
            if (seg >= 0 && seg < 10) {
                ss = 0 + ss;
            }
            ;
            _this.hr = hh + ':' + mi + ':' + ss;
            var options = {
                fieldSeparator: ',',
                filename: _this.tipo + '_' + _this.nickName + '_' + _this.run + '_' + _this.deteNow + '_' + _this.hr,
                quoteStrings: '"',
                decimalSeparator: '.',
                showLabels: true,
                showTitle: true,
                title: '',
                useTextFile: false,
                useBom: true,
                useKeysAsHeaders: true,
            };
            var csvExporter = new __WEBPACK_IMPORTED_MODULE_3_export_to_csv__["ExportToCsv"](options);
            csvExporter.generateCsv(_this.allRates);
        }, 2000);
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    UserRatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-rates',template:/*ion-inline-start:"C:\Tesis\wwm_portal_web\src\pages\user-rates\user-rates.html"*/'<!--\n  Generated template for the UserRatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pulsaciones registradas por {{nickName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <br>\n        <br>\n        <p *ngIf="allRates">Existen {{rates}} registros por descargar</p>\n        <button ion-button *ngIf="!hableButton" disabled>\n          Descargar Información .CSV\n        </button>\n        <button ion-button *ngIf="hableButton" (click)="exportToCSV()">\n          Descargar Información .CSV\n        </button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Tesis\wwm_portal_web\src\pages\user-rates\user-rates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_angularfire_angularfire__["a" /* AngularfireProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], UserRatesPage);
    return UserRatesPage;
}());

//# sourceMappingURL=user-rates.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUserPageModule", function() { return ProfileUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_user__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileUserPageModule = (function () {
    function ProfileUserPageModule() {
    }
    ProfileUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_user__["a" /* ProfileUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_user__["a" /* ProfileUserPage */]),
            ],
        })
    ], ProfileUserPageModule);
    return ProfileUserPageModule;
}());

//# sourceMappingURL=profile-user.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
            ],
        })
    ], UserPageModule);
    return UserPageModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRatesPageModule", function() { return UserRatesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_rates__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserRatesPageModule = (function () {
    function UserRatesPageModule() {
    }
    UserRatesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_rates__["a" /* UserRatesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_rates__["a" /* UserRatesPage */]),
            ],
        })
    ], UserRatesPageModule);
    return UserRatesPageModule;
}());

//# sourceMappingURL=user-rates.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(414);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_module__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login_module__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_angularfire_angularfire__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_user_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_data_data_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_user_profile_user_module__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_user_rates_user_rates_module__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_exercice_data_list_exercice_data_list__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//FIREBASE















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_exercice_data_list_exercice_data_list__["a" /* ExerciceDataListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'ChartPage', segment: 'chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exercice-data-list/exercice-data-list.module#ExerciceDataListPageModule', name: 'ExerciceDataListPage', segment: 'exercice-data-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/data/data.module#DataPageModule', name: 'DataPage', segment: 'data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-user/profile-user.module#ProfileUserPageModule', name: 'ProfileUserPage', segment: 'profile-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-rates/user-rates.module#UserRatesPageModule', name: 'UserRatesPage', segment: 'user-rates', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__firebase_module__["a" /* firebase */]),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_user_module__["UserPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_data_data_module__["DataPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_user_profile_user_module__["ProfileUserPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_rates_user_rates_module__["UserRatesPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_common__["b" /* CommonModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_exercice_data_list_exercice_data_list__["a" /* ExerciceDataListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_angularfire_angularfire__["a" /* AngularfireProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularfireProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AngularfireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AngularfireProvider = (function () {
    function AngularfireProvider(http, afDb) {
        this.http = http;
        this.afDb = afDb;
        console.log('Hello AngularfireProvider Provider');
    }
    AngularfireProvider.prototype.getUsersList = function () {
        return this.afDb.list('Pacientes/Datos_Personales');
    };
    AngularfireProvider.prototype.getUserExercisesData = function (uid) {
        //return this.afDb.list('Ejercicios_Pacientes/Ejercicios/'+uid+'/Ejercicios/', ref=> ref.orderByChild('id'))
        return this.afDb.list('Ejercicios_Pacientes/Ejercicios/' + uid, function (ref) { return ref.orderByChild('id'); });
    };
    /*public getExerciceData(uid, typeId, number: number){
      return this.afDb.list('Ejercicios_Pacientes/Ejercicios/'+uid+'/'+typeId+'/Grupos', ref=> ref.limitToFirst(number))
    }*/
    AngularfireProvider.prototype.getExerciceData = function (uid, id) {
        return this.afDb.list('Ejercicios_Pacientes/Ejercicios/' + uid + '/' + id + '/Grupos/');
    };
    AngularfireProvider.prototype.getExerciceDetailData = function (uid, id, eid, number) {
        return this.afDb.list('Ejercicios_Pacientes/Ejercicios/' + uid + '/' + id + '/Grupos/' + eid + '/Datos', function (ref) { return ref.limitToFirst(number); });
    };
    AngularfireProvider.prototype.getAllExerciceData = function (uid, id, eid) {
        return this.afDb.list('Ejercicios_Pacientes/Ejercicios/' + uid + '/' + id + '/Grupos/' + eid + '/Datos');
    };
    AngularfireProvider.prototype.getUserInfo = function (uid) {
        return this.afDb.object('Pacientes/Datos_Personales/' + uid + '/User_Info');
    };
    AngularfireProvider.prototype.getUserHearthRates = function (uid) {
        return this.afDb.list('Google_Fit/Pulsos_Cardiacos/' + uid + '/Hearth_Rates/');
    };
    AngularfireProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], AngularfireProvider);
    return AngularfireProvider;
}());

//# sourceMappingURL=angularfire.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebase; });
var firebase = {
    apiKey: "AIzaSyDfmM4LiISsAKqDR5dKe5oLk08MCFoDbz0",
    authDomain: "walkwithme-001.firebaseapp.com",
    databaseURL: "https://walkwithme-001.firebaseio.com",
    projectId: "walkwithme-001",
    storageBucket: "",
    messagingSenderId: "137113733303",
    appId: "1:137113733303:web:0e28e94ec3d7a7ea"
};
//# sourceMappingURL=firebase.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';



var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.user = {};
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.afAuth.auth.onAuthStateChanged(function (user) {
                if (user) {
                    //this.uid = this.afAuth.auth.currentUser.uid;
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                    //this.logged = false;
                }
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Tesis\wwm_portal_web\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Tesis\wwm_portal_web\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[295]);
//# sourceMappingURL=main.js.map