import handler from './proxyHandler'

const x = new Proxy({hello: 'world', then: undefined}, handler)

export const __useDefault = x
export default __useDefault
