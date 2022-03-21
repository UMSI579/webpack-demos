const config = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.optimization = {
      minimize: false
    };
  }

  return config;
};
