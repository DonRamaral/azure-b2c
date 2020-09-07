(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css?family=Roboto&display=swap\" rel=\"stylesheet\">\r\n<link href='https://fonts.googleapis.com/css?family=Hind' rel='stylesheet'>\r\n\r\n<div class=\"page-container\">\r\n    <div class=\"content-wrap\">\r\n        <div class=\"container-fluid h-100\">\r\n            <div class=\"row flex-nowrap h-100\">\r\n                <div class=\"col-sm-1 sidebar-container sidebar-width fixed-top h-100\" *ngIf=\"displayNavigation()\">\r\n                    <app-sidebar></app-sidebar>\r\n                </div>\r\n                <div class=\"col-sm-1 invisible sidebar-spacer sidebar-width h-100\" *ngIf=\"displayNavigation()\"></div>\r\n\r\n                <div class=\"col-sm-10 background-style\" style=\"padding-left: 80px; padding-right: 65px;\">\r\n                    <div class=\"row flex-nowrap no-gutters\" *ngIf=\"displayNavigation()\">\r\n                        <div class=\"col-sm-12 fixed-top header\" [ngClass]=\"{'scroll-shadow': scrolled}\">\r\n                            <app-header></app-header>\r\n                        </div>\r\n                        <div class=\"col-sm-12 invisible header-spacer\"></div>\r\n                    </div>\r\n                    <div class=\"row flex-nowrap no-gutters\"\r\n                        [ngClass]=\"{'reports-section': router.url.startsWith('/reports')}\">\r\n                        <div class=\"col-sm-12\">\r\n                            <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\" [ngClass]=\"{'footer-sidebar-spacing': displayNavigation()}\" *ngIf=\"!router.url.startsWith('/reports')\">\r\n        <div class=\"copyright-container\">\r\n            <span>{{'footer.copyright-info' | translate}}</span>\r\n        </div> \r\n        <div class=\"links-container\">\r\n            <a target=\"_blank\" href=\"https://www.adacap.com/terms-and-conditions/\">{{'footer.terms-of-use' | translate}}</a>,\r\n            <a target=\"_blank\" href=\"/privacy-statement\">{{'footer.privacy-statement' | translate}}</a>,\r\n            <a target=\"_blank\" href=\"https://www.adacap.com/commitment-to-integrity/\">{{'footer.compliance' | translate}}</a>,\r\n            <div (click)=\"reOpenCookieWindow()\"><span>{{'footer.cookies' | translate}}</span></div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/navigation/header/header.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/navigation/header/header.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <nav class=\"navbar\" style=\"padding-top: 0; float: right;\">\r\n            <div class=\"d-flex\">\r\n\r\n                <kendo-dropdownlist class=\"p-2\" [data]=\"testLanguageService.availableLanguages\"\r\n                    style=\"height: 50px; margin-top: 25px; display: none;\" (valueChange)=\"languageChange($event)\"\r\n                    [(ngModel)]=\"testLanguageService.currentLanguage\">\r\n                </kendo-dropdownlist>\r\n\r\n                <img class=\"icon image-button\" src=\"../../../../assets/img/icon-logout.svg\"\r\n                    title=\"{{'header.logout' | translate}}\" (click)=\"onLogOut()\" />\r\n                <img class=\"icon\" src=\"../../../../assets/img/icon-user.svg\" />\r\n                <span class=\"username\">\r\n                    {{'header.hello' | translate}}, {{DisplayName}}! ({{DisplayRole}})\r\n                </span>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/navigation/sidebar/sidebar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/navigation/sidebar/sidebar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav flex-column\">\r\n    <li routerLink=\"/dashboard\" class=\"sidebar-item\"\r\n        [ngClass]=\"{'sidebar-item-selected': router.url.startsWith('/dashboard')}\"> Dashboard\r\n    </li>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/public/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/public/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/public/invitation-expired/invitation-expired.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/public/invitation-expired/invitation-expired.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"brand-image\">\r\n    <img src=\"/assets/img/logo.png\" class=\"logo\">\r\n</div>\r\n\r\n<div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col-6 error-page-image\">\r\n        <img src=\"/assets/img/graphic-error.png\" class=\"error-img\">\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <span class=\"main-message\">\r\n            {{'invitation-expired.main-message' | translate}}\r\n        </span>\r\n        <span class=\"sub-message\">\r\n            {{'invitation-expired.sub-message' | translate}}\r\n        </span>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/public/unauthorised/unauthorised.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/public/unauthorised/unauthorised.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"brand-image\">\r\n    <img src=\"/assets/img/logo.png\" class=\"logo\">\r\n</div>\r\n\r\n<div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col-6 error-page-image\">\r\n        <img src=\"/assets/img/graphic-error.png\" class=\"error-img\">\r\n    </div>\r\n    <div class=\"col-6\">\r\n        <span class=\"main-message\">\r\n            {{'unauthorised.main-message' | translate}}\r\n        </span>\r\n        <span class=\"sub-message\">\r\n            {{'unauthorised.sub-message' | translate}}\r\n        </span>\r\n\r\n        <span class=\"error-code\"><img src=\"/assets/img/icon-cancel.svg\">\r\n            {{'unauthorised.error-code' | translate}}</span>\r\n        <button (click)=\"onBackToLoginPage()\"\r\n            class=\"button-primary\">{{'unauthorised.back-button' | translate}}</button>\r\n        <div style=\"margin-top: 60px; width: 480px; border-bottom: 1px solid black;\"> &nbsp;\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar-width {\r\n  width: 230px;\r\n  max-width: 230px;\r\n  min-width: 230px;\r\n}\r\n\r\n.sidebar-container {\r\n  padding: 0;\r\n  background-color: #fff;\r\n  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.11);\r\n  z-index: 1031;\r\n}\r\n\r\n.sidebar-spacer {\r\n  padding: 0px;\r\n}\r\n\r\n.scroll-shadow {\r\n  box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.11);\r\n}\r\n\r\n.header {\r\n  height: 104px;\r\n  background-color: #f6f6f6;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.header-spacer {\r\n  height: 104px;\r\n}\r\n\r\n.copyright-container {\r\n  position: absolute;\r\n  text-align: left;\r\n  white-space: pre-wrap;\r\n  margin-left: 10px;\r\n  font-size: 12px;\r\n  line-height: 14px;\r\n  bottom: 0;\r\n}\r\n\r\n.links-container {\r\n  text-align: center;\r\n  font-size: 12px;\r\n  line-height: 14px;\r\n  font-style: italic;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n}\r\n\r\n.links-container a, .links-container div{\r\n  color: #242020;\r\n  text-decoration: underline;\r\n  display: inline;\r\n  cursor: pointer;\r\n}\r\n\r\n.page-container {\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n.content-wrap {\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.footer {\r\n  position: absolute;\r\n  height: 100px;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 100;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.footer.footer-sidebar-spacing {\r\n  left: 230px;\r\n  width: Calc(100% - 230px);\r\n}\r\n\r\n.white-box {\r\n  background-color: #f6f6f6;\r\n  padding-left: 80px;\r\n  padding-right: 80px;\r\n}\r\n\r\n.reports-section {\r\n  height: 70vh;\r\n}\r\n\r\n.background-style {\r\n  background-color: #f6f6f6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNEJBQW9CO0VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLXdpZHRoIHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMzBweDtcclxuICBtaW4td2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAycHggMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKTtcclxuICB6LWluZGV4OiAxMDMxO1xyXG59XHJcblxyXG4uc2lkZWJhci1zcGFjZXIge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnNjcm9sbC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgN3B4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmhlYWRlci1zcGFjZXIge1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmxpbmtzLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGlua3MtY29udGFpbmVyIGEsIC5saW5rcy1jb250YWluZXIgZGl2e1xyXG4gIGNvbG9yOiAjMjQyMDIwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVudC13cmFwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLmZvb3Rlci1zaWRlYmFyLXNwYWNpbmcge1xyXG4gIGxlZnQ6IDIzMHB4O1xyXG4gIHdpZHRoOiBDYWxjKDEwMCUgLSAyMzBweCk7XHJcbn1cclxuXHJcbi53aGl0ZS1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5yZXBvcnRzLXNlY3Rpb24ge1xyXG4gIGhlaWdodDogNzB2aDtcclxufSBcclxuXHJcbi5iYWNrZ3JvdW5kLXN0eWxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.scrolled = false;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializeSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
        this.revokeChoiceSubscription.unsubscribe();
        this.noCookieLawSubscription.unsubscribe();
    };
    AppComponent.prototype.reOpenCookieWindow = function () {
    };
    AppComponent.prototype.onWindowScroll = function () {
        var scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.scrolled = (scrollDistance > 0);
    };
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    AppComponent.prototype.displayNavigation = function () {
        var locationContainsAnySegment;
        var segment = [
            'login',
            'signup',
            'unauthorised',
            'internal-server-error',
            'invitation-expired',
            'forgot-password',
            'privacy-statement',
            'state-specific-privacy',
            'forbidden',
            'timeout',
            'down-for-maintenance'
        ];
        segment.map(function (value) {
            if (location.href.indexOf(value) > -1)
                locationContainsAnySegment = true;
        });
        return !locationContainsAnySegment;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", [])
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: loadEnvironmentConfigService, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEnvironmentConfigService", function() { return loadEnvironmentConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_app_config_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/app-config/app-config.service */ "./src/app/services/app-config/app-config.service.ts");
/* harmony import */ var _shared_functions_fetchMsalModuleConfigSynchronously__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/functions/fetchMsalModuleConfigSynchronously */ "./src/app/shared/functions/fetchMsalModuleConfigSynchronously.ts");
/* harmony import */ var _azure_msal_angular_dist_msal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @azure/msal-angular/dist/msal.service */ "./node_modules/@azure/msal-angular/dist/msal.service.js");
/* harmony import */ var _azure_msal_angular_dist_msal_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_angular_dist_msal_service__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _services_interceptors_rome_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/interceptors/rome-interceptor.service */ "./src/app/services/interceptors/rome-interceptor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













function loadEnvironmentConfigService(configService) {
    return function () { return configService.loadEnvironmentConfig(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"]
            ],
            providers: [
                _services_app_config_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["MsalService"],
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["BroadcastService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: loadEnvironmentConfigService,
                    deps: [_services_app_config_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"]],
                    multi: true
                },
                {
                    provide: _azure_msal_angular_dist_msal_service__WEBPACK_IMPORTED_MODULE_9__["MSAL_CONFIG"],
                    useFactory: function () {
                        return Object(_shared_functions_fetchMsalModuleConfigSynchronously__WEBPACK_IMPORTED_MODULE_8__["fetchMsalModuleConfigSynchronously"])();
                    }
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _services_interceptors_rome_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["RomeInterceptorService"],
                    deps: [
                        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["MsalService"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
                    ],
                    multi: true
                }
            ],
            exports: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/core/navigation/header/header.component.ts");
/* harmony import */ var _navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/sidebar/sidebar.component */ "./src/app/core/navigation/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/unauthorised/unauthorised.component */ "./src/app/core/public/unauthorised/unauthorised.component.ts");
/* harmony import */ var _public_invitation_expired_invitation_expired_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/invitation-expired/invitation-expired.component */ "./src/app/core/public/invitation-expired/invitation-expired.component.ts");
/* harmony import */ var _public_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/forgot-password/forgot-password.component */ "./src/app/core/public/forgot-password/forgot-password.component.ts");










var routes = [
    { path: 'invitation-expired', component: _public_invitation_expired_invitation_expired_component__WEBPACK_IMPORTED_MODULE_8__["InvitationExpiredComponent"] },
    { path: 'forgot-password', component: _public_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"] },
    { path: 'unauthorised', component: _public_unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_7__["UnauthorisedComponent"] },
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _public_unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_7__["UnauthorisedComponent"],
                _public_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
                _public_invitation_expired_invitation_expired_component__WEBPACK_IMPORTED_MODULE_8__["InvitationExpiredComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
            exports: [
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/navigation/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/navigation/header/header.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\r\n    margin: 40px 10px 0px 40px;\r\n    height: 24px;\r\n}\r\n\r\n.username {\r\n    padding: 40px 65px 10px 15px;\r\n}\r\n\r\n.header {\r\n    height: 104px;\r\n    background-color: #f6f6f6;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n.header-spacer {\r\n    height: 104px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw0QkFBb0I7SUFBcEIsb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29yZS9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICAgIG1hcmdpbjogNDBweCAxMHB4IDBweCA0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gICAgcGFkZGluZzogNDBweCA2NXB4IDEwcHggMTVweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXNwYWNlciB7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/core/navigation/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/navigation/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__);




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, msalService) {
        this.router = router;
        this.msalService = msalService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.displayUserName();
    };
    HeaderComponent.prototype.displayUserName = function () {
        if (this.msalService.getUser()) {
            this.DisplayName = this.msalService.getUser().name;
        }
    };
    HeaderComponent.prototype.onLogOut = function () {
        this.router.navigate(['/logout']);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/navigation/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/core/navigation/header/header.component.css")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation/sidebar/sidebar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/core/navigation/sidebar/sidebar.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav_bar_item {\r\n  padding: 10px;\r\n}\r\n\r\n.sidebar-container {\r\n  /* max-width: 230px; */\r\n  padding: 0;\r\n  background-color: #fff;\r\n  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.11);\r\n  z-index: 1031;\r\n}\r\n\r\n.sidebar-width {\r\n  width: 230px;\r\n  max-width: 230px;\r\n  min-width: 230px;\r\n}\r\n\r\n.sidebar-logo {\r\n  width: 200px;\r\n  height: auto;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.sidebar-icon {\r\n  width: 16px;\r\n  height: auto;\r\n  margin: 20px 10px 25px 40px;\r\n}\r\n\r\n.sidebar-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.sidebar-item:focus {\r\n  outline: 0;\r\n}\r\n\r\n.sidebar-item:hover {\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.sidebar-item-selected {\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.textContainer{\r\n  height: 100%; \r\n  width: 174px; \r\n  float: right; \r\n  padding-left: 10px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.imgContainer{\r\n  height: 100%; \r\n  width: 56px; \r\n  float: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZpZ2F0aW9uL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdmlnYXRpb24vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2X2Jhcl9pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1jb250YWluZXIge1xyXG4gIC8qIG1heC13aWR0aDogMjMwcHg7ICovXHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gIHotaW5kZXg6IDEwMzE7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXdpZHRoIHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMzBweDtcclxuICBtaW4td2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1pY29uIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHggMjVweCA0MHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW06Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW0tc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbi50ZXh0Q29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTsgXHJcbiAgd2lkdGg6IDE3NHB4OyBcclxuICBmbG9hdDogcmlnaHQ7IFxyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uaW1nQ29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTsgXHJcbiAgd2lkdGg6IDU2cHg7IFxyXG4gIGZsb2F0OiBsZWZ0O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/core/navigation/sidebar/sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/navigation/sidebar/sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__);




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, broadcastService) {
        this.router = router;
        this.broadcastService = broadcastService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/navigation/sidebar/sidebar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/core/navigation/sidebar/sidebar.component.css")).default]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/public/forgot-password/forgot-password.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/core/public/forgot-password/forgot-password.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHVibGljL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/public/forgot-password/forgot-password.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/public/forgot-password/forgot-password.component.ts ***!
  \**************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_app_config_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-config/app-config.service */ "./src/app/services/app-config/app-config.service.ts");




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.navigateToForgotPassword();
    };
    ForgotPasswordComponent.prototype.navigateToForgotPassword = function () {
        this.authService.authority = this.authService.authority.replace(src_app_services_app_config_app_config_service__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"].b2cAuthenticationFlow.toLowerCase(), src_app_services_app_config_app_config_service__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"].b2cForgotPasswordFlow.toLowerCase());
        this.authService.loginRedirect();
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/public/forgot-password/forgot-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/core/public/forgot-password/forgot-password.component.css")).default]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/core/public/invitation-expired/invitation-expired.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/core/public/invitation-expired/invitation-expired.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\r\n    width: 190px;\r\n    height: auto;\r\n}\r\n\r\n.error-img {\r\n    width: 488px;\r\n    height: auto;\r\n}\r\n\r\n.main-message, .sub-message, .error-code {\r\n    display: block;\r\n    margin-bottom: 40px;\r\n    color: #242020;\r\n}\r\n\r\n.main-message {\r\n    font-weight: 700;\r\n    font-size: 76px;\r\n    line-height: 77px;\r\n}\r\n\r\n.sub-message {\r\n    font-size: 21px;\r\n    line-height: 27px;\r\n}\r\n\r\n.error-code {\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n}\r\n\r\n.brand-iamge {\r\n    position: absolute;\r\n    margin: 1em 0 0 1em;\r\n}\r\n\r\n.error-page-image {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wdWJsaWMvaW52aXRhdGlvbi1leHBpcmVkL2ludml0YXRpb24tZXhwaXJlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wdWJsaWMvaW52aXRhdGlvbi1leHBpcmVkL2ludml0YXRpb24tZXhwaXJlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZXJyb3ItaW1nIHtcclxuICAgIHdpZHRoOiA0ODhweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm1haW4tbWVzc2FnZSwgLnN1Yi1tZXNzYWdlLCAuZXJyb3ItY29kZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBjb2xvcjogIzI0MjAyMDtcclxufVxyXG5cclxuLm1haW4tbWVzc2FnZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiA3NnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDc3cHg7XHJcbn1cclxuXHJcbi5zdWItbWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxufVxyXG5cclxuLmVycm9yLWNvZGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5icmFuZC1pYW1nZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDFlbSAwIDAgMWVtO1xyXG59XHJcblxyXG4uZXJyb3ItcGFnZS1pbWFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/public/invitation-expired/invitation-expired.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/core/public/invitation-expired/invitation-expired.component.ts ***!
  \********************************************************************************/
/*! exports provided: InvitationExpiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationExpiredComponent", function() { return InvitationExpiredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var InvitationExpiredComponent = /** @class */ (function () {
    function InvitationExpiredComponent(router) {
        this.router = router;
        this.errorItemKey = 'msal.error.description';
    }
    InvitationExpiredComponent.prototype.ngOnInit = function () {
        this.authError = localStorage.getItem(this.errorItemKey) ? localStorage.getItem(this.errorItemKey) : null;
        if (this.authError && this.userInvitationHasExpiredError()) {
            localStorage.removeItem(this.errorItemKey);
            this.requestId = this.getCorrelationId();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    InvitationExpiredComponent.prototype.getCorrelationId = function () {
        var regexp = new RegExp('(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}');
        return regexp.exec(this.authError)[0];
    };
    InvitationExpiredComponent.prototype.userInvitationHasExpiredError = function () {
        return this.authError && this.authError.indexOf('AADB2C90208') > -1;
    };
    InvitationExpiredComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    InvitationExpiredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invitation-expired',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invitation-expired.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/public/invitation-expired/invitation-expired.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invitation-expired.component.css */ "./src/app/core/public/invitation-expired/invitation-expired.component.css")).default]
        })
    ], InvitationExpiredComponent);
    return InvitationExpiredComponent;
}());



/***/ }),

/***/ "./src/app/core/public/unauthorised/unauthorised.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/public/unauthorised/unauthorised.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\r\n    width: 190px;\r\n    height: auto;\r\n}\r\n\r\n.error-img {\r\n    width: 488px;\r\n    height: auto;\r\n}\r\n\r\n.main-message, .sub-message, .error-code {\r\n    display: block;\r\n    margin-bottom: 40px;\r\n    color: #242020;\r\n}\r\n\r\n.main-message {\r\n    font-weight: 700;\r\n    font-size: 76px;\r\n    line-height: 77px;\r\n}\r\n\r\n.sub-message {\r\n    font-size: 21px;\r\n    line-height: 27px;\r\n}\r\n\r\n.error-code {\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n}\r\n\r\n.brand-iamge {\r\n    position: absolute;\r\n    margin: 1em 0 0 1em;\r\n}\r\n\r\n.error-page-image {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wdWJsaWMvdW5hdXRob3Jpc2VkL3VuYXV0aG9yaXNlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wdWJsaWMvdW5hdXRob3Jpc2VkL3VuYXV0aG9yaXNlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZXJyb3ItaW1nIHtcclxuICAgIHdpZHRoOiA0ODhweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm1haW4tbWVzc2FnZSwgLnN1Yi1tZXNzYWdlLCAuZXJyb3ItY29kZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBjb2xvcjogIzI0MjAyMDtcclxufVxyXG5cclxuLm1haW4tbWVzc2FnZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiA3NnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDc3cHg7XHJcbn1cclxuXHJcbi5zdWItbWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxufVxyXG5cclxuLmVycm9yLWNvZGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5icmFuZC1pYW1nZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDFlbSAwIDAgMWVtO1xyXG59XHJcblxyXG4uZXJyb3ItcGFnZS1pbWFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/public/unauthorised/unauthorised.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/public/unauthorised/unauthorised.component.ts ***!
  \********************************************************************/
/*! exports provided: UnauthorisedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorisedComponent", function() { return UnauthorisedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__);



var UnauthorisedComponent = /** @class */ (function () {
    function UnauthorisedComponent(msalService) {
        this.msalService = msalService;
    }
    UnauthorisedComponent.prototype.ngOnInit = function () {
    };
    UnauthorisedComponent.prototype.onBackToLoginPage = function () {
        this.msalService.logout();
    };
    UnauthorisedComponent.ctorParameters = function () { return [
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"] }
    ]; };
    UnauthorisedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unauthorised',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unauthorised.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/public/unauthorised/unauthorised.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unauthorised.component.css */ "./src/app/core/public/unauthorised/unauthorised.component.css")).default]
        })
    ], UnauthorisedComponent);
    return UnauthorisedComponent;
}());



/***/ }),

/***/ "./src/app/services/app-config/app-config.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/app-config/app-config.service.ts ***!
  \***********************************************************/
/*! exports provided: APP_CONFIG_SERVICE, APP_CONFIG, AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG_SERVICE", function() { return APP_CONFIG_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var APP_CONFIG_SERVICE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('APP_CONFIG_SERVICE');
var APP_CONFIG;
var AppConfigService = /** @class */ (function () {
    function AppConfigService(http) {
        this.http = http;
        this.subscriptionAlive = true;
    }
    AppConfigService.prototype.ngOnDestroy = function () {
        this.subscriptionAlive = false;
    };
    AppConfigService.prototype.loadEnvironmentConfig = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/assets/config/environment.config.json').catch(function (error) {
                reject(true);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw('Server error');
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.subscriptionAlive; }))
                .subscribe(function (envResponse) {
                APP_CONFIG = envResponse;
                resolve(true);
            });
        });
    };
    AppConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppConfigService);
    return AppConfigService;
}());



/***/ }),

/***/ "./src/app/services/interceptors/rome-interceptor.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/interceptors/rome-interceptor.service.ts ***!
  \*******************************************************************/
/*! exports provided: parseJwt, RomeInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJwt", function() { return parseJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RomeInterceptorService", function() { return RomeInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_functions_fetchMsalModuleConfigSynchronously__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/functions/fetchMsalModuleConfigSynchronously */ "./src/app/shared/functions/fetchMsalModuleConfigSynchronously.ts");








function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
;
var RomeInterceptorService = /** @class */ (function () {
    function RomeInterceptorService(msalService, router) {
        this.msalService = msalService;
        this.router = router;
        this.MsalConfig = Object(_shared_functions_fetchMsalModuleConfigSynchronously__WEBPACK_IMPORTED_MODULE_7__["fetchMsalModuleConfigSynchronously"])();
    }
    RomeInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var auth = this.msalService.getUser();
        if (req.url.indexOf('api/v1') > -1 && auth) {
            if (this.tokenHasExpired())
                this.router.navigate(['logout']);
            else {
                if (this.refreshToken())
                    this.acquireTokenSilent();
                req = req.clone({
                    setHeaders: {
                        "Authorization": "Bearer " + localStorage["msal.idtoken"]
                    }
                });
                return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                        switch (error.status) {
                            case 401:
                                _this.router.navigate(['unauthorised']);
                                break;
                            case 403:
                            case 405:
                                _this.router.navigate(['forbidden']);
                                break;
                            case 408:
                            case 504:
                                _this.router.navigate(['timeout']);
                                break;
                            case 500:
                                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.error instanceof Blob && error.error.type === "application/json") {
                                    return new Promise(function (resolve, reject) {
                                        var reader = new FileReader();
                                        reader.onload = function (e) {
                                            var errmsg = JSON.parse(e.target.result);
                                            var requestId = errmsg.requestId;
                                            _this.router.navigate(['internal-server-error', { requestId: requestId }]);
                                        };
                                        reader.readAsText(error.error);
                                    });
                                }
                                else {
                                    var requestId = error.error.requestId;
                                    _this.router.navigate(['internal-server-error', { requestId: requestId }]);
                                }
                                break;
                        }
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }));
            }
        }
        else
            return next.handle(req);
    };
    RomeInterceptorService.prototype.tokenHasExpired = function () {
        var dateTimeNow = new Date().getTime() / 1000;
        if (dateTimeNow <= parseJwt(this.msalService.getUser().idToken).exp) {
            return false;
        }
        else {
            return true;
        }
    };
    RomeInterceptorService.prototype.refreshToken = function () {
        var timeToRenewToken = new Date().getTime() + this.MsalConfig.renewTokenBeforeExpires;
        if (timeToRenewToken >= parseJwt(this.msalService.getUser().idToken).exp)
            return true;
        else
            return false;
    };
    RomeInterceptorService.prototype.acquireTokenSilent = function () {
        var _this = this;
        var loginHint = "login_hint=" + parseJwt(this.msalService.getUser().idToken).email;
        this.msalService.acquireTokenSilent([this.MsalConfig.clientID], this.MsalConfig.authority, this.msalService.getUser(), loginHint)
            .then(function (response) {
            localStorage.setItem('msal.idtoken', response);
        })
            .catch(function (err) {
            if (err.name === "InteractionRequiredAuthError") {
                return _this.msalService.acquireTokenPopup([_this.MsalConfig.clientID], _this.MsalConfig.authority, _this.msalService.getUser(), loginHint)
                    .then(function (response) {
                    localStorage.setItem('msal.idtoken', response);
                })
                    .catch(function (err) {
                });
            }
        });
    };
    RomeInterceptorService.ctorParameters = function () { return [
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["MsalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RomeInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RomeInterceptorService);
    return RomeInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/functions/fetchMsalModuleConfigSynchronously.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/functions/fetchMsalModuleConfigSynchronously.ts ***!
  \************************************************************************/
/*! exports provided: fetchMsalModuleConfigSynchronously */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMsalModuleConfigSynchronously", function() { return fetchMsalModuleConfigSynchronously; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__);


function fetchMsalModuleConfigSynchronously() {
    var config = new _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalConfig"]();
    var baseUrl = document.getElementsByTagName('base')[0].href;
    var url = baseUrl + "assets/config/msal.config.json";
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', url, false);
    req.onload = function () {
        var jsonResponse = JSON.parse(req.responseText);
        Object.assign(config, jsonResponse);
    };
    req.send(null);
    return config;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





var providers = [];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Git\Donramaral\azure-b2c\b2c-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map