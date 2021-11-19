(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "vtpD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material-module */ "kMuZ");








let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
    })
], LoginModule);



/***/ }),

/***/ "ZTFi":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-page {\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='938' height='938' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23064e77'/%3E%3Cstop offset='1' stop-color='%230a7dbe'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%238f8f8f'/%3E%3Cstop offset='0.09' stop-color='%23b3b3b3'/%3E%3Cstop offset='0.18' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.31' stop-color='%23dbdbdb'/%3E%3Cstop offset='0.44' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.59' stop-color='%23f2f2f2'/%3E%3Cstop offset='0.75' stop-color='%23fafafa'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-position: top left;\n  min-height: 99.9vh;\n}\n.login-page .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n.login-page .input-underline {\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n  border-radius: 0;\n}\n.login-page .input-underline:focus {\n  border-bottom: 2px solid #09669B;\n  box-shadow: none;\n}\n.login-page .rounded-btn {\n  border-radius: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background: #09669B;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px;\n  margin-left: 18pc;\n}\n.login-page .rounded-btn:hover,\n.login-page .rounded-btn:focus,\n.login-page .rounded-btn:active,\n.login-page .rounded-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n.login-page h1 {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n.login-page h1 small {\n  color: rgba(255, 255, 255, 0.7);\n}\n.login-page .form-group {\n  padding: 8px 0;\n}\n.login-page .form-group input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n.login-page .form-group input:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n.login-page .form-group input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n.login-page .form-group input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n.user-avatar {\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n.logo {\n  padding-inline: 17pc;\n}\n.textfeild {\n  margin-left: 11pc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0kseUJBQUE7RUFDQSwreENBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUpSO0FBT0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVFJO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtBQU5SO0FBU0k7RUFFSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVBSO0FBVUk7Ozs7RUFJSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBUlI7QUFXSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFUUjtBQVdRO0VBQ0ksK0JBQUE7QUFUWjtBQWFJO0VBQ0ksY0FBQTtBQVhSO0FBYVE7RUFDSSwwQ0FBQTtBQVhaO0FBY1E7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0FBWlo7QUFlUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUFiWjtBQWdCUTtFQUNJLDBDQUFBO0FBZFo7QUF3QkE7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBeUJBO0VBQ0ksb0JBQUE7QUF0Qko7QUEyQkE7RUFDSSxpQkFBQTtBQXhCSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcblxuXG5cbi5sb2dpbi1wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOTM4JyBoZWlnaHQ9JzkzOCcgdmlld0JveD0nMCAwIDIwMCAyMDAnJTNFJTNDZGVmcyUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSdhJyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgeDE9Jzg4JyB5MT0nODgnIHgyPScwJyB5Mj0nMCclM0UlM0NzdG9wIG9mZnNldD0nMCcgc3RvcC1jb2xvcj0nJTIzMDY0ZTc3Jy8lM0UlM0NzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nJTIzMGE3ZGJlJy8lM0UlM0MvbGluZWFyR3JhZGllbnQlM0UlM0NsaW5lYXJHcmFkaWVudCBpZD0nYicgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnIHgxPSc3NScgeTE9Jzc2JyB4Mj0nMTY4JyB5Mj0nMTYwJyUzRSUzQ3N0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPSclMjM4ZjhmOGYnLyUzRSUzQ3N0b3Agb2Zmc2V0PScwLjA5JyBzdG9wLWNvbG9yPSclMjNiM2IzYjMnLyUzRSUzQ3N0b3Agb2Zmc2V0PScwLjE4JyBzdG9wLWNvbG9yPSclMjNjOWM5YzknLyUzRSUzQ3N0b3Agb2Zmc2V0PScwLjMxJyBzdG9wLWNvbG9yPSclMjNkYmRiZGInLyUzRSUzQ3N0b3Agb2Zmc2V0PScwLjQ0JyBzdG9wLWNvbG9yPSclMjNlOGU4ZTgnLyUzRSUzQ3N0b3Agb2Zmc2V0PScwLjU5JyBzdG9wLWNvbG9yPSclMjNmMmYyZjInLyUzRSUzQ3N0b3Agb2Zmc2V0PScwLjc1JyBzdG9wLWNvbG9yPSclMjNmYWZhZmEnLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjNGRkZGRkYnLyUzRSUzQy9saW5lYXJHcmFkaWVudCUzRSUzQ2ZpbHRlciBpZD0nYycgeD0nMCcgeT0nMCcgd2lkdGg9JzIwMCUyNScgaGVpZ2h0PScyMDAlMjUnJTNFJTNDZmVHYXVzc2lhbkJsdXIgaW49J1NvdXJjZUdyYXBoaWMnIHN0ZERldmlhdGlvbj0nMTInIC8lM0UlM0MvZmlsdGVyJTNFJTNDL2RlZnMlM0UlM0Nwb2x5Z29uIGZpbGw9J3VybCglMjNhKScgcG9pbnRzPScwIDE3NCAwIDAgMTc0IDAnLyUzRSUzQ3BhdGggZmlsbD0nJTIzMDAwJyBmaWx0ZXI9J3VybCglMjNjKScgZD0nTTEyMS44IDE3NEM1OS4yIDE1My4xIDAgMTc0IDAgMTc0czYzLjUtNzMuOCA4Ny05NGMyNC40LTIwLjkgODctODAgODctODBTMTA3LjkgMTA0LjQgMTIxLjggMTc0eicvJTNFJTNDcGF0aCBmaWxsPSd1cmwoJTIzYiknIGQ9J00xNDIuNyAxNDIuN0M1OS4yIDE0Mi43IDAgMTc0IDAgMTc0czQyLTY2LjMgNzQuOS05OS4zUzE3NCAwIDE3NCAwUzE0Mi43IDYyLjYgMTQyLjcgMTQyLjd6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgICBtaW4taGVpZ2h0OiA5OS45dmg7XG5cblxuICAgIC5pbnB1dC1sZyB7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgLmlucHV0LXVuZGVybGluZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IDAgMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAuaW5wdXQtdW5kZXJsaW5lOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwOTY2OUI7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgLnJvdW5kZWQtYnRuIHtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDk2NjlCO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cGM7XG4gICAgfVxuXG4gICAgLnJvdW5kZWQtYnRuOmhvdmVyLFxuICAgIC5yb3VuZGVkLWJ0bjpmb2N1cyxcbiAgICAucm91bmRlZC1idG46YWN0aXZlLFxuICAgIC5yb3VuZGVkLWJ0bjp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBGaXJlZm94IDE4LSAqL1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOSsgKi9cbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICBcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBcbn1cblxuLmxvZ297XG4gICAgcGFkZGluZy1pbmxpbmU6IDE3cGM7XG59XG5cblxuXG4udGV4dGZlaWxke1xuICAgIG1hcmdpbi1sZWZ0OiAxMXBjO1xufSJdfQ== */");

/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "vtpD");




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition] class=\"login-page\">\n    <br>\n    <br>\n    <div class=\"row m-0 justify-content-md-center\">\n        <div>\n            <div class=\"logo\">\n                <img class=\"user-avatar\" src=\"assets/images/logo.jpg\" width=\"120px\" />\n            </div>\n            <h1 style=\"color: #09669B; text-align: center; font-weight: revert;\">Login</h1>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                <div class=\"textfeild\">\n                    <mat-form-field class=\"col-md-8\" appearance=\"outline\">\n                        <mat-label>UserName</mat-label>\n                        <input matInput placeholder=\"Email\" type=\"text\" formControlName=\"username\" required>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"col-md-8\" appearance=\"outline\">\n                        <mat-label>Password</mat-label>\n                        <input matInput class=\"hover\" placeholder=\"Password\" type=\"password\" formControlName=\"pass\" required>\n                    </mat-form-field>\n                </div>\n                <a (click)=\"login()\" class=\"login\" class=\"btn rounded-btn\">Log In</a>\n\n            </form>\n            <a routerLink=\"/signup\">New user? Click to signup!!</a>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "q44p":
/*!************************************!*\
  !*** ./src/app/dashboard.model.ts ***!
  \************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
class UserModel {
}


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "ZTFi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router.animations */ "ZZ88");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/api.service */ "eokG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _dashboard_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dashboard.model */ "q44p");










let LoginComponent = class LoginComponent {
    constructor(formBuilder, 
    // private dataservice: DataService,
    api, http, router) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.http = http;
        this.router = router;
        this.loginModelObj = new _dashboard_model__WEBPACK_IMPORTED_MODULE_9__["UserModel"]();
        this.errorMessage = 'No Account Registered';
        // this.loginForm = this._formBuilder.group({
        //     username: ['', Validators.required],
        //     pass: ['', Validators.required],
        // });
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    login() {
        this.loginModelObj.email = this.loginForm.value.username;
        this.loginModelObj.password = this.loginForm.value.pass;
        this.api.login(this.loginModelObj)
            .subscribe(res => {
            this.loginRes = res;
            console.log(res);
            if (res) {
                localStorage.setItem('token', this.loginRes.token);
                // localStorage.setItem('isLoggedin', 'true')
                this.router.navigate(['/dashboard']);
            }
            else {
                alert("Incorrect user and password");
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_5__["routerTransition"])()],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map