const { environment } = require('@rails/webpacker')

// jqueryを使える設定
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })

)

// sassを複数importする設定
// $ yarn add import-glob-loaderをしてから
const globCssImporter = require('node-sass-glob-importer');

environment.loaders.get('sass')
  .use
  .find(item => item.loader === 'sass-loader')
  .options
  .sassOptions = {importer: globCssImporter()};

module.exports = environment
