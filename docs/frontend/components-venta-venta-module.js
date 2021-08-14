(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-venta-venta-module"],{

/***/ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *             jsPDF AutoTable plugin v3.1.1
 *             
 *             Copyright (c) 2014 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *             Licensed under the MIT License.
 *             http://opensource.org/licenses/mit-license
 *             
 *             * /if (typeof window === 'object') window.jspdfAutoTableVersion = '" + newVersion + "';/*"
 *         
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js"));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaultsDocument = null;
var previousTableState;
var tableState = null;
exports.globalDefaults = {};
exports.documentDefaults = {};
function default_1() {
    return tableState;
}
exports.default = default_1;
function getGlobalOptions() {
    return exports.globalDefaults;
}
exports.getGlobalOptions = getGlobalOptions;
function getDocumentOptions() {
    return exports.documentDefaults;
}
exports.getDocumentOptions = getDocumentOptions;
var TableState = /** @class */ (function () {
    function TableState(doc) {
        this.doc = doc;
    }
    TableState.prototype.pageHeight = function () {
        return this.pageSize().height;
    };
    ;
    TableState.prototype.pageWidth = function () {
        return this.pageSize().width;
    };
    ;
    TableState.prototype.pageSize = function () {
        var pageSize = this.doc.internal.pageSize;
        // JSPDF 1.4 uses get functions instead of properties on pageSize
        if (pageSize.width == null) {
            pageSize = {
                width: pageSize.getWidth(),
                height: pageSize.getHeight()
            };
        }
        return pageSize;
    };
    ;
    TableState.prototype.scaleFactor = function () {
        return this.doc.internal.scaleFactor;
    };
    ;
    TableState.prototype.pageNumber = function () {
        return this.doc.internal.getCurrentPageInfo().pageNumber;
    };
    return TableState;
}());
function setupState(doc) {
    previousTableState = tableState;
    tableState = new TableState(doc);
    if (doc !== defaultsDocument) {
        defaultsDocument = doc;
        exports.documentDefaults = {};
    }
}
exports.setupState = setupState;
function resetState() {
    tableState = previousTableState;
}
exports.resetState = resetState;
function setDefaults(defaults, doc) {
    if (doc === void 0) { doc = null; }
    if (doc) {
        exports.documentDefaults = defaults || {};
        defaultsDocument = doc;
    }
    else {
        exports.globalDefaults = defaults || {};
    }
}
exports.setDefaults = setDefaults;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(2);
var state_1 = __webpack_require__(0);
var polyfills_1 = __webpack_require__(3);
function getStringWidth(text, styles) {
    var fontSize = styles.fontSize / state_1.default().scaleFactor();
    applyStyles(styles);
    text = Array.isArray(text) ? text : [text];
    var maxWidth = 0;
    text.forEach(function (line) {
        var width = state_1.default().doc.getStringUnitWidth(line);
        if (width > maxWidth) {
            maxWidth = width;
        }
    });
    var precision = 10000 * state_1.default().scaleFactor();
    maxWidth = Math.floor(maxWidth * precision) / precision;
    return maxWidth * fontSize;
}
exports.getStringWidth = getStringWidth;
/**
 * Ellipsize the text to fit in the width
 */
function ellipsize(text, width, styles, ellipsizeStr) {
    if (ellipsizeStr === void 0) { ellipsizeStr = '...'; }
    if (Array.isArray(text)) {
        var value_1 = [];
        text.forEach(function (str, i) {
            value_1[i] = ellipsize(str, width, styles, ellipsizeStr);
        });
        return value_1;
    }
    var precision = 10000 * state_1.default().scaleFactor();
    width = Math.ceil(width * precision) / precision;
    if (width >= getStringWidth(text, styles)) {
        return text;
    }
    while (width < getStringWidth(text + ellipsizeStr, styles)) {
        if (text.length <= 1) {
            break;
        }
        text = text.substring(0, text.length - 1);
    }
    return text.trim() + ellipsizeStr;
}
exports.ellipsize = ellipsize;
function addTableBorder() {
    var table = state_1.default().table;
    var styles = { lineWidth: table.settings.tableLineWidth, lineColor: table.settings.tableLineColor };
    applyStyles(styles);
    var fs = getFillStyle(styles);
    if (fs) {
        state_1.default().doc.rect(table.pageStartX, table.pageStartY, table.width, table.cursor.y - table.pageStartY, fs);
    }
}
exports.addTableBorder = addTableBorder;
function getFillStyle(styles) {
    var drawLine = styles.lineWidth > 0;
    var drawBackground = styles.fillColor || styles.fillColor === 0;
    if (drawLine && drawBackground) {
        return 'DF'; // Fill then stroke
    }
    else if (drawLine) {
        return 'S'; // Only stroke (transparent background)
    }
    else if (drawBackground) {
        return 'F'; // Only fill, no stroke
    }
    else {
        return false;
    }
}
exports.getFillStyle = getFillStyle;
function applyUserStyles() {
    applyStyles(state_1.default().table.userStyles);
}
exports.applyUserStyles = applyUserStyles;
function applyStyles(styles) {
    var doc = state_1.default().doc;
    var styleModifiers = {
        fillColor: doc.setFillColor,
        textColor: doc.setTextColor,
        fontStyle: doc.setFontStyle,
        lineColor: doc.setDrawColor,
        lineWidth: doc.setLineWidth,
        font: doc.setFont,
        fontSize: doc.setFontSize
    };
    Object.keys(styleModifiers).forEach(function (name) {
        var style = styles[name];
        var modifier = styleModifiers[name];
        if (typeof style !== 'undefined') {
            if (Array.isArray(style)) {
                modifier.apply(this, style);
            }
            else {
                modifier(style);
            }
        }
    });
}
exports.applyStyles = applyStyles;
// This is messy, only keep array and number format the next major version
function marginOrPadding(value, defaultValue) {
    var newValue = {};
    if (Array.isArray(value)) {
        if (value.length >= 4) {
            newValue = { 'top': value[0], 'right': value[1], 'bottom': value[2], 'left': value[3] };
        }
        else if (value.length === 3) {
            newValue = { 'top': value[0], 'right': value[1], 'bottom': value[2], 'left': value[1] };
        }
        else if (value.length === 2) {
            newValue = { 'top': value[0], 'right': value[1], 'bottom': value[0], 'left': value[1] };
        }
        else if (value.length === 1) {
            value = value[0];
        }
        else {
            value = defaultValue;
        }
    }
    else if (typeof value === 'object') {
        if (value['vertical']) {
            value['top'] = value['vertical'];
            value['bottom'] = value['vertical'];
        }
        if (value['horizontal']) {
            value['right'] = value['horizontal'];
            value['left'] = value['horizontal'];
        }
        for (var _i = 0, _a = ['top', 'right', 'bottom', 'left']; _i < _a.length; _i++) {
            var side = _a[_i];
            newValue[side] = (value[side] || value[side] === 0) ? value[side] : defaultValue;
        }
    }
    if (typeof value === 'number') {
        newValue = { 'top': value, 'right': value, 'bottom': value, 'left': value };
    }
    return newValue;
}
exports.marginOrPadding = marginOrPadding;
function styles(styles) {
    styles = Array.isArray(styles) ? styles : [styles];
    return polyfills_1.assign.apply(void 0, [config_1.defaultStyles()].concat(styles));
}
exports.styles = styles;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ratio between font size and font height. The number comes from jspdf's source code
 */
exports.FONT_ROW_RATIO = 1.15;
var state_1 = __webpack_require__(0);
function defaultConfig() {
    return {
        // Html content
        html: null,
        // Custom content
        head: null,
        body: null,
        foot: null,
        // Properties
        includeHiddenHtml: false,
        startY: null,
        margin: 40 / state_1.default().scaleFactor(),
        pageBreak: 'auto',
        rowPageBreak: 'auto',
        tableWidth: 'auto',
        showHead: 'everyPage',
        showFoot: 'everyPage',
        tableLineWidth: 0,
        tableLineColor: 200,
        tableId: null,
        // Styling
        theme: 'striped',
        useCss: false,
        styles: {},
        headStyles: {},
        bodyStyles: {},
        footStyles: {},
        alternateRowStyles: {},
        columnStyles: {},
        // Hooks
        // Use to change the content of the cell before width calculations etc are performed
        didParseCell: function (data) {
        },
        willDrawCell: function (data) {
        },
        // Use to draw additional content such as images in table cells
        didDrawCell: function (data) {
        },
        // Use to draw additional content to each page such as headers and footers
        didDrawPage: function (data) {
        },
    };
}
exports.defaultConfig = defaultConfig;
// Base style for all themes
function defaultStyles() {
    return {
        font: "helvetica",
        fontStyle: 'normal',
        overflow: 'linebreak',
        fillColor: false,
        textColor: 20,
        halign: 'left',
        valign: 'top',
        fontSize: 10,
        cellPadding: 5 / state_1.default().scaleFactor(),
        lineColor: 200,
        lineWidth: 0 / state_1.default().scaleFactor(),
        cellWidth: 'auto',
        minCellHeight: 0
    };
}
exports.defaultStyles = defaultStyles;
/**
 * Styles for the themes (overriding the default styles)
 */
function getTheme(name) {
    var themes = {
        'striped': {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal' },
            head: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            body: {},
            foot: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            alternateRow: { fillColor: 245 }
        },
        'grid': {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal', lineWidth: 0.1 },
            head: { textColor: 255, fillColor: [26, 188, 156], fontStyle: 'bold', lineWidth: 0 },
            body: {},
            foot: { textColor: 255, fillColor: [26, 188, 156], fontStyle: 'bold', lineWidth: 0 },
            alternateRow: {}
        },
        'plain': {
            head: { fontStyle: 'bold' },
            foot: { fontStyle: 'bold' }
        }
    };
    return themes[name];
}
exports.getTheme = getTheme;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Include common small polyfills instead of requiring the user to to do it
 */
Object.defineProperty(exports, "__esModule", { value: true });
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target) {
    'use strict';
    var varArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        varArgs[_i - 1] = arguments[_i];
    }
    if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
exports.assign = assign;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tableDrawer_1 = __webpack_require__(6);
var widthCalculator_1 = __webpack_require__(7);
var inputParser_1 = __webpack_require__(8);
var state_1 = __webpack_require__(0);
__webpack_require__(15);
var common_1 = __webpack_require__(1);
var jsPDF = __webpack_require__(4);
function autoTable() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    state_1.setupState(this);
    // 1. Parse and unify user input
    var table = inputParser_1.parseInput(args);
    // 2. Calculate preliminary table, column, row and cell dimensions
    widthCalculator_1.calculateWidths(table);
    // 3. Output table to pdf
    tableDrawer_1.drawTable(table);
    table.finalY = table.cursor.y;
    this.previousAutoTable = table;
    this.lastAutoTable = table;
    this.autoTable.previous = table; // Deprecated
    common_1.applyUserStyles();
    state_1.resetState();
    return this;
}
jsPDF.API.autoTable = autoTable;
// Assign false to enable `doc.lastAutoTable.finalY || 40` sugar;
jsPDF.API.lastAutoTable = false;
jsPDF.API.previousAutoTable = false; // deprecated in v3
jsPDF.API.autoTable.previous = false; // deprecated in v3
jsPDF.API.autoTableSetDefaults = function (defaults) {
    state_1.setDefaults(defaults, this);
    return this;
};
jsPDF.autoTableSetDefaults = function (defaults, doc) {
    state_1.setDefaults(defaults, doc);
    return this;
};
/**
 * @Deprecated. Use html option instead doc.autoTable(html: '#table')
 */
jsPDF.API.autoTableHtmlToJson = function (tableElem, includeHiddenElements) {
    console.error("Use of deprecated function: autoTableHtmlToJson. Use html option instead.");
    includeHiddenElements = includeHiddenElements || false;
    if (!tableElem || !(tableElem instanceof HTMLTableElement)) {
        console.error("A HTMLTableElement has to be sent to autoTableHtmlToJson");
        return null;
    }
    var columns = {}, rows = [];
    var header = tableElem.rows[0];
    for (var i = 0; i < header.cells.length; i++) {
        var cell = header.cells[i];
        var style = window.getComputedStyle(cell);
        if (includeHiddenElements || style.display !== 'none') {
            columns[i] = cell;
        }
    }
    var _loop_1 = function (i) {
        var tableRow = tableElem.rows[i];
        var style = window.getComputedStyle(tableRow);
        if (includeHiddenElements || style.display !== 'none') {
            var rowData_1 = [];
            Object.keys(columns).forEach(function (key) {
                var cell = tableRow.cells[key];
                rowData_1.push(cell);
            });
            rows.push(rowData_1);
        }
    };
    for (var i = 1; i < tableElem.rows.length; i++) {
        _loop_1(i);
    }
    var values = Object.keys(columns).map(function (key) {
        return columns[key];
    });
    return { columns: values, rows: rows, data: rows };
};
/**
 * @deprecated
 */
jsPDF.API.autoTableEndPosY = function () {
    console.error("Use of deprecated function: autoTableEndPosY. Use doc.previousAutoTable.finalY instead.");
    var prev = this.previousAutoTable;
    if (prev.cursor && typeof prev.cursor.y === 'number') {
        return prev.cursor.y;
    }
    else {
        return 0;
    }
};
/**
 * @deprecated
 */
jsPDF.API.autoTableAddPageContent = function (hook) {
    console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead.");
    if (!jsPDF.API.autoTable.globalDefaults) {
        jsPDF.API.autoTable.globalDefaults = {};
    }
    jsPDF.API.autoTable.globalDefaults.addPageContent = hook;
    return this;
};
/**
 * @deprecated
 */
jsPDF.API.autoTableAddPage = function () {
    console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()");
    this.addPage();
    return this;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(2);
var common_1 = __webpack_require__(1);
var state_1 = __webpack_require__(0);
function drawTable(table) {
    var settings = table.settings;
    table.cursor = {
        x: table.margin('left'),
        y: settings.startY == null ? table.margin('top') : settings.startY
    };
    var minTableBottomPos = settings.startY + table.margin('bottom') + table.headHeight + table.footHeight;
    if (settings.pageBreak === 'avoid') {
        minTableBottomPos += table.height;
    }
    if (settings.pageBreak === 'always' || settings.startY != null && settings.startY !== false && minTableBottomPos > state_1.default().pageHeight()) {
        nextPage(state_1.default().doc);
        table.cursor.y = table.margin('top');
    }
    table.pageStartX = table.cursor.x;
    table.pageStartY = table.cursor.y;
    table.startPageNumber = state_1.default().pageNumber();
    common_1.applyUserStyles();
    if (settings.showHead === true || settings.showHead === 'firstPage' || settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(row); });
    }
    common_1.applyUserStyles();
    table.body.forEach(function (row, index) {
        printFullRow(row, index === table.body.length - 1);
    });
    common_1.applyUserStyles();
    if (settings.showFoot === true || settings.showFoot === 'lastPage' || settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(row); });
    }
    common_1.addTableBorder();
    table.callEndPageHooks();
}
exports.drawTable = drawTable;
function printFullRow(row, isLastRow) {
    var remainingRowHeight = 0;
    var remainingTexts = {};
    var table = state_1.default().table;
    var remainingPageSpace = getRemainingPageSpace(isLastRow);
    if (remainingPageSpace < row.maxCellHeight) {
        if (remainingPageSpace < getOneRowHeight(row) || (table.settings.rowPageBreak === 'avoid' && !rowHeightGreaterThanMaxTableHeight(row))) {
            addPage();
        }
        else {
            // Modify the row to fit the current page and calculate text and height of partial row
            row.spansMultiplePages = true;
            for (var j = 0; j < table.columns.length; j++) {
                var column = table.columns[j];
                var cell = row.cells[column.dataKey];
                if (!cell) {
                    continue;
                }
                var fontHeight = cell.styles.fontSize / state_1.default().scaleFactor() * config_1.FONT_ROW_RATIO;
                var vPadding = cell.padding('vertical');
                var remainingLineCount = Math.floor((remainingPageSpace - vPadding) / fontHeight);
                // Note that this will cut cells with specified custom min height at page break
                if (Array.isArray(cell.text) && cell.text.length > remainingLineCount) {
                    remainingTexts[column.dataKey] = cell.text.splice(remainingLineCount, cell.text.length);
                    var rCellHeight = cell.height - remainingPageSpace;
                    if (rCellHeight > remainingRowHeight) {
                        remainingRowHeight = rCellHeight;
                    }
                }
                cell.height = Math.min(remainingPageSpace, cell.height);
            }
        }
    }
    printRow(row);
    // Parts of the row is now printed. Time for adding a new page, prune 
    // the text and start over
    if (Object.keys(remainingTexts).length > 0) {
        var maxCellHeight = 0;
        for (var j = 0; j < table.columns.length; j++) {
            var col = table.columns[j];
            var cell = row.cells[col.dataKey];
            if (!cell)
                continue;
            cell.height = remainingRowHeight;
            if (cell.height > maxCellHeight) {
                maxCellHeight = cell.height;
            }
            if (cell) {
                cell.text = remainingTexts[col.dataKey] || '';
            }
        }
        addPage();
        row.pageNumber++;
        row.height = remainingRowHeight;
        row.maxCellHeight = maxCellHeight;
        printFullRow(row, isLastRow);
    }
}
function getOneRowHeight(row) {
    return state_1.default().table.columns.reduce(function (acc, column) {
        var cell = row.cells[column.dataKey];
        if (!cell)
            return 0;
        var fontHeight = cell.styles.fontSize / state_1.default().scaleFactor() * config_1.FONT_ROW_RATIO;
        var vPadding = cell.padding('vertical');
        var oneRowHeight = vPadding + fontHeight;
        return oneRowHeight > acc ? oneRowHeight : acc;
    }, 0);
}
function rowHeightGreaterThanMaxTableHeight(row) {
    var table = state_1.default().table;
    var pageHeight = state_1.default().pageHeight();
    var maxTableHeight = pageHeight - table.margin('top') - table.margin('bottom');
    return row.maxCellHeight > maxTableHeight;
}
function printRow(row) {
    var table = state_1.default().table;
    table.cursor.x = table.margin('left');
    row.y = table.cursor.y;
    row.x = table.cursor.x;
    // For backwards compatibility reset those after addingRow event
    table.cursor.x = table.margin('left');
    row.y = table.cursor.y;
    row.x = table.cursor.x;
    for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
        var column = _a[_i];
        var cell = row.cells[column.dataKey];
        if (!cell) {
            table.cursor.x += column.width;
            continue;
        }
        common_1.applyStyles(cell.styles);
        cell.x = table.cursor.x;
        cell.y = row.y;
        if (cell.styles.valign === 'top') {
            cell.textPos.y = table.cursor.y + cell.padding('top');
        }
        else if (cell.styles.valign === 'bottom') {
            cell.textPos.y = table.cursor.y + cell.height - cell.padding('bottom');
        }
        else {
            cell.textPos.y = table.cursor.y + cell.height / 2;
        }
        if (cell.styles.halign === 'right') {
            cell.textPos.x = cell.x + cell.width - cell.padding('right');
        }
        else if (cell.styles.halign === 'center') {
            cell.textPos.x = cell.x + cell.width / 2;
        }
        else {
            cell.textPos.x = cell.x + cell.padding('left');
        }
        if (table.callCellHooks(table.cellHooks.willDrawCell, cell, row, column) === false) {
            table.cursor.x += column.width;
            continue;
        }
        var fillStyle = common_1.getFillStyle(cell.styles);
        if (fillStyle) {
            state_1.default().doc.rect(cell.x, table.cursor.y, cell.width, cell.height, fillStyle);
        }
        state_1.default().doc.autoTableText(cell.text, cell.textPos.x, cell.textPos.y, {
            halign: cell.styles.halign,
            valign: cell.styles.valign,
            maxWidth: cell.width - cell.padding('left') - cell.padding('right')
        });
        table.callCellHooks(table.cellHooks.didDrawCell, cell, row, column);
        table.cursor.x += column.width;
    }
    table.cursor.y += row.height;
}
function getRemainingPageSpace(isLastRow) {
    var table = state_1.default().table;
    var bottomContentHeight = table.margin('bottom');
    var showFoot = table.settings.showFoot;
    if (showFoot === true || showFoot === 'everyPage' || (showFoot === 'lastPage' && isLastRow)) {
        bottomContentHeight += table.footHeight;
    }
    return state_1.default().pageHeight() - table.cursor.y - bottomContentHeight;
}
function addPage() {
    var table = state_1.default().table;
    common_1.applyUserStyles();
    if (table.settings.showFoot === true || table.settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(row); });
    }
    table.finalY = table.cursor.y;
    // Add user content just before adding new page ensure it will 
    // be drawn above other things on the page
    table.callEndPageHooks();
    common_1.addTableBorder();
    nextPage(state_1.default().doc);
    table.pageNumber++;
    table.cursor = { x: table.margin('left'), y: table.margin('top') };
    table.pageStartX = table.cursor.x;
    table.pageStartY = table.cursor.y;
    if (table.settings.showHead === true || table.settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(row); });
    }
}
exports.addPage = addPage;
function nextPage(doc) {
    var current = state_1.default().pageNumber();
    doc.setPage(current + 1);
    var newCurrent = state_1.default().pageNumber();
    if (newCurrent === current) {
        doc.addPage();
    }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(2);
var common_1 = __webpack_require__(1);
var state_1 = __webpack_require__(0);
/**
 * Calculate the column widths
 */
function calculateWidths(table) {
    // TODO Handle these cases
    var columnMinWidth = 10 / state_1.default().scaleFactor();
    if (columnMinWidth * table.columns.length > table.width) {
        console.error('Columns could not fit on page');
    }
    else if (table.minWidth > table.width) {
        console.error("Column widths to wide and can't fit page");
    }
    var copy = table.columns.slice(0);
    var diffWidth = table.width - table.wrappedWidth;
    distributeWidth(copy, diffWidth, table.wrappedWidth);
    applyColSpans(table);
    fitContent(table);
    applyRowSpans(table);
}
exports.calculateWidths = calculateWidths;
function applyRowSpans(table) {
    var rowSpanCells = {};
    var colRowSpansLeft = 1;
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var data = rowSpanCells[column.dataKey];
            if (colRowSpansLeft > 1) {
                colRowSpansLeft--;
                delete row.cells[column.dataKey];
            }
            else if (data) {
                data.cell.height += row.height;
                if (data.cell.height > row.maxCellHeight) {
                    data.row.maxCellHeight = data.cell.height;
                    data.row.maxCellLineCount = Array.isArray(data.cell.text) ? data.cell.text.length : 1;
                }
                colRowSpansLeft = data.cell.colSpan;
                delete row.cells[column.dataKey];
                data.left--;
                if (data.left <= 1) {
                    delete rowSpanCells[column.dataKey];
                }
            }
            else {
                var cell = row.cells[column.dataKey];
                if (!cell) {
                    continue;
                }
                cell.height = row.height;
                if (cell.rowSpan > 1) {
                    var remaining = all.length - rowIndex;
                    var left = cell.rowSpan > remaining ? remaining : cell.rowSpan;
                    rowSpanCells[column.dataKey] = { cell: cell, left: left, row: row };
                }
            }
        }
        if (row.section === 'head') {
            table.headHeight += row.maxCellHeight;
        }
        if (row.section === 'foot') {
            table.footHeight += row.maxCellHeight;
        }
        table.height += row.height;
    }
}
function applyColSpans(table) {
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        var colSpanCell = null;
        var combinedColSpanWidth = 0;
        var colSpansLeft = 0;
        for (var columnIndex = 0; columnIndex < table.columns.length; columnIndex++) {
            var column = table.columns[columnIndex];
            var cell = null;
            // Width and colspan
            colSpansLeft -= 1;
            if (colSpansLeft > 1 && table.columns[columnIndex + 1]) {
                combinedColSpanWidth += column.width;
                delete row.cells[column.dataKey];
                continue;
            }
            else if (colSpanCell) {
                cell = colSpanCell;
                delete row.cells[column.dataKey];
                colSpanCell = null;
            }
            else {
                cell = row.cells[column.dataKey];
                if (!cell)
                    continue;
                colSpansLeft = cell.colSpan;
                combinedColSpanWidth = 0;
                if (cell.colSpan > 1) {
                    colSpanCell = cell;
                    combinedColSpanWidth += column.width;
                    continue;
                }
            }
            cell.width = column.width + combinedColSpanWidth;
        }
    }
}
function fitContent(table) {
    var rowSpanHeight = { count: 0, height: 0 };
    for (var _i = 0, _a = table.allRows(); _i < _a.length; _i++) {
        var row = _a[_i];
        for (var _b = 0, _c = table.columns; _b < _c.length; _b++) {
            var column = _c[_b];
            var cell = row.cells[column.dataKey];
            if (!cell)
                continue;
            common_1.applyStyles(cell.styles);
            var textSpace = cell.width - cell.padding('horizontal');
            if (cell.styles.overflow === 'linebreak') {
                // Add one pt to textSpace to fix rounding error
                cell.text = state_1.default().doc.splitTextToSize(cell.text, textSpace + 1 / (state_1.default().scaleFactor() || 1), { fontSize: cell.styles.fontSize });
            }
            else if (cell.styles.overflow === 'ellipsize') {
                cell.text = common_1.ellipsize(cell.text, textSpace, cell.styles);
            }
            else if (cell.styles.overflow === 'hidden') {
                cell.text = common_1.ellipsize(cell.text, textSpace, cell.styles, '');
            }
            else if (typeof cell.styles.overflow === 'function') {
                cell.text = cell.styles.overflow(cell.text, textSpace);
            }
            var lineCount = Array.isArray(cell.text) ? cell.text.length : 1;
            var fontHeight = cell.styles.fontSize / state_1.default().scaleFactor() * config_1.FONT_ROW_RATIO;
            cell.contentHeight = lineCount * fontHeight + cell.padding('vertical');
            if (cell.styles.minCellHeight > cell.contentHeight) {
                cell.contentHeight = cell.styles.minCellHeight;
            }
            var realContentHeight = cell.contentHeight / cell.rowSpan;
            if (cell.rowSpan > 1 && (rowSpanHeight.count * rowSpanHeight.height < realContentHeight * cell.rowSpan)) {
                rowSpanHeight = { height: realContentHeight, count: cell.rowSpan };
            }
            else if (rowSpanHeight && rowSpanHeight.count > 0) {
                if (rowSpanHeight.height > realContentHeight) {
                    realContentHeight = rowSpanHeight.height;
                }
            }
            if (realContentHeight > row.height) {
                row.height = realContentHeight;
                row.maxCellHeight = realContentHeight;
                row.maxCellLineCount = lineCount;
            }
        }
        rowSpanHeight.count--;
    }
}
function distributeWidth(autoColumns, diffWidth, wrappedAutoColumnsWidth) {
    for (var i = 0; i < autoColumns.length; i++) {
        var column = autoColumns[i];
        var ratio = column.wrappedWidth / wrappedAutoColumnsWidth;
        var suggestedChange = diffWidth * ratio;
        var suggestedWidth = column.wrappedWidth + suggestedChange;
        if (suggestedWidth >= column.minWidth) {
            column.width = suggestedWidth;
        }
        else {
            // We can't reduce the width of this column. Mark as none auto column and start over
            // Add 1 to minWidth as linebreaks calc otherwise sometimes made two rows
            column.width = column.minWidth + 1 / state_1.default().scaleFactor();
            wrappedAutoColumnsWidth -= column.wrappedWidth;
            autoColumns.splice(i, 1);
            distributeWidth(autoColumns, diffWidth, wrappedAutoColumnsWidth);
            break;
        }
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var config_1 = __webpack_require__(2);
var htmlParser_1 = __webpack_require__(12);
var polyfills_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var state_1 = __webpack_require__(0);
var inputValidator_1 = __webpack_require__(14);
/**
 * Create models from the user input
 */
function parseInput(args) {
    var tableOptions = parseUserArguments(args);
    var globalOptions = state_1.getGlobalOptions();
    var documentOptions = state_1.getDocumentOptions();
    var allOptions = [globalOptions, documentOptions, tableOptions];
    inputValidator_1.default(allOptions);
    var table = new models_1.Table();
    state_1.default().table = table;
    table.id = tableOptions.tableId;
    var doc = state_1.default().doc;
    table.userStyles = {
        // Setting to black for versions of jspdf without getTextColor
        textColor: doc.getTextColor ? doc.getTextColor() : 0,
        fontSize: doc.internal.getFontSize(),
        fontStyle: doc.internal.getFont().fontStyle,
        font: doc.internal.getFont().fontName
    };
    var _loop_1 = function (styleProp) {
        var styles = allOptions.map(function (opts) { return opts[styleProp] || {}; });
        table.styles[styleProp] = polyfills_1.assign.apply(void 0, [{}].concat(styles));
    };
    // Merge styles one level deeper
    for (var _i = 0, _a = Object.keys(table.styles); _i < _a.length; _i++) {
        var styleProp = _a[_i];
        _loop_1(styleProp);
    }
    // Append hooks
    for (var _b = 0, allOptions_1 = allOptions; _b < allOptions_1.length; _b++) {
        var opts = allOptions_1[_b];
        for (var _c = 0, _d = Object.keys(table.cellHooks); _c < _d.length; _c++) {
            var hookName = _d[_c];
            if (opts && typeof opts[hookName] === 'function') {
                table.cellHooks[hookName].push(opts[hookName]);
                delete opts[hookName];
            }
        }
    }
    table.settings = polyfills_1.assign.apply(void 0, [{}, config_1.defaultConfig()].concat(allOptions));
    table.settings.margin = common_1.marginOrPadding(table.settings.margin, config_1.defaultConfig().margin);
    if (table.settings.theme === 'auto') {
        table.settings.theme = table.settings.useCss ? 'plain' : 'striped';
    }
    if (table.settings.startY === false) {
        delete table.settings.startY;
    }
    var previous = state_1.default().doc.previousAutoTable;
    var isSamePageAsPrevious = previous && previous.startPageNumber + previous.pageNumber - 1 === state_1.default().pageNumber();
    if (table.settings.startY == null && isSamePageAsPrevious) {
        table.settings.startY = previous.finalY + 20 / state_1.default().scaleFactor();
    }
    var htmlContent = {};
    if (table.settings.html) {
        htmlContent = htmlParser_1.parseHtml(table.settings.html, table.settings.includeHiddenHtml, table.settings.useCss) || {};
    }
    table.settings.head = htmlContent.head || table.settings.head || [];
    table.settings.body = htmlContent.body || table.settings.body || [];
    table.settings.foot = htmlContent.foot || table.settings.foot || [];
    parseContent(table);
    table.minWidth = table.columns.reduce(function (total, col) { return (total + col.minWidth); }, 0);
    table.wrappedWidth = table.columns.reduce(function (total, col) { return (total + col.wrappedWidth); }, 0);
    if (typeof table.settings.tableWidth === 'number') {
        table.width = table.settings.tableWidth;
    }
    else if (table.settings.tableWidth === 'wrap') {
        table.width = table.wrappedWidth;
    }
    else {
        table.width = state_1.default().pageWidth() - table.margin('left') - table.margin('right');
    }
    return table;
}
exports.parseInput = parseInput;
function parseUserArguments(args) {
    // Normal initialization on format doc.autoTable(options)
    if (args.length === 1) {
        return args[0];
    }
    else {
        // Deprecated initialization on format doc.autoTable(columns, body, [options])
        var opts = args[2] || {};
        opts.body = args[1];
        opts.columns = args[0];
        // Support v2 title prop in v3
        opts.columns.forEach(function (col) {
            if (col.header == null) {
                col.header = col.title;
            }
        });
        return opts;
    }
}
function parseContent(table) {
    var settings = table.settings;
    table.columns = getTableColumns(settings);
    var _loop_2 = function (sectionName) {
        var rowSpansLeftForColumn = {};
        var sectionRows = settings[sectionName];
        if (sectionRows.length === 0 && settings.columns) {
            var sectionRow_1 = {};
            table.columns
                .forEach(function (col) {
                var columnData = col.raw;
                if (sectionName === 'head') {
                    var val = typeof columnData === 'object' ? columnData.header : columnData;
                    if (val) {
                        sectionRow_1[col.dataKey] = val;
                    }
                }
                else if (sectionName === 'foot' && columnData.footer) {
                    sectionRow_1[col.dataKey] = columnData.footer;
                }
            });
            if (Object.keys(sectionRow_1).length) {
                sectionRows.push(sectionRow_1);
            }
        }
        sectionRows.forEach(function (rawRow, rowIndex) {
            var skippedRowForRowSpans = 0;
            var row = new models_1.Row(rawRow, rowIndex, sectionName);
            table[sectionName].push(row);
            var colSpansAdded = 0;
            var columnSpansLeft = 0;
            for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (rowSpansLeftForColumn[column.dataKey] == null || rowSpansLeftForColumn[column.dataKey].left === 0) {
                    if (columnSpansLeft === 0) {
                        var rawCell = void 0;
                        if (Array.isArray(rawRow)) {
                            rawCell = rawRow[column.dataKey - colSpansAdded - skippedRowForRowSpans];
                        }
                        else {
                            rawCell = rawRow[column.dataKey];
                        }
                        var styles = cellStyles(sectionName, column.dataKey, rowIndex);
                        var cell = new models_1.Cell(rawCell, styles, sectionName);
                        row.cells[column.dataKey] = cell;
                        table.callCellHooks(table.cellHooks.didParseCell, cell, row, column);
                        columnSpansLeft = cell.colSpan - 1;
                        rowSpansLeftForColumn[column.dataKey] = { left: cell.rowSpan - 1, times: columnSpansLeft };
                    }
                    else {
                        columnSpansLeft--;
                        colSpansAdded++;
                    }
                }
                else {
                    rowSpansLeftForColumn[column.dataKey].left--;
                    columnSpansLeft = rowSpansLeftForColumn[column.dataKey].times;
                    skippedRowForRowSpans++;
                }
            }
        });
    };
    for (var _i = 0, _a = ['head', 'body', 'foot']; _i < _a.length; _i++) {
        var sectionName = _a[_i];
        _loop_2(sectionName);
    }
    table.allRows().forEach(function (row) {
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = row.cells[column.dataKey];
            // Kind of make sense to not consider width of cells with colspan columns
            // Consider this in a future release however
            if (cell && cell.colSpan === 1) {
                if (cell.wrappedWidth > column.wrappedWidth) {
                    column.wrappedWidth = cell.wrappedWidth;
                }
                if (cell.minWidth > column.minWidth) {
                    column.minWidth = cell.minWidth;
                }
            }
        }
    });
}
function getTableColumns(settings) {
    if (settings.columns) {
        return settings.columns.map(function (input, index) {
            var key = input.dataKey || input.key || index;
            var raw = input != null ? input : index;
            return new models_1.Column(key, raw, index);
        });
    }
    else {
        var merged = __assign({}, settings.head[0], settings.body[0], settings.foot[0]);
        delete merged._element;
        var dataKeys = Object.keys(merged);
        return dataKeys.map(function (key) { return new models_1.Column(key, key, key); });
    }
}
function cellStyles(sectionName, dataKey, rowIndex) {
    var table = state_1.default().table;
    var theme = config_1.getTheme(table.settings.theme);
    var otherStyles = [theme.table, theme[sectionName], table.styles.styles, table.styles[sectionName + "Styles"]];
    var colStyles = sectionName === 'body' ? table.styles.columnStyles[dataKey] || {} : {};
    var rowStyles = sectionName === 'body' && rowIndex % 2 === 0 ? polyfills_1.assign({}, theme.alternateRow, table.styles.alternateRowStyles) : {};
    return polyfills_1.assign.apply(void 0, [config_1.defaultStyles()].concat(otherStyles.concat([rowStyles, colStyles])));
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(2);
var state_1 = __webpack_require__(0);
var HookData_1 = __webpack_require__(10);
var common_1 = __webpack_require__(1);
var assign = __webpack_require__(11);
var CellHooks = /** @class */ (function () {
    function CellHooks() {
        this.didParseCell = [];
        this.willDrawCell = [];
        this.didDrawCell = [];
        this.didDrawPage = [];
    }
    return CellHooks;
}());
var Table = /** @class */ (function () {
    function Table() {
        this.columns = [];
        this.head = [];
        this.body = [];
        this.foot = [];
        this.height = 0;
        this.width = 0;
        this.preferredWidth = 0;
        this.wrappedWidth = 0;
        this.minWidth = 0;
        this.headHeight = 0;
        this.footHeight = 0;
        this.startPageNumber = 1;
        this.pageNumber = 1;
        this.styles = {
            styles: {},
            headStyles: {},
            bodyStyles: {},
            footStyles: {},
            alternateRowStyles: {},
            columnStyles: {},
        };
        this.cellHooks = new CellHooks();
    }
    Object.defineProperty(Table.prototype, "pageCount", {
        get: function () {
            return this.pageNumber;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.allRows = function () {
        return this.head.concat(this.body).concat(this.foot);
    };
    Table.prototype.callCellHooks = function (handlers, cell, row, column) {
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            if (handler(new HookData_1.CellHookData(cell, row, column)) === false) {
                return false;
            }
        }
        return true;
    };
    Table.prototype.callEndPageHooks = function () {
        common_1.applyUserStyles();
        for (var _i = 0, _a = this.cellHooks.didDrawPage; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(new HookData_1.HookData());
        }
    };
    Table.prototype.margin = function (side) {
        return common_1.marginOrPadding(this.settings.margin, config_1.defaultConfig().margin)[side];
    };
    return Table;
}());
exports.Table = Table;
var Row = /** @class */ (function () {
    function Row(raw, index, section) {
        this.cells = {};
        this.height = 0;
        this.maxCellLineCount = 1;
        this.maxCellHeight = 0;
        this.pageNumber = 1;
        this.spansMultiplePages = false;
        this.raw = raw;
        if (raw._element) {
            this.raw = raw._element;
        }
        this.index = index;
        this.section = section;
    }
    Object.defineProperty(Row.prototype, "pageCount", {
        get: function () {
            return this.pageNumber;
        },
        enumerable: true,
        configurable: true
    });
    return Row;
}());
exports.Row = Row;
var Cell = /** @class */ (function () {
    function Cell(raw, themeStyles, section) {
        this.contentWidth = 0;
        this.wrappedWidth = 0;
        this.minWidth = 0;
        this.textPos = {};
        this.height = 0;
        this.width = 0;
        this.rowSpan = raw && raw.rowSpan || 1;
        this.colSpan = raw && raw.colSpan || 1;
        this.styles = assign(themeStyles, raw && raw.styles || {});
        this.section = section;
        var text = '';
        var content = raw && typeof raw.content !== 'undefined' ? raw.content : raw;
        content = content != undefined && content.dataKey != undefined ? content.title : content;
        var fromHtml = typeof window === 'object' && window.HTMLElement && content instanceof window.HTMLElement;
        this.raw = fromHtml ? content : raw;
        if (content && fromHtml) {
            text = (content.innerText || '').replace(/' '+/g, ' ').trim();
        }
        else {
            // Stringify 0 and false, but not undefined or null
            text = content != undefined ? '' + content : '';
        }
        var splitRegex = /\r\n|\r|\n/g;
        this.text = text.split(splitRegex);
        this.contentWidth = this.padding('horizontal') + common_1.getStringWidth(this.text, this.styles);
        if (typeof this.styles.cellWidth === 'number') {
            this.minWidth = this.styles.cellWidth;
            this.wrappedWidth = this.styles.cellWidth;
        }
        else if (this.styles.cellWidth === 'wrap') {
            this.minWidth = this.contentWidth;
            this.wrappedWidth = this.contentWidth;
        }
        else { // auto
            var defaultMinWidth = 10 / state_1.default().scaleFactor();
            this.minWidth = this.styles.minCellWidth || defaultMinWidth;
            this.wrappedWidth = this.contentWidth;
            if (this.minWidth > this.wrappedWidth) {
                this.wrappedWidth = this.minWidth;
            }
        }
    }
    Cell.prototype.padding = function (name) {
        var padding = common_1.marginOrPadding(this.styles.cellPadding, common_1.styles([]).cellPadding);
        if (name === 'vertical') {
            return padding.top + padding.bottom;
        }
        else if (name === 'horizontal') {
            return padding.left + padding.right;
        }
        else {
            return padding[name];
        }
    };
    return Cell;
}());
exports.Cell = Cell;
var Column = /** @class */ (function () {
    function Column(dataKey, raw, index) {
        this.preferredWidth = 0;
        this.minWidth = 0;
        this.wrappedWidth = 0;
        this.width = 0;
        this.dataKey = dataKey;
        this.raw = raw;
        this.index = index;
    }
    return Column;
}());
exports.Column = Column;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__(0);
var HookData = /** @class */ (function () {
    function HookData() {
        var table = state_1.default().table;
        this.table = table;
        this.pageNumber = table.pageNumber;
        this.settings = table.settings;
        this.cursor = table.cursor;
        this.doc = state_1.default().doc;
    }
    Object.defineProperty(HookData.prototype, "pageCount", {
        get: function () {
            return this.pageNumber;
        },
        enumerable: true,
        configurable: true
    });
    return HookData;
}());
exports.HookData = HookData;
var CellHookData = /** @class */ (function (_super) {
    __extends(CellHookData, _super);
    function CellHookData(cell, row, column) {
        var _this = _super.call(this) || this;
        _this.cell = cell;
        _this.row = row;
        _this.column = column;
        _this.section = row.section;
        return _this;
    }
    return CellHookData;
}(HookData));
exports.CellHookData = CellHookData;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cssParser_1 = __webpack_require__(13);
var state_1 = __webpack_require__(0);
function parseHtml(input, includeHiddenHtml, useCss) {
    if (includeHiddenHtml === void 0) { includeHiddenHtml = false; }
    if (useCss === void 0) { useCss = false; }
    var tableElement;
    if (typeof input === 'string') {
        tableElement = window.document.querySelector(input);
    }
    else {
        tableElement = input;
    }
    if (!tableElement) {
        console.error("Html table could not be found with input: ", input);
        return;
    }
    var head = parseTableSection(window, tableElement.tHead, includeHiddenHtml, useCss);
    var body = [];
    for (var i = 0; i < tableElement.tBodies.length; i++) {
        body = body.concat(parseTableSection(window, tableElement.tBodies[i], includeHiddenHtml, useCss));
    }
    var foot = parseTableSection(window, tableElement.tFoot, includeHiddenHtml, useCss);
    return { head: head, body: body, foot: foot };
}
exports.parseHtml = parseHtml;
function parseTableSection(window, sectionElement, includeHidden, useCss) {
    var results = [];
    if (!sectionElement) {
        return results;
    }
    for (var i = 0; i < sectionElement.rows.length; i++) {
        var row = sectionElement.rows[i];
        var resultRow = [];
        var rowStyles = useCss ? cssParser_1.parseCss(row, state_1.default().scaleFactor(), ['cellPadding', 'lineWidth', 'lineColor']) : {};
        for (var i_1 = 0; i_1 < row.cells.length; i_1++) {
            var cell = row.cells[i_1];
            var style = window.getComputedStyle(cell);
            if (includeHidden || style.display !== 'none') {
                var cellStyles = useCss ? cssParser_1.parseCss(cell, state_1.default().scaleFactor()) : {};
                resultRow.push({
                    rowSpan: cell.rowSpan,
                    colSpan: cell.colSpan,
                    styles: useCss ? cellStyles : null,
                    content: cell
                });
            }
        }
        if (resultRow.length > 0 && (includeHidden || rowStyles.display !== 'none')) {
            resultRow._element = row;
            results.push(resultRow);
        }
    }
    return results;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Limitations
// - No support for border spacing
// - No support for transparency
var common_1 = __webpack_require__(1);
function parseCss(element, scaleFactor, ignored) {
    if (ignored === void 0) { ignored = []; }
    var result = {};
    var style = window.getComputedStyle(element);
    function assign(name, value, accepted) {
        if (accepted === void 0) { accepted = []; }
        if ((accepted.length === 0 || accepted.indexOf(value) !== -1) && ignored.indexOf(name) === -1) {
            if (value === 0 || value) {
                result[name] = value;
            }
        }
    }
    var pxScaleFactor = 96 / 72;
    assign('fillColor', parseColor(element, 'backgroundColor'));
    assign('lineColor', parseColor(element, 'borderColor'));
    assign('fontStyle', parseFontStyle(style));
    assign('textColor', parseColor(element, 'color'));
    assign('halign', style.textAlign, ['left', 'right', 'center', 'justify']);
    assign('valign', style.verticalAlign, ['middle', 'bottom', 'top']);
    assign('fontSize', parseInt(style.fontSize || '') / pxScaleFactor);
    assign('cellPadding', parsePadding(style.padding, style.fontSize, style.lineHeight, scaleFactor));
    assign('lineWidth', parseInt(style.borderWidth || '') / pxScaleFactor / scaleFactor);
    assign('font', (style.fontFamily || '').toLowerCase());
    return result;
}
exports.parseCss = parseCss;
function parseFontStyle(style) {
    var res = '';
    if (style.fontWeight === 'bold' || style.fontWeight === 'bolder' || parseInt(style.fontWeight) >= 700) {
        res += 'bold';
    }
    if (style.fontStyle === 'italic' || style.fontStyle === 'oblique') {
        res += 'italic';
    }
    return res;
}
function parseColor(element, colorProp) {
    var cssColor = realColor(element, colorProp);
    if (!cssColor)
        return null;
    var rgba = cssColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
    if (!rgba || !Array.isArray(rgba)) {
        return null;
    }
    var color = [parseInt(rgba[1]), parseInt(rgba[2]), parseInt(rgba[3])];
    var alpha = parseInt(rgba[4]);
    if (alpha === 0 || isNaN(color[0]) || isNaN(color[1]) || isNaN(color[2])) {
        return null;
    }
    return color;
}
function realColor(elem, colorProp) {
    if (!elem)
        return null;
    var bg = window.getComputedStyle(elem)[colorProp];
    if (bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent' || bg === 'initial' || bg === 'inherit') {
        return realColor(elem.parentElement, colorProp);
    }
    else {
        return bg;
    }
}
function parsePadding(val, fontSize, lineHeight, scaleFactor) {
    if (!val)
        return null;
    var pxScaleFactor = (96 / (72 / scaleFactor));
    var linePadding = (parseInt(lineHeight) - parseInt(fontSize)) / scaleFactor / 2;
    var padding = val.split(' ').map(function (n) {
        return parseInt(n) / pxScaleFactor;
    });
    padding = common_1.marginOrPadding(padding, 0);
    if (linePadding > padding.top) {
        padding.top = linePadding;
    }
    if (linePadding > padding.bottom) {
        padding.bottom = linePadding;
    }
    return padding;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(1);
function default_1(allOptions) {
    var _loop_1 = function (settings) {
        if (settings && typeof settings !== 'object') {
            console.error("The options parameter should be of type object, is: " + typeof settings);
        }
        if (typeof settings.extendWidth !== 'undefined') {
            settings.tableWidth = settings.extendWidth ? 'auto' : 'wrap';
            console.error("Use of deprecated option: extendWidth, use tableWidth instead.");
        }
        if (typeof settings.margins !== 'undefined') {
            if (typeof settings.margin === 'undefined')
                settings.margin = settings.margins;
            console.error("Use of deprecated option: margins, use margin instead.");
        }
        if (!settings.didDrawPage && (settings.afterPageContent || settings.beforePageContent || settings.afterPageAdd)) {
            console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead");
            settings.didDrawPage = function (data) {
                common_1.applyUserStyles();
                if (settings.beforePageContent)
                    settings.beforePageContent(data);
                common_1.applyUserStyles();
                if (settings.afterPageContent)
                    settings.afterPageContent(data);
                common_1.applyUserStyles();
                if (settings.afterPageAdd && data.pageNumber > 1) {
                    data.afterPageAdd(data);
                }
                common_1.applyUserStyles();
            };
        }
        ["createdHeaderCell", "drawHeaderRow", "drawRow", "drawHeaderCell"].forEach(function (name) {
            if (settings[name]) {
                console.error("The \"" + name + "\" hook has changed in version 3.0, check the changelog for how to migrate.");
            }
        });
        [['showFoot', 'showFooter'], ['showHead', 'showHeader'], ['didDrawPage', 'addPageContent'], ['didParseCell', 'createdCell'], ['headStyles', 'headerStyles']].forEach(function (_a) {
            var current = _a[0], deprecated = _a[1];
            if (settings[deprecated]) {
                console.error("Use of deprecated option " + deprecated + ". Use " + current + " instead");
                settings[current] = settings[deprecated];
            }
        });
        [['padding', 'cellPadding'], ['lineHeight', 'rowHeight'], 'fontSize', 'overflow'].forEach(function (o) {
            var deprecatedOption = typeof o === 'string' ? o : o[0];
            var style = typeof o === 'string' ? o : o[1];
            if (typeof settings[deprecatedOption] !== 'undefined') {
                if (typeof settings.styles[style] === 'undefined') {
                    settings.styles[style] = settings[deprecatedOption];
                }
                console.error("Use of deprecated option: " + deprecatedOption + ", use the style " + style + " instead.");
            }
        });
        for (var _i = 0, _a = ['styles', 'bodyStyles', 'headStyles', 'footStyles']; _i < _a.length; _i++) {
            var styleProp = _a[_i];
            checkStyles(settings[styleProp] || {});
        }
        var columnStyles = settings['columnStyles'] || {};
        for (var _b = 0, _c = Object.keys(columnStyles); _b < _c.length; _b++) {
            var dataKey = _c[_b];
            checkStyles(columnStyles[dataKey] || {});
        }
    };
    for (var _i = 0, allOptions_1 = allOptions; _i < allOptions_1.length; _i++) {
        var settings = allOptions_1[_i];
        _loop_1(settings);
    }
}
exports.default = default_1;
function checkStyles(styles) {
    if (styles.rowHeight) {
        console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight.");
        if (!styles.minCellHeight) {
            styles.minCellHeight = styles.rowHeight;
        }
    }
    else if (styles.columnWidth) {
        console.error("Use of deprecated style columnWidth. It is renamed to cellWidth.");
        if (!styles.cellWidth) {
            styles.cellWidth = styles.columnWidth;
        }
    }
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var jsPDF = __webpack_require__(4);
/**
 * Improved text function with halign and valign support
 * Inspiration from: http://stackoverflow.com/questions/28327510/align-text-right-using-jspdf/28433113#28433113
 */
jsPDF.API.autoTableText = function (text, x, y, styles) {
    styles = styles || {};
    var FONT_ROW_RATIO = 1.15;
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.error('The x and y parameters are required. Missing for text: ', text);
    }
    var k = this.internal.scaleFactor;
    var fontSize = this.internal.getFontSize() / k;
    var splitRegex = /\r\n|\r|\n/g;
    var splitText = null;
    var lineCount = 1;
    if (styles.valign === 'middle' || styles.valign === 'bottom' || styles.halign === 'center' || styles.halign === 'right') {
        splitText = typeof text === 'string' ? text.split(splitRegex) : text;
        lineCount = splitText.length || 1;
    }
    // Align the top
    y += fontSize * (2 - FONT_ROW_RATIO);
    if (styles.valign === 'middle')
        y -= (lineCount / 2) * fontSize * FONT_ROW_RATIO;
    else if (styles.valign === 'bottom')
        y -= lineCount * fontSize * FONT_ROW_RATIO;
    if (styles.halign === 'center' || styles.halign === 'right') {
        var alignSize = fontSize;
        if (styles.halign === 'center')
            alignSize *= 0.5;
        if (lineCount >= 1) {
            for (var iLine = 0; iLine < splitText.length; iLine++) {
                this.text(splitText[iLine], x - this.getStringUnitWidth(splitText[iLine]) * alignSize, y);
                y += fontSize;
            }
            return this;
        }
        x -= this.getStringUnitWidth(text) * alignSize;
    }
    if (styles.halign === 'justify') {
        this.text(text, x, y, { maxWidth: styles.maxWidth || 100, align: 'justify' });
    }
    else {
        this.text(text, x, y);
    }
    return this;
};


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/app/components/venta-detail/venta-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/venta-detail/venta-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nul {\r\n    padding-left: 0px;\r\n    padding-top: 20px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZW50YS1kZXRhaWwvdmVudGEtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlbnRhLWRldGFpbC92ZW50YS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm9sLFxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/venta-detail/venta-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/venta-detail/venta-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\" style=\"font-size: 20px; padding-right:3em; padding-left: 3em\">\r\n    <i class=\"material-icons\" style=\"font-size: 30px\">ballot</i> Detalle de Orden de Venta (N°{{ idParam }})\r\n</div>\r\n\r\n<div class=\"container mt-4\">\r\n    Se muestra el detalle de la orden de venta.\r\n</div>\r\n\r\n<div class=\"container mt-3 text-center\">\r\n    <mat-card>\r\n        <hr>\r\n        <br>\r\n        <!-- <div class=\"row text-center\">\r\n            <div class=\"col-md-2\"></div>\r\n            <div class=\"col-md-3 text-center\" style=\"background: aliceblue\">\r\n                <strong>PRODUCTO</strong>\r\n                <hr>\r\n                <ul id=\"friendsList\"> </ul>\r\n            </div>\r\n            <div class=\"col-md-1 text-center\" style=\"max-width: 10.333333%; background: aliceblue\">\r\n                <strong>CANTIDAD</strong>\r\n                <hr>\r\n                <ul id=\"friendsList0\"> </ul>\r\n            </div>\r\n            <div class=\"col-md-2 text-center \" style=\"background: aliceblue\">\r\n                <strong>P. UNITARIO</strong>\r\n                <hr>\r\n                <ul id=\"friendsList2\"> </ul>\r\n            </div>\r\n            <div class=\"col-md-2 text-center\" style=\"background: aliceblue\">\r\n                <strong>IMPORTE</strong>\r\n                <hr>\r\n                <ul id=\"friendsList3\"> </ul>\r\n            </div>\r\n            <div class=\"col-md-2\"></div>\r\n        </div> -->\r\n\r\n        <table mat-table [dataSource]=\"dataSource2\" class=\"mat-elevation-z8\" matSort style=\"margin-left: 164px; width: 70.4%;\">\r\n\r\n                <!--- Note that these columns can be defined in any order.\r\n                      The actual rendered columns are set as a property on the row definition\" -->\r\n              \r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"producto\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: center; font-weight: bold; font-size: 15px;\"> PRODUCTO </th>\r\n                  <td mat-cell *matCellDef=\"let element\" style=\"font-size: 15px;\"> {{element.producto}} </td>\r\n                </ng-container>\r\n              \r\n\r\n                <!-- Weight Column -->\r\n                <ng-container matColumnDef=\"cantidad\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: center; font-weight: bold; font-size: 15px;\"> CANTIDAD </th>\r\n                  <td mat-cell *matCellDef=\"let element\" style=\"font-size: 15px;\"> {{element.cantidad}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"precio\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: center; font-weight: bold; font-size: 15px;\"> P. UNITARIO </th>\r\n                        <td mat-cell *matCellDef=\"let element\" style=\"font-size: 15px;\"> {{element.precio}} </td>\r\n                      </ng-container>\r\n              \r\n                <!-- Symbol Column -->\r\n                <ng-container matColumnDef=\"subtotal\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: center; font-weight: bold; font-size: 15px;\"> IMPORTE </th>\r\n                  <td mat-cell *matCellDef=\"let element\" style=\"font-size: 15px;\"> {{element.subtotal}} </td>\r\n                </ng-container>\r\n              \r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\r\n              </table>\r\n\r\n        <br>\r\n        <div style=\"font-weight:bold; margin-left: 55%\">\r\n            TOTAL : S/. {{monto1}}\r\n        </div>\r\n        <br>\r\n        <div>\r\n            <a mat-button [routerLink]=\"[ '/home/venta' ]\">Regresar</a>\r\n        </div>\r\n        <hr>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/venta-detail/venta-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/venta-detail/venta-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: VentaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaDetailComponent", function() { return VentaDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/venta.service */ "./src/app/services/venta.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _services_venta_producto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/venta_producto.service */ "./src/app/services/venta_producto.service.ts");








var VentaDetailComponent = /** @class */ (function () {
    function VentaDetailComponent(__ventaService, _productoService, _ventaProductoService, route, formBuilder, _router) {
        this.__ventaService = __ventaService;
        this._productoService = _productoService;
        this._ventaProductoService = _ventaProductoService;
        this.route = route;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.productos = [];
        this.ELEMENT_DATA = [];
        this.displayedColumns2 = ['producto', 'cantidad', 'precio', 'subtotal'];
    }
    VentaDetailComponent.prototype.ngOnInit = function () {
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.listarVentaProducto();
        this.monto = 0;
    };
    VentaDetailComponent.prototype.listarVentaProducto = function () {
        var _this = this;
        this.idParam = this.route.snapshot.paramMap.get('id');
        this._ventaProductoService.buscarVentaProducto(this.idParam).subscribe(function (res) {
            _this.ventaProducto = res.venta_producto;
            localStorage.setItem("ventaProducto", JSON.stringify(_this.ventaProducto));
            for (var i = 0; i < _this.ventaProducto.length; i++) {
                var producto = _this.ventaProducto[i].nombreProd;
                var cantidad = _this.ventaProducto[i].cantidad;
                var precio = _this.ventaProducto[i].precio.toFixed(2);
                var importe = (_this.ventaProducto[i].precio * _this.ventaProducto[i].cantidad).toFixed(2);
                _this.monto = _this.monto + (_this.ventaProducto[i].precio * _this.ventaProducto[i].cantidad);
                _this.monto1 = _this.monto.toFixed(2);
                //var boton = document.createElement('button');
                // var ul0 = document.getElementById("friendsList0");
                // var ul = document.getElementById("friendsList");
                // var ul2 = document.getElementById("friendsList2");
                // var ul3 = document.getElementById("friendsList3");
                // var li0 = document.createElement("li");
                // var li = document.createElement('li');
                // var li2 = document.createElement('li');
                // var li3 = document.createElement('li');
                // var hr0 = document.createElement('hr');
                // var hr = document.createElement('hr');
                // var hr2 = document.createElement('hr');
                // var hr3 = document.createElement('hr');
                // li.appendChild(document.createTextNode(producto));
                // li0.appendChild(document.createTextNode(cantidad));
                // li2.appendChild(document.createTextNode('S/. ' + precio));
                // li3.appendChild(document.createTextNode('S/. ' + importe));
                // li2.appendChild(boton);
                // li3.appendChild(document.createTextNode("Pendiente"));
                _this.ELEMENT_DATA.push({ producto: producto, precio: 'S/. ' + precio, cantidad: cantidad, subtotal: 'S/. ' + importe });
                _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.ELEMENT_DATA);
                // ul0.appendChild(li0);
                // ul.appendChild(li);
                // ul2.appendChild(li2);
                // ul3.appendChild(li3);
                // ul0.appendChild(hr0)
                // ul.appendChild(hr);
                // ul2.appendChild(hr2);
                // ul3.appendChild(hr3);
            }
            // var list2 = document.querySelectorAll('#friendsList2 li');
            // for (let i = 0; i < list2.length; i++) {
            //   list2[i].setAttribute("id", "list2" + i);
            //   document.getElementById("list2" + i).style.listStyle = "none";
            //   document.getElementById("list2" + i).style.textAlign = "center";
            // }
            // var list3 = document.querySelectorAll('#friendsList3 li');
            // for (let i = 0; i < list3.length; i++) {
            //   list3[i].setAttribute("id", "list3" + i);
            //   document.getElementById("list3" + i).style.listStyle = "none";
            //   document.getElementById("list3" + i).style.textAlign = "center";
            //   document.getElementById("list3" + i).style.color = "green";
            //   document.getElementById("list3" + i).style.fontWeight = "bold";
            // }
            // var buton = document.querySelectorAll('#friendsList2 li button');
            // for (let i = 0; i < buton.length; i++) {
            //   buton[i].appendChild(document.createTextNode("Verificar"));
            //   buton[i].setAttribute("class", "mat-raised-button mat-primary");
            //   buton[i].setAttribute("id", "boton" + i);
            //   document.getElementById("boton" + i).style.marginTop = "-10px";
            //   document.getElementById("boton" + i).style.marginBottom = "-10px";
            //   if (this.ventaProducto[i].estado == 1) {
            //     document.getElementById("list3" + i).style.color = "blue";
            //     document.getElementById("list3" + i).innerHTML = "Correcto";
            //     document.getElementById("boton" + i).setAttribute("disabled", "disabled");
            //   }
            //   document.getElementById("boton" + i).addEventListener('click', function (event) {
            //     let id = this.id.split("boton")[1];
            //     localStorage.setItem("id", id);
            //   });
            // }
        }, function (error) {
            console.log(error);
        });
    };
    VentaDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-venta-detail',
            template: __webpack_require__(/*! ./venta-detail.component.html */ "./src/app/components/venta-detail/venta-detail.component.html"),
            providers: [_services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_6__["ProductoService"], _services_venta_producto_service__WEBPACK_IMPORTED_MODULE_7__["VentaProductoService"]],
            styles: [__webpack_require__(/*! ./venta-detail.component.css */ "./src/app/components/venta-detail/venta-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"],
            _services_producto_service__WEBPACK_IMPORTED_MODULE_6__["ProductoService"],
            _services_venta_producto_service__WEBPACK_IMPORTED_MODULE_7__["VentaProductoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VentaDetailComponent);
    return VentaDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/venta/venta-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/venta/venta-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: VentaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaRoutingModule", function() { return VentaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _venta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venta.component */ "./src/app/components/venta/venta.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _venta_detail_venta_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../venta-detail/venta-detail.component */ "./src/app/components/venta-detail/venta-detail.component.ts");






var routes = [
    { path: '', component: _venta_component__WEBPACK_IMPORTED_MODULE_3__["VentaComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: ':id', component: _venta_detail_venta_detail_component__WEBPACK_IMPORTED_MODULE_5__["VentaDetailComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
var VentaRoutingModule = /** @class */ (function () {
    function VentaRoutingModule() {
    }
    VentaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VentaRoutingModule);
    return VentaRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/venta/venta.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/venta/venta.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.modal .mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.buscar .mat-form-field {\r\n    width: 80%\r\n}\r\n\r\n* {\r\n    outline: none;\r\n    border: 0;\r\n}\r\n\r\n/* Estilos de las tablas */\r\n\r\n.mat-column-numero_venta {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.mat-column-cliente {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 20%;\r\n}\r\n\r\n.mat-column-solicitante {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 20%;\r\n}\r\n\r\n.mat-column-total {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 15%;\r\n}\r\n\r\n.mat-column-fecha_vent {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 15%;\r\n}\r\n\r\n.mat-column-acciones {\r\n    padding-left: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.mat-column-acciones2 {\r\n    padding-right: 0px !important;\r\n    text-align: center !important;\r\n    width: 10%;\r\n}\r\n\r\n.material-icons {\r\n    color: rgb(20, 27, 83);\r\n}\r\n\r\n.material-icons:hover {\r\n    color: rgb(0, 30, 253);\r\n}\r\n\r\n.fecha {\r\n    width: 150px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZW50YS92ZW50YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBR0EsMEJBQTBCOztBQUUxQjtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZW50YS92ZW50YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbCAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXNjYXIgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA4MCVcclxufVxyXG5cclxuKiB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5cclxuLyogRXN0aWxvcyBkZSBsYXMgdGFibGFzICovXHJcblxyXG4ubWF0LWNvbHVtbi1udW1lcm9fdmVudGEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tY2xpZW50ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zb2xpY2l0YW50ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi10b3RhbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1mZWNoYV92ZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWFjY2lvbmVzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWFjY2lvbmVzMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGNvbG9yOiByZ2IoMjAsIDI3LCA4Myk7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29uczpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDMwLCAyNTMpO1xyXG59XHJcblxyXG4uZmVjaGEge1xyXG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/venta/venta.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/venta/venta.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\" style=\"font-size: 20px; padding-right:3em; padding-left: 3em\">\r\n    <!-- <i class=\"material-icons\" style=\"font-size: 30px\"> accessibility </i> -->\r\n    <i class=\"material-icons\" style=\"font-size: 30px\"> monetization_on </i> Ventas\r\n</div>\r\n\r\n<div class=\" container-fluid mt-4\" style=\"padding-right:4em; padding-left: 4em\">\r\n    <div class=\"row\">\r\n        <!-- <div class=\"col-md-6 \">\r\n            <i class=\"material-icons\"> search </i>\r\n            <mat-form-field class=\"mt-3\">\r\n                <input (keyup)=\"applyFilter($event.target.value)\" matInput placeholder=\"Buscar...\" autocomplete=\"off\">\r\n            </mat-form-field>\r\n        </div> -->\r\n        <div class=\"col-md-12 text-right\" style=\"padding-top: 1.8em\">\r\n            <button *ngIf=\"listarProductosVendidos.length!=0\" class=\"mr-3\" mat-raised-button style=\"background: #1D6F42; color: white; bottom: 1.15em;\" (click)=\"exportarVentas()\">\r\n                <i class=\"material-icons\" style=\"color:white\"> archive</i>Ventas Generales</button>\r\n                <button *ngIf=\"listarProductosVendidos.length==0\" disabled=\"true\" class=\"mr-3\" mat-raised-button style=\"background: #1D6F42; color: white; opacity: 0.5; bottom: 1.15em;\" (click)=\"exportarVentas()\">\r\n                        <i class=\"material-icons\" style=\"color:white\"> archive</i>Ventas Generales</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalNuevaOrdenVenta\" mat-flat-button color=\"primary\" style=\"bottom: 1.15em;\">Nueva Orden de Venta</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"mat-elevation-z8\" #TABLE>\r\n\r\n        <table mat-table #table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"numero_venta\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> # DE ORDEN </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row._id}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"cliente\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> CLIENTE </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.nombres.split(\" \",1)}} {{row.apellidos.split(\" \",1)}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"solicitante\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> VENDEDOR </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.nombresEmp.split(\" \",1)}} {{row.apellidosEmp.split(\" \",1)}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"fecha_vent\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> FECHA </th>\r\n                <td mat-cell *matCellDef=\"let row\"> {{row.fecha}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"total\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> TOTAL </th>\r\n                <td mat-cell *matCellDef=\"let row\"> S/. {{row.total.toFixed(2)}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"acciones\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> VER DETALLE </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button [routerLink]=\"['/home/venta', row._id ]\">\r\n                        <mat-icon class=\"material-icons\">ballot</mat-icon>\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"acciones2\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>REPORTE </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button (click)=\"crearReporte(row._id)\">\r\n                        <mat-icon class=\"material-icons\">description</mat-icon>\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n\r\n        <mat-paginator [pageSizeOptions]=\"[10, 20]\"></mat-paginator>\r\n    </div>\r\n\r\n    <div class=\"row mt-2\">\r\n        <div class=\"col-md-4\"></div>\r\n        <div class=\"col-md-8 text-right\">\r\n            <mat-form-field class=\"mr-2 fecha\">\r\n                <input matInput id=\"fechaInicio\" readonly [matDatepicker]=\"fechaInicio\" [max]=\"maxDate\" placeholder=\"Fecha de Inicio\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"fechaInicio\"></mat-datepicker-toggle>\r\n                <mat-datepicker #fechaInicio></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"mr-3 fecha\">\r\n                <input id=\"fechaFin\" readonly matInput [matDatepicker]=\"fechaFin\" [max]=\"maxDate\" placeholder=\"Fecha de Fin\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"fechaFin\"></mat-datepicker-toggle>\r\n                <mat-datepicker #fechaFin></mat-datepicker>\r\n            </mat-form-field>\r\n            <button *ngIf=\"listarProductosVendidos.length!=0\" mat-raised-button style=\"background: #1D6F42; color: white\" (click)=\"exportTable()\">\r\n                <i class=\"material-icons\" style=\"color:white\"> archive</i> Excel\r\n            </button>\r\n            <button *ngIf=\"listarProductosVendidos.length==0\" mat-raised-button disabled style=\"background: #1D6F42; color: white; opacity: 0.5\" (click)=\"exportTable()\">\r\n                    <i class=\"material-icons\" style=\"color:white\"> archive</i> Excel\r\n                </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- MODAL NUEVA ORDEN -->\r\n\r\n<div class=\"modal fade\" id=\"modalNuevaOrdenVenta\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalNuevaOrdenVenta\" aria-hidden=\"true\" data-backdrop=\"false\" style=\"background-color: rgba(0, 0, 0, 0.5);\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\"> <i class=\"material-icons\">\r\n                        post_add\r\n                    </i> Nueva Orden de Venta (N° {{numeroventa}})</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"cerrar()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body text-center\">\r\n                <h5>Ingrese los datos de la Orden de Venta</h5>\r\n                <div class=\"container from-group text-center mt-5\">\r\n                    <form [formGroup]=\"nuevoOrdenVentaForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\"></div>\r\n                            <div class=\"col-md-8\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                        <!-- <select formControlName=\"cliente\">\r\n                                                <option *ngFor=\"let opt of options\" [value]=\"opt._id\" [selected]=\"opt.selected\">{{opt.nombres}} {{opt.apellidos}} - {{opt.dni}}</option>\r\n                                        </select> -->\r\n                                    <!-- <input type=\"text\" placeholder=\"Cliente...\" matInput formControlName=\"cliente\" [matAutocomplete]=\"auto\">\r\n                                    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n                                        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                                            {{option.nombres}} {{option.apellidos}} - {{option.dni}}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete> -->\r\n                                    \r\n                                    <mat-select matInput placeholder = \"Cliente...\" formControlName=\"cliente\">\r\n                                        <mat-select-trigger>{{nuevoOrdenVentaForm.value.cliente.nombres}} {{nuevoOrdenVentaForm.value.cliente.apellidos}}</mat-select-trigger>\r\n                                        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                                            {{option.nombres}} {{option.apellidos}} - {{option.dni}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-2\"> </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\"></div>\r\n                            <div class=\"col-md-8\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input id=\"vendedor\" type=\"text\" placeholder=\"Vendedor...\" readonly matInput formControlName=\"solicitante\">\r\n                                    <!-- <input type=\"text\" placeholder=\"Solicitante...\" matInput formControlName=\"solicitante\" [matAutocomplete]=\"auto2\">\r\n                                    <mat-autocomplete #auto2=\"matAutocomplete\" [displayWith]=\"displayFn2\">\r\n                                        <mat-option *ngFor=\"let option2 of filteredOptions2 | async\" [value]=\"option2\">\r\n                                            {{option2.nombres}} {{option2.apellidos}} - {{option2.dni}}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete> -->\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-2\"> </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\"></div>\r\n                            <div class=\"col-md-8\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input id=\"descripcion\" type=\"text\" onKeypress=\"if (event.keyCode != 32 && (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 97 || event.keyCode > 122) && event.keyCode != 241 && event.keyCode != 209 && event.keyCode != 225 && event.keyCode != 233 && event.keyCode != 237 && event.keyCode != 243 && event.keyCode != 250 && event.keyCode != 193 && event.keyCode != 201 && event.keyCode != 205 && event.keyCode != 211 && event.keyCode != 218) event.returnValue = false;\" focus=\"true\" placeholder=\"Descripción...\" matInput formControlName=\"descripcion\" autocomplete=\"off\">\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-2\"> </div>\r\n                        </div>\r\n\r\n                        <hr>\r\n                        <h6 style=\"text-align: left; padding-left: 128px\">Agregar Producto</h6>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\"></div>\r\n                            <div class=\"col-md-5\">\r\n                                <mat-form-field class=\"example-full-width mipanel\">\r\n                                    <!-- <input type=\"text\" placeholder=\"Producto...\" matInput formControlName=\"producto\" [matAutocomplete]=\"auto3\">\r\n                                    <mat-autocomplete #auto3=\"matAutocomplete\" [displayWith]=\"displayFn3\">\r\n                                        <mat-option style=\"font-size: 12px\" *ngFor=\"let option3 of filteredOptions3 | async\" [value]=\"option3\">\r\n                                            {{option3.nombre}} | <strong style=\"color: rgb(21, 36, 175)\">Stock:\r\n                                                {{option3.stock}} </strong>\r\n                                        </mat-option>\r\n                                    </mat-autocomplete> -->\r\n\r\n                                    <mat-select matInput placeholder = \"Producto...\" formControlName=\"producto\">\r\n                                        <mat-select-trigger>{{nuevoOrdenVentaForm.value.producto.nombre}}</mat-select-trigger>\r\n                                            <mat-option (click)=\"verStock()\" style=\"font-size: 12px\" *ngFor=\"let option3 of filteredOptions3 | async\" [value]=\"option3\">\r\n                                                    {{option3.nombre}} | <strong style=\"color: rgb(21, 36, 175)\">Stock:\r\n                                                        {{option3.stock}} </strong>\r\n                                            </mat-option>\r\n                                    </mat-select>\r\n\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-3\" >\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <mat-label *ngIf=\"!stock\">Cantidad</mat-label>\r\n                                    <mat-label *ngIf=\"stock\">Stock Actual : {{stock}} </mat-label>\r\n                                    <input *ngIf=\"nuevoOrdenVentaForm.value.producto\" id=\"cantidad\" type=\"number\" min=\"1\" onKeypress=\"if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;\" matInput placeholder=\"Ingresar cantidad\" autocomplete=\"off\">\r\n                                    <input *ngIf=\"!nuevoOrdenVentaForm.value.producto\" id=\"cantidad\" readonly type=\"number\" min=\"1\" onKeypress=\"if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;\" matInput placeholder=\"Ingresar cantidad\" autocomplete=\"off\">\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-2\"> </div>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                    <button mat-flat-button class=\"btnAgre\" color=\"primary\" style=\"text-align: center; margin-bottom: 50px; margin-top: 20px\" (click)=\"mostrarProducto()\">Agregar Producto</button>\r\n\r\n                    <!-- <table id=\"tabla\">\r\n                        <tr>\r\n                            <td>Producto</td>\r\n                            <td>Descripción</td>\r\n                            <td>Cantidad</td>\r\n                            <td>SubTotal</td>\r\n                        </tr>\r\n                    </table> -->\r\n\r\n                    <div class=\"container mt-3 text-center\">\r\n                        <!-- <mat-card>\r\n                            <hr>\r\n                            <div class=\"row text-center\" style=\"width: 145%\">\r\n                                <div class=\"col-md-0\"></div>\r\n                                <div class=\"col-md-3 text-center\" style=\"background: aliceblue\">\r\n                                    <strong style=\"margin-left: 48px\">PRODUCTO</strong>\r\n                                    <hr>\r\n                                    <ul id=\"friendsList\"> </ul>\r\n                                </div>\r\n                                <div class=\"col-md-1 text-center\" style=\"max-width: 20.333333%; background: aliceblue\">\r\n                                    <strong style=\"margin-left: 50px\">PRECIO</strong>\r\n                                    <hr>\r\n                                    <ul id=\"friendsList0\"> </ul>\r\n                                </div>\r\n                                <div class=\"col-md-2 text-center\" style=\"background: aliceblue\">\r\n                                    <strong style=\"margin-left: 40px\">CANTIDAD</strong>\r\n                                    <hr>\r\n                                    <ul id=\"friendsList2\"> </ul>\r\n                                </div>\r\n                                <div class=\"col-md-2 text-center\" style=\"background: aliceblue\">\r\n                                    <strong style=\"margin-left: 42px\">SUBTOTAL</strong>\r\n                                    <hr>\r\n                                    <ul id=\"friendsList3\"> </ul>\r\n                                </div>\r\n                                <div class=\"col-md-2\"></div>\r\n                            </div>\r\n                            <br>\r\n                            <div style=\"font-weight:bold; margin-left: 77%\">\r\n                                TOTAL : S/. {{monto1}}\r\n                            </div>\r\n                            <hr>\r\n                        </mat-card> -->\r\n                        <table *ngIf=\"ELEMENT_DATA.length != 0\" mat-table [dataSource]=\"dataSource2\" class=\"mat-elevation-z8\" matSort>\r\n\r\n                            <!--- Note that these columns can be defined in any order.\r\n                                  The actual rendered columns are set as a property on the row definition\" -->\r\n                          \r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"producto\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: center; font-weight: bold; font-size: 14px;\"> PRODUCTO </th>\r\n                              <td mat-cell *matCellDef=\"let element\" style=\"font-size: 15px;\"> {{element.producto}} </td>\r\n                            </ng-container>\r\n                          \r\n                            <!-- Name Column -->\r\n                            <ng-container matColumnDef=\"precio\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: center; font-weight: bold; font-size: 14px;\"> PRECIO </th>\r\n                              <td mat-cell *matCellDef=\"let element\" style=\"font-size: 15px;\"> {{element.precio}} </td>\r\n                            </ng-container>\r\n                          \r\n                            <!-- Weight Column -->\r\n                            <ng-container matColumnDef=\"cantidad\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: center; font-weight: bold; font-size: 14px;\"> CANTIDAD </th>\r\n                              <td mat-cell *matCellDef=\"let element\" style=\"font-size: 15px;\"> {{element.cantidad}} </td>\r\n                            </ng-container>\r\n                          \r\n                            <!-- Symbol Column -->\r\n                            <ng-container matColumnDef=\"subtotal\">\r\n                              <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"text-align: center; font-weight: bold; font-size: 14px;\"> SUBTOTAL </th>\r\n                              <td mat-cell *matCellDef=\"let element\" style=\"font-size: 15px;\"> {{element.subtotal}} </td>\r\n                            </ng-container>\r\n                          \r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\r\n                          </table>\r\n                          <hr>\r\n                          <br>    \r\n                          <div *ngIf=\"ELEMENT_DATA.length != 0\" style=\"font-weight:bold; margin-left: 69%\">\r\n                            TOTAL : S/. {{monto1}}\r\n                        </div>\r\n                        <hr>\r\n                    </div>\r\n\r\n                    <!-- <br>\r\n                    <h5 style=\"text-align: center;\">Total: S/. {{monto1}}</h5>\r\n                    <br> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button mat-button color=\"warn\" data-dismiss=\"modal\" (click)=\"cerrar()\">Cerrar</button>\r\n                <button mat-flat-button color=\"primary\" (click)=\"guardarOrdenVenta()\">Guardar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/venta/venta.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/venta/venta.component.ts ***!
  \*****************************************************/
/*! exports provided: VentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaComponent", function() { return VentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/venta.service */ "./src/app/services/venta.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _services_empleados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/empleados.service */ "./src/app/services/empleados.service.ts");
/* harmony import */ var _services_clientes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/clientes.service */ "./src/app/services/clientes.service.ts");
/* harmony import */ var _services_venta_producto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/venta_producto.service */ "./src/app/services/venta_producto.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_matPaginator_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/matPaginator.util */ "./src/app/utils/matPaginator.util.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_14__);
















// import * as jsPDF from 'jspdf';
// import 'jspdf-autotable';
var jsPDF = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
__webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
var VentaComponent = /** @class */ (function () {
    function VentaComponent(_ventaService, _productoService, _empleadoService, _clienteService, _ventaProductoService, formBuilder, _adapter) {
        this._ventaService = _ventaService;
        this._productoService = _productoService;
        this._empleadoService = _empleadoService;
        this._clienteService = _clienteService;
        this._ventaProductoService = _ventaProductoService;
        this.formBuilder = formBuilder;
        this._adapter = _adapter;
        this.options = [];
        this.options2 = [];
        this.options3 = [];
        this.productos = [];
        this.cantidad = [];
        //auxproductos: any []= [];
        //lista: any[] = [];
        this.ordenventas = [];
        this.listarProductosVendidos = [];
        this.listprod = [];
        this.estado = false;
        this.stock = "";
        this.newArray = [];
        this.fecha = new Date();
        this.maxDate = new Date();
        this.ELEMENT_DATA = [];
        this.displayedColumns2 = ['producto', 'precio', 'cantidad', 'subtotal'];
        this.displayedColumns = ['numero_venta', 'cliente', 'solicitante', 'total', 'fecha_vent', 'acciones', 'acciones2'];
    }
    VentaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.tablaLlena = false;
        this.buildForm();
        this.listarOrdenVentas();
        this.listarVentaProductos();
        this.monto = 0;
        this.monto1 = 0;
        // PARA LLENAR EL ARRAY DE PROVEEDORES EN EL AUTOCOMPLETADO
        this._clienteService.listarClientes().subscribe(function (result) {
            _this.options = result.clientes;
            _this.filteredOptions = _this.nuevoOrdenVentaForm.controls['cliente'].valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (value) { return typeof value === 'string' ? value : ""; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (name) { return name ? _this._filter(name) : _this.options.slice(); }));
        });
        // PARA LLENAR EL ARRAY DE SOLICITANTES EN EL AUTOCOMPLETADO
        // this._empleadoService.listarEmpleados().subscribe(result => {
        //   this.options2 = result.empleados;
        //   this.filteredOptions2 = this.nuevoOrdenVentaForm.controls['solicitante'].valueChanges
        //     .pipe(
        //       startWith<string | EmpleadoModel>(''),
        //       map(value => typeof value === 'string' ? value : ""),
        //       map(name => name ? this._filter2(name) : this.options2.slice())
        //     );
        // })
        // PARA LLENAR EL ARRAY DE PRODUCTOS EN EL AUTOCOMPLETADO
        this.llenarProductos();
        $('.mipanel').click(function () {
            setTimeout(function () {
                $('#cdk-overlay-0 .ng-trigger').attr("style", "max-width:420px");
                $('#cdk-overlay-1 .ng-trigger').attr("style", "max-width:420px");
                $('#cdk-overlay-2 .ng-trigger').attr("style", "max-width:420px");
                $('#cdk-overlay-3 .ng-trigger').attr("style", "max-width:420px");
                $('#cdk-overlay-4 .ng-trigger').attr("style", "max-width:420px");
                $('#cdk-overlay-5 .ng-trigger').attr("style", "max-width:420px");
                $('#cdk-overlay-6 .ng-trigger').attr("style", "max-width:420px");
            }, 0);
        });
    };
    VentaComponent.prototype.displayFn = function (user) {
        return user ? user.nombres + ' ' + user.apellidos : undefined;
    };
    VentaComponent.prototype.displayFn2 = function (user) {
        return user ? user.nombres + ' ' + user.apellidos : undefined;
    };
    VentaComponent.prototype.displayFn3 = function (user) {
        return user ? user.nombre : undefined;
    };
    VentaComponent.prototype.exportExcel = function () {
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].table_to_sheet(this.table.nativeElement);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_14__["writeFile"](wb, 'SheetJS.xlsx');
    };
    VentaComponent.prototype.exportTable = function () {
        this.valor = 0;
        if (document.getElementById("fechaInicio").value == '' || document.getElementById("fechaFin").value == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                type: 'error',
                title: 'Fecha vacía',
                text: 'Complete los campos de Fecha Inicio y fecha Fin'
            });
            return;
        }
        else {
            var data = Object.values(this.dataSource);
            data = data[8];
            var fecha1 = document.getElementById("fechaInicio").value;
            var fecha2 = document.getElementById("fechaFin").value;
            var f1 = fecha1.split("/")[2] + "-" + fecha1.split("/")[1] + "-" + fecha1.split("/")[0];
            var f2 = fecha2.split("/")[2] + "-" + fecha2.split("/")[1] + "-" + fecha2.split("/")[0];
            if (new Date(f2) < new Date(f1)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                    type: 'error',
                    title: 'Fechas Incorrectas',
                    text: 'La fecha final es mayor a la fecha Inicial'
                });
                return;
            }
            else {
                for (var i = 0; i < data.length; i++) {
                    var fechaBase = data[i].fecha.split("/")[2] + "-" + data[i].fecha.split("/")[1] + "-" + data[i].fecha.split("/")[0];
                    if (new Date(fechaBase) >= new Date(f1) && new Date(fechaBase) <= new Date(f2)) {
                        //this._ventaService.buscarVenta(data[i]._id).subscribe(
                        //res => {
                        //for (let k = 0; k < res.orden_venta.length; k++) {
                        //console.log(res.venta_producto[k].nombreProd);
                        this.newArray.push({
                            '# DE ORDEN VENTA': data[i]._id,
                            'FECHA DE VENTA': data[i].fecha,
                            'VENDEDOR': data[i].nombresEmp + ' ' + data[i].apellidosEmp,
                            'CLIENTE': data[i].nombres + ' ' + data[i].apellidos,
                            'EMAIL-CLIENTE': data[i].email,
                            'TELEFONO-CLIENTE': data[i].telefono,
                            'TOTAL': 'S/. ' + data[i].total.toFixed(2)
                        });
                        //}
                        //}
                        // )
                    }
                    else {
                        this.valor++;
                    }
                    if (i == data.length - 1 && this.valor != data.length) {
                        //console.log(this.newArray);
                        var ws = xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].json_to_sheet(this.newArray);
                        var wb = xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].book_new();
                        xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].book_append_sheet(wb, ws, 'Book');
                        /* save to file */
                        xlsx__WEBPACK_IMPORTED_MODULE_14__["writeFile"](wb, 'REPORTE_VENTAS.xlsx');
                        this.newArray = [];
                    }
                }
                if (this.valor == data.length) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                        type: 'info',
                        title: 'No hay ventas para este período',
                    });
                }
            }
        }
    };
    VentaComponent.prototype._filter = function (name) {
        var filterValue = name.trim().toLowerCase();
        return this.options.filter(function (option) { return option.nombres.toLowerCase().indexOf(filterValue) != -1 ||
            option.apellidos.toLowerCase().indexOf(filterValue) != -1 ||
            option.dni.toLowerCase().indexOf(filterValue) != -1; });
    };
    // private _filter2(name: string): EmpleadoModel[] {
    //   const filterValue = name.toLowerCase();
    //   return this.options2.filter(option2 => option2.nombres.toLowerCase().indexOf(filterValue) != -1 ||
    //     option2.apellidos.toLowerCase().indexOf(filterValue) != -1 ||
    //     option2.dni.toLowerCase().indexOf(filterValue) != -1);
    // }
    VentaComponent.prototype._filter3 = function (name) {
        var filterValue = name.trim().toLowerCase();
        return this.options3.filter(function (option3) { return option3._id.toString().toLowerCase().indexOf(filterValue) != -1 ||
            option3.nombre.toLowerCase().indexOf(filterValue) != -1; });
    };
    VentaComponent.prototype.buildForm = function () {
        return this.nuevoOrdenVentaForm = this.formBuilder.group({
            cliente: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            solicitante: [JSON.parse(localStorage.getItem("empleado")).nombres + " " + JSON.parse(localStorage.getItem("empleado")).apellidos, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            producto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            fecha_vent: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            total: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
        });
    };
    Object.defineProperty(VentaComponent.prototype, "cliente", {
        get: function () { return this.nuevoOrdenVentaForm.value.cliente; },
        enumerable: true,
        configurable: true
    });
    VentaComponent.prototype.listarOrdenVentas = function () {
        var _this = this;
        this._ventaService.listarOrdenVentas().subscribe(function (res) {
            _this.ordenventas = res.ordenes_ventas;
            if (_this.ordenventas.length == 0) {
                _this.numeroventa = 1;
            }
            else {
                _this.numeroventa = _this.ordenventas[_this.ordenventas.length - 1]._id + 1;
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.ordenes_ventas);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    VentaComponent.prototype.listarVentaProductos = function () {
        var _this = this;
        this._ventaProductoService.listarVentaProductos().subscribe(function (res) {
            if (res.ventas_productos.length == 0) {
                //console.log("Hola");
            }
            else {
                _this.listarProductosVendidos = res.ventas_productos;
            }
        }, function (error) {
            console.log(error);
        });
    };
    VentaComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    VentaComponent.prototype.guardarOrdenVenta = function () {
        var _this = this;
        if (this.tablaLlena == false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                type: 'error',
                title: 'Datos inválidos',
                text: 'Revise nuevamente y llene correctamente los campos.'
            });
            for (var i in this.nuevoOrdenVentaForm.controls)
                this.nuevoOrdenVentaForm.controls[i].markAsTouched();
            return;
        }
        else {
            this.nuevoOrdenVentaForm.controls['fecha_vent'].setValue(this.fecha.getDate() + "/" + (this.fecha.getMonth() + 1) + "/" + this.fecha.getFullYear());
            this.nuevoOrdenVentaForm.controls['total'].setValue(this.monto);
            this.nuevoOrdenVentaForm.controls['producto'].setValue(this.productos);
            this.nuevoOrdenVentaForm.controls['solicitante'].setValue(JSON.parse(localStorage.getItem("empleado"))._id);
            this.nuevoOrdenVentaForm.controls['cliente'].setValue(this.nuevoOrdenVentaForm.value.cliente._id);
            $('#vendedor').val("");
            $('#descripcion').val("");
            // for (let i = 0; i < this.productos.length; i++) {
            //   this._ventaProductoService.nuevoVentaProducto({ venta: this.numeroventa, producto: this.productos[i], cantidad: this.cantidad[i], estado: this.estado }).subscribe(
            //     res => {
            //     },
            //     err => { console.log(err); }
            //   )
            // }
            this._ventaService.nuevoOrdenVenta(this.nuevoOrdenVentaForm.value).subscribe(function (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                    type: 'success',
                    title: 'Orden de venta generada correctamente',
                    text: 'Stock Actualizado',
                    confirmButtonColor: '#3085d6',
                    showConfirmButton: true,
                }).then(function (result) {
                    for (var i = 0; i < _this.productos.length; i++) {
                        _this.actualizarStock(i, _this.cantidad[i]);
                        _this._ventaProductoService.nuevoVentaProducto({ venta: _this.numeroventa, producto: _this.productos[i], cantidad: _this.cantidad[i], estado: _this.estado }).subscribe(function (res) {
                            _this._productoService.listarProductos().subscribe(function (result) {
                                _this.options3 = result.productos;
                            });
                        }, function (err) { console.log(err); });
                    }
                    $('.fila').remove();
                    $('#cantidad').val("");
                    $('li').remove();
                    $('ul hr').remove();
                    _this.ELEMENT_DATA = [];
                    _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.ELEMENT_DATA);
                    $('#modalNuevaOrdenVenta').modal('hide');
                    _this.listarOrdenVentas();
                    _this.listarVentaProductos();
                    _this.nuevoOrdenVentaForm.reset();
                    _this.productos = [];
                    _this.cantidad = [];
                    _this.monto = 0;
                    _this.monto1 = 0;
                    _this.stock = null;
                    _this.buildForm();
                    _this.llenarProductos();
                });
            }, function (err) {
                console.log(err);
            });
        }
    };
    VentaComponent.prototype.mostrarProducto = function () {
        var _this = this;
        if (this.nuevoOrdenVentaForm.invalid || document.querySelector("#cantidad").value == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                type: 'error',
                title: 'Datos inválidos',
                text: 'Revise nuevamente y llene correctamente los campos.'
            });
            for (var i in this.nuevoOrdenVentaForm.controls)
                this.nuevoOrdenVentaForm.controls[i].markAsTouched();
            $('#cantidad').val("");
            return;
        }
        else {
            // if(Number((<HTMLFormElement>document.querySelector("#cantidad")).value) <= 0 || !Number.isInteger(Number((<HTMLFormElement>document.querySelector("#cantidad")).value))){
            //   Swal.fire({
            //     type: 'error',
            //     title: 'Datos inválidos',
            //     text: 'Cantidad debe ser positivo y entero'
            //   })
            //   $('#cantidad').val("");
            //   //$('#cantidad').attr("autofocus","");
            //   return;
            // }
            var formcantidad = document.querySelector("#cantidad").value;
            var cantidad = Number(formcantidad);
            this.producto = this.nuevoOrdenVentaForm.value.producto;
            if (this.producto.stock < cantidad) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                    type: 'error',
                    title: 'Stock insuficiente',
                    confirmButtonColor: '#3085d6',
                    showConfirmButton: true,
                }).then($('#cantidad').val(""));
            }
            else {
                this.stock = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                    type: 'success',
                    title: 'Producto agregado',
                    confirmButtonColor: '#3085d6',
                    showConfirmButton: true,
                }).then(function (result) {
                    _this.tablaLlena = true;
                    _this.productos.push(_this.producto._id);
                    _this.cantidad.push(cantidad);
                    var subtotal = _this.producto.precio * cantidad;
                    var subtotal1 = 'S/. ' + (_this.producto.precio * cantidad).toFixed(2);
                    _this.monto = _this.monto + subtotal;
                    _this.monto1 = _this.monto.toFixed(2);
                    for (var i = 0; i < _this.options3.length; i++) {
                        if (_this.options3[i]._id == _this.producto._id) {
                            _this.options3.splice(i, 1);
                        }
                    }
                    // var table = document.querySelector("#tabla");
                    // var tr = document.createElement("tr");
                    // var td1 = document.createElement("td");
                    // var td2 = document.createElement("td");
                    // var td3 = document.createElement("td");
                    // var td4 = document.createElement("td");
                    // tr.setAttribute("class", "fila");
                    // td1.append(this.producto.nombre);
                    // td2.append(this.producto.descripcion);
                    // td3.append(String(cantidad));
                    // td4.append(String(subtotal1));
                    // tr.appendChild(td1);
                    // tr.appendChild(td2);
                    // tr.appendChild(td3);
                    // tr.appendChild(td4);
                    // table.appendChild(tr);
                    // var ul0 = document.getElementById("friendsList0");
                    // var ul = document.getElementById("friendsList");
                    // var ul2 = document.getElementById("friendsList2");
                    // var ul3 = document.getElementById("friendsList3");
                    // var li0 = document.createElement("li");
                    // var li = document.createElement('li');
                    // var li2 = document.createElement('li');
                    // var li3 = document.createElement('li');
                    // var hr0 = document.createElement('hr');
                    // var hr = document.createElement('hr');
                    // var hr2 = document.createElement('hr');
                    // var hr3 = document.createElement('hr');
                    // li.appendChild(document.createTextNode(this.producto.nombre));
                    // li0.appendChild(document.createTextNode('S/. ' + this.producto.precio.toFixed(2)));
                    // li2.appendChild(document.createTextNode(String(cantidad)));
                    // li3.appendChild(document.createTextNode(String(subtotal1)));
                    _this.ELEMENT_DATA.push({ producto: _this.producto.nombre, precio: 'S/. ' + _this.producto.precio.toFixed(2), cantidad: String(cantidad), subtotal: String(subtotal1) });
                    //console.log(this.ELEMENT_DATA);
                    _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.ELEMENT_DATA);
                    // li2.appendChild(boton);
                    // li3.appendChild(document.createTextNode("Pendiente"));
                    // ul0.appendChild(li0);
                    // ul.appendChild(li);
                    // ul2.appendChild(li2);
                    // ul3.appendChild(li3);
                    // ul0.appendChild(hr0)
                    // ul.appendChild(hr);
                    // ul2.appendChild(hr2);
                    // ul3.appendChild(hr3);
                    // li0.setAttribute("style","list-style: none");
                    // li.setAttribute("style","list-style: none");
                    // li2.setAttribute("style","list-style: none");
                    // li3.setAttribute("style","list-style: none");
                    $('#cantidad').val("");
                    _this.nuevoOrdenVentaForm.controls['producto'].setValue("");
                });
            }
        }
    };
    VentaComponent.prototype.crearReporte = function (id) {
        id--;
        var id2 = id + 1;
        var doc = new jsPDF('l', 'mm', 'a4');
        var prodaux;
        var pdfInMM = 210;
        "";
        var pageCenter = pdfInMM / 2;
        var pageright = 250;
        var pageleft = 30;
        for (var i = 0; i < this.listarProductosVendidos.length; i++) {
            if (this.listarProductosVendidos[i].venta == id + 1) {
                prodaux = this.listarProductosVendidos[i];
                this.listprod.push(prodaux);
            }
        }
        //TITULO
        doc.setFont('Times', 'bold');
        doc.setFontSize(25);
        doc.text('DISTRIBUIDORA ACERO LINO S.A.C.', pageCenter, 22, 'center');
        doc.setFont('Times', 'bold');
        doc.setFontSize(15);
        doc.text('OFRECE LA VENTA DE MATERIALES DE CONSTRUCCIÓN', pageCenter, 30, 'center');
        doc.text('ELÉCTRICOS, TUBOS, PVC-SANITARIOS EN GENERAL', pageCenter, 35, 'center');
        doc.setFont('Times');
        doc.setFontSize(10);
        doc.text('Email: ferreteria_lino@hotmail.com', pageCenter, 40, 'center');
        doc.text('AV. 1 MZ. A LT. 5 A.V. LA PLANICIE DE LA ERA - ATE - LIMA - LIMA', pageCenter, 47, 'center');
        doc.text('SUCURSAL: AV. ARÉVALO Nº 845 MURUHUAY - SANTA ROSA DE SACCO - YAULI - JUNIN', pageCenter, 52, 'center');
        doc.text('Telf: 7232591 RPM: #941969611 RPC: 980520888', pageCenter, 57, 'center');
        doc.text('__________________________________________________________________________________________', pageleft, 60, 'left');
        //DATOS cliente
        doc.setFont('Times', 'bold');
        doc.setFontSize(12);
        doc.text('Fecha: ' + this.ordenventas[id].fecha + '  ', pageleft, 67, 'left');
        doc.text('D.N.I:  ' + this.ordenventas[id].dni, 80, 67, 'left');
        doc.text('Señor(es): ' + this.ordenventas[id].nombres + ' ' + this.ordenventas[id].apellidos, pageleft, 72, 'left');
        doc.text('Direccion: ' + this.ordenventas[id].direccion, pageleft, 77, 'left');
        doc.text('__________________________________________________________________________________________________________________', pageleft, 81, 'left');
        //COLUMNA DEL RUC
        doc.autoTable({
            startY: 17,
            margin: { top: 0, right: 23, bottom: 0, left: 193 },
            headStyles: {
                fillColor: [130, 193, 221],
                textColor: [0, 0, 0],
                halign: 'center',
                fontSize: 22,
                font: 'Helvetica',
                fontStyle: 'bold',
                lineColor: [0, 0, 0],
                lineWidth: 0.5
            },
            bodyStyles: {
                fillColor: [242, 245, 247],
                textColor: [0, 0, 0],
                halign: 'center',
                fontSize: 20,
                font: 'Helvetica',
                fontStyle: 'bold',
                lineColor: [0, 0, 0],
                lineWidth: 0.5
            },
            head: [['R.U.C 20601473047 ']],
            body: [['Orden de Venta'], ['Nº ' + this.ordenventas[id]._id]]
        });
        //tabla producto
        doc.autoTable({
            startY: 84,
            headStyles: {
                fillColor: [130, 193, 221],
                textColor: [0, 0, 0],
                halign: 'center',
                fontSize: 13,
                font: 'Helvetica',
                fontStyle: 'bold',
                lineColor: [0, 0, 0],
                lineWidth: 0.2
            },
            bodyStyles: {
                fillColor: [242, 245, 247],
                textColor: [0, 0, 0],
                halign: 'center',
                fontSize: 11,
                font: 'Helvetica',
                fontStyle: '',
                lineColor: [0, 0, 0],
                lineWidth: 0.2
            },
            head: this.headRows(),
            body: this.bodyRows(this.listprod.length)
        });
        doc.setFontSize(18);
        doc.text('TOTAL : S/. ' + this.ordenventas[id].total.toFixed(2), pageright, 185, 'center');
        // Save the PD
        doc.setFontSize(13);
        doc.text('La venta fue realizada por: ' + this.ordenventas[id].nombresEmp + ' ' + this.ordenventas[id].apellidosEmp, pageleft, 198, 'left');
        doc.save('Orden de Venta ' + id2 + '.pdf');
        this.limpiar();
    };
    VentaComponent.prototype.headRows = function () {
        return [{
                Cantidad: 'CANTIDAD',
                Descripcion: 'DESCRIPCION',
                Unitario: 'P. Unitario',
                Importe: 'IMPORTE'
            }];
    };
    VentaComponent.prototype.bodyRows = function (rowCount) {
        var aux = [];
        for (var j = 0; j < rowCount; j++) {
            aux.push({
                Cantidad: this.listprod[j].cantidad,
                Descripcion: this.listprod[j].nombreProd + ' - ' + this.listprod[j].descripcion,
                Unitario: 'S/. ' + this.listprod[j].precio.toFixed(2),
                Importe: 'S/. ' + (this.listprod[j].cantidad * this.listprod[j].precio).toFixed(2),
            });
        }
        return aux;
    };
    VentaComponent.prototype.exportarVentas = function () {
        this._ventaService.listarOrdenVentas().subscribe(function (res) {
            var data = res.ordenes_ventas;
            var newArray = [];
            for (var i = 0; i < data.length; i++) {
                newArray.push({
                    '# DE ORDEN': data[i]._id,
                    'FECHA DE VENTA': data[i].fecha,
                    'VENDEDOR': data[i].nombresEmp + ' ' + data[i].apellidosEmp,
                    'CLIENTE': data[i].nombres + ' ' + data[i].apellidos,
                    'EMAIL-CLIENTE': data[i].email,
                    'TELEFONO-CLIENTE': data[i].telefono,
                    'TOTAL': 'S/. ' + data[i].total.toFixed(2)
                });
                if (i == data.length - 1) {
                    var ws = xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].json_to_sheet(newArray);
                    var wb = xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].book_new();
                    xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].book_append_sheet(wb, ws, 'Book');
                    /* save to file */
                    xlsx__WEBPACK_IMPORTED_MODULE_14__["writeFile"](wb, 'REPORTE_VENTAS_GENERALES.xlsx');
                }
            }
        });
    };
    VentaComponent.prototype.verStock = function () {
        if (this.nuevoOrdenVentaForm.value.producto)
            this.stock = this.nuevoOrdenVentaForm.value.producto.stock;
    };
    VentaComponent.prototype.actualizarStock = function (i, cantidad) {
        var _this = this;
        this._productoService.buscarProducto(this.productos[i]).subscribe(function (res) {
            var producto = res.producto[0];
            var nuevo_stock = producto.stock - cantidad;
            _this._productoService.actualizarProducto(producto._id, { nombre: producto.nombre, descripcion: producto.descripcion, stock: nuevo_stock, precio: producto.precio }).subscribe(function (res) {
            });
        });
    };
    VentaComponent.prototype.cerrar = function () {
        this.nuevoOrdenVentaForm.reset();
        this.productos = [];
        this.cantidad = [];
        this.monto = 0;
        this.monto1 = 0;
        this.stock = "";
        $('.fila').remove();
        $('#cantidad').val("");
        this.buildForm();
        $('li').remove();
        $('ul hr').remove();
        this.ELEMENT_DATA = [];
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        this.llenarProductos();
    };
    VentaComponent.prototype.limpiar = function () {
        this.listprod = [];
        this.listarProductosVendidos = [];
        this.ordenventas = [];
        this.listarOrdenVentas();
        this.listarVentaProductos();
    };
    VentaComponent.prototype.llenarProductos = function () {
        var _this = this;
        this._productoService.listarProductos().subscribe(function (result) {
            _this.options3 = result.productos;
            _this.filteredOptions3 = _this.nuevoOrdenVentaForm.controls['producto'].valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (value) { return typeof value === 'string' ? value : ""; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (name) { return name ? _this._filter3(name) : _this.options3.slice(); }));
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TABLE'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VentaComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], VentaComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], VentaComponent.prototype, "sort", void 0);
    VentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-venta',
            template: __webpack_require__(/*! ./venta.component.html */ "./src/app/components/venta/venta.component.html"),
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], useValue: 'es-ES' },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MAT_MOMENT_DATE_FORMATS"] }, _services_venta_producto_service__WEBPACK_IMPORTED_MODULE_9__["VentaProductoService"], _services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_6__["ProductoService"], _services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"], _services_empleados_service__WEBPACK_IMPORTED_MODULE_7__["EmpleadoService"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorIntl"], useClass: _utils_matPaginator_util__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorIntlCro"] },],
            styles: [__webpack_require__(/*! ./venta.component.css */ "./src/app/components/venta/venta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"],
            _services_producto_service__WEBPACK_IMPORTED_MODULE_6__["ProductoService"],
            _services_empleados_service__WEBPACK_IMPORTED_MODULE_7__["EmpleadoService"],
            _services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"],
            _services_venta_producto_service__WEBPACK_IMPORTED_MODULE_9__["VentaProductoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"]])
    ], VentaComponent);
    return VentaComponent;
}());



/***/ }),

/***/ "./src/app/components/venta/venta.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/venta/venta.module.ts ***!
  \**************************************************/
/*! exports provided: VentaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaModule", function() { return VentaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _venta_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venta-routing.module */ "./src/app/components/venta/venta-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core-angular-material/material.module */ "./src/app/core-angular-material/material.module.ts");
/* harmony import */ var _venta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./venta.component */ "./src/app/components/venta/venta.component.ts");
/* harmony import */ var _venta_detail_venta_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../venta-detail/venta-detail.component */ "./src/app/components/venta-detail/venta-detail.component.ts");








var VentaModule = /** @class */ (function () {
    function VentaModule() {
    }
    VentaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _venta_component__WEBPACK_IMPORTED_MODULE_6__["VentaComponent"],
                _venta_detail_venta_detail_component__WEBPACK_IMPORTED_MODULE_7__["VentaDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _venta_routing_module__WEBPACK_IMPORTED_MODULE_3__["VentaRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _core_angular_material_material_module__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"]
            ]
        })
    ], VentaModule);
    return VentaModule;
}());



/***/ }),

/***/ "./src/app/services/venta.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/venta.service.ts ***!
  \*******************************************/
/*! exports provided: VentaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaService", function() { return VentaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var VentaService = /** @class */ (function () {
    function VentaService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
    }
    VentaService.prototype.listarOrdenVentas = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/orden_ventas', { headers: headers });
    };
    VentaService.prototype.nuevoOrdenVenta = function (form) {
        var body = JSON.stringify(form);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + '/orden_venta', body, { headers: headers });
    };
    VentaService.prototype.buscarVenta = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/orden_venta/' + id, { headers: headers });
    };
    VentaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VentaService);
    return VentaService;
}());



/***/ })

}]);
//# sourceMappingURL=components-venta-venta-module.js.map