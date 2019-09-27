const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    const SRC = path.resolve(__dirname, 'src');
    const config = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            filename: '[hash].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        devtool: 'inline-source-map',
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                API: path.resolve(__dirname, 'src/api/'),
                Assets: path.resolve(__dirname, 'src/assets/'),
                Components: path.resolve(__dirname, 'src/components/'),
                Containers: path.resolve(__dirname, 'src/containers/'),
                Pages: path.resolve(__dirname, 'src/pages/'),
                Theme: path.resolve(__dirname, 'src/theme/'),
            },
        },
        devServer: {
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'dist'),
            host: '0.0.0.0',
            port: 4001,
            disableHostCheck: true,
        },
        plugins: [
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
                    use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
                },
                {
                    test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    include: SRC,
                    use: [{
                        loader: 'file-loader'
                    }]
                },
            ],
        },
    };

    return config;
};
