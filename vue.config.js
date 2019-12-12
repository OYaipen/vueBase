const path = require("path");

module.exports = {
    devServer: {
        port: 3000
    },
    outputDir: './dist',
    chainWebpack: config => {
        config
            .entry("app")
            .clear()
            .add("./vue/app.js")
            .end();
        config.resolve.alias
            .set("~", path.join(__dirname, "./vue"))
    }
};