module.exports = function (grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          './js/*.js', // All JS in this folder
        ],
        dest: './dist/js/production.js'
      }
    },
    uglify: {
      build: {
        src: './dist/js/production.js',
        dest: './dist/js/production.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          './dist/css/style.css': './scss/main.scss',
        }
      }
    },
    autoprefixer: {
      single_file: {
        src: './dist/css/style.css',
        dest: './dist/css/style.css'
      }
    },

    watch: {
      scripts: {
        files: ['./js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      css: {
        files: ['./scss/**/*.scss'],
        tasks: ['sass','autoprefixer'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    },

    image: {
      static: {
        options: {
          optipng: false,
          pngquant: true,
          zopflipng: true,
          jpegRecompress: false,
          mozjpeg: true,
          gifsicle: true,
          svgo: true
        },
        files: {
          // supported file formats : png,jpg,gif,svg
          // './dist/images/1.jpg': './images/1.jpg',
          // './dist/images/2.jpg': './images/2.jpg',
          './dist/images/36-1000x1000.jpg': './images/36-1000x1000.jpg',
        }
      }
    }
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-image');

  // Tasks : compress images
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch', 'autoprefixer']);
  // grunt.registerTask('default', ['image']);
};
