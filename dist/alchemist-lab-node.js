module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

/*
 * Alchemist-lab
 *
 * Author: Michael C. Mullins
 * License: MIT
 *
 * Special thanks to Bruce Lindbloom not only for his color formulas
 * but for his color converter as well, both of which played a major
 * role in this module.
 *
 * You can find his site here:
 * http://www.brucelindbloom.com/
 *
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = lab;

function lab() {
  return function Initializer(alchemist) {
    var kE = 216 / 24389; // 0.08856
    var kK = 24389 / 27; // 903.3
    var kKE = 8;
    var rW = alchemist.white;

    return {
      name: 'lab',
      to: {
        'xyz': function xyz(L, a, b) {
          var fy = (L + 16.0) / 116.0;
          var fx = 0.002 * a + fy;
          var fz = fy - 0.005 * b;

          var fx3 = fx * fx * fx;
          var fz3 = fz * fz * fz;

          var xr = fx3 > kE ? fx3 : (116.0 * fx - 16.0) / kK;
          var yr = L > kKE ? Math.pow((L + 16.0) / 116.0, 3.0) : L / kK;
          var zr = fz3 > kE ? fz3 : (116.0 * fz - 16.0) / kK;

          var X = xr * rW.X;
          var Y = yr * rW.Y;
          var Z = zr * rW.Z;

          return [X, Y, Z];
        }
      },
      from: {
        'xyz': function xyz(X, Y, Z) {
          var f = function f(x) {
            return x > kE ? Math.pow(x, 1 / 3) : (kK * x + 16) / 116;
          };

          // Values adjusted to reference white and ran through adjustment curve
          var fx = f(X / rW.X);
          var fy = f(Y / rW.Y);
          var fz = f(Z / rW.Z);

          var L = 116 * fy - 16;
          var a = 500 * (fx - fy);
          var b = 200 * (fy - fz);

          return [L, a, b];
        }
      }
    };
  };
}

module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWZkYmIxZTQxZjYyMWI0Y2Y2N2MiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDdkJ3QixHQUFHOztBQUFaLFNBQVMsR0FBRyxHQUFJO0FBQzdCLFNBQU8sU0FBUyxXQUFXLENBQUUsU0FBUyxFQUFFO0FBQ3RDLFFBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLO0FBQ3BCLFFBQUksRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFFO0FBQ25CLFFBQUksR0FBRyxHQUFHLENBQUM7QUFDWCxRQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSzs7QUFFeEIsV0FBTztBQUNMLFVBQUksRUFBRSxLQUFLO0FBQ1gsUUFBRSxFQUFFO0FBQ0YsYUFBSyxFQUFFLGFBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDeEIsY0FBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLEtBQUssQ0FBQztBQUM1QixjQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN4QixjQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFeEIsY0FBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDdkIsY0FBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7O0FBRXZCLGNBQUksRUFBRSxHQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUksR0FBRyxHQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRyxDQUFDO0FBQ3ZELGNBQUksRUFBRSxHQUFJLENBQUMsR0FBRyxHQUFHLEdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFJLENBQUMsR0FBRyxFQUFHLENBQUM7QUFDbEUsY0FBSSxFQUFFLEdBQUksR0FBRyxHQUFHLEVBQUUsR0FBSSxHQUFHLEdBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFHLENBQUM7O0FBRXZELGNBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUVsQixpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO09BQ0Y7QUFDRCxVQUFJLEVBQUU7QUFDSixhQUFLLEVBQUUsYUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN4QixjQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBRSxDQUFDLEVBQUU7QUFDckIsbUJBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFJO1dBQzdEOzs7QUFHRCxjQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEIsY0FBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLGNBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFcEIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3JCLGNBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDOztBQUV2QixpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO09BQ0Y7S0FDRjtHQUNGO0NBQ0YiLCJmaWxlIjoiYWxjaGVtaXN0LWxhYi1ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZmRiYjFlNDFmNjIxYjRjZjY3Y1xuICoqLyIsIi8qXG4gKiBBbGNoZW1pc3QtbGFiXG4gKlxuICogQXV0aG9yOiBNaWNoYWVsIEMuIE11bGxpbnNcbiAqIExpY2Vuc2U6IE1JVFxuICpcbiAqIFNwZWNpYWwgdGhhbmtzIHRvIEJydWNlIExpbmRibG9vbSBub3Qgb25seSBmb3IgaGlzIGNvbG9yIGZvcm11bGFzXG4gKiBidXQgZm9yIGhpcyBjb2xvciBjb252ZXJ0ZXIgYXMgd2VsbCwgYm90aCBvZiB3aGljaCBwbGF5ZWQgYSBtYWpvclxuICogcm9sZSBpbiB0aGlzIG1vZHVsZS5cbiAqXG4gKiBZb3UgY2FuIGZpbmQgaGlzIHNpdGUgaGVyZTpcbiAqIGh0dHA6Ly93d3cuYnJ1Y2VsaW5kYmxvb20uY29tL1xuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYWIgKCkge1xuICByZXR1cm4gZnVuY3Rpb24gSW5pdGlhbGl6ZXIgKGFsY2hlbWlzdCkge1xuICAgIHZhciBrRSA9IDIxNiAvIDI0Mzg5IC8vIDAuMDg4NTZcbiAgICB2YXIga0sgPSAyNDM4OSAvIDI3IC8vIDkwMy4zXG4gICAgdmFyIGtLRSA9IDhcbiAgICB2YXIgclcgPSBhbGNoZW1pc3Qud2hpdGVcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAnbGFiJyxcbiAgICAgIHRvOiB7XG4gICAgICAgICd4eXonOiBmdW5jdGlvbiAoTCwgYSwgYikge1xuICAgICAgICAgIHZhciBmeSA9IChMICsgMTYuMCkgLyAxMTYuMDtcbiAgICAgICAgICB2YXIgZnggPSAwLjAwMiAqIGEgKyBmeTtcbiAgICAgICAgICB2YXIgZnogPSBmeSAtIDAuMDA1ICogYjtcblxuICAgICAgICAgIHZhciBmeDMgPSBmeCAqIGZ4ICogZng7XG4gICAgICAgICAgdmFyIGZ6MyA9IGZ6ICogZnogKiBmejtcblxuICAgICAgICAgIHZhciB4ciA9IChmeDMgPiBrRSkgPyBmeDMgOiAoKDExNi4wICogZnggLSAxNi4wKSAvIGtLKTtcbiAgICAgICAgICB2YXIgeXIgPSAoTCA+IGtLRSkgPyBNYXRoLnBvdygoTCArIDE2LjApIC8gMTE2LjAsIDMuMCkgOiAoTCAvIGtLKTtcbiAgICAgICAgICB2YXIgenIgPSAoZnozID4ga0UpID8gZnozIDogKCgxMTYuMCAqIGZ6IC0gMTYuMCkgLyBrSyk7XG5cbiAgICAgICAgICB2YXIgWCA9IHhyICogclcuWDtcbiAgICAgICAgICB2YXIgWSA9IHlyICogclcuWTtcbiAgICAgICAgICB2YXIgWiA9IHpyICogclcuWjtcblxuICAgICAgICAgIHJldHVybiBbWCwgWSwgWl1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZyb206IHtcbiAgICAgICAgJ3h5eic6IGZ1bmN0aW9uIChYLCBZLCBaKSB7XG4gICAgICAgICAgdmFyIGYgPSBmdW5jdGlvbiBmICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gKHggPiBrRSkgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoKGtLICogeCArIDE2KSAvIDExNilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBWYWx1ZXMgYWRqdXN0ZWQgdG8gcmVmZXJlbmNlIHdoaXRlIGFuZCByYW4gdGhyb3VnaCBhZGp1c3RtZW50IGN1cnZlXG4gICAgICAgICAgdmFyIGZ4ID0gZihYIC8gclcuWClcbiAgICAgICAgICB2YXIgZnkgPSBmKFkgLyByVy5ZKVxuICAgICAgICAgIHZhciBmeiA9IGYoWiAvIHJXLlopXG5cbiAgICAgICAgICB2YXIgTCA9IDExNiAqIGZ5IC0gMTZcbiAgICAgICAgICB2YXIgYSA9IDUwMCAqIChmeCAtIGZ5KVxuICAgICAgICAgIHZhciBiID0gMjAwICogKGZ5IC0gZnopXG5cbiAgICAgICAgICByZXR1cm4gW0wsIGEsIGJdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9