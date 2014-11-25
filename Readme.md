Lab
===

The official Lab color-space plugin for alchemist.js.

Usage
-----

### Node

By default alchemist-lab is included in `alchemist.common`.

```js
  var alchemist = require('alchemist-js').create()
  alchemist.use(alchemist.common())
  var color = alchemize.lab(70,14,-10)
```

If you are not using `alchemist.common` you can instead use this library directly

```js
  var alchemist = require('alchemist-js').create()
  var lab = require('alchemist-lab')
  alchemist.use(lab())
```

### Web

[coming soon]

Special Thanks
--------------

Special thanks to Bruce Lindbloom not only for his color formulas
but for his color converter as well, both of which played a major
role in this module.

You can find his site here:
http://www.brucelindbloom.com/

Other than Bruce, many people and projects inspired alchemist as a whole. They
are listed here:

- [chroma.js](https://github.com/gka/chroma.js)
- [color-convert](https://github.com/harthur/color-convert)
- [colormine](https://github.com/colormine/colormine)
- [d3.js](https://github.com/mbostock/d3/wiki/Colors)
- and many more...

Thanks to all of you!
