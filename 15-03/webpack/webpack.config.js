//this is for the plugin 
const HtmlWebpackPlugin = require('html-webpack-plugin')

//path is for output object 
const path = require("path")

//module.exports is an object 
//in module.exports object we'll be adding an entry point and a module object which consists an object rules which contains an array of objects 
//In this were defining
//what are the entry points of this project?
//is it a production or dev mode?
//we imported an svg library 
//we imported css-loader and style-loader library 
module.exports = {
    entry: './index.js',
    module: {
        rules: [
            //whenever JS witnesses an SVG , since JS cannot load SVG directly, it uses a an external svg library 
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
                //through use you can load up either a single library or multiple libraries
                //we could even place, module in place of use
            },
            //first css-loader will be loaded, followed by style-loader
            //css-loader - allows you to import all css properties into the JS file 
            //style-loader- allows to inject this bundled (css+js file) into the stylesheet 
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                //this test case says to convert JS ES6+ to browser compatible version
                //this is JS REGEX
                test: /\.(js)$/,
                use: 'babel-loader',
            },
        ]
    },
    output: {
        //After the file is bundled in the index.js, keep the same current name (dir name), i.e we want final bundled file in the same directory as we are in rn 
        path: path.resolve(__dirname, "dist"),
        //the filename we set for the output file is bundle.js 
        //WOOHOO
        filename: "bundle.js",
    },
    plugins: [
        //this plugin takes bundle.js from the output object and inject it inside index.html
        new HtmlWebpackPlugin()
     ],

     //mode can be development / production 
     //development - is a more lineant mode 
     //production is more strict mode, all files are compressed, minifies the files 
     mode: "production"

     //instead of directly mentioning development or production, we define an environment variable 
     //mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}
