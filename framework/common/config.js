

const path = require("path")
const merge = require("deepmerge")

function withFrameworkConfig(defaultConfig = {}) {
  const framework = "shopify"

  
  // ../shopify/next.config
  const frameworkNetConfig = require(path.join("../", framework, "next.config"))

const config = merge(defaultConfig, frameworkNetConfig)

return config
}

module.exports = { withFrameworkConfig }