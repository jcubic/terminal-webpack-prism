import $ from 'jquery';
import terminal from 'imports-loader?additionalCode=var%20define=false;!jquery.terminal';
import PrismJS from 'prismjs';
import prism from 'imports-loader?additionalCode=var%20define=false;!jquery.terminal/js/prism';
import 'jquery.terminal/css/jquery.terminal.min.css';
import 'terminal-prism/css/prism-coy.css';
terminal(window, $);
prism(window, $, PrismJS);

$.terminal.syntax('python');

// you can also use this
// const $ = terminal(window);
// since terminal function return jQuery instance that got imported
$(function() {
    $('body').terminal((cmd, t) => {
        t.echo('user said ' + cmd);
        // user will be able to enter formatting like type [[;red;]hello]
        // and it will display red text, if you don't want that use
        // $.terminal.escape_brackets to escape the string from user
        // this is important if you enable invokeMethods option
    }, {
        greetings: 'Webpack + jQuery Terminal'
    });
});
