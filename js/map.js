var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function reset_button() {
    $(".reset_button").fadeOut(800);
    $("#Aewol").css('fill', 'lightgray');
    $("#Jeju_City").css('fill', 'lightgray');
    $("#Jocheon").css('fill', 'lightgray');
    $("#Gujwa").css('fill', 'lightgray');
    $("#Seongsan").css('fill', 'lightgray');
    $("#Pyoseon").css('fill', 'lightgray');
    $("#Namwon").css('fill', 'lightgray');
    $("#Seogwipo").css('fill', 'lightgray');
    $("#Jungmun").css('fill', 'lightgray');
    $("#Anduk").css('fill', 'lightgray');
    $("#Daejeong").css('fill', 'lightgray');
    $("#Hankyung").css('fill', 'lightgray');
    $("#Hallym").css('fill', 'lightgray');
    $("#Gapado").css('fill', 'lightgray');
    $("#Marado").css('fill', 'lightgray');
    $("#Chaguido").css('fill', 'lightgray');
    $("#Chaguido2").css('fill', 'lightgray');
    $("#biyangdo").css('fill', 'lightgray');
    $("#Chujado").css('fill', 'lightgray');
    $("#Chujado1").css('fill', 'lightgray');
    $("#Chujado2").css('fill', 'lightgray');
    $("#udo").css('fill', 'lightgray');
    $(".map").animate({
        zoom: "100%",
        top: "0px",
        left: "0px"
    }, 800);
    setTimeout(function () {
        $(".Gujwa_marker").fadeOut();
        $(".Jocheon_marker").fadeOut();
        $(".Seongsan_marker").fadeOut();
        $(".Pyoseon_marker").fadeOut();
        $(".Namwon_marker").fadeOut();
        $(".Seogwipo_marker").fadeOut();
        $(".Jungmun_marker").fadeOut();
        $(".Anduk_marker").fadeOut();
        $(".Daejeong_marker").fadeOut();
        $(".Hankyung_marker").fadeOut();
        $(".Hallym_marker").fadeOut();
        $(".Aewol_marker").fadeOut();
        $(".Jeju_City_marker").fadeOut();
    }, 400);
    for (i = 0; i < array.length; i++) {
        array[i] = 0;
    }
}

function Aewol() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-260px');
    //    $(".map").css('left','-450px');
    if (array[0] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', '#8eddff');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgary');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-260px",
            left: "-450px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Aewol_marker").fadeIn();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[0] = 1;
    } else {
        reset_button();
    }
}

function Jeju_City() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-210px');
    //    $(".map").css('left','-620px');
    if (array[1] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', '#8eddff');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-195px",
            left: "-620px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
            $(".Jeju_City_marker").fadeIn();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[1] = 1;
    } else {
        reset_button();
    }
}

function Jocheon() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-180px');
    //    $(".map").css('left','-790px');
    if (array[18] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', '#8eddff');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-180px",
            left: "-790px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeIn();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[18] = 1;
    } else {
        reset_button();
    }
}

function Gujwa() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-150px');
    //    $(".map").css('left','-930px');
    if (array[2] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', '#8eddff');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgary');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-150px",
            left: "-930px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeIn();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);

        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[2] = 1;
    } else {
        reset_button();
    }
}

function Seongsan() {
    //    $(".map").css('zoom','330%');
    //    $(".map").css('top','-290px');
    //    $(".map").css('left','-1050px');
    if (array[3] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', '#8eddff');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-280px",
            left: "-1050px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeIn();
            $(".Pyoseon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[3] = 1;
    } else {
        reset_button();
    }
}

function Pyoseon() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-330px');
    //    $(".map").css('left','-900px');
    if (array[4] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', '#8eddff');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-330px",
            left: "-900px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeIn();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[4] = 1;
    } else {
        reset_button();
    }
}

function Namwon() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-390px');
    //    $(".map").css('left','-750px');
    if (array[5] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', '#8eddff');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-390px",
            left: "-750px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeIn();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[5] = 1;
    } else {
        reset_button();
    }
}

function Seogwipo() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-425px');
    //    $(".map").css('left','-650px');
    if (array[6] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', '#8eddff');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-425px",
            left: "-650px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeIn();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[6] = 1;
    } else {
        reset_button();
    }
}

function Jungmun() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-440px');
    //    $(".map").css('left','-540px');
    if (array[7] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', '#8eddff');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-440px",
            left: "-540px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeIn();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[7] = 1;
    } else {
        reset_button();
    }
}

function Anduk() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-440px');
    //    $(".map").css('left','-410px');
    if (array[8] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', '#8eddff');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-440px",
            left: "-410px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Anduk_marker").fadeIn();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[8] = 1;
    } else {
        reset_button();
    }
}

function Daejeong() {
    //    $(".map").css('zoom','300%');
    //    $(".map").css('top','-500px');
    //    $(".map").css('left','-280px');
    if (array[9] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', '#8eddff');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "300%",
            top: "-500px",
            left: "-280px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeIn();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[9] = 1;
    } else {
        reset_button();
    }
}

function Hankyung() {
    //    $(".map").css('zoom','350%');
    //    $(".map").css('top','-400px');
    //    $(".map").css('left','-280px');
    if (array[10] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', '#8eddff');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "350%",
            top: "-400px",
            left: "-280px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeIn();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[10] = 1;
    } else {
        reset_button();
    }
}

function Hallym() {
    //    $(".map").css('zoom','350%');
    //    $(".map").css('top','-330px');
    //    $(".map").css('left','-370px');
    if (array[11] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', '#8eddff');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "350%",
            top: "-330px",
            left: "-370px"
        }, 800);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeIn();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[11] = 1;
    } else {
        reset_button();
    }
}

function Gapado() {
    //    $(".map").css('zoom','1900%');
    //    $(".map").css('top','-765px');
    //    $(".map").css('left','-588px');
    if (array[12] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', '#8eddff');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "1900%",
            top: "-785px",
            left: "-583px"
        }, 1000);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[12] = 1;
    } else {
        reset_button();
    }
}

function Marado() {
    //    $(".map").css('zoom','1900%');
    //    $(".map").css('top','-825px');
    //    $(".map").css('left','-579px');
    if (array[13] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', '#8eddff');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "1900%",
            top: "-840px",
            left: "-579px"
        }, 1000);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[13] = 1;
    } else {
        reset_button();
    }
}

function Chaguido() {
    //    $(".map").css('zoom','1700%');
    //    $(".map").css('top','-550px');
    //    $(".map").css('left','-430px');
    if (array[14] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', '#8eddff');
        $("#Chaguido2").css('fill', '#8eddff');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "1700%",
            top: "-560px",
            left: "-430px"
        }, 600);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[14] = 1;
    } else {
        reset_button();
    }
}

function biyangdo() {
    //    $(".map").css('zoom','1700%');
    //    $(".map").css('top','-420px');
    //    $(".map").css('left','-530px');
    if (array[15] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', '#8eddff');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "1700%",
            top: "-430px",
            left: "-530px"
        }, 600);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[15] = 1;
    } else {
        reset_button();
    }
}

function Chujado() {
    //    $(".map").css('zoom','1000%');
    //    $(".map").css('top','-190px');
    //    $(".map").css('left','-600px');
    if (array[16] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', '#8eddff');
        $("#Chujado1").css('fill', '#8eddff');
        $("#Chujado2").css('fill', '#8eddff');
        $("#udo").css('fill', 'lightgray');
        $(".map").animate({
            zoom: "1000%",
            top: "-210px",
            left: "-600px"
        }, 600);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[16] = 1;
    } else {
        reset_button();
    }
}

function udo() {
    //    $(".map").css('zoom','1000%');
    //    $(".map").css('top','-250px');
    //    $(".map").css('left','-1345px');
    if (array[17] == 0) {
        $(".reset_button").fadeIn(800);
        $("#Aewol").css('fill', 'lightgray');
        $("#Jeju_City").css('fill', 'lightgray');
        $("#Jocheon").css('fill', 'lightgray');
        $("#Gujwa").css('fill', 'lightgray');
        $("#Seongsan").css('fill', 'lightgray');
        $("#Pyoseon").css('fill', 'lightgray');
        $("#Namwon").css('fill', 'lightgray');
        $("#Seogwipo").css('fill', 'lightgray');
        $("#Jungmun").css('fill', 'lightgray');
        $("#Anduk").css('fill', 'lightgray');
        $("#Daejeong").css('fill', 'lightgray');
        $("#Hankyung").css('fill', 'lightgray');
        $("#Hallym").css('fill', 'lightgray');
        $("#Gapado").css('fill', 'lightgray');
        $("#Marado").css('fill', 'lightgray');
        $("#Chaguido").css('fill', 'lightgray');
        $("#Chaguido2").css('fill', 'lightgray');
        $("#biyangdo").css('fill', 'lightgray');
        $("#Chujado").css('fill', 'lightgray');
        $("#Chujado1").css('fill', 'lightgray');
        $("#Chujado2").css('fill', 'lightgray');
        $("#udo").css('fill', '#8eddff');
        $(".map").animate({
            zoom: "700%",
            top: "-240px",
            left: "-1305px"
        }, 600);
        setTimeout(function () {
            $(".Gujwa_marker").fadeOut();
            $(".Jocheon_marker").fadeOut();
            $(".Seongsan_marker").fadeOut();
            $(".Pyoseon_marker").fadeOut();
            $(".Namwon_marker").fadeOut();
            $(".Seogwipo_marker").fadeOut();
            $(".Jungmun_marker").fadeOut();
            $(".Anduk_marker").fadeOut();
            $(".Daejeong_marker").fadeOut();
            $(".Hankyung_marker").fadeOut();
            $(".Hallym_marker").fadeOut();
            $(".Aewol_marker").fadeOut();
            $(".Jeju_City_marker").fadeOut();
        }, 400);
        for (i = 0; i < array.length; i++) {
            array[i] = 0;
        }
        array[17] = 1;
    } else {
        reset_button();
    }
}

var Gujwa_map = ['Gujwa_miro', 'Gujwa_gim_beach', 'Gujwa_dalangswi', 'Gujwa_manjang', 'Gujwa_bijalim', 'Gujwa_sehwa_beach', 'Gujwa_sehwa_abuoleum', 'Gujwa_andol', 'Gujwa_yongnun', 'Gujwa_marker'];


var Jochen_map = ['Jocheon_supgil', 'Jocheon_geomun', 'Jocheon_dolhaleubang', 'Jocheon_dongbaeg', 'Jocheon_sangumbli', 'Jocheon_temapkeu', 'Jocheon_hamdeog'];

var Seongsan_map = ['Seongsan_Gwangchigi', 'Seongsan_kim_young', 'Seongsan_light_bunker', 'Seongsan_Seopjikoji', 'Seongsan_Ilchulbong', 'Seongsan_Aqua', 'Seongsan_Landatv'];

var Pyoseon_map = ['Pyoseon_Olegil', 'Pyoseon_Folk_Village', 'Pyoseon_Left_Bo_Mi_Climb', 'Pyoseon_a_meadow_field', 'Pyoseon_ok_riding_ground', 'Pyoseon_Noksan_ro_Yuchae', 'Pyoseon_Red_Oreum_Natural', 'Pyoseon_Olegil_3'];

var Namwon_map = ['Namwon_camellia', 'Namwon_Mulyeong', 'Namwon_oxcock', 'Namwon_Olegil', 'Namwon_Southern', 'Namwon_Big_Owl', 'Namwon_native', 'Namwon_Huei', 'Namwon_Lee_Seung_Ak'];

var Seogwipo_map = ['Seogwipo_Baekrokdam', 'Seogwipo_double_subway', 'Seogwipo_Jungbang', 'Seogwipo_Huangwuji']

var Jungmun_map = ['Jungmun_museum', 'Jungmun_Yeomiji', 'Jungmun_Cannon', 'Jungmun_Country', 'Jungmun_Veritneoreum'];

var Anduk_map = ['Anduk_Osullock', 'Anduk_Hello_Kitty', 'Anduk_Camellia', 'Anduk_Jeju_Aerospace', 'Anduk_Valley', 'Anduk_Yongmeori', 'Anduk_Kunsan']

var Daejeong_map = ['Daejeong_nolimae', 'Daejeong_dansan', 'Daejeong_gimjeonghuiyubaeji', 'Daejeong_goj', 'Daejeong_jejuchokollisbagmulgwan', 'Daejeong_song-agsan', 'Daejeong_hamohaesuyogjang', 'Daejeong_keijejussiwoking'];

var Hankyung_map = ['Hankyung_Panpo', 'Hankyung_Sinchang_Windmill', 'Hankyung_arthropod_cancer', 'Hankyung_Spirited_Garden', 'Hankyung_Contemporary_Art', 'Hankyung_Jeju_Peace_Museum', 'Hankyung_eong-alhaean', 'Hankyung_jeolbuam'];

var Hallym_map = ['Hallym_beach', 'Hallym_Greek_Mythology', 'Hallym_Golden_Beach', 'Hallim_Park', 'Hallym_biyangdopeollangmos'];

var Aewol_map = ['Aewol_Kwakji', 'Aewol_Antipaduri', 'Aewol_Dinosaur', 'Aewol_Saebyeol', 'Aewol_981_park', 'Aewol_Handam', 'Aewol_Lamb_Ranch', 'Aewol_Let', 'Aewol_Garden', 'Aewol_Teddy'];

var Jeju_City_map = ['Jeju_City_beuligkaempeoseu', 'Jeju_City_dodubong', 'Jeju_City_sam-yang', 'Jeju_City_sumog-won', 'Jeju_City_achim', 'Jeju_City_yasijang', 'Jeju_City_guleum_dali', 'Jeju_City_hyuyanglim', 'Jeju_City_pyeonghwa']
//$('.'+Gujwa_map[i]).children('.marker').mouseenter(function(){
//    $('.'+Gujwa_map[i]).children('a').children('.marker_img').show(300);
//    console.log("i:"+i);
//});
//$('.'+Gujwa_map[i]).children('.marker').mouseleave(function(){
//    setTimeout(function(){
//        $('.'+Gujwa_map[i]).children('a').children('.marker_img').hide(300);
//    },1000);
//});
$('.' + Gujwa_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Gujwa_map[0]);
});

$('.' + Gujwa_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Gujwa_map[0]);
});

$('.' + Gujwa_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Gujwa_map[1]);
});

$('.' + Gujwa_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Gujwa_map[1]);
});

$('.' + Gujwa_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Gujwa_map[2]);
});

$('.' + Gujwa_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Gujwa_map[2]);
});

$('.' + Gujwa_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Gujwa_map[3]);
});

$('.' + Gujwa_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Gujwa_map[3]);
});

$('.' + Gujwa_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Gujwa_map[4]);
});

$('.' + Gujwa_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Gujwa_map[4]);
});

$('.' + Gujwa_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Gujwa_map[5]);
});

$('.' + Gujwa_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Gujwa_map[5]);
});

$('.' + Gujwa_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Gujwa_map[6]);
});

$('.' + Gujwa_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Gujwa_map[6]);
});

$('.' + Gujwa_map[7]).children('.marker').mouseenter(function () {
    mouseenter(Gujwa_map[7]);
});

$('.' + Gujwa_map[7]).children('.marker').mouseleave(function () {
    mouseleave(Gujwa_map[7]);
});

$('.' + Gujwa_map[8]).children('.marker').mouseenter(function () {
    mouseenter(Gujwa_map[8]);
});

$('.' + Gujwa_map[8]).children('.marker').mouseleave(function () {
    mouseleave(Gujwa_map[8]);
});


$('.' + Jochen_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Jochen_map[1]);
});
$('.' + Jochen_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Jochen_map[1]);
});

$('.' + Jochen_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Jochen_map[2]);
});
$('.' + Jochen_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Jochen_map[2]);
});

$('.' + Jochen_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Jochen_map[3]);
});
$('.' + Jochen_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Jochen_map[3]);
});

$('.' + Jochen_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Jochen_map[4]);
});
$('.' + Jochen_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Jochen_map[4]);
});

$('.' + Jochen_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Jochen_map[5]);
});
$('.' + Jochen_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Jochen_map[5]);
});

$('.' + Jochen_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Jochen_map[6]);
});
$('.' + Jochen_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Jochen_map[6]);
});

$('.' + Jochen_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Jochen_map[0]);
});
$('.' + Jochen_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Jochen_map[0]);
});

$('.' + Seongsan_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Seongsan_map[0]);
});
$('.' + Seongsan_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Seongsan_map[0]);
});

$('.' + Seongsan_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Seongsan_map[1]);
});
$('.' + Seongsan_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Seongsan_map[1]);
});

$('.' + Seongsan_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Seongsan_map[2]);
});
$('.' + Seongsan_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Seongsan_map[2]);
});

$('.' + Seongsan_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Seongsan_map[3]);
});
$('.' + Seongsan_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Seongsan_map[3]);
});

$('.' + Seongsan_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Seongsan_map[4]);
});
$('.' + Seongsan_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Seongsan_map[4]);
});

$('.' + Seongsan_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Seongsan_map[5]);
});
$('.' + Seongsan_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Seongsan_map[5]);
});
$('.' + Seongsan_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Seongsan_map[6]);
});
$('.' + Seongsan_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Seongsan_map[6]);
});

$('.' + Pyoseon_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Pyoseon_map[0]);
});
$('.' + Pyoseon_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Pyoseon_map[0]);
});
$('.' + Pyoseon_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Pyoseon_map[1]);
});
$('.' + Pyoseon_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Pyoseon_map[1]);
});
$('.' + Pyoseon_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Pyoseon_map[2]);
});
$('.' + Pyoseon_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Pyoseon_map[2]);
});
$('.' + Pyoseon_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Pyoseon_map[3]);
});
$('.' + Pyoseon_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Pyoseon_map[3]);
});
$('.' + Pyoseon_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Pyoseon_map[4]);
});
$('.' + Pyoseon_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Pyoseon_map[4]);
});
$('.' + Pyoseon_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Pyoseon_map[5]);
});
$('.' + Pyoseon_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Pyoseon_map[5]);
});
$('.' + Pyoseon_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Pyoseon_map[6]);
});
$('.' + Pyoseon_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Pyoseon_map[6]);
});
$('.' + Pyoseon_map[7]).children('.marker').mouseenter(function () {
    mouseenter(Pyoseon_map[7]);
});
$('.' + Pyoseon_map[7]).children('.marker').mouseleave(function () {
    mouseleave(Pyoseon_map[7]);
});

$('.' + Namwon_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Namwon_map[0]);
});
$('.' + Namwon_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Namwon_map[0]);
});
$('.' + Namwon_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Namwon_map[1]);
});
$('.' + Namwon_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Namwon_map[1]);
});
$('.' + Namwon_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Namwon_map[2]);
});
$('.' + Namwon_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Namwon_map[2]);
});
$('.' + Namwon_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Namwon_map[3]);
});
$('.' + Namwon_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Namwon_map[3]);
});
$('.' + Namwon_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Namwon_map[4]);
});
$('.' + Namwon_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Namwon_map[4]);
});
$('.' + Namwon_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Namwon_map[5]);
});
$('.' + Namwon_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Namwon_map[5]);
});
$('.' + Namwon_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Namwon_map[6]);
});
$('.' + Namwon_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Namwon_map[6]);
});
$('.' + Namwon_map[7]).children('.marker').mouseenter(function () {
    mouseenter(Namwon_map[7]);
});
$('.' + Namwon_map[7]).children('.marker').mouseleave(function () {
    mouseleave(Namwon_map[7]);
});
$('.' + Namwon_map[8]).children('.marker').mouseenter(function () {
    mouseenter(Namwon_map[8]);
});
$('.' + Namwon_map[8]).children('.marker').mouseleave(function () {
    mouseleave(Namwon_map[8]);
});

$('.' + Seogwipo_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Seogwipo_map[0]);
});
$('.' + Seogwipo_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Seogwipo_map[0]);
});
$('.' + Seogwipo_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Seogwipo_map[1]);
});
$('.' + Seogwipo_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Seogwipo_map[1]);
});
$('.' + Seogwipo_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Seogwipo_map[2]);
});
$('.' + Seogwipo_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Seogwipo_map[2]);
});
$('.' + Seogwipo_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Seogwipo_map[3]);
});
$('.' + Seogwipo_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Seogwipo_map[3]);
});

$('.' + Jungmun_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Jungmun_map[0]);
});
$('.' + Jungmun_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Jungmun_map[0]);
});
$('.' + Jungmun_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Jungmun_map[1]);
});
$('.' + Jungmun_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Jungmun_map[1]);
});
$('.' + Jungmun_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Jungmun_map[2]);
});
$('.' + Jungmun_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Jungmun_map[2]);
});
$('.' + Jungmun_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Jungmun_map[3]);
});
$('.' + Jungmun_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Jungmun_map[3]);
});
$('.' + Jungmun_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Jungmun_map[4]);
});
$('.' + Jungmun_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Jungmun_map[4]);
});

$('.' + Anduk_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Anduk_map[0]);
});
$('.' + Anduk_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Anduk_map[0]);
});
$('.' + Anduk_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Anduk_map[1]);
});
$('.' + Anduk_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Anduk_map[1]);
});
$('.' + Anduk_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Anduk_map[2]);
});
$('.' + Anduk_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Anduk_map[2]);
});
$('.' + Anduk_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Anduk_map[3]);
});
$('.' + Anduk_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Anduk_map[3]);
});
$('.' + Anduk_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Anduk_map[4]);
});
$('.' + Anduk_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Anduk_map[4]);
});
$('.' + Anduk_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Anduk_map[5]);
});
$('.' + Anduk_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Anduk_map[5]);
});
$('.' + Anduk_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Anduk_map[6]);
});
$('.' + Anduk_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Anduk_map[6]);
});
//$('.'+Gujwa_map[0]).children('.marker').mouseenter(function(){
//    mouseenter(Gujwa_map[0]);
//});
//                                                   
//$('.'+Gujwa_map[0]).children('.marker').mouseleave(function(){
//    mouseleave(Gujwa_map[0]);
//});

$('.' + Daejeong_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Daejeong_map[0]);
});
$('.' + Daejeong_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Daejeong_map[0]);
});
$('.' + Daejeong_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Daejeong_map[1]);
});
$('.' + Daejeong_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Daejeong_map[1]);
});
$('.' + Daejeong_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Daejeong_map[2]);
});
$('.' + Daejeong_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Daejeong_map[2]);
});
$('.' + Daejeong_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Daejeong_map[3]);
});
$('.' + Daejeong_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Daejeong_map[3]);
});
$('.' + Daejeong_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Daejeong_map[4]);
});
$('.' + Daejeong_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Daejeong_map[4]);
});
$('.' + Daejeong_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Daejeong_map[5]);
});
$('.' + Daejeong_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Daejeong_map[5]);
});
$('.' + Daejeong_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Daejeong_map[6]);
});
$('.' + Daejeong_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Daejeong_map[6]);
});
$('.' + Daejeong_map[7]).children('.marker').mouseenter(function () {
    mouseenter(Daejeong_map[7]);
});
$('.' + Daejeong_map[7]).children('.marker').mouseleave(function () {
    mouseleave(Daejeong_map[7]);
});

$('.' + Hankyung_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Hankyung_map[0]);
});
$('.' + Hankyung_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Hankyung_map[0]);
});
$('.' + Hankyung_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Hankyung_map[1]);
});
$('.' + Hankyung_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Hankyung_map[1]);
});
$('.' + Hankyung_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Hankyung_map[2]);
});
$('.' + Hankyung_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Hankyung_map[2]);
});
$('.' + Hankyung_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Hankyung_map[3]);
});
$('.' + Hankyung_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Hankyung_map[3]);
});
$('.' + Hankyung_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Hankyung_map[4]);
});
$('.' + Hankyung_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Hankyung_map[4]);
});
$('.' + Hankyung_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Hankyung_map[5]);
});
$('.' + Hankyung_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Hankyung_map[5]);
});
$('.' + Hankyung_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Hankyung_map[6]);
});
$('.' + Hankyung_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Hankyung_map[6]);
});
$('.' + Hankyung_map[7]).children('.marker').mouseenter(function () {
    mouseenter(Hankyung_map[7]);
});
$('.' + Hankyung_map[7]).children('.marker').mouseleave(function () {
    mouseleave(Hankyung_map[7]);
});

$('.' + Hallym_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Hallym_map[0]);
});
$('.' + Hallym_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Hallym_map[0]);
});
$('.' + Hallym_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Hallym_map[1]);
});
$('.' + Hallym_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Hallym_map[1]);
});
$('.' + Hallym_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Hallym_map[2]);
});
$('.' + Hallym_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Hallym_map[2]);
});
$('.' + Hallym_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Hallym_map[3]);
});
$('.' + Hallym_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Hallym_map[3]);
});
$('.' + Hallym_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Hallym_map[4]);
});
$('.' + Hallym_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Hallym_map[4]);
});

$('.' + Aewol_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[0]);
});
$('.' + Aewol_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[0]);
});
$('.' + Aewol_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[1]);
});
$('.' + Aewol_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[1]);
});
$('.' + Aewol_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[2]);
});
$('.' + Aewol_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[2]);
});
$('.' + Aewol_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[3]);
});
$('.' + Aewol_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[3]);
});
$('.' + Aewol_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[4]);
});
$('.' + Aewol_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[4]);
});
$('.' + Aewol_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[5]);
});
$('.' + Aewol_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[5]);
});
$('.' + Aewol_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[6]);
});
$('.' + Aewol_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[6]);
});
$('.' + Aewol_map[7]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[7]);
});
$('.' + Aewol_map[7]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[7]);
});
$('.' + Aewol_map[8]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[8]);
});
$('.' + Aewol_map[8]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[8]);
});
$('.' + Aewol_map[9]).children('.marker').mouseenter(function () {
    mouseenter(Aewol_map[9]);
});
$('.' + Aewol_map[9]).children('.marker').mouseleave(function () {
    mouseleave(Aewol_map[9]);
});

$('.' + Jeju_City_map[0]).children('.marker').mouseenter(function () {
    mouseenter(Jeju_City_map[0]);
});
$('.' + Jeju_City_map[0]).children('.marker').mouseleave(function () {
    mouseleave(Jeju_City_map[0]);
});
$('.' + Jeju_City_map[1]).children('.marker').mouseenter(function () {
    mouseenter(Jeju_City_map[1]);
});
$('.' + Jeju_City_map[1]).children('.marker').mouseleave(function () {
    mouseleave(Jeju_City_map[1]);
});
$('.' + Jeju_City_map[2]).children('.marker').mouseenter(function () {
    mouseenter(Jeju_City_map[2]);
});
$('.' + Jeju_City_map[2]).children('.marker').mouseleave(function () {
    mouseleave(Jeju_City_map[2]);
});
$('.' + Jeju_City_map[3]).children('.marker').mouseenter(function () {
    mouseenter(Jeju_City_map[3]);
});
$('.' + Jeju_City_map[3]).children('.marker').mouseleave(function () {
    mouseleave(Jeju_City_map[3]);
});
$('.' + Jeju_City_map[4]).children('.marker').mouseenter(function () {
    mouseenter(Jeju_City_map[4]);
});
$('.' + Jeju_City_map[4]).children('.marker').mouseleave(function () {
    mouseleave(Jeju_City_map[4]);
});
$('.' + Jeju_City_map[5]).children('.marker').mouseenter(function () {
    mouseenter(Jeju_City_map[5]);
});
$('.' + Jeju_City_map[5]).children('.marker').mouseleave(function () {
    mouseleave(Jeju_City_map[5]);
});
$('.' + Jeju_City_map[6]).children('.marker').mouseenter(function () {
    mouseenter(Jeju_City_map[6]);
});
$('.' + Jeju_City_map[6]).children('.marker').mouseleave(function () {
    mouseleave(Jeju_City_map[6]);
});
$('.' + Jeju_City_map[7]).children('.marker').mouseenter(function () {
    mouseenter(Jeju_City_map[7]);
});
$('.' + Jeju_City_map[7]).children('.marker').mouseleave(function () {
    mouseleave(Jeju_City_map[7]);
});
$('.' + Jeju_City_map[8]).children('.marker').mouseenter(function () {
    mouseenter(Jeju_City_map[8]);
});
$('.' + Jeju_City_map[8]).children('.marker').mouseleave(function () {
    mouseleave(Jeju_City_map[8]);
});

function mouseenter(name) {
    $('.' + name).children('a').children('.marker_img').fadeIn(300);
    $('.+name').children('a').children('.marker_img').css("z-index", "999");
}

function mouseleave(name) {
    setTimeout(function () {
        $('.' + name).children('a').children('.marker_img').fadeOut(300);
    }, 800);

}

var jeju_best_check = 0;

function jeju_best() {
    if (jeju_best_check == 0) {
        $(".Gujwa_marker").fadeIn();
        $(".Jocheon_marker").fadeIn();
        $(".Hankyung_marker").fadeIn();
        $(".Hallym_marker").fadeIn();
        $(".Aewol_marker").fadeIn();
        $(".Jeju_City_marker").fadeIn();
        $(".Seongsan_marker").fadeOut();
        $(".Pyoseon_marker").fadeOut();
        $(".Namwon_marker").fadeOut();
        $(".Seogwipo_marker").fadeOut();
        $(".Jungmun_marker").fadeOut();
        $(".Anduk_marker").fadeOut();
        $(".Daejeong_marker").fadeOut();
        jeju_best_check++;
        seogwipo_best_check = 0;
        all_view_check = 0;
    } else {
        $(".Gujwa_marker").fadeOut();
        $(".Jocheon_marker").fadeOut();
        $(".Hankyung_marker").fadeOut();
        $(".Hallym_marker").fadeOut();
        $(".Aewol_marker").fadeOut();
        $(".Jeju_City_marker").fadeOut();
        $(".Seongsan_marker").fadeOut();
        $(".Pyoseon_marker").fadeOut();
        $(".Namwon_marker").fadeOut();
        $(".Seogwipo_marker").fadeOut();
        $(".Jungmun_marker").fadeOut();
        $(".Anduk_marker").fadeOut();
        $(".Daejeong_marker").fadeOut();
        jeju_best_check = 0;
        all_view_check = 0;
    }
}

var seogwipo_best_check = 0;

function seogwipo_best() {
    if (seogwipo_best_check == 0) {
        $(".Gujwa_marker").fadeOut();
        $(".Jocheon_marker").fadeOut();
        $(".Hankyung_marker").fadeOut();
        $(".Hallym_marker").fadeOut();
        $(".Aewol_marker").fadeOut();
        $(".Jeju_City_marker").fadeOut();
        $(".Seongsan_marker").fadeIn();
        $(".Pyoseon_marker").fadeIn();
        $(".Namwon_marker").fadeIn();
        $(".Seogwipo_marker").fadeIn();
        $(".Jungmun_marker").fadeIn();
        $(".Anduk_marker").fadeIn();
        $(".Daejeong_marker").fadeIn();
        seogwipo_best_check++;
        jeju_best_check = 0;
        all_view_check = 0;
    } else {
        $(".Gujwa_marker").fadeOut();
        $(".Jocheon_marker").fadeOut();
        $(".Hankyung_marker").fadeOut();
        $(".Hallym_marker").fadeOut();
        $(".Aewol_marker").fadeOut();
        $(".Jeju_City_marker").fadeOut();
        $(".Seongsan_marker").fadeOut();
        $(".Pyoseon_marker").fadeOut();
        $(".Namwon_marker").fadeOut();
        $(".Seogwipo_marker").fadeOut();
        $(".Jungmun_marker").fadeOut();
        $(".Anduk_marker").fadeOut();
        $(".Daejeong_marker").fadeOut();
        seogwipo_best_check = 0;
        all_view_check = 0;
    }
}
var all_view_check = 0;
function all_view(){
    if(all_view_check == 0){
    $(".Gujwa_marker").fadeIn();
        $(".Jocheon_marker").fadeIn();
        $(".Hankyung_marker").fadeIn();
        $(".Hallym_marker").fadeIn();
        $(".Aewol_marker").fadeIn();
        $(".Jeju_City_marker").fadeIn();
        $(".Seongsan_marker").fadeIn();
        $(".Pyoseon_marker").fadeIn();
        $(".Namwon_marker").fadeIn();
        $(".Seogwipo_marker").fadeIn();
        $(".Jungmun_marker").fadeIn();
        $(".Anduk_marker").fadeIn();
        $(".Daejeong_marker").fadeIn();
        all_view_check++;
        jeju_best_check = 0;
        seogwipo_best_check = 0;
    }else{
        $(".Gujwa_marker").fadeOut();
        $(".Jocheon_marker").fadeOut();
        $(".Hankyung_marker").fadeOut();
        $(".Hallym_marker").fadeOut();
        $(".Aewol_marker").fadeOut();
        $(".Jeju_City_marker").fadeOut();
        $(".Seongsan_marker").fadeOut();
        $(".Pyoseon_marker").fadeOut();
        $(".Namwon_marker").fadeOut();
        $(".Seogwipo_marker").fadeOut();
        $(".Jungmun_marker").fadeOut();
        $(".Anduk_marker").fadeOut();
        $(".Daejeong_marker").fadeOut();
        all_view_check = 0;
        jeju_best_check = 0;
        seogwipo_best_check = 0;
    }
}

$(".search_result_box").mouseenter(function () {

    $("body").css('overflow','hidden');
    //    if($('.scroll')){
    //        
    //            $('#main2').removeClass('scroll');
    //
    //            $(".search_result_box").focusin();
    //    }
});
var elm = ".scroll";
$(".search_result_box").hover(function(){
    $(".scroll").off();
    console.log('asdf');
},function(){
    $(".search_result_box").mouseleave(function (){
        $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                        moveDown = $(this).attr('id');
                        if (moveDown == 'main1') {
                            $(".select_scroll").hide();
                            $(".click_scroll").show();
                            $("#click_scroll2").hide();
                            $("#select_scroll2").show();
                            $("#select_text2").show();
                            $(".line2").show();
                            keyScroll=2;
                           // console.log(keyScroll);
                            event.preventDefault();
                        } else if (moveDown == 'main2') {
                            $(".select_scroll").hide();
                            $(".click_scroll").show();
                            $("#click_scroll3").hide();
                            $("#select_scroll3").show();
                            $("#select_text3").show();
                            $(".line3").show();
                            keyScroll=2;
                           // console.log(keyScroll);
                            event.preventDefault();
                        }
                    } catch (e) {}
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                        moveUp = $(this).attr('id');
                        if (moveUp == 'main2') {
                            $(".select_scroll").hide();
                            $(".click_scroll").show();
                            $("#click_scroll1").hide();
                            $("#select_scroll1").show();
                            $("#select_text1").show();
                            $(".line1").show();
                            keyScroll=2;
                          //  console.log(keyScroll);
                            event.preventDefault();
                        } else if (moveUp == 'main3') {
                            $(".select_scroll").hide();
                            $(".click_scroll").show();
                            $("#click_scroll2").hide();
                            $("#select_scroll2").show();
                            $("#select_text2").show();
                            $(".line2").show();
                            keyScroll=3;
                         //   console.log(keyScroll);
                            event.preventDefault();
                        }
                    } catch (e) {}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + '%'
            }, {
                duration: 800,
                complete: function () {}
            });
        });
    });
        
        function createData10() {
    // 1. 자바스크립트 객체 형태로 전달
    //var sendData = {id:$('#id').val()};

    // 2. jQuery serialize함수를 사용해서 전달
    var sendData = $('#search_form').serialize();

    //    console.log(sendData);

    return sendData;

    // 3. 객체를 json 문자열로 만들어서 전달
    //var sendData = JSON.stringify({name:$('#name').val(), email:$('#email').val()});
    //console.log(sendData);
    //return {"data" : sendDta};
}
// $(".searchBox").keyup(function () {
//$(".search_button").on("click",function(){
$(".searchBox").on("change keyup paste", function () {
    var search_keyword = $(this).val();

    if (search_keyword == '') {
        $(".search_result_box").hide();
        $(".best_select").fadeIn();
        $(".search_text").text("지나지기가 추천하는 베스트!");
    } else {
        $.ajax({
            type: "POST",
            url: "search.php?mode=POST",
            data: createData10(),
            dataType: "json",
            success: function (data, status, xhr) {
                $(".best_select").hide();
                $(".search_text").text("검색결과");
                $(".search_result_box").css({
                    'display': 'none',
                    'opacity': '0'
                });
                var jObj = JSON.parse(data);
                $('.search_result_box').html("");
                jObj.forEach(function (item, index, array) {
                    $('.search_result_box').append("<a href='list_in.php?id=" + jObj[index].id + "'><div class='search_results'><img src='" + jObj[index].img_src + "' class='result_img''><div class='search_result_title'>" + jObj[index].title + "</div><div class='one_line_text'>" + jObj[index].one_line.substr(0, 15) + "...</div></div></a>");
                });
                $(".search_result_box").show();
                $(".search_result_box").animate({
                    opacity: "1"
                }, 1000);
            },
            error: function (xhr, textStatus, errorThrown) {
                alert("실패");
            }
        });
    }
});
    });
});
$(".search_result_box").mouseleave(function () {

    $("body").css('overflow','visible');
    //    if($('.scroll')){
    //        
    //            $('#main2').removeClass('scroll');
    //
    //            $(".search_result_box").focusin();
    //    }
});