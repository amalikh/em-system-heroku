(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-denied-access-denied-module"], {
    /***/
    "IVVP":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access-denied/access-denied.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IVVP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    access-denied works!\n</p>\n";
      /***/
    },

    /***/
    "LzIi":
    /*!*******************************************************!*\
      !*** ./src/app/access-denied/access-denied.module.ts ***!
      \*******************************************************/

    /*! exports provided: AccessDeniedModule */

    /***/
    function LzIi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessDeniedModule", function () {
        return AccessDeniedModule;
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


      var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./access-denied-routing.module */
      "uw8D");
      /* harmony import */


      var _access_denied_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./access-denied.component */
      "fezN");

      var AccessDeniedModule = function AccessDeniedModule() {
        _classCallCheck(this, AccessDeniedModule);
      };

      AccessDeniedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedRoutingModule"]],
        declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedComponent"]]
      })], AccessDeniedModule);
      /***/
    },

    /***/
    "bK41":
    /*!************************************************************!*\
      !*** ./src/app/access-denied/access-denied.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function bK41(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "fezN":
    /*!**********************************************************!*\
      !*** ./src/app/access-denied/access-denied.component.ts ***!
      \**********************************************************/

    /*! exports provided: AccessDeniedComponent */

    /***/
    function fezN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function () {
        return AccessDeniedComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_access_denied_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./access-denied.component.html */
      "IVVP");
      /* harmony import */


      var _access_denied_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./access-denied.component.scss */
      "bK41");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AccessDeniedComponent = /*#__PURE__*/function () {
        function AccessDeniedComponent() {
          _classCallCheck(this, AccessDeniedComponent);
        }

        _createClass(AccessDeniedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AccessDeniedComponent;
      }();

      AccessDeniedComponent.ctorParameters = function () {
        return [];
      };

      AccessDeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-access-denied',
        template: _raw_loader_access_denied_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_access_denied_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AccessDeniedComponent);
      /***/
    },

    /***/
    "uw8D":
    /*!***************************************************************!*\
      !*** ./src/app/access-denied/access-denied-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AccessDeniedRoutingModule */

    /***/
    function uw8D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessDeniedRoutingModule", function () {
        return AccessDeniedRoutingModule;
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


      var _access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./access-denied.component */
      "fezN");

      var routes = [{
        path: '',
        component: _access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"]
      }];

      var AccessDeniedRoutingModule = function AccessDeniedRoutingModule() {
        _classCallCheck(this, AccessDeniedRoutingModule);
      };

      AccessDeniedRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccessDeniedRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=access-denied-access-denied-module-es5.js.map