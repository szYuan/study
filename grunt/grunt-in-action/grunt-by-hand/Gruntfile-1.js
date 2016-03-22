'use strict'

module.exports=function(grunt){
	
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	
	var config={
		app:'app',
		dist:'dist'
	}
	
	grunt.initConfig({
		config:config,
		
		//grunt文件拷贝依赖于grunt-contrib-copy --官方
		//grunt文件删除依赖于grunt-contrib-clean --官方
		copy:{
			dist_html:{
				src:'<%= config.app %>/index.html',
				dest:'<%= config.dist %>/index.html'
			},
			dist_js:{
				src:'<%= config.app %>/js/index.js',
				dest:'<%= config.dist %>/js/index.js'
			}
		},
		
		clean:{
			dist_all:{
				src:['<%=config.dist%>/index.html',
						'<%=config.dist%>/js/index.js'
					]
			},
			dist_html:{
				src:'<%=config.dist%>/index.html'
			}
		}
		
	});
	
	
}