const config = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
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