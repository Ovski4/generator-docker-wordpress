var templateManager = function (generator, conf) {
    this.conf = conf;
    this.generator = generator;
};

templateManager.prototype.copyTemplate = function (source, dest) {
    this.generator.fs.copyTpl(
        this.generator.templatePath(source),
        this.generator.destinationPath(dest),
        { conf: this.conf }
    );
};

module.exports = templateManager;