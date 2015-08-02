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
        message: 'Your project name',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'databaseUsername',
        message: 'Your database user name',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'databaseName',
        message: 'Your database name',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'databasePassword',
        message: 'Your database password',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'databaseRootPassword',
        message: 'Your database root password',
        validate: notEmpty
    },
    {
        type: 'input',
        name: 'themeName',
        message: 'Your theme name',
        validate: notEmpty
    },
    {
        type: 'confirm',
        name: 'gulp',
        message: 'Do you want to work with gulp? (sass & livereload)',
        default: false
    },
    {
        type: "confirm",
        name: "foundation",
        message: "Do you want to add foundation via bower?",
        default: false,
        when: function (answers) {
            return answers.gulp;
        }
    },
    {
        type: "confirm",
        name: "makefile",
        message: "Do you want to generate a Makefile?",
        default: false
    }
];

module.exports = questions;