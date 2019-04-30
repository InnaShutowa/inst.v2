
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "./main.js"
    },
    devServer: {
        contentBase: "C:\\inst.v2",
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};