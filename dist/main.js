/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #ffffff;
  --secondary-color: #451757;
  --critical-color: #9e5651;
  --urgent-color: #a78b54;
  --routine-color: #4c7a4a;
  --text-color: #000000;
  --nav-text-color: #dfa553;
  --form-color: #dff3e4;
  --deleteBtn-border: rgb(201, 97, 97);
}
* {
  padding: 0px;
  margin: 0px;
  min-width: 0;
}
.body {
  background-color: black;
}
button {
  width: 70px;
  height: 30px;
  border-radius: 8px;
  flex-shrink: 0;
  border-width: 2px;
  border-color: var(--nav-text-color);
}
.deleteBtn {
  border-radius: 8px;
  border-width: 2px;
  width: 20px;
  height: 20px;
  border-color: var(--deleteBtn-border);
  background-color: rgb(190, 81, 81);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: absolute;
  outline: inherit;
  top: 8px;
  right: 8px;
}
.mainWrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.navWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 6px;
  width: 15%;
  background-color: var(--secondary-color);
  color: var(--nav-text-color);
}
.NavProjPanelWrapper {
  gap: 6px;
}
.projBodyWrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85%;
  background-color: var(--primary-color);
}
.taskWrapper,
.projWrapper {
  display: flex;
  gap: 6px;
  color: var(--text-color);
}
.projWrapper {
  flex-direction: column;
  position: relative;
  min-height: 150px;
  width: 100%;
  justify-content: space-between;
}
.projItem {
  font-size: 24px;
}
.taskWrapper {
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  border-radius: 12px;
  background-color: lightslategray;
  margin-left: 16px;
}
.taskName {
}

.taskItem {
  width: 100px;
  height: 25px;
}
.taskDesc {
  width: 50%;
}
.taskDue {
  width: 15%;
}
.taskCircle {
  width: 25px;
  height: 25px;
  margin-left: 16px;
  border-radius: 50%;
}
.taskCheckMark {
  height: 20px;
  width: 20px;
  opacity: 50%;
}
.taskCheckMark:hover {
  opacity: 100%;
}
.formWrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text-color);
  width: 400px;
  border-radius: 8px;
  background-color: var(--form-color);
  border-width: 2px;
  border-color: var(--text-color);
  border-style: solid;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  box-shadow: rgba(0, 0, 0, 0.89) 0px 5px 15px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px;
  border-radius: 0px;
}
.addFormName {
  height: 50px;
  font-size: 20px;
  border-style: none;
  background-color: var(--form-color);
}
.addFormDesc {
  height: 40px;
  font-size: 12px;
  border-style: none;
  display: inline-block;
  background-color: var(--form-color);
}
.addFormDate {
  border-radius: 4px;
  height: 20px;
  width: 150px;
  border-style: solid;
  border-width: 1px;
  background-color: var(--form-color);
}
.addFormPrio {
  border-radius: 4px;
  height: 20px;
  width: 150px;
  border-style: solid;
  border-width: 1px;
  background-color: var(--form-color);
}
.dateFormWrapper {
  display: flex;
  gap: 8px;
}
.Critical {
  background-color: var(--critical-color);
}
.Urgent {
  background-color: var(--urgent-color);
}
.Routine {
  background-color: var(--routine-color);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,uBAAuB;EACvB,wBAAwB;EACxB,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,oCAAoC;AACtC;AACA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,mCAAmC;AACrC;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,kCAAkC;EAClC;uCACqC;EACrC,kBAAkB;EAClB,gBAAgB;EAChB,QAAQ;EACR,UAAU;AACZ;AACA;EACE,aAAa;EACb,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,QAAQ;EACR,UAAU;EACV,wCAAwC;EACxC,4BAA4B;AAC9B;AACA;EACE,QAAQ;AACV;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,UAAU;EACV,sCAAsC;AACxC;AACA;;EAEE,aAAa;EACb,QAAQ;EACR,wBAAwB;AAC1B;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,8BAA8B;AAChC;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,gCAAgC;EAChC,iBAAiB;AACnB;AACA;AACA;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,iBAAiB;EACjB,+BAA+B;EAC/B,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,4CAA4C;AAC9C;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,mCAAmC;AACrC;AACA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,mCAAmC;AACrC;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,mCAAmC;AACrC;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,uCAAuC;AACzC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,sCAAsC;AACxC","sourcesContent":[":root {\n  --primary-color: #ffffff;\n  --secondary-color: #451757;\n  --critical-color: #9e5651;\n  --urgent-color: #a78b54;\n  --routine-color: #4c7a4a;\n  --text-color: #000000;\n  --nav-text-color: #dfa553;\n  --form-color: #dff3e4;\n  --deleteBtn-border: rgb(201, 97, 97);\n}\n* {\n  padding: 0px;\n  margin: 0px;\n  min-width: 0;\n}\n.body {\n  background-color: black;\n}\nbutton {\n  width: 70px;\n  height: 30px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  border-width: 2px;\n  border-color: var(--nav-text-color);\n}\n.deleteBtn {\n  border-radius: 8px;\n  border-width: 2px;\n  width: 20px;\n  height: 20px;\n  border-color: var(--deleteBtn-border);\n  background-color: rgb(190, 81, 81);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  position: absolute;\n  outline: inherit;\n  top: 8px;\n  right: 8px;\n}\n.mainWrapper {\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n}\n.navWrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 6px;\n  width: 15%;\n  background-color: var(--secondary-color);\n  color: var(--nav-text-color);\n}\n.NavProjPanelWrapper {\n  gap: 6px;\n}\n.projBodyWrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 85%;\n  background-color: var(--primary-color);\n}\n.taskWrapper,\n.projWrapper {\n  display: flex;\n  gap: 6px;\n  color: var(--text-color);\n}\n.projWrapper {\n  flex-direction: column;\n  position: relative;\n  min-height: 150px;\n  width: 100%;\n  justify-content: space-between;\n}\n.projItem {\n  font-size: 24px;\n}\n.taskWrapper {\n  position: relative;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 100px;\n  border-radius: 12px;\n  background-color: lightslategray;\n  margin-left: 16px;\n}\n.taskName {\n}\n\n.taskItem {\n  width: 100px;\n  height: 25px;\n}\n.taskDesc {\n  width: 50%;\n}\n.taskDue {\n  width: 15%;\n}\n.taskCircle {\n  width: 25px;\n  height: 25px;\n  margin-left: 16px;\n  border-radius: 50%;\n}\n.taskCheckMark {\n  height: 20px;\n  width: 20px;\n  opacity: 50%;\n}\n.taskCheckMark:hover {\n  opacity: 100%;\n}\n.formWrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  color: var(--text-color);\n  width: 400px;\n  border-radius: 8px;\n  background-color: var(--form-color);\n  border-width: 2px;\n  border-color: var(--text-color);\n  border-style: solid;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  box-shadow: rgba(0, 0, 0, 0.89) 0px 5px 15px;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 12px;\n  border-radius: 0px;\n}\n.addFormName {\n  height: 50px;\n  font-size: 20px;\n  border-style: none;\n  background-color: var(--form-color);\n}\n.addFormDesc {\n  height: 40px;\n  font-size: 12px;\n  border-style: none;\n  display: inline-block;\n  background-color: var(--form-color);\n}\n.addFormDate {\n  border-radius: 4px;\n  height: 20px;\n  width: 150px;\n  border-style: solid;\n  border-width: 1px;\n  background-color: var(--form-color);\n}\n.addFormPrio {\n  border-radius: 4px;\n  height: 20px;\n  width: 150px;\n  border-style: solid;\n  border-width: 1px;\n  background-color: var(--form-color);\n}\n.dateFormWrapper {\n  display: flex;\n  gap: 8px;\n}\n.Critical {\n  background-color: var(--critical-color);\n}\n.Urgent {\n  background-color: var(--urgent-color);\n}\n.Routine {\n  background-color: var(--routine-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DomManip.js":
/*!*************************!*\
  !*** ./src/DomManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomController: () => (/* binding */ DomController)
/* harmony export */ });
/* harmony import */ var _taskModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModule.js */ "./src/taskModule.js");
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectModule.js */ "./src/projectModule.js");
/* harmony import */ var _images_Checkmark_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Checkmark.png */ "./src/images/Checkmark.png");
/* harmony import */ var _localStorageHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorageHandler.js */ "./src/localStorageHandler.js");





//
//Controls the dom for the project
//
class DomController {
  constructor() {
    this.storageHandler = new _localStorageHandler_js__WEBPACK_IMPORTED_MODULE_3__.StorageHandler();
  }
  //
  //Handle the setup of the page pre-project injection
  //
  GenerateDomStructure(defaultProj) {
    const mainProjPanelWrapper = document.createElement("div");
    mainProjPanelWrapper.classList.add("mainWrapper");
    document.body.appendChild(mainProjPanelWrapper);

    const loadedProjs = this.storageHandler.loadFromLocalStorage();

    this.GenerateNavPanel(mainProjPanelWrapper, loadedProjs);
    this.GenerateBodyPanel(mainProjPanelWrapper);
    this.GenerateTodayPanel(loadedProjs);
  }

  GenerateNavPanel(mainWrapper, loadedProjs) {
    //
    // Handle the generation of the nav panel and all its components.
    //
    const navPanelWrapper = document.createElement("div");
    navPanelWrapper.classList.add("nav");
    navPanelWrapper.classList.add("navWrapper");

    //Title and time panel

    const navPanelMainTitle = document.createElement("div");
    navPanelMainTitle.classList.add("navTitle", "navItem");
    navPanelMainTitle.textContent = "Today:";
    navPanelWrapper.appendChild(navPanelMainTitle);

    navPanelMainTitle.addEventListener("click", () =>
      this.GenerateTodayPanel(loadedProjs)
    );

    // const navPanelMainDate = document.createElement("div");
    // navPanelMainDate.classList.add("navDate", "navItem");

    // const currentDate = new Date();
    // const formattedDate = format(currentDate, "yyyy-MM-dd");
    // navPanelMainDate.textContent = formattedDate;
    navPanelMainTitle.appendChild(navPanelMainDate);

    //Project panels

    const navNewProjectPanelWrapper = document.createElement("div");
    navNewProjectPanelWrapper.classList.add("navNewProjectPanelWrapper");
    navNewProjectPanelWrapper.textContent = "Add New Project";
    //this.GenerateAddButton(navNewProjectPanelWrapper);
    navNewProjectPanelWrapper.addEventListener("click", () =>
      this.GenerateAddForm(mainWrapper)
    );

    navPanelWrapper.appendChild(navNewProjectPanelWrapper);

    const navProjectPanelWrapper = document.createElement("div");
    navProjectPanelWrapper.classList.add("NavProjPanelWrapper");
    navPanelWrapper.appendChild(navProjectPanelWrapper);

    //Options panel > includes help and settings

    const navOptionsWrapper = document.createElement("div");
    navOptionsWrapper.classList.add("optionsWrapper");

    //Generate the setting banner in the nav bar

    const navSettingsWrapper = document.createElement("div");
    navSettingsWrapper.classList.add("navItem");

    const navSettings = document.createElement("div");
    navSettings.textContent = "Settings";
    navSettingsWrapper.appendChild(navSettings);

    const navSettingsIcon = document.createElement("img");
    navSettingsIcon.src = "";
    navSettingsIcon.classList.add("navIcon");
    navSettingsWrapper.appendChild(navSettingsIcon);

    navOptionsWrapper.appendChild(navSettingsWrapper);

    //Generate the help banner in the nav bar

    const navHelpWrapper = document.createElement("div");
    navHelpWrapper.classList.add("navItem");

    const navHelp = document.createElement("div");
    navHelp.textContent = "Help";
    navHelpWrapper.appendChild(navHelp);

    const navHelpIcon = document.createElement("img");
    navHelpIcon.src = "";
    navHelpIcon.classList.add("navIcon");
    navHelpWrapper.appendChild(navHelpIcon);

    navOptionsWrapper.appendChild(navHelpWrapper);

    navPanelWrapper.appendChild(navOptionsWrapper);

    mainWrapper.appendChild(navPanelWrapper);

    //Load the saved projects, and add them to the nav bar

    this.LoadProjsToNavPanel(loadedProjs);
  }

  LoadProjsToNavPanel(loadedProjs) {
    if (loadedProjs) {
      loadedProjs.forEach((proj) => {
        this.AddNewNavPanelProj(proj);
      });
    }
  }

  AddNewNavPanelProj(project) {
    //This eventually should allow you to open specific projects onclick.
    const navProjectPanelWrapper = document.querySelector(
      ".NavProjPanelWrapper"
    );
    const ExistsInNav = navProjectPanelWrapper.querySelector(
      ".proj" + project.projectId
    );
    if (!ExistsInNav) {
      const navDefProj = document.createElement("div");

      navDefProj.textContent = project.projectName;
      navDefProj.classList.add(
        "navItem",
        "proj" + project.projectId,
        project.projectPrio
      );

      navDefProj.addEventListener("click", () => {
        const bodyProjWrapper = document.querySelector(".projBodyWrapper");
        this.GenerateProjectPanel(bodyProjWrapper, project);
      });

      navProjectPanelWrapper.appendChild(navDefProj);
    }
  }

  DeleteNavPanelProj(projectName) {
    // const navProjectPanelWrapper = document.querySelector(
    //   ".NavProjPanelWrapper"
    // );
    const navProjectToDelete = document.querySelector(
      `.${projectName}.navItem`
    );
    if (navProjectToDelete) {
      navProjectToDelete.parentNode.removeChild(navProjectToDelete);
    }
  }

  GenerateBodyPanel(mainWrapper) {
    const AddNewProjWrapper = document.createElement("div");
    AddNewProjWrapper.classList.add("projBodyWrapper");
    mainWrapper.appendChild(AddNewProjWrapper);
  }

  GenerateTodayPanel(projectStorage) {
    const mainWrapper = document.querySelector(".projBodyWrapper");
    if (!projectStorage || mainWrapper.querySelector(".todayWrapper")) {
      //this.GenerateSplashPanel();
    } else {
      const projWrapper = mainWrapper.querySelector(".projWrapper");
      if (projWrapper) {
        this.RemovePanel(projWrapper);
      }
      const todayWrapper = document.createElement("div");
      todayWrapper.classList.add("todayWrapper");
      const today = new Date();
      //
      projectStorage.forEach((proj) => {
        if (proj.projectTasks.length > 0) {
          //
          //Check if there are tasks due today
          //
          const tasksDueToday = proj.projectTasks.some((task) => {
            return (
              task.dueDate.getDate() === today.getDate() &&
              task.dueDate.getMonth() === today.getMonth() &&
              task.dueDate.getFullYear() === today.getFullYear()
            );
          });
          //Add a project header
          if (tasksDueToday) {
            const projName = document.createElement("div");
            projName.textContent = proj.projectName;
            projName.classList.add("projName", "projItem");
            todayWrapper.appendChild(projName);
            proj.projectTasks.forEach((task) => {
              if (
                task.dueDate.getDate() === today.getDate() &&
                task.dueDate.getMonth() === today.getMonth() &&
                task.dueDate.getFullYear() === today.getFullYear()
              ) {
                const taskWrapper = document.createElement("div");
                this.GenerateTaskPanel(taskWrapper, task);
                todayWrapper.appendChild(taskWrapper);
              }
            });
          }
        }
      });
      mainWrapper.appendChild(todayWrapper);
    }
  }

  GenerateProjectPanel(Wrapper, Project) {
    const projOpen = document.querySelector(".projWrapper");
    const todayWrapperOpen = document.querySelector(".todayWrapper");
    if (todayWrapperOpen) {
      this.RemovePanel(todayWrapperOpen);
    }
    if (!projOpen) {
      const projWrapper = document.createElement("div");
      projWrapper.classList.add("projWrapper");
      projWrapper.setAttribute("data-project-id", Project.projectId);
      Project.DomElement = projWrapper;

      const projName = document.createElement("div");
      projName.textContent = Project.projectName;
      projName.classList.add("projName", "projItem");
      projWrapper.appendChild(projName);

      const projDate = document.createElement("div");
      projDate.textContent =
        "Due Date: " + Project.projectDue.toLocaleDateString();
      projDate.classList.add("projDate", "projItem");
      projWrapper.appendChild(projDate);

      const projectDesc = document.createElement("div");
      projectDesc.textContent = Project.projectDesc;
      projectDesc.classList.add("projDesc", "projItem");
      projWrapper.appendChild(projectDesc);

      const projButtonWrapper = document.createElement("div");

      this.GenerateAddButton(projButtonWrapper, Project);
      this.GenerateDeleteButton(projWrapper);

      projWrapper.appendChild(projButtonWrapper);

      if (Project.projectTasks.length === 0) {
      } else {
        Project.projectTasks.forEach((element) => {
          const taskWrapper = document.createElement("div");
          this.GenerateTaskPanel(taskWrapper, element);

          projWrapper.appendChild(taskWrapper);
        });
      }
      this.AddNewNavPanelProj(Project);

      Wrapper.appendChild(projWrapper);
    }
  }

  // extractProjectInfo(projectWrapper) {
  //   // Retrieve project name from the data attribute
  //   const projectName = projectWrapper.getAttribute("data-project-name");

  //   // Find the Project instance associated with the project name
  //   return projects.find((project) => project.name === projectName);
  // }

  GenerateTaskPanel(Wrapper, task) {
    //
    //Given a task and a wrapper, generate a panel that handles info about the task.
    //
    Wrapper.classList.add("taskWrapper");

    this.GenerateDeleteButton(Wrapper, task.taskPrio);

    const taskName = document.createElement("div");
    taskName.textContent = task.taskName;
    taskName.classList.add("taskName", "taskItem");

    const taskDate = document.createElement("div");
    taskDate.textContent = task.taskDue.toLocaleDateString();
    taskDate.classList.add("taskDate", "taskItem");

    const taskDesc = document.createElement("div");
    taskDesc.textContent = task.taskDesc;
    taskDesc.classList.add("taskDesc", "taskItem");

    Wrapper.appendChild(taskName);
    Wrapper.appendChild(taskDate);
    Wrapper.appendChild(taskDesc);
  }

  AddNewTask(name, description, dueDate, priority, project) {
    // Create a new Task object
    const newTask = new _taskModule_js__WEBPACK_IMPORTED_MODULE_0__.Task(name, description, dueDate, priority, project);

    // Generate a new task panel for the new task
    const taskWrapper = document.createElement("div");
    this.GenerateTaskPanel(taskWrapper, newTask);

    // Append the task panel to the appropriate location in the DOM
    project.tasks.push(newTask);
    const projWrapper = document.querySelector(
      `[data-project-id="${project.id}"]`
    );

    this.storageHandler.saveToLocalStorage(project);

    //Check to see if we need to enlarge the project container
    //this.ModifyTaskHeight(projWrapper, project);

    projWrapper.appendChild(taskWrapper);
  }

  AddNewProject(id, name, description, dueDate, priority) {
    // Create a new proj object
    const newProject = new _projectModule_js__WEBPACK_IMPORTED_MODULE_1__.Project(id, name, description, dueDate, priority);
    this.storageHandler.saveToLocalStorage(newProject);
    const projWrapper = document.querySelector(".projBodyWrapper");

    this.GenerateProjectPanel(projWrapper, newProject);
  }

  GenerateDeleteButton(wrapper, taskPrio) {
    const Delete = document.createElement("button");

    Delete.addEventListener("click", () => this.RemovePanel(wrapper));

    if (taskPrio) {
      Delete.classList.add("taskCircle", taskPrio, "taskItem");
      const deleteCheckMark = new Image();
      deleteCheckMark.classList.add("taskCheckMark");
      deleteCheckMark.src = _images_Checkmark_png__WEBPACK_IMPORTED_MODULE_2__;
      Delete.appendChild(deleteCheckMark);
    } else {
      Delete.classList.add("deleteBtn");
      Delete.textContent = " X ";
    }

    wrapper.appendChild(Delete);
  }

  GenerateAddButton(wrapper, project) {
    const Add = document.createElement("button");
    Add.classList.add("addBtn");
    Add.textContent = " + ";
    Add.addEventListener("click", () => this.GenerateAddForm(wrapper, project));

    wrapper.appendChild(Add);
  }

  // Remove a panel and all its children from the DOM
  //This should be checking whats the closest proj/task panel and deleting down
  RemovePanel(panel) {
    if (!panel) return;
    if (panel.classList.contains("projWrapper")) {
      // Call the function to delete the corresponding navigation panel
      this.DeleteNavPanelProj("proj" + panel.dataset.projectId);
      this.storageHandler.removeProjectFromLocalStorage(
        panel.dataset.projectId
      );
    }
    while (panel.firstChild) {
      panel.removeChild(panel.firstChild);
    }
    panel.parentNode.removeChild(panel);
  }

  //Generate a form that allows you to add a new project, or task
  //should have a submit button at the bottom, and a close button.
  GenerateAddForm(wrapper, project) {
    const addFormOpen = document.querySelector(".formWrapper");

    if (!addFormOpen) {
      const formWrapper = document.createElement("div");
      formWrapper.classList.add("formWrapper");

      const formHeaderWrapper = document.createElement("div");
      formHeaderWrapper.classList.add("formHeaderWrapper");

      // const title = document.createElement("div");
      // title.textContent = "Add a new task or project";
      // formHeaderWrapper.appendChild(title);

      this.GenerateDeleteButton(formWrapper);

      formWrapper.appendChild(formHeaderWrapper);

      const form = document.createElement("form");

      const inputName = document.createElement("input");
      inputName.classList.add("addFormName");
      inputName.setAttribute("type", "text");
      inputName.setAttribute("name", "textInput");
      inputName.setAttribute("placeholder", "Enter title of project or task");
      form.appendChild(inputName);

      const inputDesc = document.createElement("input");
      inputDesc.classList.add("addFormDesc");
      inputDesc.setAttribute("type", "text");
      inputDesc.setAttribute("desc", "textInput");
      inputDesc.setAttribute("placeholder", "Enter description");
      form.appendChild(inputDesc);

      const dateFormWrapper = document.createElement("div");
      dateFormWrapper.classList.add("dateFormWrapper");

      const inputDate = document.createElement("input");
      inputDate.classList.add("addFormDate");
      inputDate.setAttribute("type", "date");
      inputDate.setAttribute("name", "dateInput");
      dateFormWrapper.appendChild(inputDate);

      const inputPrio = document.createElement("select");
      inputPrio.classList.add("addFormPrio");
      inputPrio.name = "priority";
      const options = ["Critical", "Urgent", "Routine"];

      options.forEach((optionText) => {
        const optionElement = document.createElement("option");
        optionElement.textContent = optionText;
        inputPrio.appendChild(optionElement);
      });
      dateFormWrapper.appendChild(inputPrio);
      form.appendChild(dateFormWrapper);

      const submitButton = document.createElement("button");
      submitButton.textContent = "Submit";
      form.appendChild(submitButton);

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Retrieve input values
        const name = inputName.value;
        const description = inputDesc.value;
        const date = inputDate.value;
        const priority = inputPrio.value;

        this.RemovePanel(formWrapper);
        if (!project) {
          //Generate the project with a random ID number
          this.AddNewProject(
            Math.floor(Math.random() * 999999999),
            name,
            description,
            date,
            priority
          );
        } else {
          this.AddNewTask(name, description, date, priority, project);
        }
      });

      formWrapper.appendChild(form);

      wrapper.appendChild(formWrapper);
    }
  }

  GenerateOnEntry(defaultProj) {
    this.GenerateDomStructure(defaultProj);
  }
}


/***/ }),

/***/ "./src/localStorageHandler.js":
/*!************************************!*\
  !*** ./src/localStorageHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageHandler: () => (/* binding */ StorageHandler)
/* harmony export */ });
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModule.js */ "./src/projectModule.js");
/* harmony import */ var _taskModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskModule.js */ "./src/taskModule.js");
// Import necessary functions and classes



class StorageHandler {
  // Function to save projects and tasks to local storage

  saveToLocalStorage(project) {
    let projectsData = localStorage.getItem("projects");
    if (!projectsData) {
      projectsData = {};
    } else {
      projectsData = JSON.parse(projectsData);
    }

    // Serialize tasks before saving
    const serializedTasks = project.tasks.map((task) => ({
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
    }));

    // Add serialized tasks to the project object
    const serializedProject = {
      id: project.id,
      name: project.name,
      description: project.description,
      dueDate: project.dueDate,
      priority: project.priority,
      tasks: serializedTasks, // Save serialized tasks
    };

    projectsData[project.projectId] = serializedProject;

    localStorage.setItem("projects", JSON.stringify(projectsData));
  }

  // Function to retrieve projects and tasks from local storage
  loadFromLocalStorage() {
    const projectsData = localStorage.getItem("projects");
    if (projectsData) {
      const projects = JSON.parse(projectsData);
      if (projects) {
        const projectObjects = Object.values(projects).map((project) => {
          const tasks = project.tasks.map((taskData) => {
            return new _taskModule_js__WEBPACK_IMPORTED_MODULE_1__.Task(
              taskData.name,
              taskData.description,
              new Date(taskData.dueDate),
              taskData.priority,
              project
            );
          });
          return new _projectModule_js__WEBPACK_IMPORTED_MODULE_0__.Project(
            project.id,
            project.name,
            project.description,
            new Date(project.dueDate),
            project.priority,
            tasks
          );
        });
        return projectObjects;
      } else {
        console.error("Projects data in local storage is invalid");
        return [];
      }
    }
  }

  removeProjectFromLocalStorage(projectId) {
    // Retrieve projects data from local storage
    let projectsData = localStorage.getItem("projects");

    // If projects data exists
    if (projectsData) {
      // Parse JSON string into an object
      projectsData = JSON.parse(projectsData);

      // Remove project with the specified id from the object
      delete projectsData[projectId];

      // Update data in local storage
      localStorage.setItem("projects", JSON.stringify(projectsData));
    }
  }
}


/***/ }),

/***/ "./src/projectModule.js":
/*!******************************!*\
  !*** ./src/projectModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });

class Project {
  constructor(id, name, description, dueDate, priority, tasks) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.tasks = tasks ? tasks : [];
    this.domElement = null;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.dueDate}`);
  }

  // Getter methods
  get projectId() {
    return this.id;
  }

  get projectName() {
    return this.name;
  }

  get projectDesc() {
    return this.description;
  }

  get projectDue() {
    return this.dueDate;
  }

  get projectPrio() {
    return this.priority;
  }

  get projectTasks() {
    return this.tasks;
  }

  get DomElement() {
    return this.domElement;
  }

  // Setter methods
  set projectName(newName) {
    this.name = newName;
  }

  set projectDesc(newDesc) {
    this.description = newDesc;
  }

  set projectDue(newDate) {
    this.dueDate = newDate;
  }

  set projectPrio(newPrio) {
    this.priority = newPrio;
  }

  set projectTasks(newTasks) {
    this.tasks = newTasks;
  }

  set DomElement(element) {
    this.domElement = element;
  }
}


/***/ }),

/***/ "./src/taskModule.js":
/*!***************************!*\
  !*** ./src/taskModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });

class Task {
  constructor(name, description, dueDate, priority, project) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.domElement = null;
  }
  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.dueDate}`);
  }
  //
  //Getters
  //
  get taskName() {
    return this.name;
  }
  get taskDesc() {
    return this.description;
  }
  get taskDue() {
    return this.dueDate;
  }
  get taskPrio() {
    return this.priority;
  }
  get taskProj() {
    return this.project;
  }
  //
  //Setters
  //
  set taskName(newName) {
    this.name = newName;
  }
  set taskDesc(newDesc) {
    this.description = newDesc;
  }
  set taskDue(newDate) {
    this.dueDate = newDate;
  }
  set taskPrio(newPrio) {
    this.priority = newPrio;
  }
  set taskProj(newProj) {
    this.project = newProj;
  }
}


/***/ }),

/***/ "./src/images/Checkmark.png":
/*!**********************************!*\
  !*** ./src/images/Checkmark.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "226e30f430261fae66b2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectModule.js */ "./src/projectModule.js");
/* harmony import */ var _taskModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskModule.js */ "./src/taskModule.js");
/* harmony import */ var _DomManip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DomManip.js */ "./src/DomManip.js");






function OnEntry() {
  const DomManip = new _DomManip_js__WEBPACK_IMPORTED_MODULE_3__.DomController();

  DomManip.GenerateOnEntry();
}

OnEntry();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlB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Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JrQztBQUNLO0FBQ007QUFDRTtBQUNXO0FBQzFEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSw4QkFBOEIsbUVBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixnREFBSTs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFPO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFTO0FBQ3JDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3QjtBQUNOO0FBQ087QUFDWjs7QUFFbEM7QUFDQSx1QkFBdUIsdURBQWE7O0FBRXBDO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL0RvbU1hbmlwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9sb2NhbFN0b3JhZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9wcm9qZWN0TW9kdWxlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YXNrTW9kdWxlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xuICAtLXNlY29uZGFyeS1jb2xvcjogIzQ1MTc1NztcbiAgLS1jcml0aWNhbC1jb2xvcjogIzllNTY1MTtcbiAgLS11cmdlbnQtY29sb3I6ICNhNzhiNTQ7XG4gIC0tcm91dGluZS1jb2xvcjogIzRjN2E0YTtcbiAgLS10ZXh0LWNvbG9yOiAjMDAwMDAwO1xuICAtLW5hdi10ZXh0LWNvbG9yOiAjZGZhNTUzO1xuICAtLWZvcm0tY29sb3I6ICNkZmYzZTQ7XG4gIC0tZGVsZXRlQnRuLWJvcmRlcjogcmdiKDIwMSwgOTcsIDk3KTtcbn1cbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtaW4td2lkdGg6IDA7XG59XG4uYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuYnV0dG9uIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbmF2LXRleHQtY29sb3IpO1xufVxuLmRlbGV0ZUJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGVsZXRlQnRuLWJvcmRlcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDgxLCA4MSk7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdXRsaW5lOiBpbmhlcml0O1xuICB0b3A6IDhweDtcbiAgcmlnaHQ6IDhweDtcbn1cbi5tYWluV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cbi5uYXZXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGdhcDogNnB4O1xuICB3aWR0aDogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbmF2LXRleHQtY29sb3IpO1xufVxuLk5hdlByb2pQYW5lbFdyYXBwZXIge1xuICBnYXA6IDZweDtcbn1cbi5wcm9qQm9keVdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogODUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi50YXNrV3JhcHBlcixcbi5wcm9qV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG4ucHJvaldyYXBwZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2pJdGVtIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnRhc2tXcmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi50YXNrTmFtZSB7XG59XG5cbi50YXNrSXRlbSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLnRhc2tEZXNjIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi50YXNrRHVlIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi50YXNrQ2lyY2xlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi50YXNrQ2hlY2tNYXJrIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgb3BhY2l0eTogNTAlO1xufVxuLnRhc2tDaGVja01hcms6aG92ZXIge1xuICBvcGFjaXR5OiAxMDAlO1xufVxuLmZvcm1XcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTk5OTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjg5KSAwcHggNXB4IDE1cHg7XG59XG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW46IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5hZGRGb3JtTmFtZSB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xufVxuLmFkZEZvcm1EZXNjIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcbn1cbi5hZGRGb3JtRGF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcbn1cbi5hZGRGb3JtUHJpbyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcbn1cbi5kYXRlRm9ybVdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cbi5Dcml0aWNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyaXRpY2FsLWNvbG9yKTtcbn1cbi5VcmdlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11cmdlbnQtY29sb3IpO1xufVxuLlJvdXRpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3V0aW5lLWNvbG9yKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEM7dUNBQ3FDO0VBQ3JDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFFBQVE7RUFDUixVQUFVO0VBQ1Ysd0NBQXdDO0VBQ3hDLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsUUFBUTtBQUNWO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLFFBQVE7RUFDUix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1Isd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHNDQUFzQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzQ1MTc1NztcXG4gIC0tY3JpdGljYWwtY29sb3I6ICM5ZTU2NTE7XFxuICAtLXVyZ2VudC1jb2xvcjogI2E3OGI1NDtcXG4gIC0tcm91dGluZS1jb2xvcjogIzRjN2E0YTtcXG4gIC0tdGV4dC1jb2xvcjogIzAwMDAwMDtcXG4gIC0tbmF2LXRleHQtY29sb3I6ICNkZmE1NTM7XFxuICAtLWZvcm0tY29sb3I6ICNkZmYzZTQ7XFxuICAtLWRlbGV0ZUJ0bi1ib3JkZXI6IHJnYigyMDEsIDk3LCA5Nyk7XFxufVxcbioge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcbi5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5idXR0b24ge1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XFxufVxcbi5kZWxldGVCdG4ge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGVsZXRlQnRuLWJvcmRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCA4MSwgODEpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxuICB0b3A6IDhweDtcXG4gIHJpZ2h0OiA4cHg7XFxufVxcbi5tYWluV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuLm5hdldyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogNnB4O1xcbiAgd2lkdGg6IDE1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbmF2LXRleHQtY29sb3IpO1xcbn1cXG4uTmF2UHJvalBhbmVsV3JhcHBlciB7XFxuICBnYXA6IDZweDtcXG59XFxuLnByb2pCb2R5V3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogODUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcbi50YXNrV3JhcHBlcixcXG4ucHJvaldyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG4ucHJvaldyYXBwZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qSXRlbSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi50YXNrV3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxuICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuLnRhc2tOYW1lIHtcXG59XFxuXFxuLnRhc2tJdGVtIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuLnRhc2tEZXNjIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbi50YXNrRHVlIHtcXG4gIHdpZHRoOiAxNSU7XFxufVxcbi50YXNrQ2lyY2xlIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXNrQ2hlY2tNYXJrIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgb3BhY2l0eTogNTAlO1xcbn1cXG4udGFza0NoZWNrTWFyazpob3ZlciB7XFxuICBvcGFjaXR5OiAxMDAlO1xcbn1cXG4uZm9ybVdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjg5KSAwcHggNXB4IDE1cHg7XFxufVxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICBtYXJnaW46IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcbi5hZGRGb3JtTmFtZSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcXG59XFxuLmFkZEZvcm1EZXNjIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tY29sb3IpO1xcbn1cXG4uYWRkRm9ybURhdGUge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1jb2xvcik7XFxufVxcbi5hZGRGb3JtUHJpbyB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWNvbG9yKTtcXG59XFxuLmRhdGVGb3JtV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcbi5Dcml0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcml0aWNhbC1jb2xvcik7XFxufVxcbi5VcmdlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXJnZW50LWNvbG9yKTtcXG59XFxuLlJvdXRpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm91dGluZS1jb2xvcik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrTW9kdWxlLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdE1vZHVsZS5qc1wiO1xuaW1wb3J0IENoZWNrbWFyayBmcm9tIFwiLi9pbWFnZXMvQ2hlY2ttYXJrLnBuZ1wiO1xuaW1wb3J0IHsgU3RvcmFnZUhhbmRsZXIgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VIYW5kbGVyLmpzXCI7XG4vL1xuLy9Db250cm9scyB0aGUgZG9tIGZvciB0aGUgcHJvamVjdFxuLy9cbmV4cG9ydCBjbGFzcyBEb21Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdG9yYWdlSGFuZGxlciA9IG5ldyBTdG9yYWdlSGFuZGxlcigpO1xuICB9XG4gIC8vXG4gIC8vSGFuZGxlIHRoZSBzZXR1cCBvZiB0aGUgcGFnZSBwcmUtcHJvamVjdCBpbmplY3Rpb25cbiAgLy9cbiAgR2VuZXJhdGVEb21TdHJ1Y3R1cmUoZGVmYXVsdFByb2opIHtcbiAgICBjb25zdCBtYWluUHJvalBhbmVsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblByb2pQYW5lbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1haW5XcmFwcGVyXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpblByb2pQYW5lbFdyYXBwZXIpO1xuXG4gICAgY29uc3QgbG9hZGVkUHJvanMgPSB0aGlzLnN0b3JhZ2VIYW5kbGVyLmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbiAgICB0aGlzLkdlbmVyYXRlTmF2UGFuZWwobWFpblByb2pQYW5lbFdyYXBwZXIsIGxvYWRlZFByb2pzKTtcbiAgICB0aGlzLkdlbmVyYXRlQm9keVBhbmVsKG1haW5Qcm9qUGFuZWxXcmFwcGVyKTtcbiAgICB0aGlzLkdlbmVyYXRlVG9kYXlQYW5lbChsb2FkZWRQcm9qcyk7XG4gIH1cblxuICBHZW5lcmF0ZU5hdlBhbmVsKG1haW5XcmFwcGVyLCBsb2FkZWRQcm9qcykge1xuICAgIC8vXG4gICAgLy8gSGFuZGxlIHRoZSBnZW5lcmF0aW9uIG9mIHRoZSBuYXYgcGFuZWwgYW5kIGFsbCBpdHMgY29tcG9uZW50cy5cbiAgICAvL1xuICAgIGNvbnN0IG5hdlBhbmVsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2UGFuZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gICAgbmF2UGFuZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZXcmFwcGVyXCIpO1xuXG4gICAgLy9UaXRsZSBhbmQgdGltZSBwYW5lbFxuXG4gICAgY29uc3QgbmF2UGFuZWxNYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdlBhbmVsTWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJuYXZUaXRsZVwiLCBcIm5hdkl0ZW1cIik7XG4gICAgbmF2UGFuZWxNYWluVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5OlwiO1xuICAgIG5hdlBhbmVsV3JhcHBlci5hcHBlbmRDaGlsZChuYXZQYW5lbE1haW5UaXRsZSk7XG5cbiAgICBuYXZQYW5lbE1haW5UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuR2VuZXJhdGVUb2RheVBhbmVsKGxvYWRlZFByb2pzKVxuICAgICk7XG5cbiAgICAvLyBjb25zdCBuYXZQYW5lbE1haW5EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBuYXZQYW5lbE1haW5EYXRlLmNsYXNzTGlzdC5hZGQoXCJuYXZEYXRlXCIsIFwibmF2SXRlbVwiKTtcblxuICAgIC8vIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAvLyBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0KGN1cnJlbnREYXRlLCBcInl5eXktTU0tZGRcIik7XG4gICAgLy8gbmF2UGFuZWxNYWluRGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdHRlZERhdGU7XG4gICAgbmF2UGFuZWxNYWluVGl0bGUuYXBwZW5kQ2hpbGQobmF2UGFuZWxNYWluRGF0ZSk7XG5cbiAgICAvL1Byb2plY3QgcGFuZWxzXG5cbiAgICBjb25zdCBuYXZOZXdQcm9qZWN0UGFuZWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZOZXdQcm9qZWN0UGFuZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZOZXdQcm9qZWN0UGFuZWxXcmFwcGVyXCIpO1xuICAgIG5hdk5ld1Byb2plY3RQYW5lbFdyYXBwZXIudGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgUHJvamVjdFwiO1xuICAgIC8vdGhpcy5HZW5lcmF0ZUFkZEJ1dHRvbihuYXZOZXdQcm9qZWN0UGFuZWxXcmFwcGVyKTtcbiAgICBuYXZOZXdQcm9qZWN0UGFuZWxXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgdGhpcy5HZW5lcmF0ZUFkZEZvcm0obWFpbldyYXBwZXIpXG4gICAgKTtcblxuICAgIG5hdlBhbmVsV3JhcHBlci5hcHBlbmRDaGlsZChuYXZOZXdQcm9qZWN0UGFuZWxXcmFwcGVyKTtcblxuICAgIGNvbnN0IG5hdlByb2plY3RQYW5lbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdlByb2plY3RQYW5lbFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIk5hdlByb2pQYW5lbFdyYXBwZXJcIik7XG4gICAgbmF2UGFuZWxXcmFwcGVyLmFwcGVuZENoaWxkKG5hdlByb2plY3RQYW5lbFdyYXBwZXIpO1xuXG4gICAgLy9PcHRpb25zIHBhbmVsID4gaW5jbHVkZXMgaGVscCBhbmQgc2V0dGluZ3NcblxuICAgIGNvbnN0IG5hdk9wdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZPcHRpb25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwib3B0aW9uc1dyYXBwZXJcIik7XG5cbiAgICAvL0dlbmVyYXRlIHRoZSBzZXR0aW5nIGJhbm5lciBpbiB0aGUgbmF2IGJhclxuXG4gICAgY29uc3QgbmF2U2V0dGluZ3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZTZXR0aW5nc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdkl0ZW1cIik7XG5cbiAgICBjb25zdCBuYXZTZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2U2V0dGluZ3MudGV4dENvbnRlbnQgPSBcIlNldHRpbmdzXCI7XG4gICAgbmF2U2V0dGluZ3NXcmFwcGVyLmFwcGVuZENoaWxkKG5hdlNldHRpbmdzKTtcblxuICAgIGNvbnN0IG5hdlNldHRpbmdzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmF2U2V0dGluZ3NJY29uLnNyYyA9IFwiXCI7XG4gICAgbmF2U2V0dGluZ3NJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXZJY29uXCIpO1xuICAgIG5hdlNldHRpbmdzV3JhcHBlci5hcHBlbmRDaGlsZChuYXZTZXR0aW5nc0ljb24pO1xuXG4gICAgbmF2T3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQobmF2U2V0dGluZ3NXcmFwcGVyKTtcblxuICAgIC8vR2VuZXJhdGUgdGhlIGhlbHAgYmFubmVyIGluIHRoZSBuYXYgYmFyXG5cbiAgICBjb25zdCBuYXZIZWxwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2SGVscFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdkl0ZW1cIik7XG5cbiAgICBjb25zdCBuYXZIZWxwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZIZWxwLnRleHRDb250ZW50ID0gXCJIZWxwXCI7XG4gICAgbmF2SGVscFdyYXBwZXIuYXBwZW5kQ2hpbGQobmF2SGVscCk7XG5cbiAgICBjb25zdCBuYXZIZWxwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmF2SGVscEljb24uc3JjID0gXCJcIjtcbiAgICBuYXZIZWxwSWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2SWNvblwiKTtcbiAgICBuYXZIZWxwV3JhcHBlci5hcHBlbmRDaGlsZChuYXZIZWxwSWNvbik7XG5cbiAgICBuYXZPcHRpb25zV3JhcHBlci5hcHBlbmRDaGlsZChuYXZIZWxwV3JhcHBlcik7XG5cbiAgICBuYXZQYW5lbFdyYXBwZXIuYXBwZW5kQ2hpbGQobmF2T3B0aW9uc1dyYXBwZXIpO1xuXG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQobmF2UGFuZWxXcmFwcGVyKTtcblxuICAgIC8vTG9hZCB0aGUgc2F2ZWQgcHJvamVjdHMsIGFuZCBhZGQgdGhlbSB0byB0aGUgbmF2IGJhclxuXG4gICAgdGhpcy5Mb2FkUHJvanNUb05hdlBhbmVsKGxvYWRlZFByb2pzKTtcbiAgfVxuXG4gIExvYWRQcm9qc1RvTmF2UGFuZWwobG9hZGVkUHJvanMpIHtcbiAgICBpZiAobG9hZGVkUHJvanMpIHtcbiAgICAgIGxvYWRlZFByb2pzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgdGhpcy5BZGROZXdOYXZQYW5lbFByb2oocHJvaik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBBZGROZXdOYXZQYW5lbFByb2oocHJvamVjdCkge1xuICAgIC8vVGhpcyBldmVudHVhbGx5IHNob3VsZCBhbGxvdyB5b3UgdG8gb3BlbiBzcGVjaWZpYyBwcm9qZWN0cyBvbmNsaWNrLlxuICAgIGNvbnN0IG5hdlByb2plY3RQYW5lbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuTmF2UHJvalBhbmVsV3JhcHBlclwiXG4gICAgKTtcbiAgICBjb25zdCBFeGlzdHNJbk5hdiA9IG5hdlByb2plY3RQYW5lbFdyYXBwZXIucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnByb2pcIiArIHByb2plY3QucHJvamVjdElkXG4gICAgKTtcbiAgICBpZiAoIUV4aXN0c0luTmF2KSB7XG4gICAgICBjb25zdCBuYXZEZWZQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgbmF2RGVmUHJvai50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgICBuYXZEZWZQcm9qLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIFwibmF2SXRlbVwiLFxuICAgICAgICBcInByb2pcIiArIHByb2plY3QucHJvamVjdElkLFxuICAgICAgICBwcm9qZWN0LnByb2plY3RQcmlvXG4gICAgICApO1xuXG4gICAgICBuYXZEZWZQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHlQcm9qV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvakJvZHlXcmFwcGVyXCIpO1xuICAgICAgICB0aGlzLkdlbmVyYXRlUHJvamVjdFBhbmVsKGJvZHlQcm9qV3JhcHBlciwgcHJvamVjdCk7XG4gICAgICB9KTtcblxuICAgICAgbmF2UHJvamVjdFBhbmVsV3JhcHBlci5hcHBlbmRDaGlsZChuYXZEZWZQcm9qKTtcbiAgICB9XG4gIH1cblxuICBEZWxldGVOYXZQYW5lbFByb2oocHJvamVjdE5hbWUpIHtcbiAgICAvLyBjb25zdCBuYXZQcm9qZWN0UGFuZWxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAvLyAgIFwiLk5hdlByb2pQYW5lbFdyYXBwZXJcIlxuICAgIC8vICk7XG4gICAgY29uc3QgbmF2UHJvamVjdFRvRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtwcm9qZWN0TmFtZX0ubmF2SXRlbWBcbiAgICApO1xuICAgIGlmIChuYXZQcm9qZWN0VG9EZWxldGUpIHtcbiAgICAgIG5hdlByb2plY3RUb0RlbGV0ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5hdlByb2plY3RUb0RlbGV0ZSk7XG4gICAgfVxuICB9XG5cbiAgR2VuZXJhdGVCb2R5UGFuZWwobWFpbldyYXBwZXIpIHtcbiAgICBjb25zdCBBZGROZXdQcm9qV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgQWRkTmV3UHJvaldyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2pCb2R5V3JhcHBlclwiKTtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChBZGROZXdQcm9qV3JhcHBlcik7XG4gIH1cblxuICBHZW5lcmF0ZVRvZGF5UGFuZWwocHJvamVjdFN0b3JhZ2UpIHtcbiAgICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvakJvZHlXcmFwcGVyXCIpO1xuICAgIGlmICghcHJvamVjdFN0b3JhZ2UgfHwgbWFpbldyYXBwZXIucXVlcnlTZWxlY3RvcihcIi50b2RheVdyYXBwZXJcIikpIHtcbiAgICAgIC8vdGhpcy5HZW5lcmF0ZVNwbGFzaFBhbmVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2pXcmFwcGVyID0gbWFpbldyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qV3JhcHBlclwiKTtcbiAgICAgIGlmIChwcm9qV3JhcHBlcikge1xuICAgICAgICB0aGlzLlJlbW92ZVBhbmVsKHByb2pXcmFwcGVyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRvZGF5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2RheVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRvZGF5V3JhcHBlclwiKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgIC8vXG4gICAgICBwcm9qZWN0U3RvcmFnZS5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICAgIGlmIChwcm9qLnByb2plY3RUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvL0NoZWNrIGlmIHRoZXJlIGFyZSB0YXNrcyBkdWUgdG9kYXlcbiAgICAgICAgICAvL1xuICAgICAgICAgIGNvbnN0IHRhc2tzRHVlVG9kYXkgPSBwcm9qLnByb2plY3RUYXNrcy5zb21lKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUuZ2V0RGF0ZSgpID09PSB0b2RheS5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLmdldE1vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy9BZGQgYSBwcm9qZWN0IGhlYWRlclxuICAgICAgICAgIGlmICh0YXNrc0R1ZVRvZGF5KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qTmFtZS50ZXh0Q29udGVudCA9IHByb2oucHJvamVjdE5hbWU7XG4gICAgICAgICAgICBwcm9qTmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvak5hbWVcIiwgXCJwcm9qSXRlbVwiKTtcbiAgICAgICAgICAgIHRvZGF5V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qTmFtZSk7XG4gICAgICAgICAgICBwcm9qLnByb2plY3RUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUuZ2V0RGF0ZSgpID09PSB0b2RheS5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUuZ2V0TW9udGgoKSA9PT0gdG9kYXkuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0b2RheS5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdlbmVyYXRlVGFza1BhbmVsKHRhc2tXcmFwcGVyLCB0YXNrKTtcbiAgICAgICAgICAgICAgICB0b2RheVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQodG9kYXlXcmFwcGVyKTtcbiAgICB9XG4gIH1cblxuICBHZW5lcmF0ZVByb2plY3RQYW5lbChXcmFwcGVyLCBQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvak9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pXcmFwcGVyXCIpO1xuICAgIGNvbnN0IHRvZGF5V3JhcHBlck9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5V3JhcHBlclwiKTtcbiAgICBpZiAodG9kYXlXcmFwcGVyT3Blbikge1xuICAgICAgdGhpcy5SZW1vdmVQYW5lbCh0b2RheVdyYXBwZXJPcGVuKTtcbiAgICB9XG4gICAgaWYgKCFwcm9qT3Blbikge1xuICAgICAgY29uc3QgcHJvaldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvaldyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2pXcmFwcGVyXCIpO1xuICAgICAgcHJvaldyYXBwZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIFByb2plY3QucHJvamVjdElkKTtcbiAgICAgIFByb2plY3QuRG9tRWxlbWVudCA9IHByb2pXcmFwcGVyO1xuXG4gICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qTmFtZS50ZXh0Q29udGVudCA9IFByb2plY3QucHJvamVjdE5hbWU7XG4gICAgICBwcm9qTmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvak5hbWVcIiwgXCJwcm9qSXRlbVwiKTtcbiAgICAgIHByb2pXcmFwcGVyLmFwcGVuZENoaWxkKHByb2pOYW1lKTtcblxuICAgICAgY29uc3QgcHJvakRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvakRhdGUudGV4dENvbnRlbnQgPVxuICAgICAgICBcIkR1ZSBEYXRlOiBcIiArIFByb2plY3QucHJvamVjdER1ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgIHByb2pEYXRlLmNsYXNzTGlzdC5hZGQoXCJwcm9qRGF0ZVwiLCBcInByb2pJdGVtXCIpO1xuICAgICAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvakRhdGUpO1xuXG4gICAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IFByb2plY3QucHJvamVjdERlc2M7XG4gICAgICBwcm9qZWN0RGVzYy5jbGFzc0xpc3QuYWRkKFwicHJvakRlc2NcIiwgXCJwcm9qSXRlbVwiKTtcbiAgICAgIHByb2pXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3REZXNjKTtcblxuICAgICAgY29uc3QgcHJvakJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICB0aGlzLkdlbmVyYXRlQWRkQnV0dG9uKHByb2pCdXR0b25XcmFwcGVyLCBQcm9qZWN0KTtcbiAgICAgIHRoaXMuR2VuZXJhdGVEZWxldGVCdXR0b24ocHJvaldyYXBwZXIpO1xuXG4gICAgICBwcm9qV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qQnV0dG9uV3JhcHBlcik7XG5cbiAgICAgIGlmIChQcm9qZWN0LnByb2plY3RUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFByb2plY3QucHJvamVjdFRhc2tzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgdGhpcy5HZW5lcmF0ZVRhc2tQYW5lbCh0YXNrV3JhcHBlciwgZWxlbWVudCk7XG5cbiAgICAgICAgICBwcm9qV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5BZGROZXdOYXZQYW5lbFByb2ooUHJvamVjdCk7XG5cbiAgICAgIFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvaldyYXBwZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4dHJhY3RQcm9qZWN0SW5mbyhwcm9qZWN0V3JhcHBlcikge1xuICAvLyAgIC8vIFJldHJpZXZlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZVxuICAvLyAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdFdyYXBwZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIik7XG5cbiAgLy8gICAvLyBGaW5kIHRoZSBQcm9qZWN0IGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvamVjdCBuYW1lXG4gIC8vICAgcmV0dXJuIHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAvLyB9XG5cbiAgR2VuZXJhdGVUYXNrUGFuZWwoV3JhcHBlciwgdGFzaykge1xuICAgIC8vXG4gICAgLy9HaXZlbiBhIHRhc2sgYW5kIGEgd3JhcHBlciwgZ2VuZXJhdGUgYSBwYW5lbCB0aGF0IGhhbmRsZXMgaW5mbyBhYm91dCB0aGUgdGFzay5cbiAgICAvL1xuICAgIFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tXcmFwcGVyXCIpO1xuXG4gICAgdGhpcy5HZW5lcmF0ZURlbGV0ZUJ1dHRvbihXcmFwcGVyLCB0YXNrLnRhc2tQcmlvKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2sudGFza05hbWU7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2tOYW1lXCIsIFwidGFza0l0ZW1cIik7XG5cbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tEdWUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEYXRlXCIsIFwidGFza0l0ZW1cIik7XG5cbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tEZXNjO1xuICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGVzY1wiLCBcInRhc2tJdGVtXCIpO1xuXG4gICAgV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gIH1cblxuICBBZGROZXdUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBUYXNrIG9iamVjdFxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuXG4gICAgLy8gR2VuZXJhdGUgYSBuZXcgdGFzayBwYW5lbCBmb3IgdGhlIG5ldyB0YXNrXG4gICAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuR2VuZXJhdGVUYXNrUGFuZWwodGFza1dyYXBwZXIsIG5ld1Rhc2spO1xuXG4gICAgLy8gQXBwZW5kIHRoZSB0YXNrIHBhbmVsIHRvIHRoZSBhcHByb3ByaWF0ZSBsb2NhdGlvbiBpbiB0aGUgRE9NXG4gICAgcHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIGNvbnN0IHByb2pXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmlkfVwiXWBcbiAgICApO1xuXG4gICAgdGhpcy5zdG9yYWdlSGFuZGxlci5zYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdCk7XG5cbiAgICAvL0NoZWNrIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIGVubGFyZ2UgdGhlIHByb2plY3QgY29udGFpbmVyXG4gICAgLy90aGlzLk1vZGlmeVRhc2tIZWlnaHQocHJvaldyYXBwZXIsIHByb2plY3QpO1xuXG4gICAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xuICB9XG5cbiAgQWRkTmV3UHJvamVjdChpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IHByb2ogb2JqZWN0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIHRoaXMuc3RvcmFnZUhhbmRsZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKG5ld1Byb2plY3QpO1xuICAgIGNvbnN0IHByb2pXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qQm9keVdyYXBwZXJcIik7XG5cbiAgICB0aGlzLkdlbmVyYXRlUHJvamVjdFBhbmVsKHByb2pXcmFwcGVyLCBuZXdQcm9qZWN0KTtcbiAgfVxuXG4gIEdlbmVyYXRlRGVsZXRlQnV0dG9uKHdyYXBwZXIsIHRhc2tQcmlvKSB7XG4gICAgY29uc3QgRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5SZW1vdmVQYW5lbCh3cmFwcGVyKSk7XG5cbiAgICBpZiAodGFza1ByaW8pIHtcbiAgICAgIERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwidGFza0NpcmNsZVwiLCB0YXNrUHJpbywgXCJ0YXNrSXRlbVwiKTtcbiAgICAgIGNvbnN0IGRlbGV0ZUNoZWNrTWFyayA9IG5ldyBJbWFnZSgpO1xuICAgICAgZGVsZXRlQ2hlY2tNYXJrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ2hlY2tNYXJrXCIpO1xuICAgICAgZGVsZXRlQ2hlY2tNYXJrLnNyYyA9IENoZWNrbWFyaztcbiAgICAgIERlbGV0ZS5hcHBlbmRDaGlsZChkZWxldGVDaGVja01hcmspO1xuICAgIH0gZWxzZSB7XG4gICAgICBEZWxldGUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZUJ0blwiKTtcbiAgICAgIERlbGV0ZS50ZXh0Q29udGVudCA9IFwiIFggXCI7XG4gICAgfVxuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChEZWxldGUpO1xuICB9XG5cbiAgR2VuZXJhdGVBZGRCdXR0b24od3JhcHBlciwgcHJvamVjdCkge1xuICAgIGNvbnN0IEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgQWRkLmNsYXNzTGlzdC5hZGQoXCJhZGRCdG5cIik7XG4gICAgQWRkLnRleHRDb250ZW50ID0gXCIgKyBcIjtcbiAgICBBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuR2VuZXJhdGVBZGRGb3JtKHdyYXBwZXIsIHByb2plY3QpKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoQWRkKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBhIHBhbmVsIGFuZCBhbGwgaXRzIGNoaWxkcmVuIGZyb20gdGhlIERPTVxuICAvL1RoaXMgc2hvdWxkIGJlIGNoZWNraW5nIHdoYXRzIHRoZSBjbG9zZXN0IHByb2ovdGFzayBwYW5lbCBhbmQgZGVsZXRpbmcgZG93blxuICBSZW1vdmVQYW5lbChwYW5lbCkge1xuICAgIGlmICghcGFuZWwpIHJldHVybjtcbiAgICBpZiAocGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvaldyYXBwZXJcIikpIHtcbiAgICAgIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIGRlbGV0ZSB0aGUgY29ycmVzcG9uZGluZyBuYXZpZ2F0aW9uIHBhbmVsXG4gICAgICB0aGlzLkRlbGV0ZU5hdlBhbmVsUHJvaihcInByb2pcIiArIHBhbmVsLmRhdGFzZXQucHJvamVjdElkKTtcbiAgICAgIHRoaXMuc3RvcmFnZUhhbmRsZXIucmVtb3ZlUHJvamVjdEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgIHBhbmVsLmRhdGFzZXQucHJvamVjdElkXG4gICAgICApO1xuICAgIH1cbiAgICB3aGlsZSAocGFuZWwuZmlyc3RDaGlsZCkge1xuICAgICAgcGFuZWwucmVtb3ZlQ2hpbGQocGFuZWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFuZWwpO1xuICB9XG5cbiAgLy9HZW5lcmF0ZSBhIGZvcm0gdGhhdCBhbGxvd3MgeW91IHRvIGFkZCBhIG5ldyBwcm9qZWN0LCBvciB0YXNrXG4gIC8vc2hvdWxkIGhhdmUgYSBzdWJtaXQgYnV0dG9uIGF0IHRoZSBib3R0b20sIGFuZCBhIGNsb3NlIGJ1dHRvbi5cbiAgR2VuZXJhdGVBZGRGb3JtKHdyYXBwZXIsIHByb2plY3QpIHtcbiAgICBjb25zdCBhZGRGb3JtT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVdyYXBwZXJcIik7XG5cbiAgICBpZiAoIWFkZEZvcm1PcGVuKSB7XG4gICAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9ybVdyYXBwZXJcIik7XG5cbiAgICAgIGNvbnN0IGZvcm1IZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcm1IZWFkZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtSGVhZGVyV3JhcHBlclwiKTtcblxuICAgICAgLy8gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gdGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyB0YXNrIG9yIHByb2plY3RcIjtcbiAgICAgIC8vIGZvcm1IZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgdGhpcy5HZW5lcmF0ZURlbGV0ZUJ1dHRvbihmb3JtV3JhcHBlcik7XG5cbiAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1IZWFkZXJXcmFwcGVyKTtcblxuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dE5hbWUuY2xhc3NMaXN0LmFkZChcImFkZEZvcm1OYW1lXCIpO1xuICAgICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0ZXh0SW5wdXRcIik7XG4gICAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciB0aXRsZSBvZiBwcm9qZWN0IG9yIHRhc2tcIik7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XG5cbiAgICAgIGNvbnN0IGlucHV0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0RGVzYy5jbGFzc0xpc3QuYWRkKFwiYWRkRm9ybURlc2NcIik7XG4gICAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKFwiZGVzY1wiLCBcInRleHRJbnB1dFwiKTtcbiAgICAgIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGRlc2NyaXB0aW9uXCIpO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuXG4gICAgICBjb25zdCBkYXRlRm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGF0ZUZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlRm9ybVdyYXBwZXJcIik7XG5cbiAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0RGF0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkRm9ybURhdGVcIik7XG4gICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVJbnB1dFwiKTtcbiAgICAgIGRhdGVGb3JtV3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gICAgICBjb25zdCBpbnB1dFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgaW5wdXRQcmlvLmNsYXNzTGlzdC5hZGQoXCJhZGRGb3JtUHJpb1wiKTtcbiAgICAgIGlucHV0UHJpby5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IFtcIkNyaXRpY2FsXCIsIFwiVXJnZW50XCIsIFwiUm91dGluZVwiXTtcblxuICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb25UZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uVGV4dDtcbiAgICAgICAgaW5wdXRQcmlvLmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBkYXRlRm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvKTtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUZvcm1XcmFwcGVyKTtcblxuICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBSZXRyaWV2ZSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgY29uc3QgbmFtZSA9IGlucHV0TmFtZS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dERlc2MudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBpbnB1dERhdGUudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gaW5wdXRQcmlvLnZhbHVlO1xuXG4gICAgICAgIHRoaXMuUmVtb3ZlUGFuZWwoZm9ybVdyYXBwZXIpO1xuICAgICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgICAvL0dlbmVyYXRlIHRoZSBwcm9qZWN0IHdpdGggYSByYW5kb20gSUQgbnVtYmVyXG4gICAgICAgICAgdGhpcy5BZGROZXdQcm9qZWN0KFxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5OTk5KSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5BZGROZXdUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChmb3JtV3JhcHBlcik7XG4gICAgfVxuICB9XG5cbiAgR2VuZXJhdGVPbkVudHJ5KGRlZmF1bHRQcm9qKSB7XG4gICAgdGhpcy5HZW5lcmF0ZURvbVN0cnVjdHVyZShkZWZhdWx0UHJvaik7XG4gIH1cbn1cbiIsIi8vIEltcG9ydCBuZWNlc3NhcnkgZnVuY3Rpb25zIGFuZCBjbGFzc2VzXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdE1vZHVsZS5qc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tNb2R1bGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VIYW5kbGVyIHtcbiAgLy8gRnVuY3Rpb24gdG8gc2F2ZSBwcm9qZWN0cyBhbmQgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxuXG4gIHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0KSB7XG4gICAgbGV0IHByb2plY3RzRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gICAgaWYgKCFwcm9qZWN0c0RhdGEpIHtcbiAgICAgIHByb2plY3RzRGF0YSA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKHByb2plY3RzRGF0YSk7XG4gICAgfVxuXG4gICAgLy8gU2VyaWFsaXplIHRhc2tzIGJlZm9yZSBzYXZpbmdcbiAgICBjb25zdCBzZXJpYWxpemVkVGFza3MgPSBwcm9qZWN0LnRhc2tzLm1hcCgodGFzaykgPT4gKHtcbiAgICAgIG5hbWU6IHRhc2submFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxuICAgICAgcHJpb3JpdHk6IHRhc2sucHJpb3JpdHksXG4gICAgfSkpO1xuXG4gICAgLy8gQWRkIHNlcmlhbGl6ZWQgdGFza3MgdG8gdGhlIHByb2plY3Qgb2JqZWN0XG4gICAgY29uc3Qgc2VyaWFsaXplZFByb2plY3QgPSB7XG4gICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9qZWN0LmRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZTogcHJvamVjdC5kdWVEYXRlLFxuICAgICAgcHJpb3JpdHk6IHByb2plY3QucHJpb3JpdHksXG4gICAgICB0YXNrczogc2VyaWFsaXplZFRhc2tzLCAvLyBTYXZlIHNlcmlhbGl6ZWQgdGFza3NcbiAgICB9O1xuXG4gICAgcHJvamVjdHNEYXRhW3Byb2plY3QucHJvamVjdElkXSA9IHNlcmlhbGl6ZWRQcm9qZWN0O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0RhdGEpKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIHJldHJpZXZlIHByb2plY3RzIGFuZCB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgcHJvamVjdHNEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgICBpZiAocHJvamVjdHNEYXRhKSB7XG4gICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UocHJvamVjdHNEYXRhKTtcbiAgICAgIGlmIChwcm9qZWN0cykge1xuICAgICAgICBjb25zdCBwcm9qZWN0T2JqZWN0cyA9IE9iamVjdC52YWx1ZXMocHJvamVjdHMpLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdC50YXNrcy5tYXAoKHRhc2tEYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRhc2soXG4gICAgICAgICAgICAgIHRhc2tEYXRhLm5hbWUsXG4gICAgICAgICAgICAgIHRhc2tEYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBuZXcgRGF0ZSh0YXNrRGF0YS5kdWVEYXRlKSxcbiAgICAgICAgICAgICAgdGFza0RhdGEucHJpb3JpdHksXG4gICAgICAgICAgICAgIHByb2plY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KFxuICAgICAgICAgICAgcHJvamVjdC5pZCxcbiAgICAgICAgICAgIHByb2plY3QubmFtZSxcbiAgICAgICAgICAgIHByb2plY3QuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBuZXcgRGF0ZShwcm9qZWN0LmR1ZURhdGUpLFxuICAgICAgICAgICAgcHJvamVjdC5wcmlvcml0eSxcbiAgICAgICAgICAgIHRhc2tzXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0T2JqZWN0cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQcm9qZWN0cyBkYXRhIGluIGxvY2FsIHN0b3JhZ2UgaXMgaW52YWxpZFwiKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlKHByb2plY3RJZCkge1xuICAgIC8vIFJldHJpZXZlIHByb2plY3RzIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgbGV0IHByb2plY3RzRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG5cbiAgICAvLyBJZiBwcm9qZWN0cyBkYXRhIGV4aXN0c1xuICAgIGlmIChwcm9qZWN0c0RhdGEpIHtcbiAgICAgIC8vIFBhcnNlIEpTT04gc3RyaW5nIGludG8gYW4gb2JqZWN0XG4gICAgICBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKHByb2plY3RzRGF0YSk7XG5cbiAgICAgIC8vIFJlbW92ZSBwcm9qZWN0IHdpdGggdGhlIHNwZWNpZmllZCBpZCBmcm9tIHRoZSBvYmplY3RcbiAgICAgIGRlbGV0ZSBwcm9qZWN0c0RhdGFbcHJvamVjdElkXTtcblxuICAgICAgLy8gVXBkYXRlIGRhdGEgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0RhdGEpKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRhc2tzKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMudGFza3MgPSB0YXNrcyA/IHRhc2tzIDogW107XG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGRpc3BsYXlEZXRhaWxzKCkge1xuICAgIGNvbnNvbGUubG9nKGBOYW1lOiAke3RoaXMubmFtZX1gKTtcbiAgICBjb25zb2xlLmxvZyhgRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn1gKTtcbiAgICBjb25zb2xlLmxvZyhgRHVlIERhdGU6ICR7dGhpcy5kdWVEYXRlfWApO1xuICB9XG5cbiAgLy8gR2V0dGVyIG1ldGhvZHNcbiAgZ2V0IHByb2plY3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIGdldCBwcm9qZWN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0IHByb2plY3REZXNjKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IHByb2plY3REdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIGdldCBwcm9qZWN0UHJpbygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBwcm9qZWN0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBnZXQgRG9tRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgLy8gU2V0dGVyIG1ldGhvZHNcbiAgc2V0IHByb2plY3ROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgc2V0IHByb2plY3REZXNjKG5ld0Rlc2MpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgfVxuXG4gIHNldCBwcm9qZWN0RHVlKG5ld0RhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICB9XG5cbiAgc2V0IHByb2plY3RQcmlvKG5ld1ByaW8pIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpbztcbiAgfVxuXG4gIHNldCBwcm9qZWN0VGFza3MobmV3VGFza3MpIHtcbiAgICB0aGlzLnRhc2tzID0gbmV3VGFza3M7XG4gIH1cblxuICBzZXQgRG9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICB9XG4gIGRpc3BsYXlEZXRhaWxzKCkge1xuICAgIGNvbnNvbGUubG9nKGBOYW1lOiAke3RoaXMubmFtZX1gKTtcbiAgICBjb25zb2xlLmxvZyhgRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn1gKTtcbiAgICBjb25zb2xlLmxvZyhgRHVlIERhdGU6ICR7dGhpcy5kdWVEYXRlfWApO1xuICB9XG4gIC8vXG4gIC8vR2V0dGVyc1xuICAvL1xuICBnZXQgdGFza05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBnZXQgdGFza0Rlc2MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cbiAgZ2V0IHRhc2tEdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuICBnZXQgdGFza1ByaW8oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cbiAgZ2V0IHRhc2tQcm9qKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gIH1cbiAgLy9cbiAgLy9TZXR0ZXJzXG4gIC8vXG4gIHNldCB0YXNrTmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfVxuICBzZXQgdGFza0Rlc2MobmV3RGVzYykge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICB9XG4gIHNldCB0YXNrRHVlKG5ld0RhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICB9XG4gIHNldCB0YXNrUHJpbyhuZXdQcmlvKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW87XG4gIH1cbiAgc2V0IHRhc2tQcm9qKG5ld1Byb2opIHtcbiAgICB0aGlzLnByb2plY3QgPSBuZXdQcm9qO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdE1vZHVsZS5qc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tNb2R1bGUuanNcIjtcbmltcG9ydCB7IERvbUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9Eb21NYW5pcC5qc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmZ1bmN0aW9uIE9uRW50cnkoKSB7XG4gIGNvbnN0IERvbU1hbmlwID0gbmV3IERvbUNvbnRyb2xsZXIoKTtcblxuICBEb21NYW5pcC5HZW5lcmF0ZU9uRW50cnkoKTtcbn1cblxuT25FbnRyeSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9