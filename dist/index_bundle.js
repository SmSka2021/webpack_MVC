/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controler/fetch.js":
/*!****************************!*\
  !*** ./controler/fetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ansve": () => (/* binding */ ansve),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getValue.js */ "./controler/getValue.js");
/* harmony import */ var _view_showData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/showData.js */ "./view/showData.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}



var ansve = '';
function getData(_x) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(nevStr) {
    var res, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("http://api.weatherstack.com/current?access_key=5e0116c7252bfda72d7268b4c6065adb&query=query=".concat(nevStr));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            data, _readOnlyError("ansve");
            (0,_view_showData_js__WEBPACK_IMPORTED_MODULE_1__.showData)(ansve);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}

/***/ }),

/***/ "./controler/getValue.js":
/*!*******************************!*\
  !*** ./controler/getValue.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nevStr": () => (/* binding */ nevStr),
/* harmony export */   "getItem": () => (/* binding */ getItem)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./controler/fetch.js");
/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start.js */ "./start.js");



var nevStr = '';

function validation(str, str2) {
  nevStr = str[0].toUpperCase() + str.slice(1).toLowerCase() + ',' + str2[0].toUpperCase() + str2.slice(1).toLowerCase();
  (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.getData)(nevStr);
}

function getItem() {
  validation(_start_js__WEBPACK_IMPORTED_MODULE_1__.inpVal1, _start_js__WEBPACK_IMPORTED_MODULE_1__.inpVal2);
}

/***/ }),

/***/ "./start.js":
/*!******************!*\
  !*** ./start.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inpVal1": () => (/* binding */ inpVal1),
/* harmony export */   "inpVal2": () => (/* binding */ inpVal2)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _view_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/render.js */ "./view/render.js");
/* harmony import */ var _controler_getValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controler/getValue.js */ "./controler/getValue.js");




var btn = document.querySelector('#btn');
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var inpVal1 = input1.value;
var inpVal2 = input2.value;

function startApi() {
  (0,_view_render_js__WEBPACK_IMPORTED_MODULE_1__.render)();
  btn.addEventListener('click', _controler_getValue_js__WEBPACK_IMPORTED_MODULE_2__.getItem);
  input2.addEventListener('change', _controler_getValue_js__WEBPACK_IMPORTED_MODULE_2__.getItem);
  input1.addEventListener('change', _controler_getValue_js__WEBPACK_IMPORTED_MODULE_2__.getItem);
}

startApi();

/***/ }),

/***/ "./view/content.js":
/*!*************************!*\
  !*** ./view/content.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentRehder": () => (/* binding */ contentRehder)
/* harmony export */ });
var contentRehder = function contentRehder() {
  var arr = ['City', 'Country', 'Time', 'Temperature', 'Wind speed', 'Direction of the wind', 'Humidity'];
  var srt = arr.map(function (i, ind) {
    return "<tr><td>".concat(i, "</td><td class =\"red item_").concat(ind, "\"></td></tr>");
  }).join('');
  var tabl = "\n    <section class=\"container\">\n    <div class=\"container__item\">\n        <table>\n                 ".concat(srt, "          \n        </table>\n         </div>          \n    </section>");
  return tabl;
};

/***/ }),

/***/ "./view/render.js":
/*!************************!*\
  !*** ./view/render.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ "./view/content.js");

var render = function render() {
  var root = document.getElementById('root');
  var tabl = (0,_content_js__WEBPACK_IMPORTED_MODULE_0__.contentRehder)();
  root.innerHTML = tabl;
};

/***/ }),

/***/ "./view/showData.js":
/*!**************************!*\
  !*** ./view/showData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showData": () => (/* binding */ showData)
/* harmony export */ });
/* harmony import */ var _controler_fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controler/fetch.js */ "./controler/fetch.js");

function showData(arr) {
  var city = document.querySelector('.item_0');
  city.innerText = arr.location.name;
  var country = document.querySelector('.item_1');
  country.innerText = arr.location.country;
  var localTime = document.querySelector('.item_2');
  localTime.innerText = arr.location.localtime;
  var temperature = document.querySelector('.item_3');
  temperature.innerText = "".concat(arr.current.temperature, " \u2103");
  var windSpeed = document.querySelector('.item_4');
  windSpeed.innerText = "".concat(arr.current.wind_speed, " km/h");
  var wind2 = document.querySelector('.item_5');
  wind2.innerText = arr.current.wind_dir;
  var humidity = document.querySelector('.item_6');
  humidity.innerText = "".concat(arr.current.humidity, " %");
}

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./start.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE5QkQ7QUFDQSxNQUFNRSxRQUFRLEdBQUcvQixRQUFRLENBQUNDLGFBQVRELENBQXVCLFNBQXZCQSxDQUFqQjtBQUNBK0IsVUFBUSxDQUFDWixTQUFUWSxhQUF3QnZCLEdBQUcsQ0FBQ2tCLE9BQUpsQixDQUFZdUIsUUFBcEM7QUFDQzs7Ozs7Ozs7Ozs7QUNoQkg7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25ld3dlYnBhY2svLi9jb250cm9sZXIvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vbmV3d2VicGFjay8uL2NvbnRyb2xlci9nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9uZXd3ZWJwYWNrLy4vc3RhcnQuanMiLCJ3ZWJwYWNrOi8vbmV3d2VicGFjay8uL3ZpZXcvY29udGVudC5qcyIsIndlYnBhY2s6Ly9uZXd3ZWJwYWNrLy4vdmlldy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vbmV3d2VicGFjay8uL3ZpZXcvc2hvd0RhdGEuanMiLCJ3ZWJwYWNrOi8vbmV3d2VicGFjay8uL3N0eWxlLmNzcz82NDI5Iiwid2VicGFjazovL25ld3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXd3ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3d2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3d2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7bmV2U3RyfSBmcm9tICcuL2dldFZhbHVlLmpzJ1xyXG5pbXBvcnQge3Nob3dEYXRhfSBmcm9tICcuLi92aWV3L3Nob3dEYXRhLmpzJ1xyXG5leHBvcnQgY29uc3QgYW5zdmUgPSAnJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEobmV2U3RyKSB7ICBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJzdGFjay5jb20vY3VycmVudD9hY2Nlc3Nfa2V5PTVlMDExNmM3MjUyYmZkYTcyZDcyNjhiNGM2MDY1YWRiJnF1ZXJ5PXF1ZXJ5PSR7bmV2U3RyfWApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgYW5zdmUgPSBkYXRhICAgICAgXHJcbiAgICBzaG93RGF0YShhbnN2ZSlcclxuICB9IiwiXHJcbmV4cG9ydCB7bmV2U3RyfSBcclxuaW1wb3J0IHtnZXREYXRhfSBmcm9tICcuL2ZldGNoJ1xyXG5pbXBvcnQge2lucFZhbDEsIGlucFZhbDJ9IGZyb20gJy4uL3N0YXJ0LmpzJ1xyXG5sZXQgbmV2U3RyID0gJydcclxuZnVuY3Rpb24gdmFsaWRhdGlvbiAoc3RyLCBzdHIyKSB7ICBcclxuICAgICBuZXZTdHIgPSBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKS50b0xvd2VyQ2FzZSgpICsgJywnICsgc3RyMlswXS50b1VwcGVyQ2FzZSgpICsgc3RyMi5zbGljZSgxKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgZ2V0RGF0YSAobmV2U3RyKSAgICBcclxuICB9XHJcbiBleHBvcnQgZnVuY3Rpb24gZ2V0SXRlbSgpIHsgIFxyXG4gICAgdmFsaWRhdGlvbiAoaW5wVmFsMSwgaW5wVmFsMilcclxuICAgIFxyXG4gIH1cclxuICBcclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICcuL3ZpZXcvcmVuZGVyLmpzJztcclxuaW1wb3J0IHtnZXRJdGVtfSBmcm9tICcuL2NvbnRyb2xlci9nZXRWYWx1ZS5qcyc7XHJcbmV4cG9ydCB7aW5wVmFsMSwgaW5wVmFsMn1cclxuXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuJylcclxuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dDEnKVxyXG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0MicpXHJcbiAgICBsZXQgaW5wVmFsMSA9IGlucHV0MS52YWx1ZSBcclxuICAgIGxldCBpbnBWYWwyID0gaW5wdXQyLnZhbHVlICAgICBcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0QXBpKCl7ICBcclxuICAgIHJlbmRlcigpICAgICBcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldEl0ZW0pXHJcbiAgICBpbnB1dDIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZ2V0SXRlbSlcclxuICAgIGlucHV0MS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBnZXRJdGVtKSAgICAgIFxyXG59XHJcbnN0YXJ0QXBpKClcclxuXHJcblxyXG5cclxuICAgICIsIiBcclxuIGV4cG9ydCBjb25zdCBjb250ZW50UmVoZGVyID0gKCkgPT4geyAgICAgICBcclxuICAgY29uc3QgYXJyID0gWydDaXR5JywgJ0NvdW50cnknLCAnVGltZScsICdUZW1wZXJhdHVyZScsICdXaW5kIHNwZWVkJywgJ0RpcmVjdGlvbiBvZiB0aGUgd2luZCcsJ0h1bWlkaXR5J11cclxuICAgbGV0IHNydCA9IGFyci5tYXAoKGksIGluZCkgPT4gYDx0cj48dGQ+JHtpfTwvdGQ+PHRkIGNsYXNzID1cInJlZCBpdGVtXyR7aW5kfVwiPjwvdGQ+PC90cj5gKS5qb2luKCcnKSBcclxuICAgIFxyXG4gICAgY29uc3QgdGFibCA9IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyX19pdGVtXCI+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICR7c3J0fSAgICAgICAgICBcclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICA8L3NlY3Rpb24+YFxyXG4gICAgcmV0dXJuIHRhYmwgXHJcbn1cclxuIiwiXHJcbmltcG9ydCB7Y29udGVudFJlaGRlcn0gZnJvbSAnLi9jb250ZW50LmpzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG4gICAgY29uc3QgdGFibCA9IGNvbnRlbnRSZWhkZXIoKTtcclxuICAgIHJvb3QuaW5uZXJIVE1MID0gdGFibDsgICAgXHJcbn1cclxuIiwiaW1wb3J0IHthbnN2ZX0gZnJvbSAnLi4vY29udHJvbGVyL2ZldGNoLmpzJ1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RhdGEoYXJyKSB7XHJcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV8wJylcclxuIGNpdHkuaW5uZXJUZXh0ID0gYXJyLmxvY2F0aW9uLm5hbWVcclxuIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV8xJylcclxuIGNvdW50cnkuaW5uZXJUZXh0ID0gYXJyLmxvY2F0aW9uLmNvdW50cnlcclxuIGNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtXzInKVxyXG4gbG9jYWxUaW1lLmlubmVyVGV4dCA9IGFyci5sb2NhdGlvbi5sb2NhbHRpbWVcclxuIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fMycpXHJcbiB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHthcnIuY3VycmVudC50ZW1wZXJhdHVyZX0gXFx1MjEwM2AgXHJcbiBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV80JylcclxuICB3aW5kU3BlZWQuaW5uZXJUZXh0ID0gYCR7YXJyLmN1cnJlbnQud2luZF9zcGVlZH0ga20vaGAgXHJcbiAgY29uc3Qgd2luZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV81JykgICAgICAgICAgICAgICAgICBcclxuICB3aW5kMi5pbm5lclRleHQgPSBhcnIuY3VycmVudC53aW5kX2RpciAgXHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV82JylcclxuICBodW1pZGl0eS5pbm5lclRleHQgPSBgJHthcnIuY3VycmVudC5odW1pZGl0eX0gJWAgIFxyXG4gIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3RhcnQuanNcIik7XG4iLCIiXSwibmFtZXMiOlsibmV2U3RyIiwic2hvd0RhdGEiLCJhbnN2ZSIsImdldERhdGEiLCJfY29udGV4dCIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJpbnBWYWwxIiwiaW5wVmFsMiIsInZhbGlkYXRpb24iLCJzdHIiLCJzdHIyIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwiZ2V0SXRlbSIsInJlbmRlciIsImJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0MSIsImlucHV0MiIsInZhbHVlIiwic3RhcnRBcGkiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudFJlaGRlciIsImFyciIsInNydCIsIm1hcCIsImkiLCJpbmQiLCJqb2luIiwidGFibCIsInJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImNpdHkiLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjb3VudHJ5IiwibG9jYWxUaW1lIiwibG9jYWx0aW1lIiwidGVtcGVyYXR1cmUiLCJjdXJyZW50Iiwid2luZFNwZWVkIiwid2luZF9zcGVlZCIsIndpbmQyIiwid2luZF9kaXIiLCJodW1pZGl0eSJdLCJzb3VyY2VSb290IjoiIn0=