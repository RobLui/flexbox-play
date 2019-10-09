$(document).ready(function (e) {
    const basetime = 500;
    var time = 0;

    // iterate 3 x 9
    for (var index = 0; index < 3; index++) {
        // iterate each element containing class .flex-1
        $('.flex-1').each(function (i) {
            var item = $(this);
            setTimeout(function (e) {
                item.addClass('active');
            }, time);
            time += basetime;
            setTimeout(function (e) {
                item.removeClass('active');
            }, time + basetime);
        });
    }
});