const webpack = require('webpack');

module.exports = function override (config, env) {
    console.log('override')
    // config.resolve.fallback = {
    //     // existing configs...
    //     url: require.resolve('url'),
    //     assert: require.resolve('assert'),
    //     crypto: require.resolve('crypto-browserify'),
    //     http: require.resolve('stream-http'),
    //     https: require.resolve('https-browserify'),
    //     os: require.resolve('os-browserify/browser'),
    //     buffer: require.resolve('buffer'),
    //     stream: require.resolve('stream-browserify'),
    // };
    return config;
}