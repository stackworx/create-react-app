// @remove-file-on-eject
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  plugins: [
    (() => {
      try {
        return [require.reolve('babel-plugin-emotion'), { hoist: true }];
      } catch (ex) {
        return null;
      }
    })(),
    (() => {
      try {
        return require.resolve('babel-plugin-relay');
      } catch (ex) {
        return null;
      }
    })(),
  ].filter(Boolean),
  presets: [
    [
      require.resolve('babel-preset-react-app'),
      {
        flow: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  babelrc: false,
  configFile: false,
});
