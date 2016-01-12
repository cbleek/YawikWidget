define(['jquery'], function ($) {

    'use strict';

    var app = {
        init: function () {

            var $div = $('#YawikWidget');

            var organization = $div.data('organization');
            var yawik = $div.data('yawik');

            $.ajax({
                url: "https://yawik.org/demo/en/api/jobs/organization/" + organization + "?callback=?",
                jsonpCallback: 'yawikParseJobs',
                dataType: "jsonp"
            }).then(function(resp) {
                console.log("fetch from YAWIK");
                render(resp);
            }, function(resp) {
                this.set("title", "Something bad happened");
            });

            function render(data) {

                var $ul = $div.append('<ul>');

                $.each(data, function (i, v) {
                    $ul.append('<li><a href="' + v.link + '">' + v.title + '</a></li>');
                });
            }
        }
    };

    return app;

});
