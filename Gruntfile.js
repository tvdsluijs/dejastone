module.exports = function (grunt) {

    grunt.initConfig({
        uncss: {
            dist: {
                files:
                {
                    'assets/css/tidy.css': ['_site/index.html',
                        '_site/grafmonument/index.html',
                        '_site/contact/index.html',
                        '_site/grafmonumenten-galerij/index.html',
                        '_site/grafmonumenten-bekijken/index.html',
                        '_site/brochure/index.html',
                        '_site/foto-grafsteen/index.html']
                }
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'assets/css/tidy.css', dest: 'assets/css/tidy.css' }
                ]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin']);

};