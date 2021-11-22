(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Sv0":
    /*!******************************************************************!*\
      !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
      \******************************************************************/

    /*! exports provided: PageHeaderModule */

    /***/
    function Sv0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
        return PageHeaderModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page-header.component */
      "3zLz");

      var PageHeaderModule = function PageHeaderModule() {
        _classCallCheck(this, PageHeaderModule);
      };

      PageHeaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]],
        exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]]
      })], PageHeaderModule);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! G:\ems\frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0Ddd":
    /*!*********************************************!*\
      !*** ./src/app/signup/signup.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Ddd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "3zLz":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
      \*********************************************************************/

    /*! exports provided: PageHeaderComponent */

    /***/
    function zLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
        return PageHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./page-header.component.html */
      "4wMH");
      /* harmony import */


      var _page_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-header.component.scss */
      "CBB2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PageHeaderComponent = /*#__PURE__*/function () {
        function PageHeaderComponent() {
          _classCallCheck(this, PageHeaderComponent);
        }

        _createClass(PageHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageHeaderComponent;
      }();

      PageHeaderComponent.ctorParameters = function () {
        return [];
      };

      PageHeaderComponent.propDecorators = {
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        subheading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PageHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-header',
        template: _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PageHeaderComponent);
      /***/
    },

    /***/
    "4BSX":
    /*!*******************************************************!*\
      !*** ./src/app/shared/modules/stat/stat.component.ts ***!
      \*******************************************************/

    /*! exports provided: StatComponent */

    /***/
    function BSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatComponent", function () {
        return StatComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stat.component.html */
      "zuw5");
      /* harmony import */


      var _stat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stat.component.scss */
      "c4wb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StatComponent = /*#__PURE__*/function () {
        function StatComponent() {
          _classCallCheck(this, StatComponent);

          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(StatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StatComponent;
      }();

      StatComponent.ctorParameters = function () {
        return [];
      };

      StatComponent.propDecorators = {
        bgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      StatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stat',
        template: _raw_loader_stat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StatComponent);
      /***/
    },

    /***/
    "4wMH":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wMH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{ heading }}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <!-- <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a [routerLink]=\"['/dashboard']\" href=\"Javascript:void(0)\">Dashboard</a>\n            </li> -->\n            <li class=\"breadcrumb-item active\"> <i class=\"fa {{ icon }}\"> </i> {{ subheading }}</li>\n        </ol>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        BASE_URL: 'http://127.0.0.1:5000/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CBB2":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function CBB2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "KsZM":
    /*!***************************************!*\
      !*** ./src/app/shared/guard/index.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function KsZM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "eRTK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /***/

    },

    /***/
    "M0ag":
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /*! exports provided: PageHeaderModule, StatModule, SharedPipesModule, AuthGuard */

    /***/
    function M0ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./modules */
      "vH0B");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
        return _modules__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatModule", function () {
        return _modules__WEBPACK_IMPORTED_MODULE_0__["StatModule"];
      });
      /* harmony import */


      var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pipes/shared-pipes.module */
      "aYsj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function () {
        return _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"];
      });
      /* harmony import */


      var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guard */
      "KsZM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"];
      });
      /***/

    },

    /***/
    "MviD":
    /*!****************************************************!*\
      !*** ./src/app/shared/modules/stat/stat.module.ts ***!
      \****************************************************/

    /*! exports provided: StatModule */

    /***/
    function MviD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatModule", function () {
        return StatModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stat.component */
      "4BSX");

      var StatModule = function StatModule() {
        _classCallCheck(this, StatModule);
      };

      StatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]],
        exports: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]]
      })], StatModule);
      /***/
    },

    /***/
    "N3a2":
    /*!***********************************************************!*\
      !*** ./src/app/MyComponents/header/header.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function N3a2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .navbar {\n  background-color: #5D86AE;\n  box-shadow: 0 4px 4px -2px #84afda;\n}\n:host .navbar .navbar-brand {\n  color: #fff;\n}\n:host .navbar .nav-item > a {\n  color: #fff;\n}\n:host .navbar .nav-item > a:hover {\n  color: #fff;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSx5QkFIa0I7RUFJbEIsa0NBQUE7QUFEUjtBQUdRO0VBQ0ksV0FBQTtBQURaO0FBSVE7RUFDSSxXQUFBO0FBRlo7QUFJWTtFQUNJLFdBQUE7QUFGaEI7QUFPSTtFQUNJLFlBQUE7QUFMUjtBQU9RO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQUxaO0FBT1k7RUFDSSxtQkFBQTtBQUxoQjtBQVVZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUmhCO0FBV1k7RUFDSSxTQUFBO0FBVGhCO0FBWVk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQVZoQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICM1RDg2QUU7XHJcbjpob3N0IHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggLTJweCAjODRhZmRhO1xyXG5cclxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2LWl0ZW0gPiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgICAgICAubWVkaWEge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lZGlhLWJvZHkge1xyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGFzdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AppComponent);
      /***/
    },

    /***/
    "UTFV":
    /*!************************************************************************************!*\
      !*** ./src/app/shared/modules/language-translation/language-translation.module.ts ***!
      \************************************************************************************/

    /*! exports provided: HttpLoaderFactory, LanguageTranslationModule */

    /***/
    function UTFV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageTranslationModule", function () {
        return LanguageTranslationModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /**
       * This module is used to language translations.
       * The translations are saved in a json file in /src/app/assets/i18n directory
       * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
       */
      // import ngx-translate and the http loader
      // ngx-translate - required for AOT compilation


      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
      }

      var LanguageTranslationModule = function LanguageTranslationModule(translate) {
        _classCallCheck(this, LanguageTranslationModule);

        this.translate = translate; // Gets Default language from browser if available, otherwise set English ad default

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
      };

      LanguageTranslationModule.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      };

      LanguageTranslationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
          }
        })],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], LanguageTranslationModule);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./material/material-module */
      "kMuZ");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");
      /* harmony import */


      var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-order-pipe */
      "cudM");
      /* harmony import */


      var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared */
      "M0ag");
      /* harmony import */


      var _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/modules/language-translation/language-translation.module */
      "UTFV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-order-pipe */
      "JMRq");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./signup/signup.component */
      "rd1V");
      /* harmony import */


      var _MyComponents_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./MyComponents/header/header.component */
      "xaK2");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng2-file-upload */
      "pYyI");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_15__["LanguageTranslationModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8__["Ng2OrderModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_17__["OrderModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__["FileUploadModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"], _MyComponents_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"]],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "aYsj":
    /*!*****************************************************!*\
      !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
      \*****************************************************/

    /*! exports provided: SharedPipesModule */

    /***/
    function aYsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function () {
        return SharedPipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedPipesModule = function SharedPipesModule() {
        _classCallCheck(this, SharedPipesModule);
      };

      SharedPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: []
      })], SharedPipesModule);
      /***/
    },

    /***/
    "c4wb":
    /*!*********************************************************!*\
      !*** ./src/app/shared/modules/stat/stat.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function c4wb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "eRTK":
    /*!********************************************!*\
      !*** ./src/app/shared/guard/auth.guard.ts ***!
      \********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function eRTK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (localStorage.getItem('token')) {
              return true;
            }

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "kMuZ":
    /*!*********************************************!*\
      !*** ./src/app/material/material-module.ts ***!
      \*********************************************/

    /*! exports provided: MaterialModule */

    /***/
    function kMuZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      })], MaterialModule);
      /***/
    },

    /***/
    "rd1V":
    /*!********************************************!*\
      !*** ./src/app/signup/signup.component.ts ***!
      \********************************************/

    /*! exports provided: SignupComponent */

    /***/
    function rd1V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.component.html */
      "zwQV");
      /* harmony import */


      var _signup_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.component.css */
      "0Ddd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(formbuilder, http, router //navigate to other page
        ) {
          _classCallCheck(this, SignupComponent);

          this.formbuilder = formbuilder;
          this.http = http;
          this.router = router;
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signupForm = this.formbuilder.group({
              name: [''],
              email: [''],
              password: ['']
            });
          }
        }, {
          key: "signUp",
          value: function signUp() {
            var _this = this;

            this.http.post("https://em-system-heroku.herokuapp.com/user/signup", this.signupForm.value).subscribe(function (res) {
              alert("signup successful");

              _this.signupForm.reset();

              _this.router.navigate(['login']);
            }, function (err) {
              alert("something wrong");
            });
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] //navigate to other page
      ])], SignupComponent);
      /***/
    },

    /***/
    "vH0B":
    /*!*****************************************!*\
      !*** ./src/app/shared/modules/index.ts ***!
      \*****************************************/

    /*! exports provided: PageHeaderModule, StatModule */

    /***/
    function vH0B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-header/page-header.module */
      "+Sv0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
        return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"];
      });
      /* harmony import */


      var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stat/stat.module */
      "MviD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatModule", function () {
        return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"];
      });
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared */
      "M0ag");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./signup/signup.component */
      "rd1V");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | layout-layout-module */
          [__webpack_require__.e("common"), __webpack_require__.e("layout-layout-module")]).then(__webpack_require__.bind(null,
          /*! ./layout/layout.module */
          "Tx//")).then(function (m) {
            return m.LayoutModule;
          });
        },
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | server-error-server-error-module */
          "server-error-server-error-module").then(__webpack_require__.bind(null,
          /*! ./server-error/server-error.module */
          "3sFj")).then(function (m) {
            return m.ServerErrorModule;
          });
        }
      }, {
        path: 'access-denied',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | access-denied-access-denied-module */
          "access-denied-access-denied-module").then(__webpack_require__.bind(null,
          /*! ./access-denied/access-denied.module */
          "LzIi")).then(function (m) {
            return m.AccessDeniedModule;
          });
        }
      }, {
        path: 'not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | not-found-not-found-module */
          "not-found-not-found-module").then(__webpack_require__.bind(null,
          /*! ./not-found/not-found.module */
          "QFL/")).then(function (m) {
            return m.NotFoundModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'not-found'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xaK2":
    /*!*********************************************************!*\
      !*** ./src/app/MyComponents/header/header.component.ts ***!
      \*********************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function xaK2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "zxmw");
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.scss */
      "N3a2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router) {
          var _this2 = this;

          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"] && window.innerWidth <= 992 && _this2.isToggled()) {
              _this2.toggleSidebar();
            }
          });
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pushRightClass = 'push-right';
          }
        }, {
          key: "isToggled",
          value: function isToggled() {
            var dom = document.querySelector('body');
            return dom.classList.contains(this.pushRightClass);
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            var dom = document.querySelector('body');
            dom.classList.toggle(this.pushRightClass);
          }
        }, {
          key: "rltAndLtr",
          value: function rltAndLtr() {
            var dom = document.querySelector('body');
            dom.classList.toggle('rtl');
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            localStorage.removeItem('isLoggedin');
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], HeaderComponent);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zuw5":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function zuw5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card text-white bg-{{ bgClass }}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{ icon }} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{ count }}</div>\n                <div class=\"d-block\">{{ label }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">View Details {{ data }}</span>\n        <a class=\"float-right card-inverse\" href=\"javascript:void(0)\">\n            <span><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "zwQV":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function zwQV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <h1 class=\"text-center\">Sign Up Form</h1>\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"signUp()\">\n        <div class=\"mb-3\">\n            <label for=\"exampleInputEmail1\" class=\"form-label\">Name</label>\n            <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"namelHelp\">\n          </div>\n        <div class=\"mb-3\">\n          <label for=\"exampleInputEmail1\" class=\"form-label\">Email</label>\n          <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\">\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"exampleInputPassword1\" class=\"form-label\">Password</label>\n          <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Sign up</button>\n      </form>\n      <a routerLink=\"/login\">Already registered? Click to login!!</a>\n</div>\n\n";
      /***/
    },

    /***/
    "zxmw":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MyComponents/header/header.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zxmw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">EMS</a>\n    <button (click)=\"toggleSidebar()\" class=\"navbar-toggler\" type=\"button\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <i aria-hidden=\"true\" class=\"fa fa-bars text-muted\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <!-- <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" placeholder=\"{{ 'Search' | translate }}\" type=\"text\" />\n        </form> -->\n        <ul class=\"navbar-nav ml-auto\">\n            <!-- <li class=\"nav-item d-none d-xl-block\">\n                <a\n                    class=\"nav-link btn mt-1\"\n                    href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-7/archive/master.zip\"\n                    role=\"button\"\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\n                >\n                    {{ 'Download Now' | translate }}\n                </a>\n            </li>\n            &nbsp;\n            <li class=\"nav-item\">\n                <a\n                    (click)=\"rltAndLtr()\"\n                    class=\"nav-link mt-1\"\n                    href=\"javascript:void(0)\"\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\n                >\n                    RTL/LTR\n                </a>\n            </li>\n            &nbsp;\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li> -->\n                <!-- </ul>\n            </li> -->\n            <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\n                    </a>\n                    <li class=\"dropdown-divider\"></li>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'View All' | translate }}\n                    </a>\n                </div>\n            </li> -->\n            <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a (click)=\"changeLang('en')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'English' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('fr')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'French' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('ur')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Urdu' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('es')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Spanish' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('it')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Italian' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('fa')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Farsi' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('de')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'German' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('zh-CHS')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Simplified Chinese' | translate }}\n                    </a>\n                </div>\n            </li> -->\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-user\"></i> Admin <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n                    </a> -->\n                    <a (click)=\"onLogout()\" [routerLink]=\"['/login']\" class=\"dropdown-item\">\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map