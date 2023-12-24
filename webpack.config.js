const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { FilesNamesWriterToJsonPlugin } = require('./plugins/files-names-writer-plugin.js');

module.exports = {
    entry: "./src/app.js", //relative to root of the application
    output: {
        filename: "./app.bundle.js" //relative to root of the application
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Getting the image',
            myPageHeader: 'Getting the image',
            template: './src/index.html',
            filename: './index.html', //relative to root of the application
            favicon: './src/favicon.ico',
        }),
        new FilesNamesWriterToJsonPlugin({ 
            targetFolder: './photos', 
            outputFolder: './photos'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "photos/*" },
            ]
        }),
    ]
};