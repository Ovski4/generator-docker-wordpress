var messageManager = function (conf) {
    this.conf = conf;
};

messageManager.prototype.getEndMessage = function () {
    var message = 'Now you can run `./run.sh`.';

    if (this.conf.gulp == true) {
        message += ' Then you should exec in your container and run npm install';
        if (this.conf.foundation == true) {
            message += ', as well as bower install --allow-root';
        }
        message += '.';
    }

    return message;
};

module.exports = messageManager;