var generators      = require('yeoman-generator'),
    path            = require('path'),
    questions       = require('./questions'),
    TemplateManager = require('./templateManager')
;
var fs = require('fs');
var configuration = {} ;

module.exports = generators.Base.extend({
    prompting: function () {
        var done = this.async();
        this.prompt(questions.general, function (answers) {
            configuration = configure(answers);
            done();
        }.bind(this));
    },
    install: function () {
        var done = this.async();
        this.extract('https://wordpress.org/latest.tar.gz', '.', function (err) {
            if (err) {
                console.log(err);
            } else {
                var tm = new TemplateManager(this, configuration);
                tm.copyTemplates();
            }
            done();
        }.bind(this));
    },
    end: function () {
        if (configuration.gulp == true) {
            console.log('Now you can run ./run.sh, then you should exec in your container and run npm update to finish');
        } else {
            console.log('Now you can run ./run.sh');
        }
    }
});

var configure = function(configuration) {
    // remove extra characters from project name for the elk container name with docker-compose (used in run.sh.tmpl)
    configuration.prefix      = process.cwd().split(path.sep).pop().replace(/[^\w\s]/gi, '').toLowerCase();
    configuration.projectName = configuration.projectName.toLowerCase();

    return configuration;
};