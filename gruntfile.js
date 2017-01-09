'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			pre: {
				src: ['dist']
			}
		},
        less: {
            release: {
                options: {
					compress: true,
					paths: ['src/less/']
				},
                files: { 'dist/css-only-share-buttons.min.css': 'src/less/css-only-share-buttons.less' }
            }
        },
		copy: {
			release: {
				files: [
					{ src: 'src/index.html', dest: 'dist/index.html' }
				]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['clean:pre', 'less', 'copy']);
};