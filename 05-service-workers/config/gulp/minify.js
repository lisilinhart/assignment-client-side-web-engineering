module.exports = options => {
    const gulp    = options.gulp;
    const paths   = options.paths;
    const plugins = options.plugins;
    const merge   = require('merge-stream');

    return {
        js: () => {
            return gulp.src(gulp.data.get('paths.dev.files.js'))
                .pipe(plugins.rcs({
                    excludeFile: '**/vendor.js',
                    exclude: 'slider'
                }))
                .pipe(plugins.uglify())
                .pipe(plugins.rename({
                    suffix: '.min'
                }))
                .pipe(gulp.dest(gulp.data.get('paths.dest.folder.assets.js')));
        },
        css: () => {
            return gulp.src(gulp.data.get('paths.dev.files.css'))
                .pipe(plugins.rcs())
                .pipe(plugins.cleanCss())
                .pipe(plugins.rename({
                    suffix: '.min'
                }))
                .pipe(gulp.dest(gulp.data.get('paths.dest.folder.assets.css')));
        },
        html: () => {
            const stream = merge();

            stream.add(gulp.src(gulp.data.get('paths.src.base') + '/index.html')
                .pipe(plugins.cdnify({
                    rewriter: url => {
                        var arr = url.split('.');

                        // small hack for google fonts or cdn's with http requests
                        for (var value of arr) {
                            if (value.indexOf('google') === 0) {
                                return;
                            }

                            if (value.indexOf('http') === 0) {
                                return;
                            }
                        }

                        if (arr[arr.length - 2] !== 'min') {
                            arr.splice((arr.length - 1), 0, 'min');
                        }

                        return arr.join('.');
                    }
                }))
                .pipe(plugins.rcs())
                .pipe(plugins.htmlmin({ collapseWhitespace: true }))
                .pipe(gulp.dest(gulp.data.get('paths.dest.base'))));

            stream.add(gulp.src(gulp.data.get('paths.src.files.angular.html'))
                .pipe(plugins.rcs())
                .pipe(plugins.htmlmin({ collapseWhitespace: true }))
                .pipe(plugins.ngHtml2js({
                    moduleName: 'jpeer.templates'
                }))
                .pipe(plugins.concat('template.js'))
                .pipe(plugins.uglify())
                .pipe(plugins.rename({
                    suffix: '.min'
                }))
                .pipe(gulp.dest(gulp.data.get('paths.dest.folder.assets.js'))))

            return stream;
        }
    };
};
