export default {
  get: (t, n, p) => {
    if (n in t) {
      return t[n]
    } else {
      throw new TypeError(`undefined property '${n}'`)
    }
  },
}
