let mix = require('laravel-mix');

mix
    .setPublicPath(path.normalize('dist'))

    .webpackConfig({
        externals: {
            jquery: 'jQuery'
        }
    })
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery'],
    })
    .options({
        processCssUrls: false,
    })
    .js('src/js/main.js', 'js/app.js')
    .css('src/stylus/main.scss', 'css/app.css')
    .copyDirectory('src/images', 'dist/images')
    .copyDirectory('src/fonts', 'dist/fonts')
    .sourceMaps()
    .version()
;

// Browser sync.
mix.browserSync({
    open: true,
    proxy: 'statamic.test',
    files: [
        'src/stylus/*.scss',
        'src/stylus/**/*.scss',
        'src/js/*.js',
        'templates/*.html',
        'templates/**/*.html',
        'partials/**/*.html',
    ]
});