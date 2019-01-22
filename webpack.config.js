var Encore = require('@symfony/webpack-encore');
var CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
// directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.scss) if you JavaScript imports CSS.
     */
    .addEntry('app', './assets/js/app.js')
    .addEntry('js/awesomenav', './assets/js/awesomenav.js')
    .addEntry('js/custom', './assets/js/custom.js')
    .addEntry('js/ie8-responsive-file-warning', './assets/js/ie8-responsive-file-warning.js')
    .addEntry('js/ie10-viewport-bug-workaround', './assets/js/ie10-viewport-bug-workaround.js')
    .addEntry('js/ie-emulation-modes-warning', './assets/js/ie-emulation-modes-warning.js')
    .addEntry('js/template', './assets/js/template.js')

    //css

    .addStyleEntry('css/awesomenav-css', './assets/css/awesomenav.css')
    .addStyleEntry('css/awesomenav-animate-css', './assets/css/awesomenav-animate.css')
    .addStyleEntry('css/awesomenav-style', './assets/css/awesomenav-style.css')
    .addStyleEntry('css/custom-css', './assets/css/custom.css')
    .addStyleEntry('css/default-template-style', './assets/css/default-template-style.css')
    .addStyleEntry('css/style', './assets/css/style.css')


    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/images', to: 'images' },
        { from: './assets/vendor', to: 'vendor' },
    ]))

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'Popper': 'popper.js'
    })

    // enables Sass/SCSS support
    .enableSassLoader()

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment if you're having problems with a jQuery plugin
// .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
