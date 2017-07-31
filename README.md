# Webpack 2
[Webpack 2 Documentation](https://webpack.js.org/configuration/)

Webpack is a module bundler that puts all assets such as Javascript, CSS, images, etc. in a dependency graph. The goal for getting familiar with webpack was to create an efficient, fast, and browser-friendly application. The following will be the list of plugins or loaders that helped achieve that goal. 

Note: I will be only list feature or options that I have included in this git project.

# Loaders
[Loader Documentation](https://webpack.js.org/concepts/loaders/)

## style-loader
[style-loader Documentation](https://github.com/webpack-contrib/style-loader)

* This loader adds CSS to the DOM by injecting a <style> tag. This combines CSS with the HTML from a seperate file without making a request since it is inserted to the DOM when compiled.

## css-loader
[css-loader Documentation](https://github.com/webpack-contrib/css-loader)

* This is a plain css loader that will return the css code interpreting the resources inside, but it will not add it to the page. For example all `@import` and `url(...)` are interpreted like `require()` and will be resolved. 

## postcss-loader
[postcss-loader Documentation](https://github.com/postcss/postcss-loader)

* Autoprefixer used to add styles with prefixes for **browser capability**. The compiled styling builds robust stylesheets that won't break on older browsers.

For example: 

#### Original CSS:
```
body {
  display: flex
}
```

#### Compiled using Postcss-Loader:
```
body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

# Plugins
[Plugin Documentation](https://webpack.js.org/concepts/plugins/)

## CommonsChunkPlugin
[CommonsChunkPlugin Documentation](https://webpack.js.org/plugins/commons-chunk-plugin/)

* It analyzes entry points and will look for any shared modules between them and if it finds any shared modules it will take those shared modules and place them in their own seperate file. Now this is good for speed and cacheability purposes because we could load this shared module file once on our home page if needed on another page it will be loaded from cache, rather than requiring us from loading that code again from server.

  - In this project example I used CommonsChunkPlugin to load JQuery library for both Javascript files.

## UglifyjsWebpackPlugin
[UglifyjsWebpackPlugin Documentation](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)

* Parses, compiles and mangles the Javascript a more efficient way rather than just compiling the code to one line. This is useful if you don't want your Javascript code to be unreadable.

## HtmlWebpackPlugin
[HtmlWebpackPlugin Documentation](https://github.com/jantimon/html-webpack-plugin)

* Minimizes HTML to a single line.
* Links and Hashes file names so anytime there is a change to a javascript/css file the user will automatically download the new javascript/css file since the hash changes the name of that javascript/css file automatically everytime there is an update to the website.
