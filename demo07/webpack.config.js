const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Demo 7: HTML and Open Browser Plugins',
      filename: 'index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080/'
    })
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.optimization = {
      minimize: false
    };
  }

  return config;
};
