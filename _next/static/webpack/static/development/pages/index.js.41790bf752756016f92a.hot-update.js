webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Evento.js":
/*!******************************!*\
  !*** ./components/Evento.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/fuentesld/Sandbox/react/bitcoin-app/components/Evento.js";


var Evento = function Evento() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, "hola");
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ }),

/***/ "./components/Eventos.js":
/*!*******************************!*\
  !*** ./components/Eventos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Evento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Evento */ "./components/Evento.js");

var _jsxFileName = "/Users/fuentesld/Sandbox/react/bitcoin-app/components/Eventos.js";



var Eventos = function Eventos(_ref) {
  var props = _ref.props;
  eventosId = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.eventos);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "listgroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, eventosid.map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Evento__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      info: props.eventos[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.41790bf752756016f92a.hot-update.js.map