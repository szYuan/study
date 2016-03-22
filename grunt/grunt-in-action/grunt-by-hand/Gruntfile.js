'use strict'

module.exports=function(grunt){

  // require('load-grunt-tasks')(grunt);
  require('grunt-contrib-copy')(grunt);
  // require('time-grunt')(grunt);

  var config={
    app:'app',
    dist:'dist'
  }

  grunt.initConfig({

    config:config,

    copy:{
      dist_html:{
        files:{
          '<%= config.app %>/index.html':'<%=config.dist%>/index.html',
        }
      },
      dist_js:{
        src:'<%=config.app%>/js/script.js',
        dest:'<%=config.dist%>/js/script.js'
      }
    }

  });

  // grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);

}
