(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/+products/products-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/+products/products-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "./src/app/+products/products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], pathMatch: 'full' },
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/+products/products.component.css":
/*!**************************************************!*\
  !*** ./src/app/+products/products.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n"

/***/ }),

/***/ "./src/app/+products/products.component.html":
/*!***************************************************!*\
  !*** ./src/app/+products/products.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<glp-search-bar></glp-search-bar>\r\n<glp-show-products-panel></glp-show-products-panel>\r\n"

/***/ }),

/***/ "./src/app/+products/products.component.ts":
/*!*************************************************!*\
  !*** ./src/app/+products/products.component.ts ***!
  \*************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'glp-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/+products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/+products/products.component.css")],
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/+products/products.module.ts":
/*!**********************************************!*\
  !*** ./src/app/+products/products.module.ts ***!
  \**********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/+products/products-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/+products/search-bar/search-bar.component.ts");
/* harmony import */ var _show_products_panel_show_products_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-products-panel/show-products-panel.component */ "./src/app/+products/show-products-panel/show-products-panel.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.component */ "./src/app/+products/products.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _products_routing_module__WEBPACK_IMPORTED_MODULE_0__["ProductsRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
            ],
            exports: [],
            declarations: [
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_2__["SearchBarComponent"],
                _show_products_panel_show_products_panel_component__WEBPACK_IMPORTED_MODULE_3__["ShowProductsComponent"],
                _products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]
            ],
            providers: [],
            bootstrap: [_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]],
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/+products/search-bar/search-bar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/+products/search-bar/search-bar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n.ng-select.custom-select {\r\n \r\n}\r\n\r\n.margin-top-10 {\r\nmargin-top: 10px;\r\n}\r\n\r\n.search-input {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/+products/search-bar/search-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/+products/search-bar/search-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-10\">\r\n   <input #searchField class=\"form-control search-input\" type=\"text\" placeholder=\"Search...\" />\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <div class=\"btn btn-success margin-top-10\" (click)=\"searchProducts(searchField.value)\"><i class=\"fa fa-search\"></i></div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/+products/search-bar/search-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/+products/search-bar/search-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/product.service */ "./src/app/core/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(productService) {
        this.productService = productService;
    }
    SearchBarComponent.prototype.searchProducts = function (name) {
        this.productService.GetProductsByName(name);
    };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'glp-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/+products/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/+products/search-bar/search-bar.component.css")],
        }),
        __metadata("design:paramtypes", [_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/+products/show-products-panel/show-products-panel.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/+products/show-products-panel/show-products-panel.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n.product-container {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: lightgrey;\r\n}\r\n\r\n.product {\r\n  position: relative;\r\n  float: left;\r\n  height: 200px;\r\n  width: 230px;\r\n  background-color: lavenderblush;\r\n  margin-left: 10px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n  font-size: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/+products/show-products-panel/show-products-panel.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/+products/show-products-panel/show-products-panel.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-md-12\">\r\n    <div class=\"product-container\">\r\n      <div class=\"product\" *ngFor=\"let product of productsCollection$ | async\">\r\n        <b>Name:</b> {{product.name}}<br />\r\n        <b>Price:</b> {{product.price}} $\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/+products/show-products-panel/show-products-panel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/+products/show-products-panel/show-products-panel.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShowProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProductsComponent", function() { return ShowProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/products.service */ "./src/app/core/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowProductsComponent = /** @class */ (function () {
    function ShowProductsComponent(productsService) {
        this.productsService = productsService;
    }
    ShowProductsComponent.prototype.ngOnInit = function () {
        this.productsCollection$ =
            this.productsService.GetProductsFromStore();
    };
    ShowProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'glp-show-products-panel',
            template: __webpack_require__(/*! ./show-products-panel.component.html */ "./src/app/+products/show-products-panel/show-products-panel.component.html"),
            styles: [__webpack_require__(/*! ./show-products-panel.component.css */ "./src/app/+products/show-products-panel/show-products-panel.component.css")],
        }),
        __metadata("design:paramtypes", [_core_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], ShowProductsComponent);
    return ShowProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map