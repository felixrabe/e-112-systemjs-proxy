This repository explores a misunderstanding (or bug) in the usage of SystemJS
0.20.18 when used together with Proxy objects.

To run: `./index.js`

Actual output:

    $ ./index.js
    object: world
    objectUseDefault: world
    wrappedProxy: world
    wrappedProxyUseDefault: world
    proxy: world
    TypeError: undefined property 'then'
        at Object.get (.../112-systemjs-proxy/src/proxyHandler.js!transpiled:12:19)
        at <anonymous>

Expected output:

    $ ./index.js
    object: world
    objectUseDefault: world
    wrappedProxy: world
    wrappedProxyUseDefault: world
    proxy: world
    proxyUseDefault: world

`./indexWithImportWorkaround.js` shows how to patch `SystemJS.import` to solve
the issue, while `./indexWithProxyFix.js` adds a `then` property to the
proxied object to solve the issue.
