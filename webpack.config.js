const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const publicDir = '/';

  return {
    entry: `${path.join(__dirname, './src')}/js`,
    output: {
      filename: 'js/[name].[hash].js',
      path: path.join(__dirname, './build'),
      publicPath: publicDir,
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: [path.join(__dirname, 'src')],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          exclude: [/fonts/, /static/],
          options: {
            name: './img/[name].[ext]',
            publicPath: '../',
          },
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          exclude: [/components/, /img/, /static/],
          use: {
            loader: 'file-loader',
            options: {
              name: './fonts/[name].[ext]',
              publicPath: '../',
            },
          },
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules/',
        },
        {
          test: /\.(svg|png|ico|xml|json)$/,
          exclude: [/fonts/, /components/, /img/, /node_modules/],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: './[name].[ext]',
                publicPath: '../',
              },
            },
          ],
        },
      ],
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /node_modules/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    devServer: {
      contentBase: './build',
      port: 3000,
      overlay: {
        warnings: true,
        errors: true,
      },
      watchOptions: {
        ignored: /node_modules/,
      },
    },
    devtool: isProduction ? false : 'eval-sourcemap',
    plugins: [
      Autoprefixer,

      new MiniCssExtractPlugin({
        filename: './css/[name].[hash].css',
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
      }),
    ],
  };
};
