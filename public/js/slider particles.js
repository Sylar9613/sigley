function windowResize() {
    $("#particles-js").css({ "height": $(window).height() - 3 + "px" });
    //alert($(window).height());
}

$(document).ready(windowResize());
$(window).resize(windowResize());