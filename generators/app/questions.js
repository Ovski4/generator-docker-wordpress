var notEmpty = function(input) {
    if (input == '') {
        return 'This field is required';
    }
    return true;
};

var questions = [
    {
        type     : 'input',
        name     : 'projectName',
        message  : 'Your project name',
        validate : notEmpty
    },
    {
        type     : 'input',
        name     : 'databaseUsername',
        message  : 'Your database user name',
        validate : notEmpty
    },
    {
        type     : 'input',
        name     : 'databaseName',
        message  : 'Your database name',
        validate : notEmpty
    },
    {
        type     : 'input',
        name     : 'databasePassword',
        message  : 'Your database password',
        validate : notEmpty
    },
    {
        type     : 'input',
        name     : 'databaseRootPassword',
        message  : 'Your database root password',
        validate : notEmpty
    }
];

module.exports = questions;