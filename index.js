const obfuscator = require('javascript-obfuscator')


class ObfuscatorOptimizer {

  constructor(config) {
    this.options = Object.assign({}, {
      mangle: true,
      stringArrayEncoding: true
    }, config.plugins.obfuscator || {})
  }

  optimize(file) {
    return new Promise((resolve, reject) => {
      resolve(obfuscator.obfuscate(file.data, this.options).getObfuscatedCode())
    })
  }
}

ObfuscatorOptimizer.prototype.brunchPlugin = true
ObfuscatorOptimizer.prototype.type = 'javascript'

module.exports = ObfuscatorOptimizer
