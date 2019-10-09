$(document).ready(function (e) {
    const basetime = 500;
    var time = 0;
    let counter = 0;

    // iterate 3 x 9
    for (var index = 0; index < 3; index++) {
        // iterate each element containing class .flex-1
        $('.flex-1').each(function (i) {
            var item = $(this);
            setTimeout(function (e) {
                counter++;

                item.addClass('active');
                if (counter < 18) {
                    item.addClass('flex-2');
                }
                if (counter > 18) {
                    item.addClass('flex-3');
                }
            }, time);
            time += basetime;
            setTimeout(function (e) {
                item.removeClass('active');
                if (counter <= 18) {
                    item.removeClass('flex-2');
                }
                if (counter >= 18) {
                    item.removeClass('flex-3');
                }
            }, time + basetime);
        });
    }
});