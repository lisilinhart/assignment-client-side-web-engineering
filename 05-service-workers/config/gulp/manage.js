module.exports = options => {
    const gulp    = options.gulp;
    const paths   = options.paths;
    const plugins = options.plugins;
    const path    = require('path');
    const glob    = require('glob');
    const merge   = require('merge-stream');
    const autoprefixer   = require('autoprefixer');
    const mainBowerFiles = require('main-bower-files');
    const postcssProcessors = [
        autoprefixer()
    ];

    return {
        // @todo make sourcemaps working
        sass: () => {
            return gulp.src(gulp.data.get('paths.src.files.scss'))
                // .pipe(plugins.sourcemaps.init())
                .pipe(plugins.concat('assets/scss/main.scss'))
                .pipe(plugins.sass())
                .pipe(plugins.postcss(postcssProcessors))
                .pipe(plugins.concat('global.css'))
                // .pipe(plugins.sourcemaps.write(gulp.data.get('paths.base')))
                .pipe(gulp.dest(gulp.data.get('paths.dev.folder.assets.css')));
        },
        'sass:browser': () => {
            let stream = merge();

            glob('./src/assets/scss/*', (err, paths) => {
                // delete if no indexOf browser.
                for (let dir of paths) {
                    // continue if the path is not the right dir
                    if (dir.indexOf('browser.') === -1) {
                        continue;
                    }

                    let dirName = path.basename(dir);
                    let fileName = dirName.slice(8, dirName.length);

                    stream.add(gulp.src([dir + '/**/*.scss', '!**/_*.scss'])
                        .pipe(plugins.sourcemaps.init())
                        .pipe(plugins.sass())
                        .pipe(plugins.postcss(postcssProcessors))
                        .pipe(plugins.concat(fileName + '.css'))
                        .pipe(plugins.sourcemaps.write(gulp.data.get('paths.base')))
                        .pipe(gulp.dest(gulp.data.get('paths.dev.folder.assets.css'))));
                }
            });

            return stream.isEmpty() ? gulp.util.noob : stream;
        },
        'css:vendor': () => {
            return gulp.src(gulp.util._.flatten([
                    gulp.data.get('paths.vendor.css'),
                    gulp.data.get('paths.dev.folder.assets.css') + '/global.css'
                ]))
                .pipe(plugins.concat('global.css'))
                .pipe(gulp.dest(gulp.data.get('paths.dev.folder.assets.css')));
        },
        'js:sw': () => {
            return gulp.src(gulp.data.get('paths.src.base') + '/sw.js')
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.babel({
                    presets: ['es2015']
                }))
                .pipe(plugins.concat('sw.js'))
                .pipe(plugins.sourcemaps.write(gulp.data.get('paths.base')))
                .pipe(gulp.dest(gulp.data.get('paths.dev.base')));
        },
        'js:own': () => {
            return gulp.src(gulp.util._.flatten(gulp.data.get('paths.src.files.assets.js')))
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.babel({
                    presets: ['es2015']
                }))
                .pipe(plugins.concat('main.js'))
                .pipe(plugins.sourcemaps.write(gulp.data.get('paths.base')))
                .pipe(gulp.dest(gulp.data.get('paths.dev.folder.assets.js')));
        },
        'js:app': () => {
            return gulp.src(gulp.util._.flatten(gulp.data.get('paths.src.files.angular.all')))
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.concat('app.js'))
                .pipe(plugins.sourcemaps.write(gulp.data.get('paths.base')))
                .pipe(gulp.dest(gulp.data.get('paths.dev.folder.assets.js')));
        },
        'js:vendor': () => {
            let bowerFiles;

            // try to read bower files
            try {
                bowerFiles = mainBowerFiles();
            } catch (e) {
                bowerFiles = '';
            }

            return gulp.src(gulp.util._.flatten([
                    gulp.data.get('paths.src.files.couldBeVendor.js'),
                    gulp.data.get('paths.vendor.js'),
                    gulp.data.get('paths.src.ignore.min'),
                    bowerFiles
                ]))
                .pipe(plugins.filter('**/*.js'))
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.concat('vendor.js'))
                .pipe(plugins.sourcemaps.write(gulp.data.get('paths.base')))
                .pipe(gulp.dest(gulp.data.get('paths.dev.folder.assets.js')));
        },
        html: () => {
            return gulp.src(gulp.data.get('paths.src.files.angular.html'))
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.htmlmin({ collapseWhitespace: true }))
                .pipe(plugins.ngHtml2js({
                    moduleName: 'jpeer.templates'
                }))
                .pipe(plugins.concat('template.js'))
                .pipe(plugins.sourcemaps.write(gulp.data.get('paths.base')))
                .pipe(gulp.dest(gulp.data.get('paths.dev.folder.assets.js')));
        }
    };
};
