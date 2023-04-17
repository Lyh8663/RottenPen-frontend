"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************************************************************************************!*\
  !*** F:/我的工作/2022-2023服创/代码/RottenPen-frontend/main.js?{"page":"pages%2FLoginAndRegistPage%2FsubNvue%2FsubNvue"} ***!
  \*******************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_LoginAndRegistPage_subNvue_subNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/LoginAndRegistPage/subNvue/subNvue.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_LoginAndRegistPage_subNvue_subNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_LoginAndRegistPage_subNvue_subNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/LoginAndRegistPage/subNvue/subNvue'\n        _pages_LoginAndRegistPage_subNvue_subNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_LoginAndRegistPage_subNvue_subNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBcUY7QUFDckYsUUFBUSxrR0FBRztBQUNYLFFBQVEsa0dBQUc7QUFDWCxRQUFRLGtHQUFHO0FBQ1gsZ0JBQWdCLGtHQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9Mb2dpbkFuZFJlZ2lzdFBhZ2Uvc3ViTnZ1ZS9zdWJOdnVlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL0xvZ2luQW5kUmVnaXN0UGFnZS9zdWJOdnVlL3N1Yk52dWUnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************************************!*\
  !*** F:/我的工作/2022-2023服创/代码/RottenPen-frontend/main.js?{"type":"appStyle"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************************************************************!*\
  !*** F:/我的工作/2022-2023服创/代码/RottenPen-frontend/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/我的工作/2022-2023服创/代码/RottenPen-frontend/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-picker-action": {
    ".uni-picker-container .uni-picker-action-confirm": {
      "color": [
        "#FCC637",
        0,
        2,
        2
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!***********************************************************************************************************!*\
  !*** F:/我的工作/2022-2023服创/代码/RottenPen-frontend/pages/LoginAndRegistPage/subNvue/subNvue.nvue?mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subNvue_nvue_vue_type_template_id_486a0c90_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subNvue.nvue?vue&type=template&id=486a0c90&mpType=page */ 6);\n/* harmony import */ var _subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subNvue.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./subNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./subNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _subNvue_nvue_vue_type_template_id_486a0c90_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _subNvue_nvue_vue_type_template_id_486a0c90_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"7eeeb489\",\n  false,\n  _subNvue_nvue_vue_type_template_id_486a0c90_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/LoginAndRegistPage/subNvue/subNvue.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9FQUE0RDtBQUNoSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0VBQTREO0FBQ3JIOztBQUVBOztBQUVBO0FBQ2dMO0FBQ2hMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zdWJOdnVlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDg2YTBjOTAmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zdWJOdnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjdlZWViNDg5XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL0xvZ2luQW5kUmVnaXN0UGFnZS9zdWJOdnVlL3N1Yk52dWUubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************************************************************************************************************!*\
  !*** F:/我的工作/2022-2023服创/代码/RottenPen-frontend/pages/LoginAndRegistPage/subNvue/subNvue.nvue?vue&type=template&id=486a0c90&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_template_id_486a0c90_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./subNvue.nvue?vue&type=template&id=486a0c90&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_template_id_486a0c90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_template_id_486a0c90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_template_id_486a0c90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_template_id_486a0c90_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/我的工作/2022-2023服创/代码/RottenPen-frontend/pages/LoginAndRegistPage/subNvue/subNvue.nvue?vue&type=template&id=486a0c90&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["content"], attrs: { id: "loginSubNVues" } },
    [
      this.index == 1
        ? _c("view", { staticClass: ["login-area"] }, [
            _c("view", { class: ["title", "nodisplay"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["title-main"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v("烂笔头")]
              ),
              _c(
                "u-text",
                {
                  staticClass: ["title-sub"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v("更懂中国用户的记账软件")]
              ),
            ]),
            _c(
              "view",
              { staticClass: ["input-phone"] },
              [
                _c("u-input", {
                  staticClass: ["phone-text"],
                  attrs: {
                    type: "text",
                    placeholder: "请输入手机号",
                    value: _vm.login_phone,
                  },
                  on: {
                    input: function ($event) {
                      _vm.login_phone = $event.detail.value
                    },
                  },
                }),
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["input-pwd"] },
              [
                _c("u-input", {
                  staticClass: ["pwd-text"],
                  attrs: {
                    type: "safe-password",
                    placeholder: "请输入密码",
                    value: _vm.login_password,
                  },
                  on: {
                    input: function ($event) {
                      _vm.login_password = $event.detail.value
                    },
                  },
                }),
              ],
              1
            ),
            _c(
              "view",
              {
                staticClass: ["btn"],
                on: {
                  click: function ($event) {
                    _vm.login()
                  },
                },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["login-text"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("登录")]
                ),
              ]
            ),
            _c("view", { staticClass: ["tishi-area"] }, [
              _c(
                "view",
                {
                  on: {
                    click: function ($event) {
                      _vm.toRegist()
                    },
                  },
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["regist-btn"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("注册")]
                  ),
                ]
              ),
              _vm._m(0),
              _c("view", {}, [
                _c(
                  "u-text",
                  {
                    staticClass: ["bycode-btn"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                    on: {
                      click: function ($event) {
                        _vm.toByCode()
                      },
                    },
                  },
                  [_vm._v("验证码登录")]
                ),
              ]),
              _vm._m(1),
              _vm._m(2),
            ]),
          ])
        : _vm._e(),
      this.index == 2
        ? _c("view", { staticClass: ["regist-area"] }, [
            _vm._m(3),
            _c(
              "view",
              { staticClass: ["input-phone"] },
              [
                _c("u-input", {
                  staticClass: ["phone-text"],
                  attrs: {
                    type: "text",
                    placeholder: "请输入手机号",
                    value: _vm.regist_phone,
                  },
                  on: {
                    input: function ($event) {
                      _vm.regist_phone = $event.detail.value
                    },
                  },
                }),
                _c("view", {}),
              ],
              1
            ),
            _c(
              "view",
              {
                staticClass: ["send-btn"],
                on: {
                  click: function ($event) {
                    _vm.sendCode()
                  },
                },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["send-text"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("发送验证码")]
                ),
              ]
            ),
            _c(
              "view",
              { staticClass: ["input-code"] },
              [
                _c("u-input", {
                  staticClass: ["code-text"],
                  attrs: {
                    type: "text",
                    placeholder: "请输入短信验证码",
                    value: _vm.regist_code,
                  },
                  on: {
                    input: function ($event) {
                      _vm.regist_code = $event.detail.value
                    },
                  },
                }),
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["input-pwd"] },
              [
                _c("u-input", {
                  staticClass: ["pwd-text"],
                  attrs: {
                    type: "safe-password",
                    placeholder: "请输入密码",
                    value: _vm.regist_password,
                  },
                  on: {
                    input: function ($event) {
                      _vm.regist_password = $event.detail.value
                    },
                  },
                }),
              ],
              1
            ),
            _vm._m(4),
            _c("view", { staticClass: ["return-area"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["return-text"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                  on: {
                    click: function ($event) {
                      _vm.tologin()
                    },
                  },
                },
                [_vm._v("返回")]
              ),
            ]),
          ])
        : _vm._e(),
      this.index == 3
        ? _c("view", { staticClass: ["regist-area"] }, [
            _vm._m(5),
            _c(
              "view",
              { staticClass: ["input-phone"] },
              [
                _c("u-input", {
                  staticClass: ["phone-text"],
                  attrs: {
                    type: "text",
                    placeholder: "请输入手机号",
                    value: _vm.regist_phone,
                  },
                  on: {
                    input: function ($event) {
                      _vm.regist_phone = $event.detail.value
                    },
                  },
                }),
                _c("view", {}),
              ],
              1
            ),
            _c(
              "view",
              {
                staticClass: ["send-btn"],
                on: {
                  click: function ($event) {
                    _vm.sendCode()
                  },
                },
              },
              [
                _c(
                  "u-text",
                  {
                    staticClass: ["send-text"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("发送验证码")]
                ),
              ]
            ),
            _c(
              "view",
              { staticClass: ["input-code"] },
              [
                _c("u-input", {
                  staticClass: ["code-text"],
                  attrs: {
                    type: "text",
                    placeholder: "请输入短信验证码",
                    value: _vm.regist_code,
                  },
                  on: {
                    input: function ($event) {
                      _vm.regist_code = $event.detail.value
                    },
                  },
                }),
              ],
              1
            ),
            _vm._m(6),
            _c("view", { staticClass: ["return-area"] }, [
              _c(
                "u-text",
                {
                  staticClass: ["return-text"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                  on: {
                    click: function ($event) {
                      _vm.tologin()
                    },
                  },
                },
                [_vm._v("返回")]
              ),
            ]),
          ])
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", {}, [
      _c(
        "u-text",
        { staticClass: ["or"], appendAsTree: true, attrs: { append: "tree" } },
        [_vm._v("或")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", {}, [
      _c(
        "u-text",
        { staticClass: ["or"], appendAsTree: true, attrs: { append: "tree" } },
        [_vm._v("或")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", {}, [
      _c(
        "u-text",
        {
          staticClass: ["otherway-btn"],
          appendAsTree: true,
          attrs: { append: "tree" },
        },
        [_vm._v("其他方式登录")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["regist-title"] }, [
      _c(
        "u-text",
        {
          staticClass: ["title-main"],
          appendAsTree: true,
          attrs: { append: "tree" },
        },
        [_vm._v("注册")]
      ),
      _c(
        "u-text",
        {
          staticClass: ["title-sub"],
          appendAsTree: true,
          attrs: { append: "tree" },
        },
        [_vm._v("请使用手机号")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["regist-btn-area"] }, [
      _c(
        "u-text",
        {
          staticClass: ["regist-btn-text"],
          appendAsTree: true,
          attrs: { append: "tree" },
        },
        [_vm._v("注册")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["regist-title"] }, [
      _c(
        "u-text",
        {
          staticClass: ["title-main"],
          appendAsTree: true,
          attrs: { append: "tree" },
        },
        [_vm._v("验证码登录")]
      ),
      _c(
        "u-text",
        {
          staticClass: ["title-sub"],
          appendAsTree: true,
          attrs: { append: "tree" },
        },
        [_vm._v("请使用手机号")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["regist-btn-area"] }, [
      _c(
        "u-text",
        {
          staticClass: ["regist-btn-text"],
          appendAsTree: true,
          attrs: { append: "tree" },
        },
        [_vm._v("登录")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),
/* 8 */
/*!***********************************************************************************************************************************!*\
  !*** F:/我的工作/2022-2023服创/代码/RottenPen-frontend/pages/LoginAndRegistPage/subNvue/subNvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./subNvue.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtkLENBQWdCLDJmQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdWJOdnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/我的工作/2022-2023服创/代码/RottenPen-frontend/pages/LoginAndRegistPage/subNvue/subNvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      screenHeight: '',\n      screenwidth: '',\n      src: '',\n      //切换账密登录/手机验证码注册/手机验证码登录\n      index: 1,\n      //注册栏目填入的手机号\n      regist_phone: '',\n      //注册栏目填入的手机验证码\n      regist_code: '',\n      //注册栏目填入的面膜\n      regist_password: '',\n      //登录栏目填入的手机号\n      login_phone: '',\n      //登录栏目填入的密码\n      login_password: ''\n    };\n  },\n  methods: {\n    toRegist: function toRegist() {\n      this.index = 2;\n      __f__(\"log\", \"index: \" + this.index, \" at pages/LoginAndRegistPage/subNvue/subNvue.nvue:135\");\n    },\n    tologin: function tologin() {\n      this.index = 1;\n      __f__(\"log\", \"index: \" + this.index, \" at pages/LoginAndRegistPage/subNvue/subNvue.nvue:139\");\n    },\n    toByCode: function toByCode() {\n      this.index = 3;\n      __f__(\"log\", \"index: \" + this.index, \" at pages/LoginAndRegistPage/subNvue/subNvue.nvue:143\");\n    },\n    sendCode: function sendCode() {\n      //发送短信验证码\n      uni.request({\n        url: 'http://47.100.211.157/lbt/admin-api/system/auth/send-sms-code',\n        method: 'POST',\n        header: {},\n        data: {\n          phone: this.regist_phone\n        },\n        success: function success(res) {\n          uni.showToast({\n            title: \"验证码已发送\"\n          });\n        },\n        fail: function fail() {},\n        complete: function complete() {}\n      });\n    },\n    login: function login() {\n      var that = this;\n      //发起登录请求\n      uni.request({\n        url: getApp().globalData.envprefix + '/admin-api/system/auth/login',\n        method: 'POST',\n        header: {\n          'tenant-id': 1\n        },\n        data: {\n          \"captchaVerification\": \"\",\n          \"password\": that.login_password,\n          \"username\": that.login_phone\n        },\n        success: function success(res) {\n          if (res.data.data.userId != undefined) {\n            //将userId传入全局变量\n            getApp().globalData.userId = res.data.data.userId;\n            //将token存入全局变量\n            getApp().globalData.accessToken = res.data.data.accessToken;\n            //提示登陆成功\n            uni.showToast({\n              icon: 'none',\n              title: \"登录成功\"\n            });\n            //跳转到首页\n            uni.switchTab({\n              url: \"/pages/HomePage/HomePage\"\n            });\n          }\n        }\n      });\n    }\n  },\n  onLoad: function onLoad() {\n    //若用户已经登录，则不需要跳转到此页面\n    // if(getApp().globalData.userId!=\"\" && getApp().globalData.accessToken!=\"\"){\n    // \tconsole.log(\"用户已经登陆，userId：\" + getApp().globalData.userId);\n    // \tuni.switchTab({\n    // \t\turl:\"/pages/HomePage/HomePage\"\n    // \t})\n    // }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvTG9naW5BbmRSZWdpc3RQYWdlL3N1Yk52dWUvc3ViTnZ1ZS5udnVlIl0sIm5hbWVzIjpbImRhdGEiLCJzY3JlZW5IZWlnaHQiLCJzY3JlZW53aWR0aCIsInNyYyIsImluZGV4IiwicmVnaXN0X3Bob25lIiwicmVnaXN0X2NvZGUiLCJyZWdpc3RfcGFzc3dvcmQiLCJsb2dpbl9waG9uZSIsImxvZ2luX3Bhc3N3b3JkIiwibWV0aG9kcyIsInRvUmVnaXN0IiwidG9sb2dpbiIsInRvQnlDb2RlIiwic2VuZENvZGUiLCJ1bmkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJwaG9uZSIsInN1Y2Nlc3MiLCJ0aXRsZSIsImZhaWwiLCJjb21wbGV0ZSIsImxvZ2luIiwiZ2V0QXBwIiwiaWNvbiIsIm9uTG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUErR0E7RUFDQUE7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBO01BQ0FDO01BQ0E7TUFDQUM7TUFDQTtNQUNBQztNQUNBO01BQ0FDO01BQ0E7TUFDQUM7TUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQyxTQUVBO1FBQ0FsQjtVQUNBbUI7UUFDQTtRQUNBQztVQUNBTDtZQUNBTTtVQUNBO1FBQ0E7UUFDQUM7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BRUE7TUFDQTtNQUNBVDtRQUNBQztRQUNBQztRQUNBQztVQUNBO1FBQ0E7UUFDQWxCO1VBQ0E7VUFDQTtVQUNBO1FBQ0E7UUFDQW9CO1VBQ0E7WUFDQTtZQUNBSztZQUNBO1lBQ0FBO1lBQ0E7WUFDQVY7Y0FDQVc7Y0FDQUw7WUFDQTtZQUNBO1lBQ0FOO2NBQ0FDO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FXO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFBQTtBQUdBO0FBQUEsMkIiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8IS0tIDpzdHlsZT1cImhlaWdodDogdGhpcy5zY3JlZW5IZWlnaHQrICdweCcsd2lkdGg6IHRoaXMuc2NyZWVuV2lkdGggKyAncHgnXCIgLS0+XG5cdDx2aWV3IGlkPVwibG9naW5TdWJOVnVlc1wiIGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHJcblx0XHQ8IS0tIOeZu+W9leagj+ebriAtLT5cblx0XHQ8dmlldyBjbGFzcz1cImxvZ2luLWFyZWFcIiB2LWlmPVwidGhpcy5pbmRleD09MVwiPlxyXG5cdFx0XHQ8IS0tIDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAzMHB4O2NvbG9yOiAjZjAwO1wiPui/meaYr+WtkOeql+S9kzwvdGV4dD4gLS0+XHJcblx0XHRcdDx2aWV3IDpjbGFzcz1cIlsndGl0bGUnLCdub2Rpc3BsYXknXVwiID5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLW1haW5cIj5cclxuXHRcdFx0XHRcdOeDgueslOWktFxyXG5cdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLXN1YlwiPlxyXG5cdFx0XHRcdFx05pu05oeC5Lit5Zu955So5oi355qE6K6w6LSm6L2v5Lu2XHJcblx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtcGhvbmVcIj5cclxuXHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwicGhvbmUtaWNvblwiPlxyXG5cdFx0XHRcdFx0PHUtaW1hZ2UgOnNyYz1cInNyY1wiPjwvdS1pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cInBob25lLXRleHRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5omL5py65Y+3XCIgdi1tb2RlbD1cImxvZ2luX3Bob25lXCI+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1wd2RcIj5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJwd2QtdGV4dFwiIHR5cGU9XCJzYWZlLXBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlr4bnoIFcIiB2LW1vZGVsPVwibG9naW5fcGFzc3dvcmRcIj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiIEBjbGljaz1cImxvZ2luKClcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxvZ2luLXRleHRcIj5cclxuXHRcdFx0XHRcdOeZu+W9lVxyXG5cdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpc2hpLWFyZWFcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiICBAY2xpY2s9XCJ0b1JlZ2lzdCgpXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJlZ2lzdC1idG5cIj7ms6jlhow8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yXCI+5oiWPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJieWNvZGUtYnRuXCIgQGNsaWNrPVwidG9CeUNvZGUoKVwiPumqjOivgeeggeeZu+W9lTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JcIj7miJY8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm90aGVyd2F5LWJ0blwiPuWFtuS7luaWueW8j+eZu+W9lTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PCEtLSDms6jlhozmoI/nm64gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cInJlZ2lzdC1hcmVhXCIgdi1pZj1cInRoaXMuaW5kZXg9PTJcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZWdpc3QtdGl0bGVcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLW1haW5cIj7ms6jlhow8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZS1zdWJcIj7or7fkvb/nlKjmiYvmnLrlj7c8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1waG9uZVwiPlxyXG5cdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJwaG9uZS1pY29uXCI+XHJcblx0XHRcdFx0XHQ8dS1pbWFnZSA6c3JjPVwic3JjXCI+PC91LWltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdFx0PGlucHV0IGNsYXNzPVwicGhvbmUtdGV4dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmiYvmnLrlj7dcIiB2LW1vZGVsPVwicmVnaXN0X3Bob25lXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZW5kLWJ0blwiIEBjbGljaz1cInNlbmRDb2RlKClcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNlbmQtdGV4dFwiPuWPkemAgemqjOivgeeggTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWNvZGVcIj5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJjb2RlLXRleHRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl55+t5L+h6aqM6K+B56CBXCIgdi1tb2RlbD1cInJlZ2lzdF9jb2RlXCI+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1wd2RcIj5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJwd2QtdGV4dFwiIHR5cGU9XCJzYWZlLXBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlr4bnoIFcIiB2LW1vZGVsPVwicmVnaXN0X3Bhc3N3b3JkXCI+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZWdpc3QtYnRuLWFyZWFcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJlZ2lzdC1idG4tdGV4dFwiPuazqOWGjDwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJldHVybi1hcmVhXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJyZXR1cm4tdGV4dFwiIEBjbGljaz1cInRvbG9naW4oKVwiPui/lOWbnjwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOmqjOivgeeggeeZu+W9leagj+ebriAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwicmVnaXN0LWFyZWFcIiB2LWlmPVwidGhpcy5pbmRleD09M1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInJlZ2lzdC10aXRsZVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGUtbWFpblwiPumqjOivgeeggeeZu+W9lTwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLXN1YlwiPuivt+S9v+eUqOaJi+acuuWPtzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LXBob25lXCI+XHJcblx0XHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cInBob25lLWljb25cIj5cclxuXHRcdFx0XHRcdDx1LWltYWdlIDpzcmM9XCJzcmNcIj48L3UtaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJwaG9uZS10ZXh0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeaJi+acuuWPt1wiIHYtbW9kZWw9XCJyZWdpc3RfcGhvbmVcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdFx0PCEtLSB7e3RoaXMucmVnaXN0X3Bob25lfX0gLS0+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2VuZC1idG5cIiBAY2xpY2s9XCJzZW5kQ29kZSgpXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJzZW5kLXRleHRcIj7lj5HpgIHpqozor4HnoIE8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1jb2RlXCI+XHJcblx0XHRcdFx0PGlucHV0IGNsYXNzPVwiY29kZS10ZXh0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeefreS/oemqjOivgeeggVwiIHYtbW9kZWw9XCJyZWdpc3RfY29kZVwiPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicmVnaXN0LWJ0bi1hcmVhXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJyZWdpc3QtYnRuLXRleHRcIj7nmbvlvZU8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJyZXR1cm4tYXJlYVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmV0dXJuLXRleHRcIiBAY2xpY2s9XCJ0b2xvZ2luKClcIj7ov5Tlm548L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cbiBcbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2NyZWVuSGVpZ2h0OicnLFxyXG5cdFx0XHRcdHNjcmVlbndpZHRoOicnLFxyXG5cdFx0XHRcdHNyYzonJyxcclxuXHRcdFx0XHQvL+WIh+aNoui0puWvhueZu+W9lS/miYvmnLrpqozor4HnoIHms6jlhowv5omL5py66aqM6K+B56CB55m75b2VXHJcblx0XHRcdFx0aW5kZXg6MSxcclxuXHRcdFx0XHQvL+azqOWGjOagj+ebruWhq+WFpeeahOaJi+acuuWPt1xyXG5cdFx0XHRcdHJlZ2lzdF9waG9uZTonJyxcclxuXHRcdFx0XHQvL+azqOWGjOagj+ebruWhq+WFpeeahOaJi+acuumqjOivgeeggVxyXG5cdFx0XHRcdHJlZ2lzdF9jb2RlOicnLFxyXG5cdFx0XHRcdC8v5rOo5YaM5qCP55uu5aGr5YWl55qE6Z2i6IacXHJcblx0XHRcdFx0cmVnaXN0X3Bhc3N3b3JkOicnLFxyXG5cdFx0XHRcdC8v55m75b2V5qCP55uu5aGr5YWl55qE5omL5py65Y+3XHJcblx0XHRcdFx0bG9naW5fcGhvbmU6JycsXHJcblx0XHRcdFx0Ly/nmbvlvZXmoI/nm67loavlhaXnmoTlr4bnoIFcclxuXHRcdFx0XHRsb2dpbl9wYXNzd29yZDonJyxcclxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0dG9SZWdpc3QoKXtcclxuXHRcdFx0XHR0aGlzLmluZGV4PTI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpbmRleDogXCIgKyB0aGlzLmluZGV4KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b2xvZ2luKCl7XHJcblx0XHRcdFx0dGhpcy5pbmRleD0xO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiaW5kZXg6IFwiICsgdGhpcy5pbmRleClcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9CeUNvZGUoKXtcclxuXHRcdFx0XHR0aGlzLmluZGV4PTM7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpbmRleDogXCIgKyB0aGlzLmluZGV4KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZW5kQ29kZSgpe1xyXG5cdFx0XHRcdC8v5Y+R6YCB55+t5L+h6aqM6K+B56CBXHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiAnaHR0cDovLzQ3LjEwMC4yMTEuMTU3L2xidC9hZG1pbi1hcGkvc3lzdGVtL2F1dGgvc2VuZC1zbXMtY29kZScsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGhlYWRlcjp7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0cGhvbmUgOiB0aGlzLnJlZ2lzdF9waG9uZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOlwi6aqM6K+B56CB5bey5Y+R6YCBXCJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2dpbigpe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHQvL+WPkei1t+eZu+W9leivt+axglxyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS5lbnZwcmVmaXggKyAnL2FkbWluLWFwaS9zeXN0ZW0vYXV0aC9sb2dpbicsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGhlYWRlcjp7XHJcblx0XHRcdFx0XHRcdCd0ZW5hbnQtaWQnOjFcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFwiY2FwdGNoYVZlcmlmaWNhdGlvblwiOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHRcInBhc3N3b3JkXCI6IHRoYXQubG9naW5fcGFzc3dvcmQsXHJcblx0XHRcdFx0XHQgICAgXCJ1c2VybmFtZVwiOiB0aGF0LmxvZ2luX3Bob25lXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEuZGF0YS51c2VySWQhPXVuZGVmaW5lZCl7XHJcblx0XHRcdFx0XHRcdFx0Ly/lsIZ1c2VySWTkvKDlhaXlhajlsYDlj5jph49cclxuXHRcdFx0XHRcdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLnVzZXJJZCA9IHJlcy5kYXRhLmRhdGEudXNlcklkO1xyXG5cdFx0XHRcdFx0XHRcdC8v5bCGdG9rZW7lrZjlhaXlhajlsYDlj5jph49cclxuXHRcdFx0XHRcdFx0XHRnZXRBcHAoKS5nbG9iYWxEYXRhLmFjY2Vzc1Rva2VuID0gcmVzLmRhdGEuZGF0YS5hY2Nlc3NUb2tlbjtcclxuXHRcdFx0XHRcdFx0XHQvL+aPkOekuueZu+mZhuaIkOWKn1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTpcIueZu+W9leaIkOWKn1wiXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQvL+i3s+i9rOWIsOmmlumhtVxyXG5cdFx0XHRcdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOlwiL3BhZ2VzL0hvbWVQYWdlL0hvbWVQYWdlXCJcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cblx0XHR9LFxyXG5cdFx0b25Mb2FkKCl7XHJcblx0XHRcdC8v6Iul55So5oi35bey57uP55m75b2V77yM5YiZ5LiN6ZyA6KaB6Lez6L2s5Yiw5q2k6aG16Z2iXHJcblx0XHRcdC8vIGlmKGdldEFwcCgpLmdsb2JhbERhdGEudXNlcklkIT1cIlwiICYmIGdldEFwcCgpLmdsb2JhbERhdGEuYWNjZXNzVG9rZW4hPVwiXCIpe1xyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKFwi55So5oi35bey57uP55m76ZmG77yMdXNlcklk77yaXCIgKyBnZXRBcHAoKS5nbG9iYWxEYXRhLnVzZXJJZCk7XHJcblx0XHRcdC8vIFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdC8vIFx0XHR1cmw6XCIvcGFnZXMvSG9tZVBhZ2UvSG9tZVBhZ2VcIlxyXG5cdFx0XHQvLyBcdH0pXHJcblx0XHRcdC8vIH1cclxuXHRcdFx0XHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuIFxuPHN0eWxlPlxuXHQuY29udGVudHtcclxuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQudGl0bGV7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC50aXRsZS1tYWlue1xyXG5cdFx0Lyog5oqK5a2X5L2T6LCD5aSnICovXHJcblx0XHRmb250LXNpemU6IDYwcnB4O1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0dGV4dC1zaGFkb3c6ICNGQzAgMXB4IDAgMTBweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHQvKiDmiorlrZfkvZPliqDnspcgKi9cclxuXHRcdC8qIOaKiuWtl+S9k+WxheS4rSAqL1xyXG5cdFx0Lyog57uZ5a2X5L2T5Yqg6Zi05b2xICovXHJcblx0fVxyXG5cdC5sb2dpbi1hcmVhe1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblx0LnRpdGxlLXN1YntcclxuXHRcdC8qIOaKiuWtl+S9k+iwg+WkpyAqL1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xyXG5cdFx0Lyog5oqK5a2X5L2T5bGF5LitICovXHJcblx0XHQvKiDnu5nlrZfkvZPliqDpmLTlvbEgKi9cclxuXHR9XHJcblx0LmlucHV0LXBob25le1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogd2hpdGUgc29saWQgMXB4O1xyXG5cdFx0d2lkdGg6IDQwMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDUwcnB4O1xyXG5cdH1cclxuXHQucGhvbmUtaWNvbntcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHR3aWR0aDogNDBycHg7XHJcblx0fVxyXG5cdC5waG9uZS10ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmlucHV0LXB3ZHtcclxuXHRcdGJvcmRlci1ib3R0b206IHdoaXRlIHNvbGlkIDFweDtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiA1MHJweDtcclxuXHR9XHJcblx0LnB3ZC10ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0LmJ0bntcclxuXHRcdG1hcmdpbi10b3A6IDE1MHJweDtcclxuXHRcdGhlaWdodDogNzBycHg7XHJcblx0XHR3aWR0aDogMTUwcnB4O1xyXG5cdFx0Ym9yZGVyOiB3aGl0ZSBzb2xpZCAxcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuXHR9XHJcblx0LmxvZ2luLXRleHR7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRmb250LXNpemU6IDM1cnB4O1xyXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cclxuXHRcdC8qIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAqL1xyXG5cdH1cclxuXHQudGlzaGktYXJlYXtcclxuXHRcdHdpZHRoOiA1MDBycHg7XHJcblx0XHQvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQucmVnaXN0LWJ0bntcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRtYXJnaW4tdG9wOiAxMDBycHg7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHR9XHJcblx0Lm9ye1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdH1cclxuXHQuYnljb2RlLWJ0bntcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdH1cclxuXHQub3RoZXJ3YXktYnRue1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0fVxyXG5cdC5yZWdpc3QtYXJlYXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdC5yZWdpc3QtdGl0bGV7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LnNlbmQtYnRue1xyXG5cdFx0d2lkdGg6IDIwMHJweDtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0XHRib3JkZXI6IHdoaXRlIHNvbGlkIDAuNXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiA1MHJweDtcclxuXHR9XHJcblx0LnNlbmQtdGV4dHtcclxuXHRcdGNvbG9yOndoaXRlO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHR9XHJcblx0LmlucHV0LWNvZGV7XHJcblx0XHRib3JkZXItYm90dG9tOiB3aGl0ZSBzb2xpZCAxcHg7XHJcblx0XHR3aWR0aDogMjUwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0fVxyXG5cdC5jb2RlLXRleHR7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQucmVnaXN0LWJ0bi1hcmVhe1xyXG5cdFx0bWFyZ2luLXRvcDogMTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiA3MHJweDtcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQucmVnaXN0LWJ0bi10ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAzNXJweDtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHR9XHJcblx0LnJldHVybi1hcmVhe1xyXG5cdFx0bWFyZ2luLXRvcDogMTAwcnB4O1xyXG5cdH1cclxuXHQucmV0dXJuLXRleHR7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0fVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************!*\
  !*** F:/我的工作/2022-2023服创/代码/RottenPen-frontend/pages/LoginAndRegistPage/subNvue/subNvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./subNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_subNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/我的工作/2022-2023服创/代码/RottenPen-frontend/pages/LoginAndRegistPage/subNvue/subNvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".content": {
    "": {
      "display": [
        "flex",
        0,
        0,
        0
      ],
      "alignItems": [
        "center",
        0,
        0,
        0
      ],
      "justifyContent": [
        "center",
        0,
        0,
        0
      ]
    }
  },
  ".title": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        1
      ],
      "alignItems": [
        "center",
        0,
        0,
        1
      ]
    }
  },
  ".title-main": {
    "": {
      "fontSize": [
        "60rpx",
        0,
        0,
        2
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        2
      ],
      "textShadow": [
        "#FC0 1px 0 10px",
        0,
        0,
        2
      ],
      "fontWeight": [
        "600",
        0,
        0,
        2
      ]
    }
  },
  ".login-area": {
    "": {
      "display": [
        "flex",
        0,
        0,
        3
      ],
      "alignItems": [
        "center",
        0,
        0,
        3
      ],
      "justifyContent": [
        "center",
        0,
        0,
        3
      ]
    }
  },
  ".title-sub": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        4
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        4
      ],
      "marginTop": [
        "10rpx",
        0,
        0,
        4
      ]
    }
  },
  ".input-phone": {
    "": {
      "borderBottomWidth": [
        "1",
        0,
        0,
        5
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        5
      ],
      "borderBottomColor": [
        "#FFFFFF",
        0,
        0,
        5
      ],
      "width": [
        "400rpx",
        0,
        0,
        5
      ],
      "marginTop": [
        "50rpx",
        0,
        0,
        5
      ]
    }
  },
  ".phone-icon": {
    "": {
      "height": [
        "40rpx",
        0,
        0,
        6
      ],
      "width": [
        "40rpx",
        0,
        0,
        6
      ]
    }
  },
  ".phone-text": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        7
      ],
      "textAlign": [
        "center",
        0,
        0,
        7
      ]
    }
  },
  ".input-pwd": {
    "": {
      "borderBottomWidth": [
        "1",
        0,
        0,
        8
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        8
      ],
      "borderBottomColor": [
        "#FFFFFF",
        0,
        0,
        8
      ],
      "width": [
        "400rpx",
        0,
        0,
        8
      ],
      "marginTop": [
        "50rpx",
        0,
        0,
        8
      ]
    }
  },
  ".pwd-text": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        9
      ],
      "textAlign": [
        "center",
        0,
        0,
        9
      ]
    }
  },
  ".btn": {
    "": {
      "marginTop": [
        "150rpx",
        0,
        0,
        10
      ],
      "height": [
        "70rpx",
        0,
        0,
        10
      ],
      "width": [
        "150rpx",
        0,
        0,
        10
      ],
      "borderWidth": [
        "1",
        0,
        0,
        10
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        10
      ],
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        10
      ],
      "borderRadius": [
        "50rpx",
        0,
        0,
        10
      ],
      "alignItems": [
        "center",
        0,
        0,
        10
      ],
      "justifyContent": [
        "center",
        0,
        0,
        10
      ]
    }
  },
  ".login-text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        11
      ],
      "fontSize": [
        "35rpx",
        0,
        0,
        11
      ]
    }
  },
  ".tishi-area": {
    "": {
      "width": [
        "500rpx",
        0,
        0,
        12
      ],
      "alignItems": [
        "center",
        0,
        0,
        12
      ],
      "justifyContent": [
        "center",
        0,
        0,
        12
      ]
    }
  },
  ".regist-btn": {
    "": {
      "fontSize": [
        "40rpx",
        0,
        0,
        13
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        13
      ],
      "marginTop": [
        "100rpx",
        0,
        0,
        13
      ],
      "textDecoration": [
        "underline",
        0,
        0,
        13
      ]
    }
  },
  ".or": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        14
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        14
      ],
      "marginTop": [
        "20rpx",
        0,
        0,
        14
      ]
    }
  },
  ".bycode-btn": {
    "": {
      "fontSize": [
        "40rpx",
        0,
        0,
        15
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        15
      ],
      "marginTop": [
        "20rpx",
        0,
        0,
        15
      ],
      "textDecoration": [
        "underline",
        0,
        0,
        15
      ]
    }
  },
  ".otherway-btn": {
    "": {
      "fontSize": [
        "40rpx",
        0,
        0,
        16
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        16
      ],
      "marginTop": [
        "20rpx",
        0,
        0,
        16
      ],
      "textDecoration": [
        "underline",
        0,
        0,
        16
      ]
    }
  },
  ".regist-area": {
    "": {
      "display": [
        "flex",
        0,
        0,
        17
      ],
      "alignItems": [
        "center",
        0,
        0,
        17
      ],
      "justifyContent": [
        "center",
        0,
        0,
        17
      ]
    }
  },
  ".regist-title": {
    "": {
      "display": [
        "flex",
        0,
        0,
        18
      ],
      "alignItems": [
        "center",
        0,
        0,
        18
      ]
    }
  },
  ".send-btn": {
    "": {
      "width": [
        "200rpx",
        0,
        0,
        19
      ],
      "height": [
        "60rpx",
        0,
        0,
        19
      ],
      "borderWidth": [
        "0.5",
        0,
        0,
        19
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        19
      ],
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        19
      ],
      "borderRadius": [
        "1000rpx",
        0,
        0,
        19
      ],
      "display": [
        "flex",
        0,
        0,
        19
      ],
      "alignItems": [
        "center",
        0,
        0,
        19
      ],
      "justifyContent": [
        "center",
        0,
        0,
        19
      ],
      "marginTop": [
        "50rpx",
        0,
        0,
        19
      ]
    }
  },
  ".send-text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        20
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        20
      ]
    }
  },
  ".input-code": {
    "": {
      "borderBottomWidth": [
        "1",
        0,
        0,
        21
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        21
      ],
      "borderBottomColor": [
        "#FFFFFF",
        0,
        0,
        21
      ],
      "width": [
        "250rpx",
        0,
        0,
        21
      ],
      "marginTop": [
        "30rpx",
        0,
        0,
        21
      ]
    }
  },
  ".code-text": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        22
      ],
      "textAlign": [
        "center",
        0,
        0,
        22
      ]
    }
  },
  ".regist-btn-area": {
    "": {
      "marginTop": [
        "100rpx",
        0,
        0,
        23
      ],
      "height": [
        "70rpx",
        0,
        0,
        23
      ],
      "width": [
        "150rpx",
        0,
        0,
        23
      ],
      "borderWidth": [
        "1",
        0,
        0,
        23
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        23
      ],
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        23
      ],
      "borderRadius": [
        "50rpx",
        0,
        0,
        23
      ],
      "alignItems": [
        "center",
        0,
        0,
        23
      ],
      "justifyContent": [
        "center",
        0,
        0,
        23
      ]
    }
  },
  ".regist-btn-text": {
    "": {
      "fontSize": [
        "35rpx",
        0,
        0,
        24
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        24
      ]
    }
  },
  ".return-area": {
    "": {
      "marginTop": [
        "100rpx",
        0,
        0,
        25
      ]
    }
  },
  ".return-text": {
    "": {
      "textDecoration": [
        "underline",
        0,
        0,
        26
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        26
      ],
      "fontSize": [
        "35rpx",
        0,
        0,
        26
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);