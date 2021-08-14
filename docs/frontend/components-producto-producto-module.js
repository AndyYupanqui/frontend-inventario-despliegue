(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-producto-producto-module"],{

/***/ "./src/app/components/producto-edit/producto-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/producto-edit/producto-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    outline: none;\r\n    border: 0;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-card {\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0by1lZGl0L3Byb2R1Y3RvLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdG8tZWRpdC9wcm9kdWN0by1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/producto-edit/producto-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/producto-edit/producto-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\" style=\"font-size: 20px; padding-right:3em; padding-left: 3em\">\r\n    <i class=\"material-icons\" style=\"font-size: 30px\">edit</i> Editar Producto\r\n</div>\r\n\r\n<div class=\"container mt-4\">\r\n    Coloque correctamente los datos que correspondan.\r\n</div>\r\n\r\n<div class=\"container mt-1 align-self-center jsutif\">\r\n    <mat-card>\r\n        <form class=\"mt-2\" [formGroup]=\"editProductoForm\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8 text-center\" style=\"font-size: 1.7em\">\r\n                    Producto: {{idParam}}\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <br>\r\n\r\n            <div class=\"row mt-2\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <mat-form-field hintLabel=\"Max 60 caracteres\" appearance=\"fill\">\r\n                        <mat-label>Nombre</mat-label>\r\n                        <input maxlength=\"60\" matInput formControlName=\"nombre\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <br>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <mat-form-field hintLabel=\"Max 100 caracteres\" appearance=\"fill\">\r\n                        <mat-label>Descripcion</mat-label>\r\n                        <input maxlength=\"100\" matInput formControlName=\"descripcion\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <br>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field hintLabel=\"Max 15 dígitos\" appearance=\"fill\">\r\n                        <mat-label>Stock</mat-label>\r\n                        <input maxlength=\"15\" onKeypress=\"if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;\" matInput formControlName=\"stock\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field hintLabel=\"Max 15 dígitos\" appearance=\"fill\">\r\n                        <mat-label>Precio Unitario</mat-label>\r\n                        <input maxlength=\"15\" onKeypress=\"if (event.keyCode < 46 || event.keyCode == 47 || event.keyCode > 57) event.returnValue = false;\" matInput formControlName=\"precio\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <br>\r\n\r\n            <div class=\"row text-right mt-2\">\r\n                <div class=\"col-md-4\"></div>\r\n                <div class=\"col-md-6\">\r\n                    <a mat-button [routerLink]=\"[ '/home/productos' ]\"> Regresar</a>\r\n                    <button class=\"ml-2\" mat-raised-button color=\"primary\" (click)=\"verValor()\">Actualizar</button>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n        </form>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/producto-edit/producto-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/producto-edit/producto-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoEditComponent", function() { return ProductoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var ProductoEditComponent = /** @class */ (function () {
    function ProductoEditComponent(route, formBuilder, _productoService, _router) {
        this.route = route;
        this.formBuilder = formBuilder;
        this._productoService = _productoService;
        this._router = _router;
    }
    ProductoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idParam = this.route.snapshot.paramMap.get('id');
        this.buildForm();
        this._productoService.getProducto(this.idParam).subscribe(function (res) {
            var producto = res.producto[0];
            _this.editProductoForm.patchValue({
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                stock: producto.stock,
                precio: producto.precio
            });
        });
    };
    ProductoEditComponent.prototype.buildForm = function () {
        return this.editProductoForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            stock: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            precio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]\d*(\.\d{1,2})?$/)]]
        });
    };
    ProductoEditComponent.prototype.verValor = function () {
        var _this = this;
        if (this.editProductoForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Datos inválidos',
                text: 'Revise nuevamente y llene correctamente los campos.'
            });
            for (var i in this.editProductoForm.controls)
                this.editProductoForm.controls[i].markAsTouched();
            return;
        }
        this._productoService.actualizarProducto(this.idParam, this.editProductoForm.value).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'success',
                title: 'La operación fue exitosa!',
                text: 'Editado correctamente.'
            }).then(function (result) {
                if (result.value) {
                    _this._router.navigateByUrl('/home/productos');
                }
            });
        }, function (err) { console.log(err); });
    };
    ProductoEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto-edit',
            template: __webpack_require__(/*! ./producto-edit.component.html */ "./src/app/components/producto-edit/producto-edit.component.html"),
            providers: [_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]],
            styles: [__webpack_require__(/*! ./producto-edit.component.css */ "./src/app/components/producto-edit/producto-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductoEditComponent);
    return ProductoEditComponent;
}());



/***/ }),

/***/ "./src/app/components/producto/producto-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/producto/producto-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProductoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoRoutingModule", function() { return ProductoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_producto_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/producto/producto.component */ "./src/app/components/producto/producto.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _producto_edit_producto_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../producto-edit/producto-edit.component */ "./src/app/components/producto-edit/producto-edit.component.ts");






var routes = [
    { path: '', component: _components_producto_producto_component__WEBPACK_IMPORTED_MODULE_3__["ProductoComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: ':id', component: _producto_edit_producto_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProductoEditComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
];
var ProductoRoutingModule = /** @class */ (function () {
    function ProductoRoutingModule() {
    }
    ProductoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductoRoutingModule);
    return ProductoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/producto/producto.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/producto/producto.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 60%;\r\n}\r\n\r\n* {\r\n    outline: none;\r\n    border: 0;\r\n}\r\n\r\n.modal .mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.buscar .mat-form-field {\r\n    width: 80%\r\n}\r\n\r\n/* Estilos de las tablas */\r\n\r\n.mat-column-codigo {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.mat-column-nombre {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 20%;\r\n}\r\n\r\n.mat-column-descripcion {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 30%;\r\n}\r\n\r\n.mat-column-stock {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.mat-column-precio {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.mat-column-acciones {\r\n    padding-right: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n/* .mat-cell {\r\n    font-size: 14px;\r\n    min-height: 48px;\r\n    text-align: center;\r\n    border-right: 1px solid #eee;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0by9wcm9kdWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJO0FBQ0o7O0FBR0EsMEJBQTBCOztBQUUxQjtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFHQTs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubW9kYWwgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnVzY2FyIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogODAlXHJcbn1cclxuXHJcblxyXG4vKiBFc3RpbG9zIGRlIGxhcyB0YWJsYXMgKi9cclxuXHJcbi5tYXQtY29sdW1uLWNvZGlnbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1ub21icmUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZGVzY3JpcGNpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc3RvY2sge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tcHJlY2lvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWFjY2lvbmVzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG5cclxuLyogLm1hdC1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/components/producto/producto.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/producto/producto.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\" style=\"font-size: 20px; padding-right:3em; padding-left: 3em\">\r\n    <i class=\"material-icons\" style=\"font-size: 30px\">local_offer</i> Productos\r\n</div>\r\n\r\n<div class=\" container-fluid mt-4\" style=\"padding-right:4em; padding-left: 4em\">\r\n    <div class=\"row buscar\">\r\n        <!-- <div class=\"col-md-6 \">\r\n            <i class=\"material-icons\"> search </i>\r\n            <mat-form-field class=\"mt-3\">\r\n                <input (keyup)=\"applyFilter($event.target.value)\" matInput placeholder=\"Buscar...\" autocomplete=\"off\">\r\n            </mat-form-field>\r\n        </div> -->\r\n        <div class=\"col-md-12 text-right\" style=\"padding-top: 1.8em\">\r\n            <!-- <button class=\"mr-3\" mat-raised-button style=\"background: #1D6F42; color: white\" (click)=\"verStock()\">\r\n                <i class=\"material-icons\" style=\"color:white\"> archive</i> Ver Stock </button> -->\r\n            <button data-toggle=\"modal\" data-target=\"#modalNuevoProducto\" mat-flat-button color=\"primary\" style=\"bottom: 1.15em;\">Nuevo Producto</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mat-elevation-z8\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"codigo\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> CÓDIGO </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row._id}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"nombre\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> NOMBRE </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.nombre}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"descripcion\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> DESCRIPCIÓN </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.descripcion}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"stock\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> STOCK </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.stock}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"precio\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> PRECIO UNIT. </th>\r\n                <td mat-cell *matCellDef=\"let row\"> S/. {{row.precio.toFixed(2)}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"acciones\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ACCIONES </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button [routerLink]=\"[ '/home/productos', row._id ]\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"borrarProducto(row._id)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n\r\n        <mat-paginator [pageSizeOptions]=\"[10, 15, 20]\"></mat-paginator>\r\n    </div>\r\n</div>\r\n<br><br><br>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modalNuevoProducto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalNuevoProducto\" aria-hidden=\"true\" data-backdrop=\"false\" style=\"background-color: rgba(0, 0, 0, 0.5);\">\r\n    <div class=\"modal-dialog modal-dialog-centered \" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <form [formGroup]=\"nuevoProductoForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\"> <i class=\"material-icons\">\r\n                            add_circle\r\n                        </i> Nuevo Producto</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"cerrar()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body text-center\" style=\"font-weight: 500;\">\r\n                    Ingrese los datos del nuevo producto\r\n                    <div class=\"container from-group text-center mt-3 mb-3\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\"></div>\r\n                            <div class=\"col-md-10\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>Nombre</mat-label>\r\n                                    <input formControlName=\"nombre\" id=\"nombre\" maxlength=\"60\" matInput autocomplete=\"off\">\r\n                                    <mat-hint align=\"end\">{{formControls.nombre.value?.length || 0}}/60</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-1\"></div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\"></div>\r\n                            <div class=\"col-md-10\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>Descripcion</mat-label>\r\n                                    <input formControlName=\"descripcion\" maxlength=\"100\" matInput autocomplete=\"off\">\r\n                                    <mat-hint align=\"end\">{{formControls.descripcion.value?.length || 0}}/100</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-1\"></div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-1\"></div>\r\n                            <div class=\"col-md-3\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>Stock</mat-label>\r\n                                    <input type=\"text\" min=\"1\" maxlength=\"15\" onKeypress=\"if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;\" formControlName=\"stock\" matInput autocomplete=\"off\">\r\n                                    <mat-hint align=\"end\">{{formControls.stock.value?.length || 0}}/15</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label>Precio </mat-label>\r\n                                    <input min=\"1\"  maxlength=\"15\"onKeypress=\"if (event.keyCode < 46 || event.keyCode == 47 || event.keyCode > 57) event.returnValue = false;\" formControlName=\"precio\" matInput autocomplete=\"off\">\r\n                                    <mat-hint align=\"end\">S/.{{formControls.precio.value?.length || 0}}/15</mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-5\"></div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button mat-button color=\"warn\" data-dismiss=\"modal\" (click)=\"cerrar()\">Cerrar</button>\r\n                    <button type=\"submit\" mat-flat-button color=\"primary\">Guardar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/producto/producto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/producto/producto.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _utils_matPaginator_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/matPaginator.util */ "./src/app/utils/matPaginator.util.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);












var ProductoComponent = /** @class */ (function () {
    function ProductoComponent(_loginService, _router, _productoService, formBuilder) {
        this._loginService = _loginService;
        this._router = _router;
        this._productoService = _productoService;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['codigo', 'nombre', 'descripcion', 'stock', 'precio', 'acciones'];
    }
    ProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listarProductos();
        this.buildForm();
        this._loginService.verify().subscribe(function (res) { return _this.result = res; }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status == 401) {
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    Object.defineProperty(ProductoComponent.prototype, "formControls", {
        get: function () { return this.nuevoProductoForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProductoComponent.prototype.buildForm = function () {
        return this.nuevoProductoForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            stock: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            precio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]\d*(\.\d{1,2})?$/)]]
        });
    };
    ProductoComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.nuevoProductoForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                type: 'error',
                title: 'Datos inválidos',
                text: 'Revise nuevamente y llene correctamente los campos.'
            });
            for (var i in this.nuevoProductoForm.controls)
                this.nuevoProductoForm.controls[i].markAsTouched();
            return;
        }
        this._productoService.nuevoProducto(this.nuevoProductoForm.value).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                type: 'success',
                title: 'El producto ha sido añadido exitosamente',
                confirmButtonColor: '#3085d6',
                showConfirmButton: true,
            }).then(function (result) {
                $('#modalNuevoProducto').modal('hide');
                _this.listarProductos();
                _this.nuevoProductoForm.reset();
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProductoComponent.prototype.listarProductos = function () {
        var _this = this;
        this._productoService.listarProductos().subscribe(function (res) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.productos);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    ProductoComponent.prototype.borrarProducto = function (idEmpleado) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Estás seguro?',
            text: "El producto está apunto de ser eliminado!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar!',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            //console.log(result)
            if (result.value) {
                _this._productoService.borrarProducto(idEmpleado).subscribe(function (result) {
                    _this.listarProductos();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Eliminado!', 'El producto ha sido borrado correctamente', 'success');
                }, function (err) {
                    console.log(err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal!'
                    });
                });
            }
        });
    };
    ProductoComponent.prototype.verStock = function () {
        this._productoService.listarProductos().subscribe(function (res) {
            var data = res.productos;
            var newArray = [];
            for (var i = 0; i < data.length; i++) {
                newArray.push({
                    'CODIGO DE PRODUCTO': data[i]._id,
                    'NOMBRE': data[i].nombre,
                    'DESCRIPCION': data[i].descripcion,
                    'STOCK ACTUAL': data[i].stock,
                    'PRECIO UNITARIO': 'S/. ' + data[i].precio.toFixed(2)
                });
            }
            var ws = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].json_to_sheet(newArray);
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_append_sheet(wb, ws, 'Book');
            /* save to file */
            xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](wb, 'REPORTE_STOCK.xlsx');
        }, function (err) {
            console.log(err);
        });
    };
    ProductoComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ProductoComponent.prototype.cerrar = function () {
        this.nuevoProductoForm.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ProductoComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ProductoComponent.prototype, "sort", void 0);
    ProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto',
            template: __webpack_require__(/*! ./producto.component.html */ "./src/app/components/producto/producto.component.html"),
            providers: [_services_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductoService"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorIntl"], useClass: _utils_matPaginator_util__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorIntlCro"] }],
            styles: [__webpack_require__(/*! ./producto.component.css */ "./src/app/components/producto/producto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProductoComponent);
    return ProductoComponent;
}());



/***/ }),

/***/ "./src/app/components/producto/producto.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/producto/producto.module.ts ***!
  \********************************************************/
/*! exports provided: ProductoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoModule", function() { return ProductoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core-angular-material/material.module */ "./src/app/core-angular-material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto-routing.module */ "./src/app/components/producto/producto-routing.module.ts");
/* harmony import */ var _components_producto_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/producto/producto.component */ "./src/app/components/producto/producto.component.ts");
/* harmony import */ var _producto_edit_producto_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../producto-edit/producto-edit.component */ "./src/app/components/producto-edit/producto-edit.component.ts");








var ProductoModule = /** @class */ (function () {
    function ProductoModule() {
    }
    ProductoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_producto_producto_component__WEBPACK_IMPORTED_MODULE_6__["ProductoComponent"],
                _producto_edit_producto_edit_component__WEBPACK_IMPORTED_MODULE_7__["ProductoEditComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"]
            ]
        })
    ], ProductoModule);
    return ProductoModule;
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
//# sourceMappingURL=components-producto-producto-module.js.map