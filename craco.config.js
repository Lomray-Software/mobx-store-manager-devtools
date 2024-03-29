const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
        output: {
          ...webpackConfig.output,
          filename: '[name].bundle.js',
          chunkFilename: '[id].chunk.js',
        },
      };
    },
  },
};
