var $ = require('jquery');
var template = require('./../partials/template_example.hbs');
require('./../css/index.css');

$(document).ready(function() {
    $(document).on('click', '#handlebars-renderer', function () {
        var $infoWrapper = $('#info-wrapper');
        var data = {title: "My New Post", body: "This is my first post!", image: './assets/bordercollie.jpg', profit: 1};
        $infoWrapper.append(template(data));
    });
});