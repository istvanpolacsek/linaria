/* eslint-disable react-hooks/rules-of-hooks */
const {
  override,
  useBabelRc,
  addWebpackModuleRule,
  addBabelPresets,
  addBabelPlugins,
} = require('customize-cra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const presets = [
  ['@babel/preset-react', { runtime: 'automatic' }],
  '@babel/preset-env',
  '@linaria',
];

const plugins = [
  '@babel/plugin-syntax-jsx',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-throw-expressions',
  '@babel/plugin-proposal-class-properties',
  new MiniCssExtractPlugin({ filename: 'styles.css' }),
];

const rules = {
  js: {
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
  },
};

module.exports = override(
  useBabelRc(),
  addBabelPresets(...presets),
  addBabelPlugins(...plugins),
  addWebpackModuleRule(rules.js),
)
;
