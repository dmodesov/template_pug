import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'
const srcFolder = './src'

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        js: `${srcFolder}/assets/scripts/app.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/assets/img/**/*.svg`,
        scss: `${srcFolder}/assets/styles/main.scss`,
        html: `${srcFolder}/views/*.pug`,
        files: `${srcFolder}/assets/files/**/*.*`,
        svgicons: `${srcFolder}/assets/svgicons/*.svg`
    },
    watch: {
        js: `${srcFolder}/assets/scripts/**/*.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        scss: `${srcFolder}/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/assets/files/**/*.*`,
        svgicons: `${srcFolder}/assets/svgicons/*.svg`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: 'test' // название папки на удаленном сервере
}