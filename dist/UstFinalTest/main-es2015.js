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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg\">\n    <br><br><br>\n<div class=\"container border border-secondary shadow-lg p-3 mb-5 bg-white rounded\" \nstyle=\"width:850px;max-width:850px;background-image: linear-gradient(to right,white, white);\"> \n    <link\n            href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n            rel=\"stylesheet\">\n    \n    \n            <div class=\"container\">\n                    <a routerLink=\"/view\"><img src=\"assets/back.jpg\" style=\"width:30px;\"/></a> \n                    <h3 class=\"d-flex justify-content-center\">ADD/EDIT VENDOR DETAILS</h3>\n                    <hr>\n                    <section id=\"cover\">\n                <div class=\"form-group row\">\n                 <div class=\"col-10\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"alphabet only\" pattern=\"/^[A-Za-z]+$/\" hidden>\n                 </div>\n                  </div>\n              <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">VENDOR NAME *</label>\n                     <div class=\"col-10\">\n                        <input class=\"form-control\" type=\"text\" placeholder=\"alphabet only\"\n                         pattern=\"/^[A-Za-z]+$/\" [(ngModel)]=\"vendorDetail.vName\" name=\"vName\" autocomplete=\"off\" required>\n                      </div>\n             </div>\n                                \n             <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">VENDOR ADDRESS *</label>\n                  <div class=\"col-10\">\n                     <input class=\"form-control\" type=\"text\" placeholder=\"alphabet only\"\n                   [(ngModel)]=\"vendorDetail.vAddress\" pattern=\"/^[A-Za-z]+$/\" name=\"vAddress\" autocomplete=\"off\" required>\n                  </div>\n             </div>\n             <div class=\"form-group row\">\n                 <label for=\"example-text-input\" class=\"col-2 col-form-label\">LOCATION *</label>\n                 <div class=\"col-10\">\n                 <select class=\"form-control\" [(ngModel)]=\"vendorDetail.vLocation\" name=\"vLocation\" required>                                                  \n                    <option>Trivandrum</option>\n                    <option>Chennai</option>\n                    <option>Bangalore</option>\n                 </select>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                        <label for=\"example-text-input\" class=\"col-2 col-form-label\">SERVICE *</label>\n                        <div class=\"col-10\">\n                            <input class=\"form-control\" [(ngModel)]=\"vendorDetail.vService\" name=\"vService\" type=\"text\" autocomplete=\"off\" id=\"\">\n                        </div>\n                    </div>\n                    \n                    <div class=\"form-group row\">\n                        <label for=\"example-datetime-local-input\" class=\"col-2 col-form-label\">PINCODE *</label>\n                        <div class=\"col-10\">\n                            <input class=\"form-control\" [(ngModel)]=\"vendorDetail.pincode\" type=\"text\" name=\"pincode\"  id=\"\" required>\n                        </div>\n                    </div><br/>\n\n                    <label style=\"margin-right:500px; font-weight: 150px; color:#3ec07b\"\n                     class=\"d-flex justify-content-center\">CONTACT PERSON DETAILS</label>\n                    <hr>\n\n                    <div class=\"form-group row\">\n                        <label for=\"example-text-input\" class=\"col-2 col-form-label\">NAME *</label>\n                        <div class=\"col-10\">\n                                <input class=\"form-control\" [(ngModel)]=\"vendorDetail.cName\" name=\"cName\" autocomplete=\"off\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"example-text-input\" class=\"col-2 col-form-label\">DEPARTMENT </label>\n                        <div class=\"col-10\">\n                                <input class=\"form-control\" [(ngModel)]=\"vendorDetail.department\"  name=\"department\" autocomplete=\"off\" required>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"example-email-input\" class=\"col-2 col-form-label\">EMAIL *</label>\n                        <div class=\"col-10\">\n                            <input class=\"form-control\" [(ngModel)]=\"vendorDetail.email\" name=\"email\" type=\"email\" autocomplete=\"off\" id=\"\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label for=\"example-tel-input\" class=\"col-2 col-form-label\">PHONE *</label>\n                        <div class=\"col-10\">\n                            <input class=\"form-control\" type=\"tel\" name=\"phone\" [(ngModel)]=\"vendorDetail.phone\" id=\"\" pattern =\"^[0-9]*$\" required>\n                        </div>\n                    </div>\n        \n                    <a routerLink=\"/view\" style=\"margin-left:300px\" (click)=\"add()\" type=\"button\" class=\"btn btn-primary\">SAVE</a>\n                    </section>\n                    </div>\n                    </div>\n                    <br><br>\n                            \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" >\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" ></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" ></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\n\n\n<section id=\"nav-bar\">\n    <nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n            <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.jpg\"></a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" \n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>  \n          </nav>\n</section>\n\n<div class=\"bg\"><br><br>\n    <div class=\"login-box\">\n        \n        <h2 style=\"margin-left: 350px;\">LOGIN</h2>\n        <form class=\"container\" style=\"margin-left: 350px;\" autocomplete=\"off\" (submit)=\"loginUser($event)\">\n        <div class=\"textbox\">\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n            <input type= \"text\" name=\"username\" required=\"\" placeholder=\"username\" required>\n        </div>\n        <div class=\"textbox\">\n            <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                <input type= \"password\" name=\"\" required=\"\"placeholder=\"password\"  required>\n                \n        </div>\n          <div class=\"input\">\n            <input type=\"submit\"  class=\"button\" value=\"LOGIN\">\n            <br/>\n           \n          </div>\n          <div >\n            \n          </div>\n     </form>  \n    </div>\n\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg\">\n    <br><br><br>\n<div class=\"container border border-secondary shadow-lg p-3 mb-5 bg-white rounded\" style=\"width:880px;max-width:870px;background-image: linear-gradient(to right,white, white);\"> \n<link rel=\"stylesheet\"\n    href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">\n    <a routerLink=\"\"><img src=\"assets/logout.png\" style=\"width:30px;\"/></a> \n    <a routerLink=\"/add\" class=\"btn btn-info\" style=\"float:right;\">ADD VENDOR</a>\n    <h4 style=\"margin-left:100px;font-size:20px\">VENDOR'S LIST</h4>\n\n<br/>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"container input-group md-form form-sm form-1 pl-0\" style=\"width:400px;\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text cyan lighten-2\" id=\"basic-text1\"><i class=\"fa fa-search\"\n          aria-hidden=\"true\"></i></span>\n    </div>\n    <input class=\"form-control my-0 py-1\" type=\"text\" placeholder=\"Search by name/service...\"  [(ngModel)]=\"searchString\" (ngModelChange)=\"search(searchString)\"aria-label=\"Search\">\n   <button (click)=\"search(searchString)\" class=\"btn-outline-info\">Search</button>\n  </div>\n\n<br/>\n<div class=\"container\">\n    <br>\n    <table class=\"table-bordered table-hover\" style=\"margin-left:-10px; width:750px;margin-bottom:40px; text-align:center;\">\n        <thead class=\"thead-light\">\n            <tr>\n                <th>Vendor Id</th>\n                <th>Vendor Name</th>\n                <th>Location</th>\n                <th>Service</th>\n                <th>Contact Person</th>\n                <th>Phone Number</th>\n                <th>Edit/Disable</th>\n            </tr>\n        </thead>\n        <tbody class=\"table-striped table-hover\">\n            <tr *ngFor=\"let detail of details | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\n                    <td>{{detail.vId}}</td>\n                    <td>{{detail.vName}}</td>\n                    <td>{{detail.vLocation}}</td>\n                    <td>{{detail.vService}}</td>\n                    <td>{{detail.cName}}</td>\n                    <td>{{detail.phone}}</td>\n                    <td><a routerLink=\"/add\"(click) = \"edit(detail.vId)\"><img src=\"assets/edit.jpg\" style=\"width:25px;\"/></a>&nbsp;&nbsp;\n                      <a mwlConfirmationPopover\n                      [popoverTitle]=\"popoverTitle\"\n                      [popoverMessage]=\"popoverMessage\"\n                      placement=\"left\"\n                      (confirm)=\"disable(detail.vId)\"\n                      (cancel)=\"cancelClicked=true\"> \n                      <img src=\"assets/disable.jpg\" style=\"width:25px;\"/>\n                    </a>\n                    </td>\n            </tr> \n        </tbody>\n    </table>\n</div>\n<div style=\"margin-left: 250px;\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n</div>\n<br><br><br>\n</div>\n\n\n");

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

/***/ "./src/app/add/add.component.scss":
/*!****************************************!*\
  !*** ./src/app/add/add.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  height: 100%;\n}\n\n.bg {\n  /* The image used */\n  background-image: url(\"https://wallpaperplay.com/walls/full/d/f/1/100151.jpg\");\n  /* Full height */\n  height: 100 vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.card {\n  background: url(\"https://media3.giphy.com/media/3ov9k1Eg38tFJH1tbq/giphy.gif\");\n  height: 100 vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border: none;\n  opacity: 0.4;\n}\n\n.btn {\n  margin-left: 380px;\n  background-color: #b6e9c4;\n  width: 150px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n}\n\n.button:hover {\n  color: #26734d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXI2L0FuZ3VsYXIvVXN0RmluYWxUZXN0L3NyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUVBLDhFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNJLDhFQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcclxuaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmcge1xyXG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2Fic3RyYWN0LW1lZGljYWwtd2FsbHBhcGVyLXRlbXBsYXRlLWRlc2lnbl81Mzg3Ni02MTgwMi5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL3dhbGxwYXBlcnBsYXkuY29tL3dhbGxzL2Z1bGwvZC9mLzEvMTAwMTUxLmpwZ1wiKTtcclxuICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIGhlaWdodDogMTAwIHZoO1xyXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDp1cmwoXCJodHRwczovL21lZGlhMy5naXBoeS5jb20vbWVkaWEvM292OWsxRWczOHRGSkgxdGJxL2dpcGh5LmdpZlwiKTtcclxuICAgIGhlaWdodDogMTAwIHZoO1xyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3BhY2l0eTouNDtcclxufVxyXG5cclxuLmJ0bntcclxuICBtYXJnaW4tbGVmdDogMzgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZTljNDtcclxuICB3aWR0aDoxNTBweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXJ7XHJcbiAgY29sb3I6ICMyNjczNGQ7XHJcbn1cclxuIiwiYm9keSxcbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iZyB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd2FsbHBhcGVycGxheS5jb20vd2FsbHMvZnVsbC9kL2YvMS8xMDAxNTEuanBnXCIpO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCB2aDtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL21lZGlhMy5naXBoeS5jb20vbWVkaWEvM292OWsxRWczOHRGSkgxdGJxL2dpcGh5LmdpZlwiKTtcbiAgaGVpZ2h0OiAxMDAgdmg7XG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDM4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZlOWM0O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMyNjczNGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vendorcontactDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendorcontactDetails */ "./src/app/vendorcontactDetails.ts");
/* harmony import */ var _main_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-service.service */ "./src/app/main-service.service.ts");




let AddComponent = class AddComponent {
    constructor(_mainservice) {
        this._mainservice = _mainservice;
        this.vendorDetail = new _vendorcontactDetails__WEBPACK_IMPORTED_MODULE_2__["VendorContactDetails"]();
    }
    ngOnInit() {
        this.getVendorById();
    }
    reset() {
        this.vendorDetail.vName = null;
        this.vendorDetail.vAddress = null;
        this.vendorDetail.vLocation = null;
        this.vendorDetail.pincode = null;
        this.vendorDetail.email = null;
        this.vendorDetail.department = null;
        this.vendorDetail.phone = null;
        this.vendorDetail.cName = null;
        this.vendorDetail.vService = null;
    }
    add() {
        console.log(this.vendorDetail);
        this._mainservice.add(this.vendorDetail).subscribe((response) => {
            console.log(response);
            this.reset();
        }, (error) => {
            console.log(error);
        });
    }
    getVendorById() {
        this._mainservice.getVendorDetailsById().subscribe((Data) => {
            this.vendorDetail = Data,
                console.log(Data);
        }, (error) => {
            console.log(error);
        });
    }
};
AddComponent.ctorParameters = () => [
    { type: _main_service_service__WEBPACK_IMPORTED_MODULE_3__["MainServiceService"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.scss */ "./src/app/add/add.component.scss")).default]
    })
], AddComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");






const routes = [
    { path: 'view', component: _view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"] },
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'final-project';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__["ConfirmationPopoverModule"].forRoot({
                confirmButtonType: 'danger'
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  height: 100%;\n}\n\n.bg {\n  /* The image used */\n  background-image: url(\"data:image/jpeg;base64,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\");\n  /* Full height */\n  height: 100 vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*NAVIGATION BAR*/\n\n#nav-bar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.navbar-brand img {\n  height: 60px;\n  padding-left: 30px;\n}\n\n.navbar {\n  background: #fff;\n}\n\n.navbar-toggler {\n  border: none !important;\n}\n\n.nav-link {\n  color: #555 !important;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n/*--------------------------LOGIN FORM--------------------*/\n\n.login-box {\n  width: 280px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: black;\n}\n\n.login-box h1 {\n  float: left;\n  font-size: 40px;\n  padding: 20px;\n  margin-bottom: 50px;\n}\n\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 20px;\n  padding: 8px 0;\n  margin: 8px 0;\n  border-bottom: 1px solid;\n  color: black;\n}\n\n.textbox i {\n  width: 26px;\n  float: left;\n  text-align: center;\n  color: black;\n}\n\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  font-size: 18px;\n  width: 80px;\n  float: left;\n  margin: 0 10px;\n  color: black;\n}\n\n.button {\n  width: 100%;\n  background: none;\n  border: 2px solid;\n  color: black;\n  padding: 5px;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: black;\n  opacity: 1;\n  /* Firefox */\n}\n\n::message {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: red;\n  opacity: 1;\n  /* Firefox */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXI2L0FuZ3VsYXIvVXN0RmluYWxUZXN0L3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBR0QsbzFOQUFBO0VBQ0EsZ0JBQUE7RUFDQyxjQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQSxpQkFBQTs7QUFDQTtFQUVJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0FDSEE7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBRUksdUJBQUE7QUNISjs7QURLQTtFQUVJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUEsMkRBQUE7O0FBRUE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUVFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRE9BO0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRE9BO0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFNBO0VBQWdCLHlDQUFBO0VBQ2QsWUFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDSmQ7O0FERUE7RUFBZ0IseUNBQUE7RUFDZCxZQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNKZDs7QURFQTtFQUFnQix5Q0FBQTtFQUNkLFlBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0pkOztBREVBO0VBQWdCLHlDQUFBO0VBQ2QsWUFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDSmQ7O0FET0E7RUFBWSx5Q0FBQTtFQUNWLFVBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0ZkIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JEUm9XbDJuS1RaNHNIR0xRM1hNV1kwOHA4NmtiVk94ZWhRdXZVVjFPeXlYakRGZGVhWHdcIik7XHJcbiAvL2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBa0dCeEFTRUJJUUR4QVBFQThQRFE4UER3OFBEUThORHcwUEZSRVdGaFVSRlJVWUhTZ2dHQm9sR3hVVklURWhKU2tyTGk0dUZ4OHpPRE10TnlndExpc0JDZ29LRGcwT0doQVFGeTBkRlIwdEt5MHRLeTB0S3kwdExTMHRMUzB0S3kwdExTMHJMUzB0TFMwdEt5MHRMUzB0TFMwck55c3RLeTB0TFMwckxTMHJOLy9BQUJFSUFLZ0JLd01CSWdBQ0VRRURFUUgveEFBYkFBQUNBd0VCQVFBQUFBQUFBQUFBQUFBREJBRUNCUUFHQi8vRUFEQVFBQUlDQVFNRUFRTUNCQWNBQUFBQUFBQUJBZ01SQkNFeEJSSkJVV0VUSXBGeGdSUXlvYkVHRlVKU3dkSHcvOFFBR2dFQUF3RUJBUUVBQUFBQUFBQUFBQUFBQVFJREFBUUZCdi9FQUI4UkFBTUJBQU1CQVFFQkFRQUFBQUFBQUFBQkFoRURFaUV4UVJOUkJQL2FBQXdEQVFBQ0VRTVJBRDhBOHpFMEtvY0MwWUdqcElIaE9qd05HTlBTWGRZM0N2WXRDcnlUZEJ3SFRwMzZDdW5BN1ZEWTZkWnV3V2hGVmhxYXQvUXhUVGtiVlNReVlxZ05SWGxjQU5SVGhqTk5tTmlOVThsbGF3TkpOQ0VNRnZxZWwrUTlGSGtIZWt1UzA4aHpWTFNBMldQQUJSeVhjc3NQWFdpMDhoenRhenRQWHZzZW02UFhPUDNKY3JEekhKa2FLUDNMQzhuc09uMVNqQjVYT0RwaTlQUS80dUhhMy9BMVZsa2VWc1Zuckg2YS9jYnJzV044QytxaXBTU1dHL2hENmV3MDB2R0xYeG5LTDJmL0FBSVJqUGhOckp1eWJqSEhiNDNmd0kzMlJXSEhmSEtOcExrNGw5MDg1cjdKTE1HODRlUW1uNHo4RTlYdFU1dVNqMnJiWUJvYk5tdktCcDVqeGNqOThDVEU5WXhtMWllcVlORnY0Q2hQWXNwQzhaRm5JZUdjNDFKb3JBWCtvRmd6cmhpdjBaaXhQVnp5RnNuaEdmWlBjNkpKY2o4d2lSQ1JYdkpValV5R0hXTXJGa3NoSTVxWmdxWldSMlRreU5ESElrbkJWNUkwTWVXalVQYWVCUDBTOWNUNXAyZWxveFRrYmlnRktIWW9UdU1tVzA2RDltZGdWYUc2SHVGV1VSYUdud0VoUzJIZ0ZVQ3laWG9oZU5TWEpGcTlERWtVYUdWQzFJS0VmWUsvUzVHVkVzeWlzbFVKb3lYUmhoWTFocklrUVEwM2h6ZE1ZMW9jUmtuczhOTTlUVjFTRFMyUzlua3FNbWhYSTdPTG13N1ArZmtxRmlQVjA5dU1wN04rUzhZSlBLVzU1K3JVUGI0SFYxUitrZFM1RXowcDVwejBkMXQ2aXYxL0Jtd3Nobk0zc0IxdXJsUG5oY0dkWmxncmtSSGw1dmZBUFU3SXFUN2VNK1RFdHVlY3A0L1EwTlZCbVhlaVRzOHJtMXZROVhVc2JUMytTOStvakpaVFg1d3pKc0Y1SUs1Q1hkNWc3YnFZcnlBZlVmYVlyS0FPVUNrMlRlbTFwN1ZKYk1aK3NseTErVHowRTE4Zm9Nd2w3T3VMUU96Tkd6VXA4QVpNSFdncmNTNjVCR3RCU0t4Wk01Rkd3VlpOb01wRm14ZkpkTWk2QmhmSlpNRWk2SlZRVWdxWmJJRlRLdXdqVkRpYWlUWERmQVdFTng3VFZSOUh5anM3MHRBMVVEbGRlMnhkd0MxeHdMMkt6SlNGUmZzTDVLcmtLb2Nab1kxQkNkZGc3Uk02SXJTMEVTaURhR3B4QnVJN1lha3BDQkU0aEVpelF5WWprU3NnQmNScTE3Z1FkL1RucVFsQ0g0VmlOVEg5UE02ZUt5M0VrTTEwN0JZNmNaMGtvUGw0SDY0UThOUDl6MHVPTlIzUnhKbVV0RzJXL3dBditEWWNrdlNGN3RkWEZjNStFVi9tbDlZLzhvWDA4MzFqU3FDL1U4eHFHamE2NTFCems5enpXcHRPSzdXK0hrLzlMbDE0QnVZTlNLT1c1ellGWnlZU3lzaUpNNUZab0dFeFllSldNUzVlYkZhT3dRMlhhMkF5WmIrZ2pSZUxKQnhMdG0vb0poRExRbVVjZ2ZkdUs3TmcybVEyRFZteFpMSWxXYkNjbkV4UkRJVlEyREVJWUdxRnNMUmxrYjA1OG8yZWhJeld0aVhFaUNEcEcwc2xvREJYdERTZ1JnMm1hTHdnR3IyQVJzeCtnYUZpZmt0RkR6ZzBtWGpBWGpaZ3YvSFFTOXY0T2lhWDZ5cWEvUmp0d0ExRXUyUHl4WFVkUWJmMnJDOStRTHNiM2s4Z3JtbjRpZGNpK0lpVElES3N0MllKTFNQVXJXd2p1YUs5eFZvdE5ZTm1mQTYxYjloSytvU1hrUndWd1hubnBmb1ZkSTBiZXBTOWlHbzFzbjVJa0s2aGxIejAvckZ1NmY2S2FtMXN6YjhqOXd0TVZXYzFJUmFaZEY3UUphYUV3S2lNbFVjeXFvMkJvU0NSWGtGWEhJd1dtaGNKWUdVUXlSRGdQMkZhQU1IS1hnYWRiQVhRRDNGYUlpV2pFREZoNEtUNFQvQXZjR0ZzSWp2UWFPaW5nVnNnMDkwSlZoNnNZcldRM2FCMHIzWHlQWVJKMFBNNlZwV3cxVHN4V3RqVUdmTlVkVWprTUJxMEtWTVpWbURKblJMQ1NnQWxzV2xlK0VEa2htMStHcHAvQU0yQWxMY1psQUU2MFlrMHl1VzF5WHJnWHJxQ3FBeVF5a0dvQnFxMnkwWWg2eWt5T29KalNkT3NOV3laSXVwV0ZlcXdVN1NKSVlsRkFKSUh3Um9wZ2pCYkJidEdUQmdLVVFGc0J0eEEyb3BvSEloYlVLVzBtaklYdnJaa3lUa3liYTJCN0RSdHJGM1dVbWlUa1daMkFrb2xVMnMvSlpVSmdYVG9Ma1hwYnlPMTFaWlNhTWtYcXFiV2ZBMXBkTW05eS9adGhCcVZncXFLekMzMEpxVkh0dzBtdldEQjFWUG1QSG8yYnBaRkxhdGpPZ2NzNklhSFRaZVd1UDZzMUlWLytSV212Q0RvM1lXSU94Z0ZQVHFYS0dhNnNoL3A0RWJMTGowd3JkSDJQdVQ4OGVpM2F6UzFVTXByNE1qREkxV0U2anFNMVFHYTZ3R25abzF4MlBDYUt4T2xZSXZndGd0RkE2bE9vSEFUd1QyYmtUR1NEZ09SUklzemtoa2hjQ1ZsMGdjQThFVmxEcEVKQklJakJlSTZRNlFXSmRsRXk1VkRvRXdNZzdRT2FGb1ZvR2tUZ2ttSnBCaEdBRmtSbG9ISkRnYUZKUUY3b2owb2dMSUJKdVRPbkFCT3QralFtZ2NvN0JUSk9US3NqZ29udU8yMTVGNVVsRXliazc2bVg5cXgvZGplam5saUxXQm5RY3NwTkdYMDFtVjdnVTVNaURLYVdaZXlRT0x5VE90K056cWxpU1Q4bTdNVnIwWmpFdENCZUVkaXNuZ1pzcDF3Y3Fpa2lMRURwbnNFYk0zNFZYd1hzZ0lTMHJ5elNsTkMwck55RjRUcVV6UDA4aldxbGxJOC9UYWF1aXV6bEhsdVJlTmpqSmpJcDNFZHd2VXFYc215aVpTYk95SHFLeVd5VXdFcDdoNkZsaktUSVlwcTlqOU1FdkFwRmpWY3pxNDVMd2tqcHhRTndHZTNJT1NIcUJuSUpGbElxMFFTYndRczJDbXlXY29pTjZBb2drU08wN0FaTWlaRkpFbkZFWUV3VTBFbXdVcEIwVmk4NGxIRVBKQXBCSnRDMGdGeUdiQmVZeE5palF4cGNKNUJ5UmFMQ21LaHVjeWF0eFpTR2FXVVRHWG9hVHdCMUwyN2wvTXVDYldSS0RhTTJGbGRQMVhPMHNKKy9ZM0dTZkJoMjBKU2EzNUwxVGxIK1YvcytBZDJLcmY2ZWlxNE9zdFM4bVE5WFpqR2NGUHFQeVoyVS9wL2c3WmZ1OEFjc0ZYTGRER1NiZWczVEp2ZzY1T0w4UDhBSVRUYW5CZnJjdnVqSmVVWnYxU2Q4Zm9qOFo2U2pXUmV6Mlkwank5ZDQzSFdTUzJid0owS0xrLzAyYlpKY3ZBaHFOYWx0SGN6N0wyL0pSTElPb3RYdncwcTdzbWhwckRCakpvZDBkMi82aG1jWnBvMmxNTlRQY1RVaTlkaFZJNkZYcHQxTFlySURwOVJzVE9aMGVZVzFZVTFPMkdBVFlTNno3ZjNCUVp5OG4wbTM2RVJZb21XUW1BSklaWkU0Q2tFQ3lqWVdhS1lHd0FDUU5oTEFFcEJKczZUQVNaTTVnWnlDSzJVbXdVeThwQWJKREUyQ2ZJVHRLd1hrdXdwQ2t4WWVxUXNYcmtPZ3Bqamg1T3FRU1BCV0R4bHZnYkNtQ092Uzd2bkc0dWd0ejdwTit5a2xnUm9rL29ldmVPQ3NhMkxkK04weGlyVzc0a3YzUXJDbWcwYThCVk5DdG1wOUZQckMvQTZKZFd0K3lQdnUyRTZJT1c0cHJkUTUyS0s0VzMvQUdhTkQ0K0RxcUFQMW1qMC9wNmx5L3dieTZOVTQ0eTR2L2RuUDVSajZUVWRvNjliSjhDOVV2d3ZDbEwxR2IxRHAwcTNqWnJ4SmNNVWpsUEROV3l4dmt6dGZzMDBKMEpYS1Q4Q1JhZklPTThNSFhZZGRMeUs0RU55aTlTWHo2RHhQUDAzYm1wUnJkc1MvS04rRlp0ZnBwVldOREt0TXIrS2o3Sy94ajhBYndmK21EOXR1WGd2Q1JuVjJEZGN5TEFxMGJUTEtRQ01naWtiQ2lZZFNPN2dTa2M1REliUzA1QVhNbWJBVFpoR3pyWmk4bVduSUJObUp0a1dTRnB6TFdTRnB6R1NKdG5Uc1lGekluTVhuWU1rVGJIVk1sekZLcDVSTFl5UWRHbk10VXhSU0orcy9ER3dHbTVDUzdkMkxYM0xHRis0aFZabmwvMUN4M0hINzZFaWdOc2cwNVlSU05XUldoUmZCU1NlZU5oOVZZSWVCSElNRllyWXNYa3R0Z1BlSzVEcDViU1QrNXZ5elZvc1BPMFhZa3ZXVDAvVDlOM1l4NVBSY2o0YXZUNjhub3RIbzRzUzBHaWNWd1B4MUhZRlFsOU9uam4vQUU3WDlNU2psSGx1cFZ0Si9CN0ZheFRXR2ViL0FNVHVNSU9YbVgyeC9VUzRXK0c1a210UmcxMkJwejJNMmllUXJzeXlUazR4eUV4aXUwUnJrR1RKT1REOGJBMEpHZkdRZUV5YmtKb1Z5RzZwR2RUSWRoSVRxUEk5Qmw4aXNKaEl5TmhWTU4zRTl3Sk01c1BVT2xuTUhOa01xdzRCc3BNQmFHa0JzRDFFWXBZeFd4amRncGFncVNURnB5QVNZV3lJQ2FHU0pzdlRiaDdqRTNzSVlMd20xd05nTkQ1SWNnZjFEc3NiQWFXYzJ0eG5UYTVmNnZ5aEtVUVVnNERjTjZNbEo4ckFYNnFSbWRPbm5ZZGVCc0dWRXp2eURjc2tuTVZ5RFNGTEJHd09iM0pURWFEMlBubmVlazZCMXFNY1JudGpiUGc0NDlMRHBQb1doNmxDVUZocmdwZlBMT09GeldXVk55QVZqVDJaNHovRTNXZnEyOXNYbUZmMnJIRW41Wnh3aFBrZm1DV2oxSEsrQnBTT09KMGlJU0V4bXVaeHhPa0FiaTlpWXlJT0p0QkhLSkRjSkhIQ1lOSWVFZzBabkhHd29naW1RNUVuR0dLT1JWeU9PTmdBVTJDbXpqaGtJeGV4aTAyY2NFbXhhYkFUT09HUk5sTUVZT09Id1FKR0Jab2c0T0FPN1NrNnpqZzRBYTB0UGF2bC93QmhyQnh3elJrVEdKTGljY0RBbExJYmZvQXljY0pTQXovLzJRPT1cIik7XHJcbiBiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhJUUVCQVFFQkVRRHc4UERnOFBEdzhRRUE4UEZSQU9GUkVXRmhVVkZSVVlIU2dnR0JvbEhSVVZJVEVoSlNrckx5NHVGeDh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HaEFRR3lzbEh5VXRMUzB0TGkwdExTOHJMU3N0S3kwdExTMHRMUzB0TFMwdExTMHRMUzB0S3kwckxTMHRMUzB0S3kwdExTMHRMUzB0TGYvQUFCRUlBS2dCTEFNQklnQUNFUUVERVFIL3hBQWJBQUFDQXdFQkFRQUFBQUFBQUFBQUFBQUJBZ01FQlFBR0IvL0VBRVFRQUFFREFnTUVCd1FIQlFZSEFBQUFBQUVBQWdNRUVSSWhNUVZCVVdFR0V5SnhnWkdoTWxMQjBSUWpRbE5pY3JFelE0S1M0UWRVYzZMQzBoVTBZMlNUOFBIL3hBQWFBUUFEQVFFQkFRQUFBQUFBQUFBQUFBQUFBUUlEQkFVRy84UUFLQkVBQWdJQ0FnSUJCQUlEQVFBQUFBQUFBQUVDRVFNU0lURkJVVElFRkdGeElwR3h3ZEVULzlvQURBTUJBQUlSQXhFQVB3RDJRUkNBVEJmRm93Q21DVk1xUUJDWkFJaFVoaFRCQkVLMEFVeUFSQ3BBTUVRZ2lGYUdNRVFnRXdWSUFoRUlCTUZTR0VJaEJNRmFBSVJDQ1pVZ0NFUWdFd1ZJWVFpZ2lGUUJSUUNLcEFFSXJrUXFRemdpdVJWcEFjalpjRXlwSUFXUnNqWkZPZ0JaZFpHeU5sVkFDeTZ5Tmx5ZEFlUENZSUloZk1veUdDS0FUQldnQ0VRZ0V3VklZUW1DVUpnclFCQ1lJQkVLa0FVd1FSQ3BER0NLQVJDdEFNRVFnRXdWSVlRaUVBbUNwQUVJaEFKZ3JRd2hNRUFpcVFCUkNBUkNvQW9oQW0yWnlDcnZtTHNtNURqdlB5VkFUU1ROYnFjK0dwOGxDYXNuMlcrTGo4QWpGVEt3MklLa3hjbGJySlQ3bzdoODF3TXZ2ZjVXcTZHbzRWU1k5U21KcFJxR253SVVyS3dmYWFXOC9hQ3NZVXJvZ2R5cE1LWkl4d0l1Q0NPSXpUV1ZQcUMwM1liSDBQZUZZZ214WkVZWGNPUGNyUTdKYkkyUlhXVjBNRmwxazFsMWs2QThZbUNVSjJOSk5nQ1NkQU03cjVkR0pLOWpBeHBEaVhtK0p0clllR2FRSUVXeU9SR1JITk5hMnVTdDgrQm5CTUVFVTBBd1JRQ0t0QU1tQ1ZNRlNBSVRCS0V3Vm9ZUW1DQVJDcEFGTUVBaUZhR01FVUFtVklBb2hCTUZTR0VJb0JNclFISWsyRnl1VURqaVBJYUozUUFOM25QVGNGWVpIWkJqVXo1QTNYWGNCcWxZMGlRQkI4clc2blBnTXo1S3NYdWQrRWNCODFKRkNBcTJHUDE1UHN0OFhHM29GM2FQMnJmbEErS2NCY25iQWo2cmk1Mzh4UU5PT2ZtVk1BaVcyTmp1VDVFVlRUQlJ5VXZCemdkeERpTEs3WkFoRnNLTWd5VkVaeWxMaHV4QnJyK0pGMVBEdG1RZnRJMnU1dEpiNkc2dVBaZFYzUWplcldWb25sRjJtMmxHL2ZoUEIvWjlkRmNzdlB2cFV6Qzlvc0hPQTRBa0xTT2IyT3pJQ3NVYlhGN2NCczYrUjRLdUZMQktXRU9Hb1h6MEdsSk5tWllycVY4YnUzbVhaMzRsSk5PNTlpNDN3dERSdXlDTlZWdWxOM2JsQ0ZyT1MyZWwwTVpGQk1wUUJDWUpRbUNwQUVKZ2xDWUswQk5kdUFDeHgzTnpmS3lRSUJUVE1EYllYWXJnRThqd1duTDVLRUNJUVRCQ0VGTWxDWldoaENZSlFtQ3BBRUpnZ0VRclF4Z2lnRnhObFFDU3UzZWFaZ1ViVVhPM0R4S3piQVo4dTRhOGVDVmtlOG9aRFZWcHE0RElLb3B5NkJ5U05BRUJIclFzZjZYZE1LbGJMSFF0elhFZ1Rod1dTMm9VN0prVlExSTBMSm1Odm9xOEUxamZYa3JNTm5FWHlUWExLRlhXVHl0QU9XaVZKcW5RQ0VKWE5VbGtDRWhGY2hEQ3BuTlNFSkNvODRFd1NoVDFQVmpEZ0pJd2pGaXlzN2ZaZU1sYXN6RUN1N05NUWNldEZ4Ykx2V2IxcFBzanhPUThscTAyd2pJekU5NTdoa1BUNHJwK254emxPNHE2OWpTSmFDS0YyUEU0Q3hOZ1RtQXNxYXBhSEVORDNBSElnZk5TaWtEQ1FFNGFGVTJuRlJxbWhsVVZCKzdkNWhPS2c3MlA4TUorS1N0MmxEQisxa2Ewa1hEYzNPSTVOR1pXWS9wUXo5M0RNL21jTEFmVW4wUkhES1hTSmNralliVk4zbkQrWUZ2cm9yRFN2Tk82UnZPdExsL2lqL1lveHQxb04rcG1pTzhzd1BIaUxpL2t0UHQ4aThmNEZ2RTk1UlN4aU1odzdTb0hYeFdMczdwQkRJUXd2YTE1eUdJRm1JOExPMythMms1emswb3RWUmQyRk1FcVlLRUFRbVNoTXJReGdpRUFpRlNBWUloQUloV2hqQlJTdTNLUW13SjRLa1pmVkV1aE5reGR1UkxnMFhLakIzck4yaFdXQlVSaTVNVGxTQlgxL05abjBra3JPbnFTNHFXRUwwb1lsRkhLNXRzMW15c3dBM2QxbUxNV0dIQmJXL0c2TFpWbW1vRFVheXZqQVlZOGZzRHJDNFpkWnZEVHdUY2JIc2E3SlZZam01cng3OXRpOW00bm5nd1h0M25SRm0wS2c2UnRhT2JpZjBBV2NvZTJXcE05ekZNcmtVaThKRnRHb2I3VVlJNHRjYitSSHhYczlrYlRnTUYzSEM4RFE1RlpyQnMrR2F4bjdOWENRTGtaRmNzcVBiNGtzM0xXd3R2V25GSmR1bXU5Uk5hdWxkR3FrcGREV1hXUkJSUkYyQkdRbElVeENRaE5vRHlZdWRQTXFSbFB2T1pVd0NLOGxSU01qbXRWMkhhRG10d2hVd2ttbGF4cGM5d2Exb3VYT05nQjNyV0VwUmY4V0Zrem5YTjk1WG45cGJXZkk0dzBwc0FiU1RqT3gzdGo1L2k4dUlXb3E1S3M0SXNVY0J5YzgzYTZVY0I3cmZVOHRGb1VsRTJKb0FBRmd0NFFVZVpkK3Y4QXBMWmxVbXhXdDdUdTA0NXVjNDNKUEVrNnE4MmxhTnl0T1VUaXRkbXpPaUl4RGdvM1F0TzVTa3BTcVFpalU3T1k4V0xRZkJUN0dNa0VqVzlZWFEzempmMmdCK0VuTnZobHlVeFNPVlg3QmNjbnA1NnlGN3NNVGhpQXVXNkczSG1FQXZJVmNSdUpJemhrWWJ0Y05RZmlPUzNkaWJWRlEwM0dHVmxoSXo5SE4vQ2Y2TFBOQzN1dWpXTTdkTTB3bVV0UVdkbkFDTXUxZmlvNDJGeEFBdVR1V2JqVHBjbWh3VEJDeWtra3hXeUFzQU10NmFBQVJDVUpncVF5dFh5MmFCeFBvRldqbEJhQmg3UWNTWFhPWTRXVlhhVlJlUWpjM3MrV3ZyZE94aFlHdUphY1RjUXNiMkhQZ1ZiaTlUSnk1SHJhaXdEUnYxN2w1cmF0VmM0UXRqYXpuWWV0NnJBd01EY1F1Y1IzdVBvc09sbnAyc21rcU1XUEQ5UmJRTzVycXdZZGV6REkyM1JERzBOR0oza3I5ZFcwb3BBV1BMcWttelkyZ3VjNDhBQm1UeVdkczdZMDliWjdpYWVtT2p5TzNJUCttMDZEOFI4QVY3RFpXeG9LVUhxWXcwa2R1VjNhZTRmaWVjN2N0RnJMSWwrUWdqeE1XeGEyWUY3bXNwWWdMbDlRN0NRM2pnRnlQR3k5TEVHVFVRcFN6RmJMcnNIVmw0NDJ1U0I0K1NscVpEVXVzTW9HbklmZU9IMmp5NER4N3JrYlEwV0N3bG5sMGpTTWRUT285aFJSZ0FOMDVsWFcwVVkrejZsUzQxM1dMQ215aVA2R3poYnhLZ24yVXg0c2IraXQ5YWlKRTlXQmlVbXc1bzVnWTN0a2o5MXhMWFg0RGNmRWhleTJqdFNPR0M3Z1dPQUF6R1FOdmUwV1UxKy9ndFJrZ2NPSUkwUEJkT1BNNnFRNC93QWVqSjJiMGxqa3lKRmljdmd0NkNjSGZlK2g0LzFXQlhkRnFlWHROYVlIKy9EWm92elo3SjhyODFtdXBxeWovd0M1aEdybVh4TkhFczFIaGRaUEZHN2gvUUxKSmZJOXlGMkZZV3hla01jd0F4Qys2K1dmQThDdDFzZ0twUjltMFpLUzRQTUJKUE95TVhlNXJCeGNRMzlWRTdaTTd2YW1lQndiaFo2Z1hRaTZPTUJ4TzdUdUxpWEh6SzgvN2ZYNVAraUtaVGwyMkQyWUkzU3U5NGdzWVBFNW53SGlvNHRseVRPRDZsMkt4dTFnRm1ON20vRTNLMzQ2TmpOQUV6Z2kxSDRvS0swY0lZTEFXU3VVN2xCSWhFTXJ2VVJVcmlveVZvaUdSbEN5ZFJUU0FMU0tzbG5PTmxYbG5BM3JJMm50cHJEaGIybis2UGp3V1BMSk5McVMwY0c1ZXE2bzRQWm01UHdlc2pxbW5LNFZhUnhpa2JQRjdiTlc2QjdEcTA5L3lYbDIwSkIxZGZqY3F3eXNraXljVEl6bnFPNDcvRldzSzhDY21mVXFHcGJNMWoybnN2QUkrUGlEbDNyV25wZ3hvYzEyZklyNTcwTTJxMTczd1l2YUJsakdoYTRXRHg0NUczSXIySDBrNlBOdUIreWZsNHJpbEZZbktMWDZPdkhQYU5saU9NdXZiT3d1VUFsYWZWRlpjRmpLS3RxUkZHK1IyakdrOTUzRHhOaDRxUXVBRnliQUM1SnlBSE5lRjZTN2Ura1NNZ2hONEdQQmUvNzE0MHQrRWVwN2d0Y2NISmlsS2tYZzhuTTVuZjNxd1pMTUtxcEt1YkN3bmdQVmRHdHM1cm9iYXZTSnpvT29kaERHaTduY3VDVFlQUi9yUzJvcW05bkl3MDdobGJjK1FmbzN6NENQWUd6Uk03cjViZFZHN3NBNlNTalVuaTF2cWU3UGVsMmtYdU1jRERLL2ZiUnZNblFlSzB5Wkg4VUVVNWNzMEh5QnVwc3NldnIrdFBVeCt6KzhJM2ozZm1ucTltdWF3eVZNaGNUWnJJWXlXaHp6b0M3VWplYlcwS2wyZlNOaWFBQUFkNTRybmswa2JhVjJDS053RmdMRG5rcEJBZDd2SUtZdXNvbnpBS1lxeG5mUnh4SjhRajFEZWZtVkNhb2NWd3FoeFdxaUltK2p0NStaUitqRGNUNktOdFNGUEc4RlZRQ2ZSenVJUGZrb0pIelJFdWRHL3E5UThERTIzTWpUeFdpMWJkTzJ6V2pnMGVhY1k4bWlWbm5xVGFnTzlha000ZG9wS3ZaVU11WllHdTk5blpkNlpIeFdiSnN5V0xOaDYxbkxKdzhOL2duS0FhaTdVNlB4VGt2YjlUTjk2d2UwZnh0MGQrdk5aUnFLNkQ2c3dtYTJrakd1ZUhOM1pqNDVyZXBLMitSV2cxeWpkb2w0L1hCRTlRUFU3MUE4cmx5R2hBOVJQVHlQVmR4SjA4MWcwU3lPUjZyUEpPbnFyQlo0cGNLRXlHVitxNG02N3F4d1ZqQ2treUNwT3lhS2s1QUM4ZjBoMnU0SHFvajJ6cWZkYng3MXQ3YnJjRFhIVWdaQWJ6dUNwOUhlakJkOWRVZTA4NGlQL2R5N1lPT0tPMGpOTFovZ3h0bVVKT1lhU1RtU2N5U3RtT2tJMUM5Tk5TQ0lCOGJSaGI3YmJBM2I3M2VGYll4a2piMmFRZVN6ZjFWODBYb2VRZFRxQ3FvN2hlbXJkbmdadDA0TE9saXlXMlBNcGRHY28wZVdwdzZtbWptYUQ5VThQTnQ3ZnREeEZ4NHI2cUNIRGNRUmNjd1Y0T3FoQkI3bDZqb3RVWTZXSytzWU1KL2dPRWVtRStLajZ0V2xJckMrV2krWUMzMkhGdkxVZVJVVDVwaDdoNTRUODFjU3VhdVNNamVqemUxcVdlWVdmSVhOKzdIWkhrTmZGWVFvU3gybHJGZTRsWXFGUkFEcUYxWTh2Z3lraWs1WmUwWk1iMnhBN3hjak94UExlUU4zRWhYZG9WSWlhVHFRUFhRTFU2SGJNd3Mra3lBR1dXNVlTUFpqTzhjTVd2ZFpiN2F4Mk1sSFowVDBXeVhQYTBTWGloYTBCa0xUWnhhUGVPNzllNWJsUEMyTm9heG9ZMGJnTER2L0FLcDFrN1JxdXN2RzAyakg3Vi9IaXdIaHg4dUs1ZHJPdEpKRU1zblh5NC8zVWR4SCtJNzMvTGtPYVdxcldzR1pBV2UrdmZLN3FhUmhrTGNuTzBZejh6dEIzYThsZm91aXJTUStxZWFoK3VBWGJFM3cxZDQ1Y2xhZ3U1RTltTS9iTHBYRnRQSEpNNFpIcTJsMXU4akllS1p1eWRvUzU5WEhGL2lTdC9SbUplNGhqYXhvYXhyV05HUWEwQm9BNUFLUmFLYVhTSzFQRGpvclhIV1dtSGM2WS82RWp1ak5lM01PcDM4bXlTQS81bUFlcTk0RXdWS2JIcWo1clVQcUtmOEE1bUdTTnVuV1pQWi9PMGtEeFdocy9hRnlNOGl2ZEVBZ2dnRUVXSU9ZSTRGZUY2UmJIRkxMRytFWVlabjRlckdrY3V0bThHa1hOdDFqdXNCYWFaRW8wZXBvbzhSSERVOXkxN3JFNk4xb2wra1lkSVorb0I0bGpHbHgvbWM0ZndyWlIwYUlkRzZTNk4wN0dRVlZHMStmc3Y4QWVIeDRxcGdlM0lnbm1BU0N0Skc2bVVWSUNqSTVWSkpPQ2xlQ2U1SVcyWEhrSlpYTE9LUndVeENRdFhNeVNMQ2hoVXRsMWxBVVI0VlFycExBclJreUN3dHFTNnJmQkc1R2VSMGlMWnRDSlhtUitiV083STR2NG51dXQ4S3RRUTRJMk4zMnVmekhNcXlzYzJUZWI5ZUJ3alNHV2MzNmlURCs2a1BZL0M3ZTM1ZjBXaUZIVXdDUnBhN1E2RWFnN2lPYVVKVVZRejI0Z3MwMG1JdWFQYTlwbzRqZVAwVWxEVWtFeFNaUGJsM2pjUnlLdHl4Nk9ia1JtRmZNSGFGM3d6eTlYSGE2N296dEVRenZoY2JOa3M5dkoyaCtDMzY2aUU3U1c5bVFETUhmMy9OZlB1bERKSWJUTkJEb0hYZTNmMVo5cnl5UGdWNldOeHp3Y1RCcHdrZlZnVUN2RmRIT2x6WE1hSG00dHJmTmVzcDYrT1FkaDRQSzlqNUxpeVlad2ZLTjQ1RXlTVlo5U1RmQzNOeDlGZG5kYklaazZCWUcwSm56UE5IU0c4cHQ5SnFNOE5PdzdyKytkdzFWWWxiRklwMHRMOU5xdXFiYzA4QnZOSjc3OU1JUG1CL0VlQzk2TEFiZ0FPNEFCWkZHeUNoaGJFMGdBYnlRQzkvRThUeUhJSU9NOC9zdDZwbnZ5dEk4V3hhay9tdDNMV2N0bngwaHdXdjdEdFhhald0OW90WVRoQkFKZktmZGphTTFVZzJUTFUyNis5UFRqMmFkaHRJOGZqY1BaN2huM0xXb05seHhISG5KTVJZelNFT2RiZ056UnlBQ3ZwSnBkRlZmWkhTMDdJbWhrYldzWU5HdEZoLzk1cWNKVVVyS0dSQ1VJcWtNWUlwVVZhWURoZVgvQUxScXZxcU5yL3Rpb2o2di9Fd3ZzdlRMNTMvYXJWNHBhU25IMlErb2VPWk9CbjZTTGJDdHBwQ2ZRL1FHdStqZ3RkY3NrdGkzbkY3M3FWOUVqa0RoZHBCSEVMNWRzVVdBWHJhR1VqUWtKNTNVck00eThIcDdycnJOaXFIY1NweEllSzVuOVFsNE5VVzhTR05RTktjTENYMVUzMXdXa1FQVUxncDNoUmtMYWFNeUFoTFpUbHFHRllTaUlod29FS2JBbGMxWk9JeXBVYUx6OGpjY3pXN3NWejNETXIwRlhvVmliTWJpbGU3M1JieEovb1ZyQjZ3bEl4eUsya2E2WUpRaUZ4SXNZSmtvUkNwREsxZlI5WUE1cHd5TTlsM0g4THVYNkt2UzE5amdrQlk4YWcvcU9JV2tFbFJUc2tGbnREaHUzRWR4MUMxalB3eE5CWVFjeHFxKzB0bXgxRGJQR2RyQjQxSExtT1NnZHN4N2YyVXVYdXlDL3dEbUh5UUVOVHA5WDM0ejhsckZwTzRzbHB0VXo1NXRib0ZWMHpuUG96SE5GZTRpeGlKN2VUUTdza2Z4S2hTd2JVTHhHMm1reG5jWFJBRG1UaXRibXZxcmRteXYvYVNobzNpTUVuK1kvSmFOTFNzakZtTnRmVTZsM2VUcXVyN3lTWGhnc2E4bmg5bTlENjU0QnFxbHNZKzZpZTUyWE4xaDZIeFhxNkRZblZNRVRaT3JqR2VDRmpZN25lWE9jWE9jVHh2ZGFnVEJZeXpTbjJVb3BFRk5ReHhtN0dERnBqZGQ3eVB6T3VWYUNVSmxGMlVNaWxDSVZJWXlJU29xZ0dSQ1VJcWt3R1JTaEZWWXhsOHEvdEN2L3dBVHovdTBPSDh0My9IRXZxbDE1THA3MGRkVXRaUEFNVThBTFN3YXl4RTNzUHhBM0lHKzU1TGJEUFdSTXVqejJ5WDVCZW5wSHJ3bXpheXhzYmdnMklJc1FScUNOeFhwNkd1R1dhckx5WW5wNFhxMnh5eDZlcUhGWG9xZ0xpbEExaXpRYVZJcWpKZ3BSS28vOFd6VFltYzFJV3JseTdKSWtHQmRnWExsR3FHQXNVYjJybHl5bEZBVWEwZGs5eXlOanM3RG5lKzl4OEJsOENndVhQa2RZMysxL3N5bDhqUkNLNWN1VkRHVEJjdVZJQW9oY3VWSVl3UlhMbGFBWUloY3VWSVl5SVhMbFNBS1lMbHlwQUVJaEZjcUdFTGx5NVVBVVZ5NU1BbzNYTGxRQlhYUlhKak16YW13YWFwT0tXSUYvd0I0MGxqK1hhYm1lNDNXSEwwTGEwbnFxbVp2S1NOc3c3dXpoWExsYWswS2t6bTlHNmh1bFJHN3Zpa2I4U3BtYkhxaCs5aS9rbFhMbFczNEZxaXl6WnRTTlo0aG5iS0dSMytwV0c3TnFmN3hILzREL3ZYTGtiTWRJLy9aXCIpOyBcclxuIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiAxMDAgdmg7XHJcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLypOQVZJR0FUSU9OIEJBUiovXHJcbiNuYXYtYmFyXHJcbntcclxuICAgIHBvc2l0aW9uOnN0aWNreTtcclxuICAgIHRvcDowO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQgaW1nXHJcbntcclxuaGVpZ2h0OjYwcHg7XHJcbnBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbn1cclxuLm5hdmJhci10b2dnbGVyXHJcbntcclxuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1saW5rXHJcbntcclxuICAgIGNvbG9yOiM1NTUhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxPR0lOIEZPUk0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubG9naW4tYm94XHJcbntcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuLmxvZ2luLWJveCBoMXtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4udGV4dGJveFxyXG57XHJcbiAgd2lkdGg6MTAwJTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIG1hcmdpbjo4cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuLnRleHRib3ggaVxyXG57XHJcbiAgd2lkdGg6MjZweDtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLnRleHRib3ggaW5wdXR7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDo4MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5idXR0b25cclxue1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6MnB4IHNvbGlkO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuXHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICBjb2xvcjpibGFjaztcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbjo6bWVzc2FnZSB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gIGNvbG9yOnJlZDtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbn1cclxuIiwiYm9keSxcbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iZyB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhJUUVCQVFFQkVRRHc4UERnOFBEdzhRRUE4UEZSQU9GUkVXRmhVVkZSVVlIU2dnR0JvbEhSVVZJVEVoSlNrckx5NHVGeDh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HaEFRR3lzbEh5VXRMUzB0TGkwdExTOHJMU3N0S3kwdExTMHRMUzB0TFMwdExTMHRMUzB0S3kwckxTMHRMUzB0S3kwdExTMHRMUzB0TGYvQUFCRUlBS2dCTEFNQklnQUNFUUVERVFIL3hBQWJBQUFDQXdFQkFRQUFBQUFBQUFBQUFBQUJBZ01FQlFBR0IvL0VBRVFRQUFFREFnTUVCd1FIQlFZSEFBQUFBQUVBQWdNRUVSSWhNUVZCVVdFR0V5SnhnWkdoTWxMQjBSUWpRbE5pY3JFelE0S1M0UWRVYzZMQzBoVTBZMlNUOFBIL3hBQWFBUUFEQVFFQkFRQUFBQUFBQUFBQUFBQUFBUUlEQkFVRy84UUFLQkVBQWdJQ0FnSUJCQUlEQVFBQUFBQUFBQUVDRVFNU0lURkJVVElFRkdGeElwR3h3ZEVULzlvQURBTUJBQUlSQXhFQVB3RDJRUkNBVEJmRm93Q21DVk1xUUJDWkFJaFVoaFRCQkVLMEFVeUFSQ3BBTUVRZ2lGYUdNRVFnRXdWSUFoRUlCTUZTR0VJaEJNRmFBSVJDQ1pVZ0NFUWdFd1ZJWVFpZ2lGUUJSUUNLcEFFSXJrUXFRemdpdVJWcEFjalpjRXlwSUFXUnNqWkZPZ0JaZFpHeU5sVkFDeTZ5Tmx5ZEFlUENZSUloZk1veUdDS0FUQldnQ0VRZ0V3VklZUW1DVUpnclFCQ1lJQkVLa0FVd1FSQ3BER0NLQVJDdEFNRVFnRXdWSVlRaUVBbUNwQUVJaEFKZ3JRd2hNRUFpcVFCUkNBUkNvQW9oQW0yWnlDcnZtTHNtNURqdlB5VkFUU1ROYnFjK0dwOGxDYXNuMlcrTGo4QWpGVEt3MklLa3hjbGJySlQ3bzdoODF3TXZ2ZjVXcTZHbzRWU1k5U21KcFJxR253SVVyS3dmYWFXOC9hQ3NZVXJvZ2R5cE1LWkl4d0l1Q0NPSXpUV1ZQcUMwM1liSDBQZUZZZ214WkVZWGNPUGNyUTdKYkkyUlhXVjBNRmwxazFsMWs2QThZbUNVSjJOSk5nQ1NkQU03cjVkR0pLOWpBeHBEaVhtK0p0clllR2FRSUVXeU9SR1JITk5hMnVTdDgrQm5CTUVFVTBBd1JRQ0t0QU1tQ1ZNRlNBSVRCS0V3Vm9ZUW1DQVJDcEFGTUVBaUZhR01FVUFtVklBb2hCTUZTR0VJb0JNclFISWsyRnl1VURqaVBJYUozUUFOM25QVGNGWVpIWkJqVXo1QTNYWGNCcWxZMGlRQkI4clc2blBnTXo1S3NYdWQrRWNCODFKRkNBcTJHUDE1UHN0OFhHM29GM2FQMnJmbEErS2NCY25iQWo2cmk1Mzh4UU5PT2ZtVk1BaVcyTmp1VDVFVlRUQlJ5VXZCemdkeERpTEs3WkFoRnNLTWd5VkVaeWxMaHV4QnJyK0pGMVBEdG1RZnRJMnU1dEpiNkc2dVBaZFYzUWplcldWb25sRjJtMmxHL2ZoUEIvWjlkRmNzdlB2cFV6Qzlvc0hPQTRBa0xTT2IyT3pJQ3NVYlhGN2NCczYrUjRLdUZMQktXRU9Hb1h6MEdsSk5tWllycVY4YnUzbVhaMzRsSk5PNTlpNDN3dERSdXlDTlZWdWxOM2JsQ0ZyT1MyZWwwTVpGQk1wUUJDWUpRbUNwQUVKZ2xDWUswQk5kdUFDeHgzTnpmS3lRSUJUVE1EYllYWXJnRThqd1duTDVLRUNJUVRCQ0VGTWxDWldoaENZSlFtQ3BBRUpnZ0VRclF4Z2lnRnhObFFDU3UzZWFaZ1ViVVhPM0R4S3piQVo4dTRhOGVDVmtlOG9aRFZWcHE0RElLb3B5NkJ5U05BRUJIclFzZjZYZE1LbGJMSFF0elhFZ1Rod1dTMm9VN0prVlExSTBMSm1Odm9xOEUxamZYa3JNTm5FWHlUWExLRlhXVHl0QU9XaVZKcW5RQ0VKWE5VbGtDRWhGY2hEQ3BuTlNFSkNvODRFd1NoVDFQVmpEZ0pJd2pGaXlzN2ZaZU1sYXN6RUN1N05NUWNldEZ4Ykx2V2IxcFBzanhPUThscTAyd2pJekU5NTdoa1BUNHJwK254emxPNHE2OWpTSmFDS0YyUEU0Q3hOZ1RtQXNxYXBhSEVORDNBSElnZk5TaWtEQ1FFNGFGVTJuRlJxbWhsVVZCKzdkNWhPS2c3MlA4TUorS1N0MmxEQisxa2Ewa1hEYzNPSTVOR1pXWS9wUXo5M0RNL21jTEFmVW4wUkhES1hTSmNralliVk4zbkQrWUZ2cm9yRFN2Tk82UnZPdExsL2lqL1lveHQxb04rcG1pTzhzd1BIaUxpL2t0UHQ4aThmNEZ2RTk1UlN4aU1odzdTb0hYeFdMczdwQkRJUXd2YTE1eUdJRm1JOExPMythMms1emswb3RWUmQyRk1FcVlLRUFRbVNoTXJReGdpRUFpRlNBWUloQUloV2hqQlJTdTNLUW13SjRLa1pmVkV1aE5reGR1UkxnMFhLakIzck4yaFdXQlVSaTVNVGxTQlgxL05abjBra3JPbnFTNHFXRUwwb1lsRkhLNXRzMW15c3dBM2QxbUxNV0dIQmJXL0c2TFpWbW1vRFVheXZqQVlZOGZzRHJDNFpkWnZEVHdUY2JIc2E3SlZZam01cng3OXRpOW00bm5nd1h0M25SRm0wS2c2UnRhT2JpZjBBV2NvZTJXcE05ekZNcmtVaThKRnRHb2I3VVlJNHRjYitSSHhYczlrYlRnTUYzSEM4RFE1RlpyQnMrR2F4bjdOWENRTGtaRmNzcVBiNGtzM0xXd3R2V25GSmR1bXU5Uk5hdWxkR3FrcGREV1hXUkJSUkYyQkdRbElVeENRaE5vRHlZdWRQTXFSbFB2T1pVd0NLOGxSU01qbXRWMkhhRG10d2hVd2ttbGF4cGM5d2Exb3VYT05nQjNyV0VwUmY4V0Zrem5YTjk1WG45cGJXZkk0dzBwc0FiU1RqT3gzdGo1L2k4dUlXb3E1S3M0SXNVY0J5YzgzYTZVY0I3cmZVOHRGb1VsRTJKb0FBRmd0NFFVZVpkK3Y4QXBMWmxVbXhXdDdUdTA0NXVjNDNKUEVrNnE4MmxhTnl0T1VUaXRkbXpPaUl4RGdvM1F0TzVTa3BTcVFpalU3T1k4V0xRZkJUN0dNa0VqVzlZWFEzempmMmdCK0VuTnZobHlVeFNPVlg3QmNjbnA1NnlGN3NNVGhpQXVXNkczSG1FQXZJVmNSdUpJemhrWWJ0Y05RZmlPUzNkaWJWRlEwM0dHVmxoSXo5SE4vQ2Y2TFBOQzN1dWpXTTdkTTB3bVV0UVdkbkFDTXUxZmlvNDJGeEFBdVR1V2JqVHBjbWh3VEJDeWtra3hXeUFzQU10NmFBQVJDVUpncVF5dFh5MmFCeFBvRldqbEJhQmg3UWNTWFhPWTRXVlhhVlJlUWpjM3MrV3ZyZE94aFlHdUphY1RjUXNiMkhQZ1ZiaTlUSnk1SHJhaXdEUnYxN2w1cmF0VmM0UXRqYXpuWWV0NnJBd01EY1F1Y1IzdVBvc09sbnAyc21rcU1XUEQ5UmJRTzVycXdZZGV6REkyM1JERzBOR0oza3I5ZFcwb3BBV1BMcWttelkyZ3VjNDhBQm1UeVdkczdZMDliWjdpYWVtT2p5TzNJUCttMDZEOFI4QVY3RFpXeG9LVUhxWXcwa2R1VjNhZTRmaWVjN2N0RnJMSWwrUWdqeE1XeGEyWUY3bXNwWWdMbDlRN0NRM2pnRnlQR3k5TEVHVFVRcFN6RmJMcnNIVmw0NDJ1U0I0K1NscVpEVXVzTW9HbklmZU9IMmp5NER4N3JrYlEwV0N3bG5sMGpTTWRUT285aFJSZ0FOMDVsWFcwVVkrejZsUzQxM1dMQ215aVA2R3poYnhLZ24yVXg0c2IraXQ5YWlKRTlXQmlVbXc1bzVnWTN0a2o5MXhMWFg0RGNmRWhleTJqdFNPR0M3Z1dPQUF6R1FOdmUwV1UxKy9ndFJrZ2NPSUkwUEJkT1BNNnFRNC93QWVqSjJiMGxqa3lKRmljdmd0NkNjSGZlK2g0LzFXQlhkRnFlWHROYVlIKy9EWm92elo3SjhyODFtdXBxeWovd0M1aEdybVh4TkhFczFIaGRaUEZHN2gvUUxKSmZJOXlGMkZZV3hla01jd0F4Qys2K1dmQThDdDFzZ0twUjltMFpLUzRQTUJKUE95TVhlNXJCeGNRMzlWRTdaTTd2YW1lQndiaFo2Z1hRaTZPTUJ4TzdUdUxpWEh6SzgvN2ZYNVAraUtaVGwyMkQyWUkzU3U5NGdzWVBFNW53SGlvNHRseVRPRDZsMkt4dTFnRm1ON20vRTNLMzQ2TmpOQUV6Z2kxSDRvS0swY0lZTEFXU3VVN2xCSWhFTXJ2VVJVcmlveVZvaUdSbEN5ZFJUU0FMU0tzbG5PTmxYbG5BM3JJMm50cHJEaGIybis2UGp3V1BMSk5McVMwY0c1ZXE2bzRQWm01UHdlc2pxbW5LNFZhUnhpa2JQRjdiTlc2QjdEcTA5L3lYbDIwSkIxZGZqY3F3eXNraXljVEl6bnFPNDcvRldzSzhDY21mVXFHcGJNMWoybnN2QUkrUGlEbDNyV25wZ3hvYzEyZklyNTcwTTJxMTczd1l2YUJsakdoYTRXRHg0NUczSXIySDBrNlBOdUIreWZsNHJpbEZZbktMWDZPdkhQYU5saU9NdXZiT3d1VUFsYWZWRlpjRmpLS3RxUkZHK1IyakdrOTUzRHhOaDRxUXVBRnliQUM1SnlBSE5lRjZTN2Ura1NNZ2hONEdQQmUvNzE0MHQrRWVwN2d0Y2NISmlsS2tYZzhuTTVuZjNxd1pMTUtxcEt1YkN3bmdQVmRHdHM1cm9iYXZTSnpvT29kaERHaTduY3VDVFlQUi9yUzJvcW05bkl3MDdobGJjK1FmbzN6NENQWUd6Uk03cjViZFZHN3NBNlNTalVuaTF2cWU3UGVsMmtYdU1jRERLL2ZiUnZNblFlSzB5Wkg4VUVVNWNzMEh5QnVwc3NldnIrdFBVeCt6KzhJM2ozZm1ucTltdWF3eVZNaGNUWnJJWXlXaHp6b0M3VWplYlcwS2wyZlNOaWFBQUFkNTRybmswa2JhVjJDS053RmdMRG5rcEJBZDd2SUtZdXNvbnpBS1lxeG5mUnh4SjhRajFEZWZtVkNhb2NWd3FoeFdxaUltK2p0NStaUitqRGNUNktOdFNGUEc4RlZRQ2ZSenVJUGZrb0pIelJFdWRHL3E5UThERTIzTWpUeFdpMWJkTzJ6V2pnMGVhY1k4bWlWbm5xVGFnTzlha000ZG9wS3ZaVU11WllHdTk5blpkNlpIeFdiSnN5V0xOaDYxbkxKdzhOL2duS0FhaTdVNlB4VGt2YjlUTjk2d2UwZnh0MGQrdk5aUnFLNkQ2c3dtYTJrakd1ZUhOM1pqNDVyZXBLMitSV2cxeWpkb2w0L1hCRTlRUFU3MUE4cmx5R2hBOVJQVHlQVmR4SjA4MWcwU3lPUjZyUEpPbnFyQlo0cGNLRXlHVitxNG02N3F4d1ZqQ2treUNwT3lhS2s1QUM4ZjBoMnU0SHFvajJ6cWZkYng3MXQ3YnJjRFhIVWdaQWJ6dUNwOUhlakJkOWRVZTA4NGlQL2R5N1lPT0tPMGpOTFovZ3h0bVVKT1lhU1RtU2N5U3RtT2tJMUM5Tk5TQ0lCOGJSaGI3YmJBM2I3M2VGYll4a2piMmFRZVN6ZjFWODBYb2VRZFRxQ3FvN2hlbXJkbmdadDA0TE9saXlXMlBNcGRHY28wZVdwdzZtbWptYUQ5VThQTnQ3ZnREeEZ4NHI2cUNIRGNRUmNjd1Y0T3FoQkI3bDZqb3RVWTZXSytzWU1KL2dPRWVtRStLajZ0V2xJckMrV2krWUMzMkhGdkxVZVJVVDVwaDdoNTRUODFjU3VhdVNNamVqemUxcVdlWVdmSVhOKzdIWkhrTmZGWVFvU3gybHJGZTRsWXFGUkFEcUYxWTh2Z3lraWs1WmUwWk1iMnhBN3hjak94UExlUU4zRWhYZG9WSWlhVHFRUFhRTFU2SGJNd3Mra3lBR1dXNVlTUFpqTzhjTVd2ZFpiN2F4Mk1sSFowVDBXeVhQYTBTWGloYTBCa0xUWnhhUGVPNzllNWJsUEMyTm9heG9ZMGJnTER2L0FLcDFrN1JxdXN2RzAyakg3Vi9IaXdIaHg4dUs1ZHJPdEpKRU1zblh5NC8zVWR4SCtJNzMvTGtPYVdxcldzR1pBV2UrdmZLN3FhUmhrTGNuTzBZejh6dEIzYThsZm91aXJTUStxZWFoK3VBWGJFM3cxZDQ1Y2xhZ3U1RTltTS9iTHBYRnRQSEpNNFpIcTJsMXU4akllS1p1eWRvUzU5WEhGL2lTdC9SbUplNGhqYXhvYXhyV05HUWEwQm9BNUFLUmFLYVhTSzFQRGpvclhIV1dtSGM2WS82RWp1ak5lM01PcDM4bXlTQS81bUFlcTk0RXdWS2JIcWo1clVQcUtmOEE1bUdTTnVuV1pQWi9PMGtEeFdocy9hRnlNOGl2ZEVBZ2dnRUVXSU9ZSTRGZUY2UmJIRkxMRytFWVlabjRlckdrY3V0bThHa1hOdDFqdXNCYWFaRW8wZXBvbzhSSERVOXkxN3JFNk4xb2wra1lkSVorb0I0bGpHbHgvbWM0ZndyWlIwYUlkRzZTNk4wN0dRVlZHMStmc3Y4QWVIeDRxcGdlM0lnbm1BU0N0Skc2bVVWSUNqSTVWSkpPQ2xlQ2U1SVcyWEhrSlpYTE9LUndVeENRdFhNeVNMQ2hoVXRsMWxBVVI0VlFycExBclJreUN3dHFTNnJmQkc1R2VSMGlMWnRDSlhtUitiV083STR2NG51dXQ4S3RRUTRJMk4zMnVmekhNcXlzYzJUZWI5ZUJ3alNHV2MzNmlURCs2a1BZL0M3ZTM1ZjBXaUZIVXdDUnBhN1E2RWFnN2lPYVVKVVZRejI0Z3MwMG1JdWFQYTlwbzRqZVAwVWxEVWtFeFNaUGJsM2pjUnlLdHl4Nk9ia1JtRmZNSGFGM3d6eTlYSGE2N296dEVRenZoY2JOa3M5dkoyaCtDMzY2aUU3U1c5bVFETUhmMy9OZlB1bERKSWJUTkJEb0hYZTNmMVo5cnl5UGdWNldOeHp3Y1RCcHdrZlZnVUN2RmRIT2x6WE1hSG00dHJmTmVzcDYrT1FkaDRQSzlqNUxpeVlad2ZLTjQ1RXlTVlo5U1RmQzNOeDlGZG5kYklaazZCWUcwSm56UE5IU0c4cHQ5SnFNOE5PdzdyKytkdzFWWWxiRklwMHRMOU5xdXFiYzA4QnZOSjc3OU1JUG1CL0VlQzk2TEFiZ0FPNEFCWkZHeUNoaGJFMGdBYnlRQzkvRThUeUhJSU9NOC9zdDZwbnZ5dEk4V3hhay9tdDNMV2N0bngwaHdXdjdEdFhhald0OW90WVRoQkFKZktmZGphTTFVZzJUTFUyNis5UFRqMmFkaHRJOGZqY1BaN2huM0xXb05seHhISG5KTVJZelNFT2RiZ056UnlBQ3ZwSnBkRlZmWkhTMDdJbWhrYldzWU5HdEZoLzk1cWNKVVVyS0dSQ1VJcWtNWUlwVVZhWURoZVgvQUxScXZxcU5yL3Rpb2o2di9Fd3ZzdlRMNTMvYXJWNHBhU25IMlErb2VPWk9CbjZTTGJDdHBwQ2ZRL1FHdStqZ3RkY3NrdGkzbkY3M3FWOUVqa0RoZHBCSEVMNWRzVVdBWHJhR1VqUWtKNTNVck00eThIcDdycnJOaXFIY1NweEllSzVuOVFsNE5VVzhTR05RTktjTENYMVUzMXdXa1FQVUxncDNoUmtMYWFNeUFoTFpUbHFHRllTaUlod29FS2JBbGMxWk9JeXBVYUx6OGpjY3pXN3NWejNETXIwRlhvVmliTWJpbGU3M1JieEovb1ZyQjZ3bEl4eUsya2E2WUpRaUZ4SXNZSmtvUkNwREsxZlI5WUE1cHd5TTlsM0g4THVYNkt2UzE5amdrQlk4YWcvcU9JV2tFbFJUc2tGbnREaHUzRWR4MUMxalB3eE5CWVFjeHFxKzB0bXgxRGJQR2RyQjQxSExtT1NnZHN4N2YyVXVYdXlDL3dEbUh5UUVOVHA5WDM0ejhsckZwTzRzbHB0VXo1NXRib0ZWMHpuUG96SE5GZTRpeGlKN2VUUTdza2Z4S2hTd2JVTHhHMm1reG5jWFJBRG1UaXRibXZxcmRteXYvYVNobzNpTUVuK1kvSmFOTFNzakZtTnRmVTZsM2VUcXVyN3lTWGhnc2E4bmg5bTlENjU0QnFxbHNZKzZpZTUyWE4xaDZIeFhxNkRZblZNRVRaT3JqR2VDRmpZN25lWE9jWE9jVHh2ZGFnVEJZeXpTbjJVb3BFRk5ReHhtN0dERnBqZGQ3eVB6T3VWYUNVSmxGMlVNaWxDSVZJWXlJU29xZ0dSQ1VJcWt3R1JTaEZWWXhsOHEvdEN2L3dBVHovdTBPSDh0My9IRXZxbDE1THA3MGRkVXRaUEFNVThBTFN3YXl4RTNzUHhBM0lHKzU1TGJEUFdSTXVqejJ5WDVCZW5wSHJ3bXpheXhzYmdnMklJc1FScUNOeFhwNkd1R1dhckx5WW5wNFhxMnh5eDZlcUhGWG9xZ0xpbEExaXpRYVZJcWpKZ3BSS28vOFd6VFltYzFJV3JseTdKSWtHQmRnWExsR3FHQXNVYjJybHl5bEZBVWEwZGs5eXlOanM3RG5lKzl4OEJsOENndVhQa2RZMysxL3N5bDhqUkNLNWN1VkRHVEJjdVZJQW9oY3VWSVl3UlhMbGFBWUloY3VWSVl5SVhMbFNBS1lMbHlwQUVJaEZjcUdFTGx5NVVBVVZ5NU1BbzNYTGxRQlhYUlhKak16YW13YWFwT0tXSUYvd0I0MGxqK1hhYm1lNDNXSEwwTGEwbnFxbVp2S1NOc3c3dXpoWExsYWswS2t6bTlHNmh1bFJHN3Zpa2I4U3BtYkhxaCs5aS9rbFhMbFczNEZxaXl6WnRTTlo0aG5iS0dSMytwV0c3TnFmN3hILzREL3ZYTGtiTWRJLy9aXCIpO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCB2aDtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLypOQVZJR0FUSU9OIEJBUiovXG4jbmF2LWJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5uYXZiYXItYnJhbmQgaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6ICM1NTUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTE9HSU4gRk9STS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5sb2dpbi1ib3gge1xuICB3aWR0aDogMjgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxvZ2luLWJveCBoMSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi50ZXh0Ym94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGV4dGJveCBpIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRleHRib3ggaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIEZpcmVmb3ggKi9cbn1cblxuOjptZXNzYWdlIHtcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIGNvbG9yOiByZWQ7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIEZpcmVmb3ggKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-service.service */ "./src/app/main-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(_service, router) {
        this._service = _service;
        this.router = router;
    }
    ngOnInit() {
    }
    loginUser(event) {
        event.preventDefault();
        console.log(event);
        var username = event.target.elements[0].value;
        var password = event.target.elements[1].value;
        this._service.verifyUser(username, password)
            .subscribe((userData) => {
            this.b = userData;
            if (this.b = true) {
                this.router.navigate(['view']);
            }
            else {
                this.message = "sorry username or password is invalid";
            }
        }, (error) => {
            console.log(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _main_service_service__WEBPACK_IMPORTED_MODULE_2__["MainServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/main-service.service.ts ***!
  \*****************************************/
/*! exports provided: MainServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainServiceService", function() { return MainServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MainServiceService = class MainServiceService {
    constructor(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.APIUrl = "http://localhost:8080/USTVendorsApp/api";
    }
    //verify login
    verifyUser(username, password) {
        return this._httpService.get(this.APIUrl + '/login' + '/' + username + '/' + password);
    }
    //get all vendor details
    getVendorDetails() {
        return this._httpService.get(this.APIUrl + '/vendordetail/null');
    }
    //get vendor details by id
    getVendorDetailsById() {
        return this._httpService.get(this.APIUrl + '/vendorbyid/' + this.vId);
    }
    //search 
    search(searchString) {
        return this._httpService.get(this.APIUrl + '/vendordetail/' + searchString);
    }
    //add details
    add(vendorContactDetails) {
        let body = JSON.stringify(vendorContactDetails);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        if (vendorContactDetails.vId) {
            return this._httpService.put(this.APIUrl + '/vendordetails', body, options);
        }
        else {
            return this._httpService.post(this.APIUrl + '/vendordetails', body, options);
        }
    }
    edit(vId) {
        this.vId = vId;
    }
    //disable 
    disable(vendordetail, vId) {
        let body = JSON.stringify(vendordetail);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this._httpService.put(this.APIUrl + '/disablevendors/' + vId, body, options);
    }
};
MainServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MainServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainServiceService);



/***/ }),

/***/ "./src/app/vendorcontactDetails.ts":
/*!*****************************************!*\
  !*** ./src/app/vendorcontactDetails.ts ***!
  \*****************************************/
/*! exports provided: VendorContactDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorContactDetails", function() { return VendorContactDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class VendorContactDetails {
}


/***/ }),

/***/ "./src/app/view/view.component.scss":
/*!******************************************!*\
  !*** ./src/app/view/view.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  height: 100%;\n}\n\n.bg {\n  /* The image used */\n  background-image: url(\"https://wallpaperplay.com/walls/full/d/f/1/100151.jpg\");\n  /* Full height */\n  height: 100 vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.table-hover tbody tr:hover td, .table-hover tbody tr :hover th {\n  background-color: #d9f2e6;\n}\n\nth, td {\n  padding: 15px;\n}\n\nth {\n  background-color: #56926d;\n  color: white;\n}\n\ntable {\n  width: 100%;\n}\n\nth {\n  height: 50px;\n}\n\ntd {\n  height: 20px;\n}\n\n.btn {\n  margin-left: 380px;\n  background-color: #35a560;\n  width: 140px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n}\n\n.button:hover {\n  color: #26734d;\n}\n\n.btn-outline {\n  color: #194d33;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXI2L0FuZ3VsYXIvVXN0RmluYWxUZXN0L3NyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFFQSw4RUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcclxuaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmcge1xyXG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2Fic3RyYWN0LW1lZGljYWwtd2FsbHBhcGVyLXRlbXBsYXRlLWRlc2lnbl81Mzg3Ni02MTgwMi5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL3dhbGxwYXBlcnBsYXkuY29tL3dhbGxzL2Z1bGwvZC9mLzEvMTAwMTUxLmpwZ1wiKTtcclxuICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIGhlaWdodDogMTAwIHZoO1xyXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB0ZCwgLnRhYmxlLWhvdmVyIHRib2R5IHRyIDpob3ZlciB0aHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNkOWYyZTY7XHJcbn1cclxuXHJcbnRoLHRke1xyXG4gIHBhZGRpbmc6MTVweDtcclxufVxyXG5cclxudGh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2OTI2ZDtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxudGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxudGh7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbn1cclxuXHJcbnRke1xyXG4gIGhlaWdodDoyMHB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gIG1hcmdpbi1sZWZ0OiAzODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhNTYwO1xyXG4gIHdpZHRoOjE0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogIzI2NzM0ZDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5le1xyXG4gIGNvbG9yOiAjMTk0ZDMzO1xyXG59IiwiYm9keSxcbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iZyB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd2FsbHBhcGVycGxheS5jb20vd2FsbHMvZnVsbC9kL2YvMS8xMDAxNTEuanBnXCIpO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCB2aDtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHRkLCAudGFibGUtaG92ZXIgdGJvZHkgdHIgOmhvdmVyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZjJlNjtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY5MjZkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG50ZCB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAzODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YTU2MDtcbiAgd2lkdGg6IDE0MHB4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMjY3MzRkO1xufVxuXG4uYnRuLW91dGxpbmUge1xuICBjb2xvcjogIzE5NGQzMztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-service.service */ "./src/app/main-service.service.ts");
/* harmony import */ var _vendorcontactDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendorcontactDetails */ "./src/app/vendorcontactDetails.ts");




let ViewComponent = class ViewComponent {
    constructor(_mainservice) {
        this._mainservice = _mainservice;
        this.popoverMessage = "Do you want to disable?";
        this.vendorContactDetail = new _vendorcontactDetails__WEBPACK_IMPORTED_MODULE_3__["VendorContactDetails"]();
    }
    ngOnInit() {
        this.getVendorDetails();
    }
    //method for getting vendor+ its contact details
    getVendorDetails() {
        this._mainservice.getVendorDetails().subscribe((Data) => {
            this.details = Data,
                console.log(Data);
        }, (error) => {
            console.log(error);
        });
    }
    //search the details
    search(searchString) {
        if (searchString != null) {
            this._mainservice.search(searchString).subscribe((Data) => {
                this.details = Data,
                    console.log(Data);
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.getVendorDetails();
        }
    }
    //disable the details
    disable(vId) {
        this._mainservice.disable(this.vendorContactDetail, vId).subscribe((response) => {
            console.log(response);
            this.getVendorDetails();
        }, (error) => {
            console.log(error);
        });
    }
    edit(vId) {
        this._mainservice.edit(vId);
    }
};
ViewComponent.ctorParameters = () => [
    { type: _main_service_service__WEBPACK_IMPORTED_MODULE_2__["MainServiceService"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.scss */ "./src/app/view/view.component.scss")).default]
    })
], ViewComponent);



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

const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user6/Angular/UstFinalTest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map