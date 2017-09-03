import handler from './proxyHandler'

const x = new Proxy({hello: 'world'}, handler)

export const __useDefault = {x}
export default __useDefault
