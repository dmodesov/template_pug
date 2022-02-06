import webpHtmlNoSvg from "gulp-webp-html-nosvg"
import versionNumber from "gulp-version-number"
import pug from "gulp-pug"

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error <%= error.message %>"
            })
        ))
        .pipe(pug({
            // Сжатие Html файла
            pretty: true,
            // Показывать в терменале какой файл обработан
            verbose: true
        }))
        .pipe(app.plugins.replace('../img', 'img'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNoSvg()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js',
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}