'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the dandy ' + chalk.red('generator-codechef') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'projectName',
            message: 'Name of your project?',
            default: this.appname
        }];

        return this.prompt(prompts).then(function (props) {
            // To access props later use this.props.someAnswer;
            this.props = props;
        }.bind(this));
    },

    writing: function () {
        this.fs.copy(
            this.templatePath('main.cpp'),
            this.destinationPath(this.props.projectName + '/main.cpp')
        );
        this.fs.copy(
            this.templatePath('Makefile'),
            this.destinationPath(this.props.projectName + '/Makefile')
        );

    },

    install: function () {
    }
});
