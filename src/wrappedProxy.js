import handler from './proxyHandler'

const x = new Proxy({hello: 'world'}, handler)

export default {x}
