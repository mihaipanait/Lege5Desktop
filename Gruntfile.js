module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},

		//grunt http-server:dev
		'http-server': {
        	'dev': {

            	// the server root directory
            	root: '',

            	port: 8282,
            	// port: function() { return 8282; }

            	host: "127.0.0.1",

            	cache: 0,
            	showDir : true,
            	autoIndex: true,

            	// server default file extension
            	ext: "html",

            	// run in parallel with other tasks
            	runInBackground: false
        	}
    	}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-http-server');
	grunt.registerTask('default',['watch']);
}