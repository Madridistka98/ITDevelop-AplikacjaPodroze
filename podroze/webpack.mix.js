const mix = require('laravel-mix'),
        removeFlowTypes = require('laravel-mix-remove-flow-types');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.removeFlowTypes().react('resources/js/app.jsx', 'public/js')
    .sass('resources/sass/app.scss', 'public/css').sourceMaps().version().browserSync('localhost');
