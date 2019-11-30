$(function() {

    "use strict";

    $('.ps-container','.chat-panel').perfectScrollbar();

    var cht = function() {
        var topOffset = 220;
        var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        $(".chat-panel").css("height", (height) + "px");
    };
    $(window).ready(cht);
    $(window).on("resize", cht);

    // this is for the left-aside-fix in content area with scroll
    var chtin = function() {
        var topOffset = 190;
        var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        $("#left-panel").css("height", (height) + "px");
    };
    $(window).ready(chtin);
    $(window).on("resize", chtin);

    $(".open-panel").on("click", function() {
        $(".left-section").toggleClass("open-pnl");
        $(".open-panel i").toggleClass("ti-angle-left");
    });

});