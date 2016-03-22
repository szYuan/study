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
				files:{
					//目标文件：源文件
					'<%= config.dist %>/index.html':'<%= config.app %>/index.html',
					'<%= config.dist %>/js/index.js':['<%= config.app %>/js/index.js']
				}				
			}
		},
		
		clean:{
			dist:{
				// *	匹配任意字符，除反斜杠\
				// ?	匹配一个字符，除反斜杠
				// **	匹配任意字符，包括反斜杠
				// {a,b}.js	匹配a.js与b.js
				// !
				src:['<%=config.dist%>/**/*'],//删除dist下所有文件
				// filter:'isFile'//默认过滤
				filter:function(filepath){
					return (!grunt.file.isDir(filepath));
				},
				// nonull,
				dot:true, //若为true-同时命中名字首位为点的文件，如：index.html .index.html
				matchBase:true, //默认false，a?b 默认命中：/xyz/123/acb,/xyz/acb/123
				expand:true//默认false，若为true,处理动态的src到dest的文件映射
			}
		}
		
	});
	
	
}