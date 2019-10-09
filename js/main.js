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
                if (counter <= 10) {
                    item.removeClass('bg-orange');
                    item.removeClass('bg-blue');
                    item.removeClass('bg-yellow');
                    item.addClass('bg-blue');
                }
                if (counter < 19 && counter >= 10) {
                    item.addClass('flex-2');
                    item.removeClass('bg-orange');
                    item.removeClass('bg-blue');
                    item.removeClass('bg-yellow');
                    item.addClass('bg-orange');
                }
                if (counter < 28 && counter >= 19) {
                    item.addClass('flex-3');
                    item.removeClass('bg-orange');
                    item.removeClass('bg-blue');
                    item.removeClass('bg-yellow');
                    item.addClass('bg-yellow');
                }
            }, time);
            time += basetime;
            setTimeout(function (e) {
                item.removeClass('active');
                item.removeClass('flex-2');
                item.removeClass('flex-3');

            }, time + basetime);
        });
    }
});