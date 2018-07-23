(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./+products/products.module": [
		"./src/app/+products/products.module.ts",
		"products-products-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', loadChildren: './+products/products.module#ProductsModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core-module */ "./src/app/core/core-module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core-module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core-module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_state_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/app-state-reducers */ "./src/app/core/store/app-state-reducers.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/products.service */ "./src/app/core/services/products.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/product.service */ "./src/app/core/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_store_app_state_reducers__WEBPACK_IMPORTED_MODULE_3__["reducers"])],
            providers: [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]],
            exports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"]]
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/repository/Repository.ts":
/*!***********************************************!*\
  !*** ./src/app/core/repository/Repository.ts ***!
  \***********************************************/
/*! exports provided: Repository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repository", function() { return Repository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/settings */ "./src/app/core/settings/settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Repository = /** @class */ (function () {
    function Repository(http) {
        this.API = "";
        this._http = http;
    }
    Repository.prototype.getAll = function (params) {
        return this._http.get(_settings_settings__WEBPACK_IMPORTED_MODULE_2__["SERVER"] + this.API, { params: params });
    };
    Repository.prototype.saveItem = function (newItem) {
        return this._http.post(_settings_settings__WEBPACK_IMPORTED_MODULE_2__["SERVER"] + this.API, newItem);
    };
    Repository.prototype.updateForItem = function (updatedItem) {
        return this._http.post(_settings_settings__WEBPACK_IMPORTED_MODULE_2__["SERVER"] + this.API, updatedItem);
    };
    Repository.prototype.deleteItem = function (deleteItem, params) {
        return this._http.delete(_settings_settings__WEBPACK_IMPORTED_MODULE_2__["SERVER"] + this.API, { params: params });
    };
    Repository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], Repository);
    return Repository;
}());



/***/ }),

/***/ "./src/app/core/services/product.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/product.service.ts ***!
  \**************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_Repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository/Repository */ "./src/app/core/repository/Repository.ts");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/settings */ "./src/app/core/settings/settings.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_products_state_products_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/products-state/products-actions */ "./src/app/core/store/products-state/products-actions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductService = /** @class */ (function (_super) {
    __extends(ProductService, _super);
    function ProductService(http, store) {
        var _this = _super.call(this, http) || this;
        _this.store = store;
        _this.API = _settings_settings__WEBPACK_IMPORTED_MODULE_3__["API_PRODUCT"];
        return _this;
    }
    ProductService.prototype.createUrlParams = function (item) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('name', '' + item.Name);
        return params;
    };
    ProductService.prototype.GetProductsByName = function (name) {
        var _this = this;
        var subscription = this.getAll(this.createUrlParams({ Name: name })).subscribe(function (x) {
            _this.store.dispatch(new _store_products_state_products_actions__WEBPACK_IMPORTED_MODULE_5__["GetProductsAction"](x.body));
            subscription.unsubscribe();
        });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ProductService);
    return ProductService;
}(_repository_Repository__WEBPACK_IMPORTED_MODULE_2__["Repository"]));



/***/ }),

/***/ "./src/app/core/services/products.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/products.service.ts ***!
  \***************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_Repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository/Repository */ "./src/app/core/repository/Repository.ts");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/settings */ "./src/app/core/settings/settings.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_products_state_products_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/products-state/products-actions */ "./src/app/core/store/products-state/products-actions.ts");
/* harmony import */ var _store_selectors_products_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/selectors/products-selectors */ "./src/app/core/store/selectors/products-selectors.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsService = /** @class */ (function (_super) {
    __extends(ProductsService, _super);
    function ProductsService(http, store) {
        var _this = _super.call(this, http) || this;
        _this.store = store;
        _this.API = _settings_settings__WEBPACK_IMPORTED_MODULE_3__["API_PRODUCTS"];
        return _this;
    }
    ProductsService.prototype.createUrlParams = function (item) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('name', '' + item.Name);
        return params;
    };
    ProductsService.prototype.GetProductsFromStore = function () {
        var _this = this;
        var subscription = this.getAll().subscribe(function (x) {
            _this.store.dispatch(new _store_products_state_products_actions__WEBPACK_IMPORTED_MODULE_5__["GetProductsAction"](x.body));
            subscription.unsubscribe();
        });
        return this.store.select(_store_selectors_products_selectors__WEBPACK_IMPORTED_MODULE_6__["ProductsSelector"].GetProducts);
    };
    ProductsService.prototype.GetProductsByName = function (name) {
        var _this = this;
        var subscription = this.getAll(this.createUrlParams({ Name: name })).subscribe(function (x) {
            _this.store.dispatch(new _store_products_state_products_actions__WEBPACK_IMPORTED_MODULE_5__["GetProductsAction"](x.body));
            subscription.unsubscribe();
        });
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ProductsService);
    return ProductsService;
}(_repository_Repository__WEBPACK_IMPORTED_MODULE_2__["Repository"]));



/***/ }),

/***/ "./src/app/core/settings/settings.ts":
/*!*******************************************!*\
  !*** ./src/app/core/settings/settings.ts ***!
  \*******************************************/
/*! exports provided: SERVER, API_PRODUCTS, API_PRODUCT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER", function() { return SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PRODUCTS", function() { return API_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PRODUCT", function() { return API_PRODUCT; });
var SERVER = "https://localhost:44312/";
var API_PRODUCTS = "api/products";
var API_PRODUCT = "api/product";


/***/ }),

/***/ "./src/app/core/store/BaseSelectors.ts":
/*!*********************************************!*\
  !*** ./src/app/core/store/BaseSelectors.ts ***!
  \*********************************************/
/*! exports provided: BaseSelectors, StateSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSelectors", function() { return BaseSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateSelector", function() { return StateSelector; });
var BaseSelectors = /** @class */ (function () {
    function BaseSelectors() {
        this.ProductsState = function (state) { return state.productsState; };
    }
    return BaseSelectors;
}());

var StateSelector = new BaseSelectors();


/***/ }),

/***/ "./src/app/core/store/app-state-reducers.ts":
/*!**************************************************!*\
  !*** ./src/app/core/store/app-state-reducers.ts ***!
  \**************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _products_state_products_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-state/products-reducers */ "./src/app/core/store/products-state/products-reducers.ts");

var reducers = {
    productsState: _products_state_products_reducers__WEBPACK_IMPORTED_MODULE_0__["ProductsReducer"]
};


/***/ }),

/***/ "./src/app/core/store/products-state/products-actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/store/products-state/products-actions.ts ***!
  \***************************************************************/
/*! exports provided: MY_PRODUCTS, SHAKE_STORE, GetProductsAction, ShakeStoreAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_PRODUCTS", function() { return MY_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAKE_STORE", function() { return SHAKE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductsAction", function() { return GetProductsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShakeStoreAction", function() { return ShakeStoreAction; });
var MY_PRODUCTS = 'GetProducts';
var SHAKE_STORE = 'ShakeStore';
var GetProductsAction = /** @class */ (function () {
    function GetProductsAction(payload) {
        this.payload = payload;
        this.type = MY_PRODUCTS;
    }
    return GetProductsAction;
}());

var ShakeStoreAction = /** @class */ (function () {
    function ShakeStoreAction(payload) {
        this.payload = payload;
        this.type = SHAKE_STORE;
    }
    return ShakeStoreAction;
}());



/***/ }),

/***/ "./src/app/core/store/products-state/products-reducers.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/store/products-state/products-reducers.ts ***!
  \****************************************************************/
/*! exports provided: ProductsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsReducer", function() { return ProductsReducer; });
/* harmony import */ var _products_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-actions */ "./src/app/core/store/products-state/products-actions.ts");

var initialState = {
    products: [],
    shakeStore: false
};
function ProductsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _products_actions__WEBPACK_IMPORTED_MODULE_0__["MY_PRODUCTS"]: {
            state.products = action.payload;
            return Object.assign({}, state);
        }
        case _products_actions__WEBPACK_IMPORTED_MODULE_0__["SHAKE_STORE"]: {
            state.shakeStore = action.payload;
            console.log(state);
            return Object.assign({}, state);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/core/store/selectors/products-selectors.ts":
/*!************************************************************!*\
  !*** ./src/app/core/store/selectors/products-selectors.ts ***!
  \************************************************************/
/*! exports provided: ProductsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsSelector", function() { return ProductsSelector; });
/* harmony import */ var _BaseSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseSelectors */ "./src/app/core/store/BaseSelectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ProductsSelectors = /** @class */ (function (_super) {
    __extends(ProductsSelectors, _super);
    function ProductsSelectors() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GetProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_this.ProductsState, function (state) { return state.products; });
        _this.GetProductByName = function (name) { return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_this.GetProducts, function (products) {
            var resultArray = products.filter(function (item) {
                var index = item.Name.toLowerCase().indexOf(name.toLowerCase());
                if (index != null) {
                    return item;
                }
            });
        }); };
        return _this;
    }
    return ProductsSelectors;
}(_BaseSelectors__WEBPACK_IMPORTED_MODULE_0__["BaseSelectors"]));
var ProductsSelector = new ProductsSelectors();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\source\repos\AllStore\TheStore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map