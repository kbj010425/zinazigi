function fnMove(seq) {
    var offset = $("#main" + seq).offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 800);
    $(".select_scroll").hide();
    $("#select_scroll" + seq).show();
    $(".click_scroll").show();
    $("#click_scroll" + seq).hide();
    $("#select_text" + seq).show();
}

function down_scroll(seq) {
    var offset = $("#main" + seq).offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 800);
    $(".select_scroll").hide();
    $("#select_scroll" + seq).show();
    $(".click_scroll").show();
    $("#click_scroll" + seq).hide();
}

function logo(seq) {
    var offset = $("#main" + seq).offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 800);
    $(".select_scroll").hide();
    $("#select_scroll" + seq).show();
    $(".click_scroll").show();
    $("#click_scroll" + seq).hide();
    $("#select_text" + seq).show();
}

function scrollgo(seq){
    var offset = $("#main" + seq).offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 800);
    $(".select_scroll").hide();
    $("#select_scroll" + seq).show();
    $(".click_scroll").show();
    $("#click_scroll" + seq).hide();
    $("#select_text" + seq).show();
}