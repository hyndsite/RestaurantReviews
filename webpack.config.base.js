const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");




module.exports = function(babelQuery) {
    return {
        target: "node",
        plugins: [
            new ExtractTextPlugin("styles.css")
        ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    include: [path.join(__dirname, "shared")],
                    loader: "babel",
                    exclude: /node_modules/,
                    query: babelQuery,
                }
            ]
        }
    };
};
