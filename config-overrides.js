/* eslint-disable react-hooks/rules-of-hooks */
const { override, useBabelRc, addWebpackModuleRule, addBabelPreset } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  addBabelPreset('@babel/preset-react'),
  addWebpackModuleRule({
    test: /\.(js)$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: '@linaria/webpack-loader',
        options: {
          cacheDirectory: 'src/.linaria_cache',
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      },
    ],
  }),
);
