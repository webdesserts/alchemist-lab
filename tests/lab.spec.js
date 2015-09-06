import Alchemist from 'alchemist-js'
import lab from '../'

describe('lab', function () {
  var alchemist, xyz, ref_white;

  before(function () {
    alchemist = Alchemist.create({ precision: 4, limits: 'nullify' })
    xyz = { name: 'xyz', to: {} }
    alchemist.use(lab())
    alchemist.use(xyz)
    var white = alchemist.white
    ref_white = [white.X, white.Y, white.Z]
  })

  describe('to xyz', function () {
    it('should convert', function () {
      expect(alchemist.lab(50, 20, -30).xyz()).to.deep.eq([0.2146, 0.1842, 0.4047])
    })
    it('handles greys well', function () {
      expect(alchemist.lab(50, 0, 0).xyz()).to.deep.eq([0.1751, 0.1842, 0.2005])
    })
    it('handles black well', function () {
      expect(alchemist.lab(0, 0, 0).xyz()).to.deep.eq([0, 0, 0])
    })
    it('handles white well', function () {
      expect(alchemist.lab(100, 0, 0).xyz()).to.deep.eq([0.9505, 1, 1.089])
    })
  })

  describe('from xyz', function () {
    it('should convert', function () {
      expect(alchemist.xyz(.50, .50, .50).lab()).to.deep.eq([76.07, 6.7770, 4.44])
    })
    it('handles greys well', function () {
      expect(alchemist.xyz(0.175064, 0.184187, 0.200548).lab()).to.deep.eq([50, -0.000118, 0.00006264])
    })
    it('handles black well', function () {
      expect(alchemist.xyz(0, 0, 0).lab()).to.deep.eq([0, 0, 0])
    })
    it('handles white well', function () {
      expect(alchemist.xyz(ref_white).lab()).to.deep.eq([100, 0, 0])
    })
  })
})
