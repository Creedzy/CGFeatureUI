// Generated on 2015-01-21 using generator-angular 0.9.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    appPath: 'app'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js',
                  '<%= yeoman.app %>/apps/*/*/{,*/}*.js'],
        tasks: ['build'],
        options: {
              livereload: true
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css',
                '<%= yeoman.app %>/apps/*/*/{,*/}*.css'],
        tasks: ['clean:styles','copy-app-styles','copy:styles','bower_concat:all'],
        options: {
              livereload: false
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      html: {
        options : {
          livereload:true
        },
        tasks:['copy:html'],
        files : [
          '<%= yeoman.app %>/apps/*/{,*/}*.html',
          '<%= yeoman.app %>/apps/*/*.html'
        ]
      }

    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        base: '<%= yeoman.dist %>',
        hostname: 'localhost',
        livereload: true,
        open: true
      },
      dist: {
        options: {
          port: 9000,
          base: '<%= yeoman.dist %>',
          hostname: 'localhost',
          livereload: true,
          open: true
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      }

    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },


    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      styles: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/styles/{,*/}*',
 
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
/*    wiredep: {
      options: {
        cwd: '<%= yeoman.app %>'
      },
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      }
    },
*/
    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: 'styles/*.css',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      common: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: 'scripts/*.js',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    concat: {
      options: {
        separator: '\n'
      }
    },

    // ngAnnotate tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngAnnotate: {
      options: {
        remove: true,
        add: true,
        singleQuotes: true
      },
      dist: {
        files: [{
          expand: true,
         //cwd: '<%= yeoman.dist %>/scripts',
          src: ['<%= yeoman.dist %>/scripts/*.js','<%= yeoman.dist %>/scripts/**/*.js','<%= yeoman.dist %>/js/*.js'],
      //    ext: '.annotated.js'
       //  dest: '<%= yeoman.dist %>/scripts'
        }]
      },
      common: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.tmp %>',
          src: 'scripts/*.js',
          dest: '<%= yeoman.tmp %>'
        }]
      }
    },

    replace: {
      distViews: {
        src: [
          '<%= yeoman.dist %>/**/*.html'
        ],
        overwrite: true, // overwrite matched source files
        replacements: [
          {
            from: /(["'(])(\/?)(apps|fonts|images|languages|scripts|style|partials|bower_components)([\/'"])/gi,
            to: '$1$3$4'
          }
        ]
      },
      distScripts: {
        src: [
          '<%= yeoman.dist %>/**/*.js'
        ],
        overwrite: true, // overwrite matched source files
        replacements: [
          {
            from: /([^+])(["'])(\/?)(apps|fonts|images|languages|scripts|style|partials)(\/)/gi,
            to: '$1$2$4$5'
          }

        ]
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
      html: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: '**/*'
        }]
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [ '**']
        },{

          expand:true,
          cwd:'bower_components',
          dest:'<%= yeoman.dist %>/bower_components',
          src:['**']
        } ,

        {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '<%= yeoman.dist %>/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    bower_concat: {
      all: {
        dest: {
          'js': '<%= yeoman.dist %>/scripts/vendor.js',
          'css': '<%= yeoman.dist %>/styles/vendor.css'
        },

        options: { separator : ';' }
      }
    },
    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: false
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build','connect:dist' ,'watch']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'watch'

    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-text-replace');



  grunt.registerTask('build', [
    // Clean destination and temp  folders
    'clean:dist',

    'cssmin',

    'htmlmin',
    // Concat all scripts to four main files, one for each main app
    'concat-scripts',
    'concurrent:dist',
    'copy:dist',
    'ngAnnotate:dist',
      'concat-all-scripts',
    'copy-app-styles',
    'bower_concat:all',
    'uglify:common'
  ]);

  grunt.registerTask('build-release' ,[
    // Clean destination and temp  folders
    'clean:dist',
    'cssmin',
    'htmlmin',
    // Concat all scripts to four main files, one for each main app
    'concat-scripts',
    'concurrent:dist',
    'copy:dist',
    'ngAnnotate:dist',
    'concat-all-scripts',
    'bower_concat:all',
    'replace:distViews',
    'replace:distScripts',
    'uglify:common'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);


  grunt.registerTask('concat-all-scripts','Concat all scripts into one', function() {
    console.log("Running concat-all");

    grunt.config.set('concat.all', {
      // Modules first, then everything else
      src: [
        '<%= yeoman.dist %>/scripts/**/*.js',
        '<%= yeoman.dist %>/scripts/*.js',
        '<%= yeoman.dist %>/js/*.js'

      ],
      dest: '<%= yeoman.dist %>/scripts/scripts.js'
    });
    grunt.task.run('concat:all');
  });

  grunt.registerTask('copy-app-styles', 'copy styles from each app', function () {

    var appsFolders = getApps();
    console.log("Running copy-styles");
    for (var i = 0; i < appsFolders.length; i++) {
      var taskName = appsFolders[i].replace(/\s/g, '-') + 'Styles';
      console.log(taskName);

      grunt.config.set('copy.' + taskName, {
        expand:true,
        flatten:true,
        src: [
          '<%= yeoman.appPath %>/apps/' + appsFolders[i] + '/styles/*.css'
        ],
        dest: '<%= yeoman.dist %>/styles/',
        filter: 'isFile'
      });
      grunt.log.writeln(JSON.stringify(grunt.config()['copy'][taskName], null, 2));
      grunt.task.run('copy:' + taskName);
      //console.log('done');
    }

  });


  grunt.registerTask('concat-scripts', 'Concat scripts for each app', function () {

    var appsFolders = getApps();
    console.log("Running concat-scripts");
    for (var i = 0; i < appsFolders.length; i++) {
      var taskName = appsFolders[i].replace(/\s/g, '-') + 'Scripts';
      console.log(taskName);

      grunt.config.set('concat.' + taskName, {
        // Modules first, then everything else
        src: [
          '<%= yeoman.tmp %>/scripts/config.js',
          '<%= yeoman.appPath %>/apps/' + appsFolders[i] + '/**/**/*.module.js',
          '<%= yeoman.appPath %>/apps/' + appsFolders[i] + '/**/**/*.js',
          '!<%= yeoman.appPath %>/apps/' + appsFolders[i] + '/apps/app-template/**/*.js',
          '!<%= yeoman.appPath %>/**/test/**/*.js'
        ],
        dest: '<%= yeoman.dist %>/scripts/' + appsFolders[i] + '.js'
      });
      grunt.log.writeln(JSON.stringify(grunt.config()['concat'][taskName], null, 2));
      grunt.task.run('concat:' + taskName);
      //console.log('done');
    }

  });

  var getApps = function () {

    var path = appConfig.appPath + '/apps/*';
    console.log(path);
    var apps = grunt.file.expand({
      filter: 'isDirectory'
    }, path);

    var appsFolders = [];
    for (var i = 0; i < apps.length; i++) {
      appsFolders.push(apps[i].substring(Math.max(apps[i].lastIndexOf('/'), apps[i].lastIndexOf('\\')) + 1));
    }
    console.log(appsFolders);
    return appsFolders;
  };
};
