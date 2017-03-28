
module.exports = function (grunt) {
    /** 
    grunt.registerTask('speak', function () {
        console.log('I am speaking!');
    });
    grunt.registerTask('yell', function () {
        console.log('I am YELLING!');
    });
    grunt.registerTask('default', ['speak', 'yell']);
    **/

    grunt.initConfig({
        concat: {
            minify: {
                src: ['src/one.js', 'src/two.js'],
                dest: 'bundle/scripts.js',
            },
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['concat'],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch', 'concat']);

}
