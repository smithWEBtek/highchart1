process.env.NODE_ENV = process.env.NODE_ENV || 'development'

NYT_API_KEY = process.env.NYT_API_KEY

const environment = require('./environment')

module.exports = environment.toWebpackConfig()
