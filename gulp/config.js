/**
 * Created by abaddon on 27.01.2015.
 */
var dist = './dist',
    src = './src';

module.exports = {
    forImage: {
        src: src + '/images/**',
        dest: dist + '/images'
    },
    sprites: {
        src: src + '/sprites/*.png',
        dest: src + '/images',
        name: 'sprites.png',
        cssName: 'sprites.less',
        type: 'less',
        imagePath: '../images/',
        cssPath: src + '/css',
        padding: 5
    },
    cssmin: {
        src: src + '/css/*.css',
        dest: dist + '/css'
    },
    prefix: {
        src: src + '/css/*.css',
        dest: src + '/css',
        versions: ['last 2 versions']
    },
    browserify: {
        src: src + '/js/index.app.js',
        dest: src + '/js',
        compileName: 'app.compile.js'
    },
    uglify: {
        src: src + '/js/app.compile.js',
        dest: dist + '/js'
    },
    html: {
        src: src + '/*.html',
        dest: dist + '/',
        vendorsSrc: src + '/js/venders/**',
        vendorsDest: dist + '/js/venders',
        fontsSrc: src + '/fonts/**',
        fontsDest: dist + '/fonts'
    },
    sftp: {
        dest: dist + "/**",
        host: '',
        user: '',
        pass: '',
        remotePath: ''
    },
    fonts: {
        src: src + "/css/fonts/*.ttf",
        dist: src + "/css/fonts",
        woff: src + "/css/fonts/*.woff"
    },
    pug: {
        src: src + "/*.pug",
        dist: src + "/"
    },
    svg: {
        src: src + "/svg/*.svg",
        dist: src + "/images/sprite"
    },
    less: {
        src: src + "/css/*.less",
        dist: src + "/css"
    }
};