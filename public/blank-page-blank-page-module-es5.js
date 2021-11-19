(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-page-blank-page-module"], {
    /***/
    "5hD5":
    /*!****************************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: BlankPageRoutingModule */

    /***/
    function hD5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankPageRoutingModule", function () {
        return BlankPageRoutingModule;
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


      var _blank_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blank-page.component */
      "F6Nd");

      var routes = [{
        path: '',
        component: _blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"]
      }];

      var BlankPageRoutingModule = function BlankPageRoutingModule() {
        _classCallCheck(this, BlankPageRoutingModule);
      };

      BlankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BlankPageRoutingModule);
      /***/
    },

    /***/
    "Cdpp":
    /*!*************************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function Cdpp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "F6Nd":
    /*!***********************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page.component.ts ***!
      \***********************************************************/

    /*! exports provided: BlankPageComponent */

    /***/
    function F6Nd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function () {
        return BlankPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blank_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blank-page.component.html */
      "zTMp");
      /* harmony import */


      var _blank_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blank-page.component.scss */
      "Cdpp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BlankPageComponent = /*#__PURE__*/function () {
        function BlankPageComponent() {
          _classCallCheck(this, BlankPageComponent);
        }

        _createClass(BlankPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlankPageComponent;
      }();

      BlankPageComponent.ctorParameters = function () {
        return [];
      };

      BlankPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blank-page',
        template: _raw_loader_blank_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blank_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BlankPageComponent);
      /***/
    },

    /***/
    "yUho":
    /*!********************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page.module.ts ***!
      \********************************************************/

    /*! exports provided: BlankPageModule */

    /***/
    function yUho(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankPageModule", function () {
        return BlankPageModule;
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


      var _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blank-page-routing.module */
      "5hD5");
      /* harmony import */


      var _blank_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./blank-page.component */
      "F6Nd");

      var BlankPageModule = function BlankPageModule() {
        _classCallCheck(this, BlankPageModule);
      };

      BlankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlankPageRoutingModule"]],
        declarations: [_blank_page_component__WEBPACK_IMPORTED_MODULE_4__["BlankPageComponent"]]
      })], BlankPageModule);
      /***/
    },

    /***/
    "zTMp":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/blank-page/blank-page.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zTMp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    }
  }]);
})();
//# sourceMappingURL=blank-page-blank-page-module-es5.js.map