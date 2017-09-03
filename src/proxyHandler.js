export default {
  get: (t, n, p) => {
    if (t[n]) {
      return t[n]
    } else {
      throw new TypeError(`undefined property '${n}'`)
    }
  },
}
