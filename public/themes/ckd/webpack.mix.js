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
        postCss: [
            require('lost')
        ],
    })
    .js('src/js/main.js', 'js/ckd.js')
    .stylus('src/stylus/main.styl', 'css/ckd.css')
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
        'src/stylus/*.styl',
        'src/stylus/**/*.styl',
        'src/js/*.js',
        'templates/*.html',
        'templates/**/*.html',
        'partials/**/*.html',
    ]
});