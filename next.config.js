module.exports = {
  distDir:'dist',
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }
}