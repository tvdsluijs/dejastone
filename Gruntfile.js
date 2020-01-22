module.exports = function (grunt) {

    grunt.initConfig({
        uncss: {
            dist: {
                options: {
                    ignore: [
                        // needed for Bootstrap's transitions
                        ".fade",
                        ".fade.in",
                        ".collapse",
                        ".collapse.in",
                        ".collapsing",
                        ".alert-danger",
                        /(#|\.)navbar(\-[a-zA-Z]+)?/,
                        /(#|\.)dropdown(\-[a-zA-Z]+)?/,
                        /(#|\.)(open)/s
                    ]
                },
                files:
                {
                    'assets/css/tidy.css': ['_site/index.html',
                        '_site/grafmonument/index.html',
                        '_site/contact/index.html',
                        '_site/grafmonumenten-galerij/index.html',
                        '_site/grafmonumenten-bekijken/index.html',
                        '_site/brochure/index.html',
                        '_site/natuursteen-keukens/index.html']
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