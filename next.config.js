// next.config.js
const webpack = require('webpack'); // eslint-disable-line

const FRONTEND_ENV_KEYS = ['APPLICATION_URL', 'MEETUP_APP_KEY'];

const envPlugin = FRONTEND_ENV_KEYS.reduce(
  (result, key) => Object.assign({}, result, { [`process.env.${key}`]: JSON.stringify(process.env[key]) }), {} // eslint-disable-line comma-dangle
);

module.exports = {
  webpack(cfg) {
    // make selected env vars avail on client
    cfg.plugins.push(new webpack.DefinePlugin(envPlugin));
    return cfg;
  },
};
