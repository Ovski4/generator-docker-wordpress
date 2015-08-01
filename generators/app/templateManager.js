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

templateManager.prototype.copyTemplates = function () {
    var themeRoot = 'wordpress/wp-content/themes/'+this.conf.themeName;
    this.copyTemplate('wp-config.php.tmpl', 'wordpress/wp-config.php');
    this.copyTemplate('docker-compose.yml.tmpl', 'docker-compose.yml');
    this.copyTemplate('run.sh.tmpl', 'run.sh');
    this.copyTemplate('kibana.json.tmpl', 'kibana.json');
    this.copyTemplate('theme/footer.php.tmpl', themeRoot+'/footer.php');
    this.copyTemplate('theme/functions.php.tmpl', themeRoot+'/functions.php');
    this.copyTemplate('theme/header.php.tmpl', themeRoot+'/header.php');
    this.copyTemplate('theme/index.php.tmpl', themeRoot+'/index.php');
    this.copyTemplate('theme/missing-content.php.tmpl', themeRoot+'/missing-content.php');
    this.copyTemplate('theme/style.css.tmpl', themeRoot+'/style.css');
    if (this.conf.gulp == true) {
        this.copyTemplate('Gulpfile.js.tmpl', 'Gulpfile.js');
        this.copyTemplate('main.scss.tmpl', 'sass/main.scss');
        this.copyTemplate('package.json.tmpl', 'package.json');
    }
};

module.exports = templateManager;