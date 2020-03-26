const path = require('path') //objet pour gerer les liens

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    devtool: 'source-map',
    devServer : {
        contentBase : './dist',
        open: true,
        host : '0.0.0.0',
        useLocalIp: true
    },
    entry : path.resolve(__dirname, '../src/index.js'), //entrée vers notre projet //chemin vers le fichier
    output : 
    {
        filename: 'bundle.[hash].js',
        path : path.resolve(__dirname, '../dist')
    },
    plugins: 
    [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin([ { from: 'static'} ]),
        new VueLoaderPlugin()
    ],
    module: 
    {
        rules: 
        [
            {
                test : /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : ['babel-loader']
            },
            {
                test : /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test : /\.styl$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
            },
            {
                test : /\.vue$/,
                use: ['vue-loader'],
            },
            {
                test : /\.scss$/,
                use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: [ 
                    {
                        loader : 'file-loader',
                        options: { outputPath : 'images/' }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use: [ 
                    {
                        loader : 'file-loader',
                        options: { outputPath : 'fonts/' }
                    }
                ]
            },
            {
                test: /\.(glb|gltf|bin)$/,
                use: [ 
                    {
                        loader : 'file-loader',
                        options: { outputPath : 'models/' }
                    }
                ]
            },
            {
                test: /\.(mp3)$/,
                use: [ 
                    {
                        loader : 'file-loader',
                        options: { outputPath : 'songs/' }
                    }
                ]
            }
        ]
    }
}