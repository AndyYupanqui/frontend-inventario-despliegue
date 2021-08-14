(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-remision-remision-module"],{

/***/ "./src/app/components/remision-detalle/remision-detalle.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/remision-detalle/remision-detalle.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVtaXNpb24tZGV0YWxsZS9yZW1pc2lvbi1kZXRhbGxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/remision-detalle/remision-detalle.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/remision-detalle/remision-detalle.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  remision-detalle works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/remision-detalle/remision-detalle.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/remision-detalle/remision-detalle.component.ts ***!
  \***************************************************************************/
/*! exports provided: RemisionDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionDetalleComponent", function() { return RemisionDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RemisionDetalleComponent = /** @class */ (function () {
    function RemisionDetalleComponent() {
    }
    RemisionDetalleComponent.prototype.ngOnInit = function () {
    };
    RemisionDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remision-detalle',
            template: __webpack_require__(/*! ./remision-detalle.component.html */ "./src/app/components/remision-detalle/remision-detalle.component.html"),
            styles: [__webpack_require__(/*! ./remision-detalle.component.css */ "./src/app/components/remision-detalle/remision-detalle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RemisionDetalleComponent);
    return RemisionDetalleComponent;
}());



/***/ }),

/***/ "./src/app/components/remision/remision-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/remision/remision-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RemisionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionRoutingModule", function() { return RemisionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _remision_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remision.component */ "./src/app/components/remision/remision.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _remision_detalle_remision_detalle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../remision-detalle/remision-detalle.component */ "./src/app/components/remision-detalle/remision-detalle.component.ts");






var routes = [
    { path: '', component: _remision_component__WEBPACK_IMPORTED_MODULE_3__["RemisionComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'detalle', component: _remision_detalle_remision_detalle_component__WEBPACK_IMPORTED_MODULE_5__["RemisionDetalleComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
];
var RemisionRoutingModule = /** @class */ (function () {
    function RemisionRoutingModule() {
    }
    RemisionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RemisionRoutingModule);
    return RemisionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/remision/remision.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/remision/remision.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVtaXNpb24vcmVtaXNpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/remision/remision.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/remision/remision.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\" style=\"font-size: 20px; padding-right:3em; padding-left: 3em\">\r\n    <i class=\"material-icons\" style=\"font-size: 30px\"> unarchive </i> Guías de Remisión\r\n</div>\r\n\r\n<div class=\" container-fluid mt-4\" style=\"padding-right:4em; padding-left: 4em\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/remision/remision.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/remision/remision.component.ts ***!
  \***********************************************************/
/*! exports provided: RemisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionComponent", function() { return RemisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RemisionComponent = /** @class */ (function () {
    function RemisionComponent() {
    }
    RemisionComponent.prototype.ngOnInit = function () {
    };
    RemisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remision',
            template: __webpack_require__(/*! ./remision.component.html */ "./src/app/components/remision/remision.component.html"),
            styles: [__webpack_require__(/*! ./remision.component.css */ "./src/app/components/remision/remision.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RemisionComponent);
    return RemisionComponent;
}());



/***/ }),

/***/ "./src/app/components/remision/remision.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/remision/remision.module.ts ***!
  \********************************************************/
/*! exports provided: RemisionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionModule", function() { return RemisionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core-angular-material/material.module */ "./src/app/core-angular-material/material.module.ts");
/* harmony import */ var _remision_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remision-routing.module */ "./src/app/components/remision/remision-routing.module.ts");
/* harmony import */ var _remision_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remision.component */ "./src/app/components/remision/remision.component.ts");
/* harmony import */ var _remision_detalle_remision_detalle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../remision-detalle/remision-detalle.component */ "./src/app/components/remision-detalle/remision-detalle.component.ts");








var RemisionModule = /** @class */ (function () {
    function RemisionModule() {
    }
    RemisionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _remision_component__WEBPACK_IMPORTED_MODULE_6__["RemisionComponent"],
                _remision_detalle_remision_detalle_component__WEBPACK_IMPORTED_MODULE_7__["RemisionDetalleComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _remision_routing_module__WEBPACK_IMPORTED_MODULE_5__["RemisionRoutingModule"],
                _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], RemisionModule);
    return RemisionModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-remision-remision-module.js.map