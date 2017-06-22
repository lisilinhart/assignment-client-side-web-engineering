module.exports = options => {
    const gulp    = options.gulp;
    const paths   = options.paths;
    const plugins = options.plugins;
    const fs = require('fs-extra');

    // lints scss files but does not fail
    const scss = () => {
        return stream = gulp.src(gulp.data.get('paths.src.allFiles.scss'))
            .pipe(plugins.sassLint({
                configFile: gulp.data.get('paths.config.scsslint')
            }))
            .pipe(plugins.sassLint.format());
    };

    // lints scss files and fails
    const scssFail = () => {
        return scss().pipe(plugins.sassLint.failOnError());
    };

    // lints scss files and create a report
    const scssReport = () => {
        const filePath = gulp.data.get('paths.reports.scss');

        fs.ensureFileSync(filePath);

        const fileStream = fs.createWriteStream(filePath);
        const stream = gulp.src(gulp.data.get('paths.src.allFiles.scss'))
            .pipe(plugins.sassLint({
                configFile: gulp.data.get('paths.config.scsslint'),
                options: {
                    formatter: 'checkstyle'
                }
            }))
            .pipe(plugins.sassLint.format(fileStream));

        stream.on('finish', function() {
            fileStream.end();
        });

        return stream;
    };

    // lints js files but does not fail
    const js = () => {
        return gulp.src(gulp.util._.flatten(gulp.data.get('paths.src.files.js')))
            .pipe(plugins.eslint({
                configFile: gulp.data.get('paths.config.eslint')
            }))
            .pipe(plugins.eslint.format());
    };

    // lints js files and fails
    const jsFail = () => {
        return js().pipe(plugins.eslint.failOnError());
    };

    // lints js files and create a report
    const jsReport = () => {
        const filePath = gulp.data.get('paths.reports.js');

        fs.ensureFileSync(filePath);

        const fileStream = fs.createWriteStream(filePath);
        const stream = gulp.src(gulp.util._.flatten(gulp.data.get('paths.src.files.js')))
            .pipe(plugins.eslint({
                configFile: gulp.data.get('paths.config.eslint')
            }))
            .pipe(plugins.eslint.format('checkstyle', fileStream));

        stream.on('finish', () => {
            fileStream.end();
        });

        return stream;
    };

    // lints html files but does not fail
    const html = () => {
        return gulp.src(gulp.data.get('paths.src.allFiles.html'))
            .pipe(plugins.htmllint({
                config: gulp.data.get('paths.config.htmllint')
            }));
    };

    // lints html files and fails
    const htmlFail = () => {
        // @todo does not really fail
        return gulp.src(gulp.data.get('paths.src.allFiles.html'))
            .pipe(plugins.htmllint({
                failOnError: true,
                config: gulp.data.get('paths.config.htmllint')
            }));
    };

    return {
        scss,
        'scss:fail': scssFail,
        'scss:report': scssReport,
        js,
        'js:fail': jsFail,
        'js:report': jsReport,
        html,
        'html:fail': htmlFail
    };
};
