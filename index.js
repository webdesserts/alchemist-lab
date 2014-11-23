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

