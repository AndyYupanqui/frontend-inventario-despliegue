(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/clientes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/clientes.service.ts ***!
  \**********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var ClienteService = /** @class */ (function () {
    function ClienteService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
    }
    ClienteService.prototype.listarClientes = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/clientes', { headers: headers });
    };
    ClienteService.prototype.nuevoCliente = function (form) {
        var body = JSON.stringify(form);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + '/cliente', body, { headers: headers });
    };
    ClienteService.prototype.borrarCliente = function (ClienteId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.delete(this.url + '/cliente/' + ClienteId, { headers: headers });
    };
    ClienteService.prototype.buscarCliente = function (ClienteRuc) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/cliente/' + ClienteRuc, { headers: headers });
    };
    ClienteService.prototype.actualizarCliente = function (id, Cliente) {
        var params = JSON.stringify(Cliente);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.put(this.url + '/cliente/' + id, params, { headers: headers });
    };
    ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/services/proveedores.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/proveedores.service.ts ***!
  \*************************************************/
/*! exports provided: ProveedorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorService", function() { return ProveedorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var ProveedorService = /** @class */ (function () {
    function ProveedorService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
    }
    ProveedorService.prototype.listarProveedores = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/proveedores', { headers: headers });
    };
    ProveedorService.prototype.nuevoProveedor = function (form) {
        var body = JSON.stringify(form);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + '/proveedor', body, { headers: headers });
    };
    ProveedorService.prototype.borrarProveedor = function (proveedorId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.delete(this.url + '/proveedor/' + proveedorId, { headers: headers });
    };
    ProveedorService.prototype.buscarProveedor = function (proveedorRuc) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/proveedor/' + proveedorRuc, { headers: headers });
    };
    ProveedorService.prototype.actualizarProveedor = function (id, proveedor) {
        var params = JSON.stringify(proveedor);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.put(this.url + '/proveedor/' + id, params, { headers: headers });
    };
    ProveedorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProveedorService);
    return ProveedorService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map