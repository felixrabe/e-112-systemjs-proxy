#!/usr/bin/env node

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

Promise.resolve()

  .then(() => SystemJS.import('./src/object'))
  .then(x => console.log('object:', x.default.hello))

  .then(() => SystemJS.import('./src/objectUseDefault'))
  .then(x => console.log('objectUseDefault:', x.hello))

  .then(() => SystemJS.import('./src/wrappedProxy'))
  .then(x => console.log('wrappedProxy:', x.default.x.hello))

  .then(() => SystemJS.import('./src/wrappedProxyUseDefault'))
  .then(x => console.log('wrappedProxyUseDefault:', x.x.hello))

  .then(() => SystemJS.import('./src/proxy'))
  .then(x => console.log('proxy:', x.default.hello))

  .then(() => SystemJS.import('./src/proxyUseDefault'))
  .then(x => console.log('proxyUseDefault:', x.hello))

  .catch(err => console.error(err))
