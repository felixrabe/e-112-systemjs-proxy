const SystemJS = require('systemjs')

SystemJS.config({
  map: {
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-node.js',
  },
  transpiler: 'plugin-babel',
  packages: {
    './src': {
      defaultExtension: 'js',
    },
  },
})
