var generators      = require('yeoman-generator'),
    path            = require('path'),
    questions       = require('./questions'),
    TemplateManager = require('./templateManager')
;
var fs = require('fs');
var configuration = {} ;

module.exports = generators.Base.extend({
    onPrompt: function () {
        var done = this.async();
        this.prompt(questions.general, function (answers) {
            configuration = configure(answers);
            done();
        }.bind(this));
    },
    onInstall: function () {
        var done = this.async();
        this.extract('https://wordpress.org/latest.tar.gz', '.', function (err) {
            if (err) {
                console.log(err);
            } else {
                var tm        = new TemplateManager(this, configuration),
                    themeRoot = 'wordpress/wp-content/themes/'+configuration.themeName
                ;
                tm.copyTemplate('wp-config.php.tmpl', 'wordpress/wp-config.php');
                tm.copyTemplate('docker-compose.yml.tmpl', 'docker-compose.yml');
                tm.copyTemplate('run.sh.tmpl', 'run.sh');
                tm.copyTemplate('kibana.json.tmpl', 'kibana.json');
                tm.copyTemplate('theme/footer.php.tmpl', themeRoot+'/footer.php');
                tm.copyTemplate('theme/functions.php.tmpl', themeRoot+'/functions.php');
                tm.copyTemplate('theme/header.php.tmpl', themeRoot+'/header.php');
                tm.copyTemplate('theme/index.php.tmpl', themeRoot+'/index.php');
                tm.copyTemplate('theme/missing-content.php.tmpl', themeRoot+'/missing-content.php');
                tm.copyTemplate('theme/style.css.tmpl', themeRoot+'/style.css');
            }
            done();
        }.bind(this));
    }
});

var configure = function(configuration) {
    // remove extra characters from project name for the elk container name with docker-compose (used in run.sh.tmpl)
    configuration.prefix      = process.cwd().split(path.sep).pop().replace(/[^\w\s]/gi, '').toLowerCase();
    configuration.projectName = configuration.projectName.toLowerCase();

    return configuration;
};