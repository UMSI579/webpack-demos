const config = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.optimization = {
      minimize: false
    };
  }

  return config;
};
// If we didn't need something conditional like 👆 does for
// development mode this could just be
// module.exports = {
//   entry: './main.js',
//   output: {
//      filename: 'bundle.js',
//   },
// };
