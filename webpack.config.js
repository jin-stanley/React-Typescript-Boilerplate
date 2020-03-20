const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = () => {
  const env = dotenv.config().parsed
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  const config = {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devtool: 'inline-source-map', // A SourceMap is added as a DataUrl to the bundle. When make it as production, please delete it
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        API: path.resolve(__dirname, 'src/api'),
        Assets: path.resolve(__dirname, 'src/assets'),
        Components: path.resolve(__dirname, 'src/components'),
        Containers: path.resolve(__dirname, 'src/containers'),
        Pages: path.resolve(__dirname, 'src/pages'),
        Mocks: path.resolve(__dirname, 'src/mocks'),
        Theme: path.resolve(__dirname, 'src/theme'),
        Routes: path.resolve(__dirname, 'src/routes'),
        Hooks: path.resolve(__dirname, 'src/hooks'),
        Helper: path.resolve(__dirname, 'src/helper'),
      },
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dist'),
      host: '0.0.0.0',
      port: 8080,
      disableHostCheck: true, // When make it as production, please change to false
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    regenerator: true,
                  },
                ],
              ],
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(ttf|eot|gif|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['svg-inline-loader'],
          // use: ['@svgr/webpack'],
        },
      ],
    },
  }

  return config
}
