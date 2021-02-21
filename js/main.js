window.onload = function() {
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    hour = hour % 12;
    hour = hour * 3600 + minute * 60 + second;
    minute = minute * 60 + second;
    $(".hour_now").css("transform", "rotate(" + hour / (12 * 10) + "deg)");
    $(".minute_now").css("transform", "rotate(" + minute / 10 + "deg)");
    $(".second_now").css("transform", "rotate(" + second * 6 + "deg)");
}