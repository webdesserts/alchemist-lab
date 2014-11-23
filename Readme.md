Lab
===

The official Lab color-space plugin for alchemist.js.

Usage
-----

### Node

By default alchemist-lab is included in `alchemist.common`.

```js
  var alchemist = require('alchemist-js')
  alchemist.use(alchemist.common())
  var color = alchemize.lab(255,255,255)
```

If you are not using `alchemist.common` you can instead use this library directly

```js
  var alchemist = require('alchemist-js')
  var lab = require('alchemist-lab')
  alchemist.use(lab)
```

### Web

[coming soon]
