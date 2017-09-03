const SystemJS = require('systemjs')

const originalImport = SystemJS.import

SystemJS.import = (modName) => {
  return originalImport.call(SystemJS, modName)
    .catch(err => {
      const fullName = SystemJS.resolveSync(modName)
      if (SystemJS.registry.has(fullName)) {
        m = SystemJS.registry.get(fullName)
        m = '__useDefault' in m ? m.__useDefault : m
        m.then = 'then' in m ? m.then : undefined
        return m
      } else {
        throw err
      }
    })
}
