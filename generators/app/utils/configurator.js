var path = require('path');

var Configurator = function () {};

Configurator.prototype.handle = function (configuration) {

    this.getRandomInteger = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // remove extra characters from directory name for the containers name prefix with docker-compose
    //   used in run.sh.tmpl and Makefile.tmpl
    //   example : directory = IDCI-Consulting -> nginx container is named idciconsulting_app_1)
    configuration.prefix      = process.cwd().split(path.sep).pop().replace(/[^\w\s]/gi, '').toLowerCase();
    configuration.projectName = configuration.projectName.toLowerCase();
    configuration.ports = {
        app:        this.getRandomInteger(8000, 8033),
        elk:        this.getRandomInteger(8034, 8066),
        adminer:    this.getRandomInteger(8067, 8099),
        livereload: this.getRandomInteger(35700, 35799)
    };

    return configuration;
};

Configurator.handle = Configurator.prototype.handle;

module.exports = Configurator;

