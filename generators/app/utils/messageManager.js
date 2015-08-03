var color = require('chalk');

var MessageManager = function (conf) {
    this.conf = conf;
};

MessageManager.prototype.getStartMessage = function () {
    var message = 'Hello! This generator will help you getting started on a wordpress project with docker.';

    return message;
};

MessageManager.prototype.getEndMessage = function () {
    var message = 'Now you can run '+color.bold.yellow('`./run.sh`')+'.';

    if (this.conf.gulp == true) {
        if (this.conf.makefile == true) {
            message += ' Then you should run '+color.bold.yellow('make npm-install');
        } else {
            message += ' Then you should exec in your container and run '+color.bold.yellow('npm install');
        }
        if (this.conf.foundation == true) {
            if (this.conf.makefile == true) {
                message += ', as well as '+color.bold.yellow('make bower-install');
            } else {
                message += ', as well as '+color.bold.yellow('bower install --allow-root');
            }
        }
        message += '.';
    }

    return message;
};

MessageManager.getStartMessage = MessageManager.prototype.getStartMessage;

module.exports = MessageManager;