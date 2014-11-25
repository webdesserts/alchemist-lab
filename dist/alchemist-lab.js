(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["alchemist_lab"] = factory();
	else
		root["alchemist_lab"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = function lab () {
  var kE = 216 / 24389 // 0.08856
  var kK = 24389 / 27 // 903.3
  var kKE = 8

  return {
    name: 'lab',
    to: {
      'xyz': function (L, a, b, color) {
        var rW = color.white

        var fy = (L + 16.0) / 116.0;
        var fx = 0.002 * a + fy;
        var fz = fy - 0.005 * b;

        var fx3 = fx * fx * fx;
        var fz3 = fz * fz * fz;

        var xr = (fx3 > kE) ? fx3 : ((116.0 * fx - 16.0) / kK);
        var yr = (L > kKE) ? Math.pow((L + 16.0) / 116.0, 3.0) : (L / kK);
        var zr = (fz3 > kE) ? fz3 : ((116.0 * fz - 16.0) / kK);

        var X = xr * rW.X;
        var Y = yr * rW.Y;
        var Z = zr * rW.Z;

        return [X, Y, Z]
      }
    },
    from: {
      'xyz': function (X, Y, Z, color) {
        var rW = color.white
        var f = function f (x) {
          return (x > kE) ? Math.pow(x, 1 / 3) : ((kK * x + 16) / 116)
        }

        // Values adjusted to reference white and ran through adjustment curve
        var fx = f(X / rW.X)
        var fy = f(Y / rW.Y)
        var fz = f(Z / rW.Z)

        var L = 116 * fy - 16
        var a = 500 * (fx - fy)
        var b = 200 * (fy - fz)

        return [L, a, b]
      }
    }
  }
}


/***/ }
/******/ ])
});
