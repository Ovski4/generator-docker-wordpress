var notEmpty = function(input) {
    if (input == '') {
        return 'This field is required';
    }
    return true;
};

var questions =
[
    {
        type: 'input',
        name: 'projectName',
        message: 'What\'s your project name',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'databaseUsername',
        message: 'What\'s your database user name',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'databaseName',
        message: 'What\'s your database name',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'databasePassword',
        message: 'What\'s your database password',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'databaseRootPassword',
        message: 'What\'s your database root password',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'themeName',
        message: 'What\'s your theme name',
        validate: notEmpty
    },
    {
        type: 'confirm',
        name: 'gulp',
        message: 'Do you want to work with gulp? (sass & livereload will be installed)',
        default: false
    },
    {
        type: "confirm",
        name: "foundation",
        message: "Do you want to add foundation via bower",
        default: false,
        when: function (answers) {
            return answers.gulp;
        }
    },
    {
        type: "confirm",
        name: "makefile",
        message: "Do you want to generate a Makefile? A makefile provide shortcuts, for example to run commands in docker containers",
        default: false
    }
];

module.exports = questions;