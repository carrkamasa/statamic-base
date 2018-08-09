let mix = require('laravel-mix');
let StyleLintPlugin = require('stylelint-webpack-plugin');

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

    .sass('src/styles/main.scss', 'css/app.css')

    .copyDirectory('src/images', 'dist/images')

    .copyDirectory('src/fonts', 'dist/fonts')

    .browserSync({
        open: true,
        proxy: 'accrol.test',
        files: [
            'src/styles/*.scss',
            'src/styles/**/*.scss',
            'src/js/*/*.js',
            'src/js/*.js',
            'templates/*.html',
            'templates/**/*.html',
            'partials/**/*.html',
        ]
    })

    .webpackConfig({
		plugins: [
			new StyleLintPlugin({
				files: 'src/scss/**/*.scss',
				configFile: '.stylelintrc'
			}),
		]
    })
;

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
    .sourceMaps()
    .version()
}