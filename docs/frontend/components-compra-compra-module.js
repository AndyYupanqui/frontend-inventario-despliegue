(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-compra-compra-module"],{

/***/ "./src/app/components/compra-detail/compra-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/compra-detail/compra-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nul {\r\n    padding-left: 0px;\r\n    padding-top: 20px\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wcmEtZGV0YWlsL2NvbXByYS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wcmEtZGV0YWlsL2NvbXByYS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm9sLFxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/compra-detail/compra-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/compra-detail/compra-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\" style=\"font-size: 20px; padding-right:3em; padding-left: 3em\">\r\n    <i class=\"material-icons\" style=\"font-size: 30px\">ballot</i> Detalle de Orden de Compra (N°{{ idParam }})\r\n</div>\r\n\r\n<div class=\"container mt-4\">\r\n    Se muestra el detalle de orden de compra y la validación para confirmar si efectivamente ha llegado o no una orden de compra proveniente de un proveedor. Por ello, se recomienda que verifique bien si ha llegado correctamente la mercancía.\r\n</div>\r\n\r\n\r\n<form [formGroup]=\"remisionForm\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-right\">\r\n                <button mat-flat-button style=\"background: rgb(114, 17, 17); color: white\" (click)=\"imprimir()\">\r\n                    <i style=\"color: white\" class=\"material-icons\"> print</i> Imprimir PDF\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"container mt-3 \" id=\"content\" #content>\r\n        <mat-card>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-6 mt-4 text-center\">\r\n                    Guía de Remisión N°{{idParam}}\r\n                    <hr>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n            </div>\r\n            <div class=\"row mt-2\">\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 115px\">Ingrese los datos correspondientes</div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-3\"></div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row mt-2\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Fecha de inicio de traslado</mat-label>\r\n                        <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"fechaIni\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Destinatario</mat-label>\r\n                        <input matInput readonly formControlName=\"destinatario\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Punto de partida</mat-label>\r\n                        <input matInput readonly formControlName=\"puntoPartida\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Punto de llegada</mat-label>\r\n                        <input matInput readonly formControlName=\"puntoLlegada\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-3\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>RUC</mat-label>\r\n                        <input matInput readonly formControlName=\"ruc\">\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Motivo de traslado</mat-label>\r\n                        <mat-select formControlName=\"motivo\">\r\n                            <mat-option *ngFor=\"let motivo of motivos\" [value]=\"motivo.value\">\r\n                                {{motivo.viewValue}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"container mt-2 text-center\">\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-6 text-center style=\" style=\"padding-left: 33px\">Datos del bien transportado\r\n                </div>\r\n                <br>\r\n                <mat-card>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-md-2\"></div>\r\n                        <div class=\"col-md-3 text-center\">\r\n                            <strong>Ítem</strong>\r\n                            <hr>\r\n                            <ul id=\"friendsList\"> </ul>\r\n                        </div>\r\n                        <div class=\"col-md-1 text-center\">\r\n                            <strong>+Stock</strong>\r\n                            <hr>\r\n                            <ul id=\"friendsList0\"> </ul>\r\n                        </div>\r\n                        <div class=\"col-md-2 text-center \">\r\n                            <strong>Verificar producto</strong>\r\n                            <hr>\r\n                            <ul id=\"friendsList2\" (click)=\"actualizarEstado()\"> </ul>\r\n                        </div>\r\n                        <div class=\"col-md-2 text-center\">\r\n                            <strong>Estado</strong>\r\n                            <hr>\r\n                            <ul id=\"friendsList3\"> </ul>\r\n                        </div>\r\n                        <div class=\"col-md-2\"></div>\r\n                    </div>\r\n                    <hr>\r\n                </mat-card>\r\n            </div>\r\n\r\n            <br>\r\n\r\n            <div class=\"row mt-2\">\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-6 text-center\">Datos del transportista\r\n                    <hr>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-3\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>RUC</mat-label>\r\n                        <input matInput formControlName=\"rucTrans\">\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Denominación, apellidos y nombres</mat-label>\r\n                        <input matInput formControlName=\"denominacion\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <div class=\"row mt-2\">\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-6 text-center\">Datos de la unidad de transporte y conductor\r\n                    <hr>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-3\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Marca y placa</mat-label>\r\n                        <input matInput formControlName=\"marcaPlaca\">\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                        <mat-label>Licencia de conducir</mat-label>\r\n                        <input matInput formControlName=\"licencia\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n        </mat-card>\r\n        <br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\"><a mat-button [routerLink]=\"[ '/home/compra' ]\">Regresar</a></div>\r\n            <div class=\"col-md-8 text-center\"><button id=\"guardar\" mat-flat-button color=\"primary\" (click)=\"guardarRemision()\">Guardar Todo</button></div>\r\n            <div class=\"col-md-2\">\r\n                <button mat-flat-button style=\"background: rgb(114, 17, 17); color: white\" (click)=\"imprimir()\">\r\n                    <i style=\"color: white\" class=\"material-icons\"> print</i> Imprimir PDF\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <br><br>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/compra-detail/compra-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/compra-detail/compra-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: CompraDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraDetailComponent", function() { return CompraDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_compra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/compra.service */ "./src/app/services/compra.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _services_compra_producto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/compra_producto.service */ "./src/app/services/compra_producto.service.ts");
/* harmony import */ var _services_remision_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/remision.service */ "./src/app/services/remision.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_9__);










var CompraDetailComponent = /** @class */ (function () {
    function CompraDetailComponent(_compraService, _productoService, _compraProductoService, _remisionService, route, formBuilder, _router) {
        this._compraService = _compraService;
        this._productoService = _productoService;
        this._compraProductoService = _compraProductoService;
        this._remisionService = _remisionService;
        this.route = route;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.productos = [];
        this.cantidad = [];
        this.motivos = [
            { value: 'Venta', viewValue: 'Venta' },
            { value: 'Compra', viewValue: 'Compra' },
            { value: 'Consignación', viewValue: 'Consignación' },
            { value: 'Venta con entrega a terceros', viewValue: 'Venta con entrega a terceros' },
            { value: 'Venta sujeta a confirmación por el comprador', viewValue: 'Venta sujeta a confirmación por el comprador' },
            { value: 'Traslado entre establecimientos', viewValue: 'Traslado entre establecimientos' },
            { value: 'Devolución', viewValue: 'Devolución' },
            { value: 'Recojo de bienes', viewValue: 'Recojo de bienes' },
            { value: 'Importación', viewValue: 'Importación' }
        ];
    }
    CompraDetailComponent.prototype.ngOnInit = function () {
        this.listarCompraProducto();
        this.buildForm();
    };
    CompraDetailComponent.prototype.buildForm = function () {
        return this.remisionForm = this.formBuilder.group({
            numero_remision: this.idParam,
            fechaIni: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            destinatario: ['Distribuidora Aceros Lino S.A.C', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            puntoPartida: [this.direccion, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            puntoLlegada: ['Mza. a Lote. 5 A.V. la Planicie de la Era', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ruc: [this.ruc, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            motivo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            rucTrans: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            denominacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            marcaPlaca: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            licencia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cantidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    CompraDetailComponent.prototype.buildFormlleno = function (remision) {
        //console.log(remision.fechaInicio);
        var fecha = remision.fechaInicio.split("T")[0];
        //console.log(fecha);
        var parts = fecha.split("-");
        return this.remisionForm = this.formBuilder.group({
            numero_remision: this.idParam,
            fechaIni: [new Date(Number(parts[0]), Number(parts[1] - 1), Number(parts[2])), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            destinatario: ['Distribuidora Aceros Lino S.A.C', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            puntoPartida: [remision.partida, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            puntoLlegada: ['Mza. a Lote. 5 A.V. la Planicie de la Era', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ruc: [remision.ruc, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            motivo: [remision.motivo, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            rucTrans: [remision.rucTrans, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            denominacion: [remision.denominacion, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            marcaPlaca: [remision.marcaPlaca, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            licencia: [remision.licencia, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cantidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    CompraDetailComponent.prototype.imprimir = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_9__();
        // hoja A4 = 210 * 297
        doc.rect(110, 10, 90, 30); // Rectángulo para la Guía de Remisión
        doc.text('GUÍA DE REMISIÓN', 155, 20, 'center'); // Los dos ultimos son X,Y en la hoja A4
        doc.text('REMITENTE', 155, 26, 'center');
        doc.text('N° ' + this.idParam, 155, 35, 'center');
        doc.text('FERRETERÍA LINO S.A.C.', 20, 25);
        doc.text('RUC N° 20601473047', 20, 31);
        doc.setFontType("normal");
        doc.setFontSize(13);
        doc.text('Fecha de Inicio de Traslado: ', 20, 50);
        doc.setFontType("italic");
        doc.setFontSize(11);
        doc.text((this.remisionForm.controls['fechaIni'].value).toLocaleString('es'), 84, 50);
        doc.setFontType("normal");
        doc.setFontSize(13);
        doc.text('Destinatario: ', 20, 56);
        doc.setFontType("italic");
        doc.setFontSize(11);
        doc.text('Distribuidora Aceros Lino S.A.C', 51, 56);
        doc.setFontType("normal");
        doc.setFontSize(13);
        doc.text('Punto de partida: ', 20, 62);
        doc.setFontType("italic");
        doc.setFontSize(11);
        doc.text(this.remisionForm.controls['puntoPartida'].value, 60, 62);
        doc.setFontType("normal");
        doc.setFontSize(13);
        doc.text('Punto de llegada: ', 20, 68);
        doc.setFontType("italic");
        doc.setFontSize(11);
        doc.text(this.remisionForm.controls['puntoLlegada'].value, 61, 68);
        doc.setFontType("normal");
        doc.setFontSize(13);
        doc.text('Motivo de traslado: ', 20, 74);
        doc.setFontType("italic");
        doc.setFontSize(11);
        doc.text(this.remisionForm.controls['motivo'].value, 64, 74);
        doc.line(20, 80, 190, 80);
        doc.setFontType("bold");
        doc.setFontSize(13);
        doc.text('Datos del bien transportado ', 105, 90, 'center');
        doc.setFontSize(12);
        doc.text('Ítem', 70, 100, 'center');
        doc.text('Stock a', 105, 97, 'center');
        doc.text('añadir', 105, 103, 'center');
        doc.text('Estado', 140, 100, 'center');
        doc.setFontType("normal");
        doc.setFontSize(11);
        var pivoteY = 106;
        for (var i = 0; i < this.cantidadElementos; i++) {
            pivoteY += 6;
            doc.text(this.compraProducto[i].nombreProd, 70, pivoteY, 'center');
            doc.text(this.compraProducto[i].cantidad.toString(), 105, pivoteY, 'center');
            if (this.compraProducto[i].estado == true)
                doc.text('Correcto', 140, pivoteY, 'center');
            else
                doc.text('Pendiente', 140, pivoteY, 'center');
        }
        pivoteY += 12;
        doc.line(20, pivoteY, 190, pivoteY);
        pivoteY += 12;
        doc.setFontType("bold");
        doc.setFontSize(13);
        doc.text('Datos del transportista ', 105, pivoteY, 'center');
        doc.setFontType("normal");
        doc.setFontSize(13);
        doc.text('RUC: ', 20, pivoteY += 10);
        doc.setFontType("italic");
        doc.setFontSize(11);
        doc.text(this.remisionForm.controls['rucTrans'].value, 35, pivoteY);
        doc.setFontType("normal");
        doc.setFontSize(13);
        doc.text('Denominación (Ap. y Nombres): ', 20, pivoteY += 6);
        doc.setFontType("italic");
        doc.setFontSize(11);
        doc.text(this.remisionForm.controls['denominacion'].value, 88, pivoteY);
        pivoteY += 12;
        doc.line(20, pivoteY, 190, pivoteY);
        pivoteY += 12;
        doc.setFontType("bold");
        doc.setFontSize(13);
        doc.text('Datos de la unidad de transporte y conductor ', 105, pivoteY, 'center');
        doc.setFontType("normal");
        doc.setFontSize(13);
        doc.text('Marca y placa: ', 20, pivoteY += 10);
        doc.setFontType("italic");
        doc.setFontSize(11);
        doc.text(this.remisionForm.controls['marcaPlaca'].value, 55, pivoteY);
        doc.setFontType("normal");
        doc.setFontSize(13);
        doc.text('Licencia de conducir: ', 20, pivoteY += 6);
        doc.setFontType("italic");
        doc.setFontSize(11);
        doc.text(this.remisionForm.controls['licencia'].value, 68, pivoteY);
        doc.save('Guía de Remisión.pdf');
    };
    CompraDetailComponent.prototype.listarCompraProducto = function () {
        var _this = this;
        this.idParam = this.route.snapshot.paramMap.get('id');
        this.direccion = this.route.snapshot.queryParamMap.get('direccion');
        this.ruc = this.route.snapshot.queryParamMap.get('ruc');
        this._remisionService.buscarRemision(this.idParam).subscribe(function (result) {
            if (result.remision[0] != null) {
                document.getElementById("guardar").setAttribute("disabled", "true");
                result.remision[0].cantidad = JSON.parse(result.remision[0].cantidad);
                _this.buildFormlleno(result.remision[0]);
            }
            _this._compraProductoService.buscarCompraProducto(_this.idParam).subscribe(function (res) {
                _this.compraProducto = res.compra_producto;
                console.log(_this.compraProducto);
                _this.cantidadElementos = _this.compraProducto.length;
                localStorage.setItem("compraProducto", JSON.stringify(_this.compraProducto));
                for (var i = 0; i < _this.compraProducto.length; i++) {
                    var producto = _this.compraProducto[i].nombreProd;
                    var cantidad = _this.compraProducto[i].cantidad;
                    var boton = document.createElement('button');
                    var ul0 = document.getElementById("friendsList0");
                    var ul = document.getElementById("friendsList");
                    var ul2 = document.getElementById("friendsList2");
                    var ul3 = document.getElementById("friendsList3");
                    var li0 = document.createElement("li");
                    var input = document.createElement("input");
                    var li = document.createElement('li');
                    var li2 = document.createElement('li');
                    var li3 = document.createElement('li');
                    var hr0 = document.createElement('hr');
                    var hr = document.createElement('hr');
                    var hr2 = document.createElement('hr');
                    var hr3 = document.createElement('hr');
                    li.appendChild(document.createTextNode(producto));
                    li0.appendChild(input);
                    if (result.remision[0] != null) {
                        //console.log(result.remision[0]);
                        input.appendChild(document.createTextNode(result.remision[0].cantidad[i]));
                    }
                    else {
                        input.appendChild(document.createTextNode(cantidad));
                    }
                    li2.appendChild(boton);
                    li3.appendChild(document.createTextNode("Pendiente"));
                    ul0.appendChild(li0);
                    ul.appendChild(li);
                    ul2.appendChild(li2);
                    ul3.appendChild(li3);
                    ul0.appendChild(hr0);
                    ul.appendChild(hr);
                    ul2.appendChild(hr2);
                    ul3.appendChild(hr3);
                    var campo = document.querySelectorAll('#friendsList0 li input');
                    campo[i].setAttribute("id", "campo0" + i);
                    if (result.remision[0] != null) {
                        campo[i].setAttribute("value", result.remision[0].cantidad[i]);
                    }
                    else {
                        campo[i].setAttribute("value", cantidad);
                    }
                    document.getElementById("campo0" + i).style.listStyle = "none";
                    document.getElementById("campo0" + i).style.textAlign = "center";
                    document.getElementById("campo0" + i).style.width = "100%";
                    document.getElementById("campo0" + i).style.margin = "-3px";
                }
                var list2 = document.querySelectorAll('#friendsList2 li');
                for (var i = 0; i < list2.length; i++) {
                    list2[i].setAttribute("id", "list2" + i);
                    document.getElementById("list2" + i).style.listStyle = "none";
                    document.getElementById("list2" + i).style.textAlign = "center";
                }
                var list3 = document.querySelectorAll('#friendsList3 li');
                for (var i = 0; i < list3.length; i++) {
                    list3[i].setAttribute("id", "list3" + i);
                    document.getElementById("list3" + i).style.listStyle = "none";
                    document.getElementById("list3" + i).style.textAlign = "center";
                    document.getElementById("list3" + i).style.color = "green";
                    document.getElementById("list3" + i).style.fontWeight = "bold";
                }
                var buton = document.querySelectorAll('#friendsList2 li button');
                for (var i = 0; i < buton.length; i++) {
                    buton[i].appendChild(document.createTextNode("Verificar"));
                    buton[i].setAttribute("class", "mat-raised-button mat-primary");
                    buton[i].setAttribute("id", "boton" + i);
                    document.getElementById("boton" + i).style.marginTop = "-10px";
                    document.getElementById("boton" + i).style.marginBottom = "-10px";
                    if (_this.compraProducto[i].estado == 1) {
                        document.getElementById("list3" + i).style.color = "blue";
                        document.getElementById("list3" + i).innerHTML = "Correcto";
                        document.getElementById("boton" + i).setAttribute("disabled", "disabled");
                    }
                    document.getElementById("boton" + i).addEventListener('click', function (event) {
                        var id = this.id.split("boton")[1];
                        localStorage.setItem("id", id);
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    CompraDetailComponent.prototype.actualizarEstado = function () {
        var id = Number(localStorage.getItem("id"));
        this.compraProducto = JSON.parse(localStorage.getItem('compraProducto'));
        for (var i = 0; i < this.compraProducto.length; i++) {
            if (i == id) {
                document.getElementById("list3" + i).innerHTML = "Correcto";
                document.getElementById("list3" + i).style.color = "blue";
                document.getElementById("list3" + i).style.fontWeight = "bold";
                document.getElementById("boton" + i).setAttribute("disabled", "disabled");
                this._compraProductoService.actualizarCompraProducto(this.compraProducto[i]._id, { compra: this.compraProducto[i].compra, producto: this.compraProducto[i].producto, cantidad: this.compraProducto[i].cantidad, estado: 1 }).subscribe(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                        type: 'success',
                        title: 'Pedido verificado!',
                        //text: 'Stock Actualizado',
                        confirmButtonColor: '#3085d6',
                        showConfirmButton: true,
                    });
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    CompraDetailComponent.prototype.guardarRemision = function () {
        var _this = this;
        for (var i = 0; i < this.compraProducto.length; i++) {
            this.cantidad.push(Number(document.getElementById("campo0" + i).value));
            //console.log(this.cantidad);
            if (document.getElementById("campo0" + i).value == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    type: 'error',
                    title: 'Datos inválidos',
                    text: 'Revise nuevamente y llene correctamente los campos de stock.'
                });
                this.cantidad = [];
                return;
            }
        }
        this.remisionForm.controls['cantidad'].setValue(this.cantidad);
        if (this.remisionForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                type: 'error',
                title: 'Datos inválidos',
                text: 'Revise nuevamente y llene correctamente los campos.'
            });
            for (var i in this.remisionForm.controls)
                this.remisionForm.controls[i].markAsTouched();
            this.cantidad = [];
            return;
        }
        else {
            //console.log(this.remisionForm.value);
            this._remisionService.nuevoRemision(this.remisionForm.value).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    type: 'success',
                    title: 'Guía de remisión guardada correctamente',
                    text: 'Stock de productos actualizados',
                    confirmButtonColor: '#3085d6',
                    showConfirmButton: true,
                }).then(function (result) {
                    for (var i = 0; i < _this.compraProducto.length; i++) {
                        var input = Number(document.getElementById("campo0" + i).value);
                        var nuevo_stock = _this.compraProducto[i].stock + input;
                        _this._productoService.actualizarProducto(_this.compraProducto[i].idProd, { nombre: _this.compraProducto[i].nombreProd, descripcion: _this.compraProducto[i].descripcion, stock: nuevo_stock, precio: _this.compraProducto[i].precio }).subscribe(function (res) {
                            console.log('ok');
                        }, function (err) {
                            console.log(err);
                        });
                    }
                    document.getElementById("guardar").setAttribute("disabled", "true");
                    _this.cantidad = [];
                });
            }, function (err) {
                console.log(err);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CompraDetailComponent.prototype, "content", void 0);
    CompraDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compra-detail',
            template: __webpack_require__(/*! ./compra-detail.component.html */ "./src/app/components/compra-detail/compra-detail.component.html"),
            providers: [_services_compra_service__WEBPACK_IMPORTED_MODULE_4__["CompraService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"], _services_compra_producto_service__WEBPACK_IMPORTED_MODULE_6__["CompraProductoService"], _services_remision_service__WEBPACK_IMPORTED_MODULE_7__["RemisionService"]],
            styles: [__webpack_require__(/*! ./compra-detail.component.css */ "./src/app/components/compra-detail/compra-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_compra_service__WEBPACK_IMPORTED_MODULE_4__["CompraService"],
            _services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"],
            _services_compra_producto_service__WEBPACK_IMPORTED_MODULE_6__["CompraProductoService"],
            _services_remision_service__WEBPACK_IMPORTED_MODULE_7__["RemisionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompraDetailComponent);
    return CompraDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/compra/compra-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/compra/compra-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CompraRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraRoutingModule", function() { return CompraRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _compra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compra.component */ "./src/app/components/compra/compra.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _compra_detail_compra_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compra-detail/compra-detail.component */ "./src/app/components/compra-detail/compra-detail.component.ts");






var routes = [
    { path: '', component: _compra_component__WEBPACK_IMPORTED_MODULE_3__["CompraComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: ':id', component: _compra_detail_compra_detail_component__WEBPACK_IMPORTED_MODULE_5__["CompraDetailComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
var CompraRoutingModule = /** @class */ (function () {
    function CompraRoutingModule() {
    }
    CompraRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CompraRoutingModule);
    return CompraRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/compra/compra.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/compra/compra.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.modal .mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.buscar .mat-form-field {\r\n    width: 80%\r\n}\r\n\r\n* {\r\n    outline: none;\r\n    border: 0;\r\n}\r\n\r\n/* Estilos de las tablas */\r\n\r\n.mat-column-numero_compra {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.mat-column-proveedor {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 25%;\r\n}\r\n\r\n.mat-column-solicitante {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 18%;\r\n}\r\n\r\n.mat-column-total {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 12%;\r\n}\r\n\r\n.mat-column-fecha_comp {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.mat-column-estado {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.mat-column-acciones {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 5%;\r\n}\r\n\r\n.mat-column-acciones {\r\n    padding-right: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.material-icons {\r\n    color: rgb(20, 27, 83);\r\n}\r\n\r\n.material-icons:hover {\r\n    color: rgb(0, 30, 253);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wcmEvY29tcHJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFHQSwwQkFBMEI7O0FBRTFCO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcHJhL2NvbXByYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbCAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXNjYXIgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA4MCVcclxufVxyXG5cclxuKiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5cclxuLyogRXN0aWxvcyBkZSBsYXMgdGFibGFzICovXHJcblxyXG4ubWF0LWNvbHVtbi1udW1lcm9fY29tcHJhIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXByb3ZlZWRvciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zb2xpY2l0YW50ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTglO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi10b3RhbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTIlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1mZWNoYV9jb21wIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWVzdGFkbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1hY2Npb25lcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWFjY2lvbmVzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgY29sb3I6IHJnYigyMCwgMjcsIDgzKTtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMzAsIDI1Myk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/compra/compra.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/compra/compra.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\" style=\"font-size: 20px; padding-right:3em; padding-left: 3em\">\r\n    <i class=\"material-icons\" style=\"font-size: 30px\"> accessibility </i> Compras\r\n</div>\r\n\r\n\r\n<div class=\" container-fluid mt-4\" style=\"padding-right:4em; padding-left: 4em\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 \">\r\n            <i class=\"material-icons\"> search </i>\r\n            <mat-form-field class=\"mt-3\">\r\n                <input (keyup)=\"applyFilter($event.target.value)\" matInput placeholder=\"Buscar...\" autocomplete=\"off\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-6 text-right\" style=\"padding-top: 1.8em\">\r\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalNuevaOrdenCompra\" mat-flat-button color=\"primary\" style=\"bottom: 0em;\">Nueva Orden de Compra</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mat-elevation-z8\">\r\n\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"numero_compra\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> # DE ORDEN </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row._id}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"proveedor\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> PROVEEDOR </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.nombre}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"solicitante\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> SOLICITANTE </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.nombres.split(\" \",1)}} {{row.apellidos.split(\" \",1)}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Esto irá en el detalle ------------------------------------------------------------- \r\n                <ng-container matColumnDef=\"descripcion\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> DESCRIPCIÓN </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.descripcion}} </td>\r\n            </ng-container> -->\r\n\r\n            <ng-container matColumnDef=\"fecha_comp\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> FECHA </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.fecha}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"total\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> TOTAL </th>\r\n                <td mat-cell *matCellDef=\"let row\"> S/. {{row.total}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Estado por verificar si está todo correcto o no  -->\r\n            <!-- <ng-container matColumnDef=\"estado\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ESTADO </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.estado}} </td>\r\n            </ng-container> -->\r\n\r\n            <ng-container matColumnDef=\"acciones\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> VER DETALLE </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button [routerLink]=\"['/home/compra', row._id ]\" [queryParams]=\"{ direccion: row.direccion, ruc: row.ruc }\">\r\n                        <mat-icon class=\"material-icons\">ballot</mat-icon>\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n\r\n        <mat-paginator [pageSizeOptions]=\"[10, 20]\"></mat-paginator>\r\n    </div>\r\n</div>\r\n\r\n<!-- MODAL NUEVA ORDEN -->\r\n\r\n<div class=\"modal fade\" id=\"modalNuevaOrdenCompra\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalNuevaOrdenCompra\" aria-hidden=\"true\" data-backdrop=\"false\" style=\"background-color: rgba(0, 0, 0, 0.5);\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\"> <i class=\"material-icons\">\r\n                        group_add\r\n                    </i> Nueva Orden de Compra (N°{{numerocompra}})</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"cerrar()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body text-center\">\r\n                <h5>Ingrese los datos de la Orden de Compra</h5>\r\n                <div class=\"container from-group text-center mt-5\">\r\n                    <form [formGroup]=\"nuevoOrdenCompraForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\"></div>\r\n                            <div class=\"col-md-8\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input type=\"text\" placeholder=\"Proveedor...\" matInput formControlName=\"proveedor\" [matAutocomplete]=\"auto\">\r\n                                    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n                                        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                                            {{option.nombre}} - {{option.ruc}}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-2\"> </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\"></div>\r\n                            <div class=\"col-md-8\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input type=\"text\" placeholder=\"Solicitante...\" matInput formControlName=\"solicitante\" [matAutocomplete]=\"auto2\">\r\n                                    <mat-autocomplete #auto2=\"matAutocomplete\" [displayWith]=\"displayFn2\">\r\n                                        <mat-option *ngFor=\"let option2 of filteredOptions2 | async\" [value]=\"option2\">\r\n                                            {{option2.nombres}} {{option2.apellidos}} - {{option2.dni}}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-2\"> </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\"></div>\r\n                            <div class=\"col-md-8\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input type=\"text\" placeholder=\"Descripción...\" matInput formControlName=\"descripcion\" autocomplete=\"off\">\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-2\"> </div>\r\n                        </div>\r\n\r\n                        <hr>\r\n                        <h6 style=\"text-align: left; padding-left: 128px\">Agregar Producto</h6>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\"></div>\r\n                            <div class=\"col-md-5\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input type=\"text\" placeholder=\"Producto...\" matInput formControlName=\"producto\" [matAutocomplete]=\"auto3\">\r\n                                    <mat-autocomplete #auto3=\"matAutocomplete\" [displayWith]=\"displayFn3\">\r\n                                        <mat-option *ngFor=\"let option3 of filteredOptions3 | async\" [value]=\"option3\">\r\n                                            {{option3.nombre}} | <strong style=\"color: rgb(21, 36, 175)\">Stock: {{option3.stock}} </strong>\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-3\" (click)=\"verStock()\">\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label *ngIf=\"!stock\">Cantidad</mat-label>\r\n                                    <mat-label *ngIf=\"stock\">Stock Actual : {{stock}} </mat-label>\r\n                                    <input id=\"cantidad\" matInput placeholder=\"Ingresar cantidad\" autocomplete=\"off\">\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-2\"> </div>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                    <button mat-flat-button class=\"btnAgre\" color=\"primary\" style=\"text-align: center; margin-bottom: 50px; margin-top: 20px\" (click)=\"mostrarProducto()\">Agregar Producto</button>\r\n\r\n                    <table id=\"tabla\">\r\n                        <tr>\r\n                            <td>Producto</td>\r\n                            <td>Descripción</td>\r\n                            <td>Cantidad</td>\r\n                            <td>SubTotal</td>\r\n                        </tr>\r\n                    </table>\r\n                    <br>\r\n                    <h5 style=\"text-align: center;\">Total: S/. {{monto}}</h5>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button mat-button color=\"warn\" data-dismiss=\"modal\" (click)=\"cerrar()\">Cerrar</button>\r\n                <button mat-flat-button color=\"primary\" (click)=\"guardarOrdenCompra()\">Guardar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/compra/compra.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/compra/compra.component.ts ***!
  \*******************************************************/
/*! exports provided: CompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraComponent", function() { return CompraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_compra_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/compra.service */ "./src/app/services/compra.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _services_empleados_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/empleados.service */ "./src/app/services/empleados.service.ts");
/* harmony import */ var _services_proveedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/proveedores.service */ "./src/app/services/proveedores.service.ts");
/* harmony import */ var _services_compra_producto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/compra_producto.service */ "./src/app/services/compra_producto.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_matPaginator_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/matPaginator.util */ "./src/app/utils/matPaginator.util.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);













var CompraComponent = /** @class */ (function () {
    function CompraComponent(_compraService, _productoService, _empleadoService, _proveedorService, _compraProductoService, formBuilder) {
        this._compraService = _compraService;
        this._productoService = _productoService;
        this._empleadoService = _empleadoService;
        this._proveedorService = _proveedorService;
        this._compraProductoService = _compraProductoService;
        this.formBuilder = formBuilder;
        this.options = [];
        this.options2 = [];
        this.options3 = [];
        this.productos = [];
        this.cantidad = [];
        this.estado = false;
        this.stock = "";
        this.ordencompras = [];
        this.fecha = new Date();
        this.displayedColumns = ['numero_compra', 'proveedor', 'solicitante', 'total', 'fecha_comp', 'acciones'];
    }
    CompraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tablaLlena = false;
        this.buildForm();
        this.listarOrdenCompras();
        this.monto = 0;
        // PARA LLENAR EL ARRAY DE PROVEEDORES EN EL AUTOCOMPLETADO
        this._proveedorService.listarProveedores().subscribe(function (result) {
            _this.options = result.proveedores;
            _this.filteredOptions = _this.nuevoOrdenCompraForm.controls['proveedor'].valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return typeof value === 'string' ? value : ""; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (name) { return name ? _this._filter(name) : _this.options.slice(); }));
        });
        // PARA LLENAR EL ARRAY DE SOLICITANTES EN EL AUTOCOMPLETADO
        this._empleadoService.listarEmpleados().subscribe(function (result) {
            _this.options2 = result.empleados;
            _this.filteredOptions2 = _this.nuevoOrdenCompraForm.controls['solicitante'].valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return typeof value === 'string' ? value : ""; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (name) { return name ? _this._filter2(name) : _this.options2.slice(); }));
        });
        // PARA LLENAR EL ARRAY DE PRODUCTOS EN EL AUTOCOMPLETADO
        this._productoService.listarProductos().subscribe(function (result) {
            _this.options3 = result.productos;
            _this.filteredOptions3 = _this.nuevoOrdenCompraForm.controls['producto'].valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) { return typeof value === 'string' ? value : ""; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (name) { return name ? _this._filter3(name) : _this.options3.slice(); }));
        });
    };
    CompraComponent.prototype.displayFn = function (user) {
        return user ? user.nombre : undefined;
    };
    CompraComponent.prototype.displayFn2 = function (user) {
        return user ? user.nombres + ' ' + user.apellidos : undefined;
    };
    CompraComponent.prototype.displayFn3 = function (user) {
        return user ? user.nombre : undefined;
    };
    CompraComponent.prototype._filter = function (name) {
        var filterValue = name.trim().toLowerCase();
        return this.options.filter(function (option) { return option.nombre.toLowerCase().indexOf(filterValue) != -1 ||
            option.ruc.toLowerCase().indexOf(filterValue) != -1; });
    };
    CompraComponent.prototype._filter2 = function (name) {
        var filterValue = name.toLowerCase();
        return this.options2.filter(function (option2) { return option2.nombres.toLowerCase().indexOf(filterValue) != -1 ||
            option2.apellidos.toLowerCase().indexOf(filterValue) != -1 ||
            option2.dni.toLowerCase().indexOf(filterValue) != -1; });
    };
    CompraComponent.prototype._filter3 = function (name) {
        var filterValue = name.trim().toLowerCase();
        return this.options3.filter(function (option3) { return option3._id.toString().toLowerCase().indexOf(filterValue) != -1 ||
            option3.nombre.toLowerCase().indexOf(filterValue) != -1; });
    };
    CompraComponent.prototype.buildForm = function () {
        return this.nuevoOrdenCompraForm = this.formBuilder.group({
            proveedor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            solicitante: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            producto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"]]],
            fecha_comp: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            total: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
        });
    };
    Object.defineProperty(CompraComponent.prototype, "proveedor", {
        get: function () { return this.nuevoOrdenCompraForm.value.proveedor; },
        enumerable: true,
        configurable: true
    });
    CompraComponent.prototype.listarOrdenCompras = function () {
        var _this = this;
        this._compraService.listarOrdenCompras().subscribe(function (res) {
            _this.ordencompras = res.ordenes_compras;
            if (_this.ordencompras.length == 0) {
                _this.numerocompra = 1;
            }
            else {
                _this.numerocompra = _this.ordencompras[_this.ordencompras.length - 1]._id + 1;
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.ordenes_compras);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    CompraComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CompraComponent.prototype.guardarOrdenCompra = function () {
        var _this = this;
        if (this.tablaLlena == false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                type: 'error',
                title: 'Datos inválidos',
                text: 'Revise nuevamente y llene correctamente los campos.'
            });
            for (var i in this.nuevoOrdenCompraForm.controls)
                this.nuevoOrdenCompraForm.controls[i].markAsTouched();
            return;
        }
        else {
            this.nuevoOrdenCompraForm.controls['fecha_comp'].setValue(this.fecha.getDate() + "/" + (this.fecha.getMonth() + 1) + "/" + this.fecha.getFullYear());
            this.nuevoOrdenCompraForm.controls['total'].setValue(this.monto);
            this.nuevoOrdenCompraForm.controls['producto'].setValue(this.productos);
            this.nuevoOrdenCompraForm.controls['solicitante'].setValue(this.nuevoOrdenCompraForm.value.solicitante._id);
            this.nuevoOrdenCompraForm.controls['proveedor'].setValue(this.nuevoOrdenCompraForm.value.proveedor._id);
            console.log(this.nuevoOrdenCompraForm.value);
            for (var i = 0; i < this.productos.length; i++) {
                this._compraProductoService.nuevoCompraProducto({ compra: this.numerocompra, producto: this.productos[i], cantidad: this.cantidad[i], estado: this.estado }).subscribe(function (res) {
                }, function (err) { console.log(err); });
            }
            this._compraService.nuevoOrdenCompra(this.nuevoOrdenCompraForm.value).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                    type: 'success',
                    title: 'Orden de compra generada correctamente',
                    confirmButtonColor: '#3085d6',
                    showConfirmButton: true,
                }).then(function (result) {
                    $('#modalNuevaOrdenCompra').modal('hide');
                    _this.listarOrdenCompras();
                    _this.nuevoOrdenCompraForm.reset();
                    _this.productos = [];
                    _this.cantidad = [];
                    _this.monto = 0;
                    _this.stock = null;
                    $('.fila').remove();
                    _this.buildForm();
                });
            }, function (err) {
                console.log(err);
            });
        }
    };
    CompraComponent.prototype.mostrarProducto = function () {
        var _this = this;
        //console.log(this.fecha);
        //console.log(this.nuevoOrdenCompraForm.value);
        //this.nuevoOrdenCompraForm.value.fecha_comp = this.fecha;
        //this.monto = 0;
        if (this.nuevoOrdenCompraForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                type: 'error',
                title: 'Datos inválidos',
                text: 'Revise nuevamente y llene correctamente los campos.'
            });
            for (var i in this.nuevoOrdenCompraForm.controls)
                this.nuevoOrdenCompraForm.controls[i].markAsTouched();
            return;
        }
        else {
            this.stock = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                type: 'success',
                title: 'Producto agregado',
                confirmButtonColor: '#3085d6',
                showConfirmButton: true,
            }).then(function (result) {
                _this.tablaLlena = true;
                var formcantidad = document.querySelector("#cantidad").value;
                var cantidad = Number(formcantidad);
                _this.producto = _this.nuevoOrdenCompraForm.value.producto;
                _this.productos.push(_this.producto._id);
                _this.cantidad.push(cantidad);
                var subtotal = _this.producto.precio * cantidad;
                _this.monto = _this.monto + subtotal;
                var table = document.querySelector("#tabla");
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                var td4 = document.createElement("td");
                tr.setAttribute("class", "fila");
                td1.append(_this.producto.nombre);
                td2.append(_this.producto.descripcion);
                td3.append(String(cantidad));
                td4.append(String(subtotal));
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                table.appendChild(tr);
                $('#cantidad').val("");
                _this.nuevoOrdenCompraForm.controls['producto'].setValue("");
            });
        }
    };
    CompraComponent.prototype.verStock = function () {
        if (this.nuevoOrdenCompraForm.value.producto)
            this.stock = this.nuevoOrdenCompraForm.value.producto.stock;
    };
    CompraComponent.prototype.cerrar = function () {
        this.nuevoOrdenCompraForm.reset();
        this.productos = [];
        this.cantidad = [];
        this.monto = 0;
        this.stock = "";
        $('.fila').remove();
        this.buildForm();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CompraComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CompraComponent.prototype, "sort", void 0);
    CompraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compras',
            template: __webpack_require__(/*! ./compra.component.html */ "./src/app/components/compra/compra.component.html"),
            providers: [_services_compra_producto_service__WEBPACK_IMPORTED_MODULE_7__["CompraProductoService"], _services_compra_service__WEBPACK_IMPORTED_MODULE_3__["CompraService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"], _services_proveedores_service__WEBPACK_IMPORTED_MODULE_6__["ProveedorService"], _services_empleados_service__WEBPACK_IMPORTED_MODULE_5__["EmpleadoService"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorIntl"], useClass: _utils_matPaginator_util__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorIntlCro"] }],
            styles: [__webpack_require__(/*! ./compra.component.css */ "./src/app/components/compra/compra.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_compra_service__WEBPACK_IMPORTED_MODULE_3__["CompraService"],
            _services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"],
            _services_empleados_service__WEBPACK_IMPORTED_MODULE_5__["EmpleadoService"],
            _services_proveedores_service__WEBPACK_IMPORTED_MODULE_6__["ProveedorService"],
            _services_compra_producto_service__WEBPACK_IMPORTED_MODULE_7__["CompraProductoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], CompraComponent);
    return CompraComponent;
}());



/***/ }),

/***/ "./src/app/components/compra/compra.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/compra/compra.module.ts ***!
  \****************************************************/
/*! exports provided: CompraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraModule", function() { return CompraModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _compra_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compra-routing.module */ "./src/app/components/compra/compra-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core-angular-material/material.module */ "./src/app/core-angular-material/material.module.ts");
/* harmony import */ var _compra_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compra.component */ "./src/app/components/compra/compra.component.ts");
/* harmony import */ var _compra_detail_compra_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../compra-detail/compra-detail.component */ "./src/app/components/compra-detail/compra-detail.component.ts");








var CompraModule = /** @class */ (function () {
    function CompraModule() {
    }
    CompraModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _compra_component__WEBPACK_IMPORTED_MODULE_6__["CompraComponent"],
                _compra_detail_compra_detail_component__WEBPACK_IMPORTED_MODULE_7__["CompraDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _compra_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompraRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"]
            ]
        })
    ], CompraModule);
    return CompraModule;
}());



/***/ }),

/***/ "./src/app/services/compra.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/compra.service.ts ***!
  \********************************************/
/*! exports provided: CompraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraService", function() { return CompraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var CompraService = /** @class */ (function () {
    function CompraService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
    }
    CompraService.prototype.listarOrdenCompras = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/orden_compras', { headers: headers });
    };
    CompraService.prototype.nuevoOrdenCompra = function (form) {
        var body = JSON.stringify(form);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + '/orden_compra', body, { headers: headers });
    };
    CompraService.prototype.buscarCompra = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/orden_compra/' + id, { headers: headers });
    };
    CompraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CompraService);
    return CompraService;
}());



/***/ }),

/***/ "./src/app/services/compra_producto.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/compra_producto.service.ts ***!
  \*****************************************************/
/*! exports provided: CompraProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraProductoService", function() { return CompraProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var CompraProductoService = /** @class */ (function () {
    function CompraProductoService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
    }
    CompraProductoService.prototype.listarCompraProductos = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/compra_productos', { headers: headers });
    };
    CompraProductoService.prototype.nuevoCompraProducto = function (form) {
        var body = JSON.stringify(form);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + '/compra_producto', body, { headers: headers });
    };
    CompraProductoService.prototype.buscarCompraProducto = function (compra) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/compra_producto/' + compra, { headers: headers });
    };
    CompraProductoService.prototype.actualizarCompraProducto = function (id, compraproducto) {
        var params = JSON.stringify(compraproducto);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.put(this.url + '/compra_producto/' + id, params, { headers: headers });
    };
    CompraProductoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CompraProductoService);
    return CompraProductoService;
}());



/***/ }),

/***/ "./src/app/services/remision.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/remision.service.ts ***!
  \**********************************************/
/*! exports provided: RemisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionService", function() { return RemisionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var RemisionService = /** @class */ (function () {
    function RemisionService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
    }
    RemisionService.prototype.nuevoRemision = function (form) {
        var body = JSON.stringify(form);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + '/remision', body, { headers: headers });
    };
    RemisionService.prototype.buscarRemision = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/remision/' + id, { headers: headers });
    };
    RemisionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RemisionService);
    return RemisionService;
}());



/***/ })

}]);
//# sourceMappingURL=components-compra-compra-module.js.map