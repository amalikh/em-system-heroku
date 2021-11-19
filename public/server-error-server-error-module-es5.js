(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["server-error-server-error-module"], {
    /***/
    "1xxk":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/server-error/server-error.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xxk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    server-error works!\n</p>\n";
      /***/
    },

    /***/
    "3sFj":
    /*!*****************************************************!*\
      !*** ./src/app/server-error/server-error.module.ts ***!
      \*****************************************************/

    /*! exports provided: ServerErrorModule */

    /***/
    function sFj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorModule", function () {
        return ServerErrorModule;
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


      var _server_error_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./server-error-routing.module */
      "4WwZ");
      /* harmony import */


      var _server_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./server-error.component */
      "Dkhr");

      var ServerErrorModule = function ServerErrorModule() {
        _classCallCheck(this, ServerErrorModule);
      };

      ServerErrorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _server_error_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServerErrorRoutingModule"]],
        declarations: [_server_error_component__WEBPACK_IMPORTED_MODULE_4__["ServerErrorComponent"]]
      })], ServerErrorModule);
      /***/
    },

    /***/
    "4WwZ":
    /*!*************************************************************!*\
      !*** ./src/app/server-error/server-error-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ServerErrorRoutingModule */

    /***/
    function WwZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorRoutingModule", function () {
        return ServerErrorRoutingModule;
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


      var _server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./server-error.component */
      "Dkhr");

      var routes = [{
        path: '',
        component: _server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"]
      }];

      var ServerErrorRoutingModule = function ServerErrorRoutingModule() {
        _classCallCheck(this, ServerErrorRoutingModule);
      };

      ServerErrorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServerErrorRoutingModule);
      /***/
    },

    /***/
    "Dkhr":
    /*!********************************************************!*\
      !*** ./src/app/server-error/server-error.component.ts ***!
      \********************************************************/

    /*! exports provided: ServerErrorComponent */

    /***/
    function Dkhr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function () {
        return ServerErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./server-error.component.html */
      "1xxk");
      /* harmony import */


      var _server_error_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./server-error.component.scss */
      "mWsT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ServerErrorComponent = /*#__PURE__*/function () {
        function ServerErrorComponent() {
          _classCallCheck(this, ServerErrorComponent);
        }

        _createClass(ServerErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ServerErrorComponent;
      }();

      ServerErrorComponent.ctorParameters = function () {
        return [];
      };

      ServerErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-server-error',
        template: _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_server_error_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ServerErrorComponent);
      /***/
    },

    /***/
    "mWsT":
    /*!**********************************************************!*\
      !*** ./src/app/server-error/server-error.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function mWsT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=server-error-server-error-module-es5.js.map