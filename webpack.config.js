if (process.env.NODE_ENV === 'dev') {
  module.exports = require('./webpack.config.dev.js') // eslint-disable-line global-require
} else {
  module.exports = require('./webpack.config.prod.js') // eslint-disable-line global-require
}
