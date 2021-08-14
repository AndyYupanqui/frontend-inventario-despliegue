(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-proveedores-proveedores-module"],{

/***/ "./src/app/components/proveedor-edit/proveedor-edit.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/proveedor-edit/proveedor-edit.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    outline: none;\r\n    border: 0;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-card {\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm92ZWVkb3ItZWRpdC9wcm92ZWVkb3ItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm92ZWVkb3ItZWRpdC9wcm92ZWVkb3ItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/proveedor-edit/proveedor-edit.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/proveedor-edit/proveedor-edit.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\" style=\"font-size: 20px; padding-right:3em; padding-left: 3em\">\r\n    <i class=\"material-icons\" style=\"font-size: 30px\">edit</i> Editar Proveedor\r\n</div>\r\n\r\n<div class=\"container mt-4\">\r\n    Coloque correctamente los datos que correspondan.\r\n</div>\r\n\r\n<div class=\"container mt-1 \">\r\n    <mat-card>\r\n        <form class=\"mt-2\" [formGroup]=\"editProveedorForm\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8 text-center\" style=\"font-size: 1.7em\">\r\n                    RUC - {{idParam}}\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <div class=\"row mt-2\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Nombre</mat-label>\r\n                        <input matInput formControlName=\"nombre\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Direccion</mat-label>\r\n                        <input matInput formControlName=\"direccion\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Telefono</mat-label>\r\n                        <input matInput formControlName=\"telefono\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>RUC</mat-label>\r\n                        <input matInput formControlName=\"ruc\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Celular</mat-label>\r\n                        <input matInput formControlName=\"celular\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Email</mat-label>\r\n                        <input matInput formControlName=\"email\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <div class=\"row text-right mt-2\">\r\n                <div class=\"col-md-4\"></div>\r\n                <div class=\"col-md-6\">\r\n                    <a mat-button [routerLink]=\"[ '/home/productos' ]\"> Regresar</a>\r\n                    <button class=\"ml-2\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Actualizar</button>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n        </form>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/proveedor-edit/proveedor-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/proveedor-edit/proveedor-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProveedorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorEditComponent", function() { return ProveedorEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_proveedores_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/proveedores.service */ "./src/app/services/proveedores.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var ProveedorEditComponent = /** @class */ (function () {
    function ProveedorEditComponent(route, formBuilder, _proveedorService, _router) {
        this.route = route;
        this.formBuilder = formBuilder;
        this._proveedorService = _proveedorService;
        this._router = _router;
    }
    ProveedorEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idParam = this.route.snapshot.paramMap.get('id');
        this.buildForm();
        this._proveedorService.buscarProveedor(this.idParam).subscribe(function (res) {
            _this.proveedor = res.proveedor[0];
            _this.editProveedorForm.patchValue({
                nombre: _this.proveedor.nombre,
                direccion: _this.proveedor.direccion,
                telefono: _this.proveedor.telefono,
                celular: _this.proveedor.celular,
                email: _this.proveedor.email,
                ruc: _this.proveedor.ruc
            });
        });
    };
    ProveedorEditComponent.prototype.buildForm = function () {
        return this.editProveedorForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(80), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]+')]],
            celular: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ruc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    ProveedorEditComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editProveedorForm.valid)
            this._proveedorService.actualizarProveedor(this.proveedor._id, this.editProveedorForm.value).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'La operación fue exitosa!',
                    text: 'Editado correctamente.'
                }).then(function (result) {
                    if (result.value) {
                        _this._router.navigateByUrl('/home/proveedores');
                    }
                });
            }, function (err) { console.log(err); });
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Error',
                text: 'Coloque correctamente los datos'
            });
        }
    };
    ProveedorEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proveedor-edit',
            template: __webpack_require__(/*! ./proveedor-edit.component.html */ "./src/app/components/proveedor-edit/proveedor-edit.component.html"),
            providers: [_services_proveedores_service__WEBPACK_IMPORTED_MODULE_4__["ProveedorService"]],
            styles: [__webpack_require__(/*! ./proveedor-edit.component.css */ "./src/app/components/proveedor-edit/proveedor-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_proveedores_service__WEBPACK_IMPORTED_MODULE_4__["ProveedorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProveedorEditComponent);
    return ProveedorEditComponent;
}());



/***/ }),

/***/ "./src/app/components/proveedores/proveedores-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/proveedores/proveedores-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProveedoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedoresRoutingModule", function() { return ProveedoresRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _proveedores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proveedores.component */ "./src/app/components/proveedores/proveedores.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _proveedor_edit_proveedor_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../proveedor-edit/proveedor-edit.component */ "./src/app/components/proveedor-edit/proveedor-edit.component.ts");






var routes = [
    { path: '', component: _proveedores_component__WEBPACK_IMPORTED_MODULE_3__["ProveedoresComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: ':id', component: _proveedor_edit_proveedor_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProveedorEditComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
var ProveedoresRoutingModule = /** @class */ (function () {
    function ProveedoresRoutingModule() {
    }
    ProveedoresRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProveedoresRoutingModule);
    return ProveedoresRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/proveedores/proveedores.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/proveedores/proveedores.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.modal .mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.buscar .mat-form-field {\r\n    width: 80%\r\n}\r\n\r\n* {\r\n    outline: none;\r\n    border: 0;\r\n}\r\n\r\n.modal-backdrop .show {\r\n    display: none !important;\r\n}\r\n\r\n/* Estilos de las tablas */\r\n\r\n.mat-column-ruc {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.mat-column-nombre {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 20%;\r\n}\r\n\r\n.mat-column-direccion {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 25%;\r\n}\r\n\r\n.mat-column-telefono {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 8%;\r\n}\r\n\r\n.mat-column-celular {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 8%;\r\n}\r\n\r\n.mat-column-email {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 20%;\r\n}\r\n\r\n.mat-column-acciones {\r\n    padding-right: 0px !important;\r\n    text-align: center !important;\r\n    width: 9%;\r\n}\r\n\r\n/* .mat-cell {\r\n    font-size: 14px;\r\n    min-height: 48px;\r\n    text-align: center;\r\n    border-right: 1px solid #eee;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm92ZWVkb3Jlcy9wcm92ZWVkb3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBR0EsMEJBQTBCOztBQUUxQjtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUdBOzs7OztHQUtHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm92ZWVkb3Jlcy9wcm92ZWVkb3Jlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbCAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXNjYXIgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA4MCVcclxufVxyXG5cclxuKiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3AgLnNob3cge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogRXN0aWxvcyBkZSBsYXMgdGFibGFzICovXHJcblxyXG4ubWF0LWNvbHVtbi1ydWMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbm9tYnJlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWRpcmVjY2lvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi10ZWxlZm9ubyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWNlbHVsYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDglO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1lbWFpbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1hY2Npb25lcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDklO1xyXG59XHJcblxyXG5cclxuLyogLm1hdC1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/components/proveedores/proveedores.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/proveedores/proveedores.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\" style=\"font-size: 20px; padding-right:3em; padding-left: 3em\">\r\n    <i class=\"material-icons\" style=\"font-size: 30px\"> accessibility </i> Proveedores\r\n</div>\r\n\r\n<div class=\" container-fluid mt-4\" style=\"padding-right:4em; padding-left: 4em\">\r\n    <div class=\"row buscar\">\r\n        <div class=\"col-md-6 \">\r\n            <i class=\"material-icons\"> search </i>\r\n            <mat-form-field class=\"mt-3\">\r\n                <input (keyup)=\"applyFilter($event.target.value)\" matInput placeholder=\"Buscar...\" autocomplete=\"off\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-6 text-right\" style=\"padding-top: 1.8em\">\r\n            <button class=\"mr-3\" mat-raised-button style=\"background: #1D6F42; color: white\" (click)=\"exportarProveedores()\">\r\n                <i class=\"material-icons\" style=\"color:white\"> archive</i>Exportar</button>\r\n            <button data-toggle=\"modal\" data-target=\"#modalNuevoProveedor\" mat-flat-button color=\"primary\" style=\"bottom: 0em;\">Nuevo Proveedor</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mat-elevation-z8\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"ruc\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> RUC </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.ruc}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"nombre\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> NOMBRE </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.nombre}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"direccion\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> DIRECCIÓN </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.direccion}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"telefono\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> TELÉFONO </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.telefono}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"celular\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> CELULAR </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.celular}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"email\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> CORREO </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"acciones\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ACCIONES </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button [routerLink]=\"['/home/proveedores', row.ruc ]\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"borrarProveedor(row._id)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [pageSizeOptions]=\"[10, 15, 20]\"></mat-paginator>\r\n    </div>\r\n</div>\r\n<br><br><br>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"modalNuevoProveedor\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalNuevoProveedor\" aria-hidden=\"true\" data-backdrop=\"false\" style=\"background-color: rgba(0, 0, 0, 0.5);\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <form [formGroup]=\"nuevoProveedorForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\"> <i class=\"material-icons\">\r\n                            group_add\r\n                        </i> Nuevo Proveedor</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-center\">\r\n                    Ingrese los datos del nuevo proveedor\r\n                    <div class=\"container from-group text-center mt-3 mb-3\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\"></div>\r\n                            <div class=\"col-md-10\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>RUC</mat-label>\r\n                                    <input formControlName=\"ruc\" matInput>\r\n                                    <mat-hint align=\"end\">{{formControls.ruc.value?.length || 0}}/11</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-1\"></div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\"></div>\r\n                            <div class=\"col-md-10\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>Nombre</mat-label>\r\n                                    <input formControlName=\"nombre\" matInput>\r\n                                    <mat-hint align=\"end\">{{formControls.nombre.value?.length || 0}}/60</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-1\"></div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\"></div>\r\n                            <div class=\"col-md-10\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>Direccion</mat-label>\r\n                                    <input formControlName=\"direccion\" matInput>\r\n                                    <mat-hint align=\"end\">{{formControls.direccion.value?.length || 0}}/60</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-1\"></div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\"></div>\r\n                            <div class=\"col-md-5\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>Teléfono</mat-label>\r\n                                    <input formControlName=\"telefono\" matInput>\r\n                                    <mat-hint align=\"end\">{{formControls.telefono.value?.length || 0}}/9</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>Celular</mat-label>\r\n                                    <input formControlName=\"celular\" matInput>\r\n                                    <mat-hint align=\"end\">{{formControls.celular.value?.length || 0}}/9</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-1\"></div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\"></div>\r\n                            <div class=\"col-md-10\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>Email</mat-label>\r\n                                    <input formControlName=\"email\" matInput>\r\n                                    <mat-hint align=\"end\">{{formControls.email.value?.length || 0}}/50</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-1\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button mat-button color=\"warn\" data-dismiss=\"modal\">Cerrar</button>\r\n                    <button mat-flat-button color=\"primary\" type=\"submit\">Guardar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/proveedores/proveedores.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/proveedores/proveedores.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProveedoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedoresComponent", function() { return ProveedoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_proveedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/proveedores.service */ "./src/app/services/proveedores.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_matPaginator_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/matPaginator.util */ "./src/app/utils/matPaginator.util.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);









var ProveedoresComponent = /** @class */ (function () {
    function ProveedoresComponent(_proveedorService, formBuilder) {
        this._proveedorService = _proveedorService;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['ruc', 'nombre', 'direccion', 'telefono', 'celular', 'email', 'acciones'];
    }
    Object.defineProperty(ProveedoresComponent.prototype, "formControls", {
        get: function () { return this.nuevoProveedorForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProveedoresComponent.prototype.buildForm = function () {
        return this.nuevoProveedorForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(80), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[0-9]+')]],
            celular: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(9)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            ruc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    ProveedoresComponent.prototype.ngOnInit = function () {
        this.listarProveedores();
        this.buildForm();
    };
    ProveedoresComponent.prototype.listarProveedores = function () {
        var _this = this;
        this._proveedorService.listarProveedores().subscribe(function (res) {
            console.log(res);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.proveedores);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    ProveedoresComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ProveedoresComponent.prototype.exportarProveedores = function () {
        this._proveedorService.listarProveedores().subscribe(function (res) {
            var data = res.proveedores;
            var newArray = [];
            for (var i = 0; i < data.length; i++) {
                newArray.push({
                    'RUC': data[i].ruc,
                    'RAZON SOCIAL': data[i].nombre,
                    'CORREO': data[i].email,
                    'TELEFONO': data[i].telefono,
                    'CELULAR': data[i].celular,
                    'DIRECCION': data[i].direccion
                });
            }
            console.log(newArray);
            var ws = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(newArray);
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(wb, ws, 'Book');
            /* save to file */
            xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](wb, 'REPORTE_PROVEEDORES.xlsx');
        });
    };
    ProveedoresComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.nuevoProveedorForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'error',
                title: 'Datos inválidos',
                text: 'Revise nuevamente y llene correctamente los campos.'
            });
            for (var i in this.nuevoProveedorForm.controls)
                this.nuevoProveedorForm.controls[i].markAsTouched();
            return;
        }
        this._proveedorService.nuevoProveedor(this.nuevoProveedorForm.value).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'success',
                title: 'El proveedor ha sido añadido',
                confirmButtonColor: '#3085d6',
                showConfirmButton: true,
            }).then(function (result) {
                $('#modalNuevoProveedor').modal('hide');
                _this.listarProveedores();
                _this.nuevoProveedorForm.reset();
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProveedoresComponent.prototype.borrarProveedor = function (proveedor) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: '¿Estás seguro?',
            text: "El cambio no se podrá revertir!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
        }).then(function (result) {
            if (result.value) {
                _this._proveedorService.borrarProveedor(proveedor).subscribe(function (result) {
                    _this.listarProveedores();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Borrado!', 'El proveedor ha sido borrado correctamente', 'success');
                }, function (err) {
                    console.log(err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal!'
                    });
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ProveedoresComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ProveedoresComponent.prototype, "sort", void 0);
    ProveedoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proveedores',
            template: __webpack_require__(/*! ./proveedores.component.html */ "./src/app/components/proveedores/proveedores.component.html"),
            providers: [_services_proveedores_service__WEBPACK_IMPORTED_MODULE_3__["ProveedorService"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorIntl"], useClass: _utils_matPaginator_util__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorIntlCro"] }],
            styles: [__webpack_require__(/*! ./proveedores.component.css */ "./src/app/components/proveedores/proveedores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_proveedores_service__WEBPACK_IMPORTED_MODULE_3__["ProveedorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ProveedoresComponent);
    return ProveedoresComponent;
}());



/***/ }),

/***/ "./src/app/components/proveedores/proveedores.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/proveedores/proveedores.module.ts ***!
  \**************************************************************/
/*! exports provided: ProveedoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedoresModule", function() { return ProveedoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _proveedores_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proveedores-routing.module */ "./src/app/components/proveedores/proveedores-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _proveedores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proveedores.component */ "./src/app/components/proveedores/proveedores.component.ts");
/* harmony import */ var _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core-angular-material/material.module */ "./src/app/core-angular-material/material.module.ts");
/* harmony import */ var _proveedor_edit_proveedor_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../proveedor-edit/proveedor-edit.component */ "./src/app/components/proveedor-edit/proveedor-edit.component.ts");








var ProveedoresModule = /** @class */ (function () {
    function ProveedoresModule() {
    }
    ProveedoresModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _proveedores_component__WEBPACK_IMPORTED_MODULE_5__["ProveedoresComponent"],
                _proveedor_edit_proveedor_edit_component__WEBPACK_IMPORTED_MODULE_7__["ProveedorEditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _proveedores_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProveedoresRoutingModule"],
                _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_6__["CustomMaterialModule"]
            ]
        })
    ], ProveedoresModule);
    return ProveedoresModule;
}());



/***/ }),

/***/ "./src/app/utils/matPaginator.util.ts":
/*!********************************************!*\
  !*** ./src/app/utils/matPaginator.util.ts ***!
  \********************************************/
/*! exports provided: MatPaginatorIntlCro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntlCro", function() { return MatPaginatorIntlCro; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


var MatPaginatorIntlCro = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MatPaginatorIntlCro, _super);
    function MatPaginatorIntlCro() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemsPerPageLabel = 'Ítems por página';
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return '0 de ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
        };
        return _this;
    }
    return MatPaginatorIntlCro;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]));



/***/ })

}]);
//# sourceMappingURL=components-proveedores-proveedores-module.js.map