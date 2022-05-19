window.onload = function () {
    $('#map').css('display', 'none');
}

var tab_check = 1;

function tab_1() {
    if (tab_check == 0) {
        $('.tab_1').hide();
        $('#map').css('display', 'none');
        $('.information_button').text('정보보기');
        tab_check = 1;
    } else {
        $('.tab_1').show();
        $('#map').css('display', 'block');
        $('.information_button').text('정보닫기');
        tab_check = 0;
    }
}

function modal_open(num) {
    $('.slider_modal').show();
    $('.modal_back').show();
    $('.slider_modal').animate({
        opacity: '1'
    }, 500);
    $('.modal_back').animate({
        opacity: '0.7'
    }, 500);
    $('.img_1').hide();
    $('.img_2').hide();
    $('.img_3').hide();
    $('.img_4').hide();
    $('.img_5').hide();
    $('.img_' + num).fadeIn();
    img_slide = num;
}


function modal_close() {
    $('.slider_modal').animate({
        opacity: '0'
    }, 500);
    $('.modal_back').animate({
        opacity: '0'
    }, 500);
    setTimeout(function () {
        $('.slider_modal').hide();
        $('.modal_back').hide();
    }, 500);
}

var img_slide = 1;

function next() {
    if (img_slide == 1) {
        $('.img_1').hide();
        $('.img_2').fadeIn();
        $('.img_3').hide();
        $('.img_4').hide();
        $('.img_5').hide();
        img_slide++
    } else if (img_slide == 2) {
        $('.img_1').hide();
        $('.img_2').hide();
        $('.img_3').fadeIn();
        $('.img_4').hide();
        $('.img_5').hide();
        img_slide++
    } else if (img_slide == 3) {
        $('.img_1').hide();
        $('.img_2').hide();
        $('.img_3').hide();
        $('.img_4').fadeIn();
        $('.img_5').hide();
        img_slide++
    } else if (img_slide == 4) {
        $('.img_1').hide();
        $('.img_2').hide();
        $('.img_3').hide();
        $('.img_4').hide();
        $('.img_5').fadeIn();
        img_slide++;
    } else if (img_slide == 5) {
        $('.img_1').fadeIn();
        $('.img_2').hide();
        $('.img_3').hide();
        $('.img_4').hide();
        $('.img_5').hide();
        img_slide = 1;
    }
}

function prev() {
    if (img_slide == 1) {
        $('.img_1').hide();
        $('.img_2').hide();
        $('.img_3').hide();
        $('.img_4').hide();
        $('.img_5').fadeIn();
        img_slide = 5;
    } else if (img_slide == 2) {
        $('.img_1').fadeIn();
        $('.img_2').hide();
        $('.img_3').hide();
        $('.img_4').hide();
        $('.img_5').hide();
        img_slide--
    } else if (img_slide == 3) {
        $('.img_1').hide();
        $('.img_2').fadeIn();
        $('.img_3').hide();
        $('.img_4').hide();
        $('.img_5').hide();
        img_slide--
    } else if (img_slide == 4) {
        $('.img_1').hide();
        $('.img_2').hide();
        $('.img_3').fadeIn();
        $('.img_4').hide();
        $('.img_5').hide();
        img_slide--
    } else if (img_slide == 5) {
        $('.img_1').hide();
        $('.img_2').hide();
        $('.img_3').hide();
        $('.img_4').fadeIn();
        $('.img_5').hide();
        img_slide = 1;
    }
}

$(document).ready(function () {
    var fileTarget1 = $('.file_box .upload-hidden1');
    fileTarget1.on('change', function () {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name1').val(filename);
    });

    var fileTarget2 = $('.file_box .upload-hidden2');
    fileTarget2.on('change', function () {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name2').val(filename);
    });

    var fileTarget3 = $('.file_box .upload-hidden3');
    fileTarget3.on('change', function () {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name3').val(filename);
    });

    var fileTarget4 = $('.file_box .upload-hidden4');
    fileTarget4.on('change', function () {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name4').val(filename);
    });
});


function modal_open2() {
    $('.review_write').show();
    $('.modal_back').show();
    $('.review_write').animate({
        opacity: '1'
    }, 500);
    $('.modal_back').animate({
        opacity: '0.7'
    }, 500);
}


function modal_close2() {
    $('.review_write').animate({
        opacity: '0'
    }, 500);
    $('.modal_back').animate({
        opacity: '0'
    }, 500);
    setTimeout(function () {
        $('.review_write').hide();
        $('.modal_back').hide();
    }, 500);
}

//별 평점

$('.starRev span').click(function () {
    $(this).parent().children('span').removeClass('on');
    $(this).addClass('on').prevAll('span').addClass('on');
    return false;
});

$('#star_1').click(function () {
    $('#click_star').val('1');
});

$('#star_2').click(function () {
    $('#click_star').val('2');
});

$('#star_3').click(function () {
    $('#click_star').val('3');
});

$('#star_4').click(function () {
    $('#click_star').val('4');
});

$('#star_5').click(function () {
    $('#click_star').val('5');
});




$('.heart').on('click', function () {
    function createData6() {
        // 1. 자바스크립트 객체 형태로 전달
        //var sendData = {id:$('#id').val()};

        // 2. jQuery serialize함수를 사용해서 전달
        var sendData = $('#heart').serialize();

        //console.log(sendData);

        return sendData;

        // 3. 객체를 json 문자열로 만들어서 전달
        //var sendData = JSON.stringify({name:$('#name').val(), email:$('#email').val()});
        //console.log(sendData);
        //return {"data" : sendDta};
    }
    var heart_check = $('input[name=heart_count_1]').val();



    var login_check = $('input[name=user_id]').val();

    $.ajax({
        type: "POST",
        url: "heart.php?mode=POST",
        data: createData6(),
        dataType: "text",
        success: function (data, status, xhr) {
            $('#find_id_check').text(data);
            if (data == '0') {
                alert("로그인을 해주세요.");
            } else if (data == '1') {
                $(".heart").attr("src", "img/hart_event.png");
                $(".heart_check").val('1');

                var cnt = $('#heart_num').text();

                var num = Number(cnt);

                num++;
                //                        $("#heart_num").val(heart_check);
                $("#heart_num").text(num);
                //                        console.log(heart_check);
                return false;
            } else if (data == '2') {
                $(".heart").attr("src", "img/basic_hart.png");
                $(".heart_check").val('0');

                var cnt = $('#heart_num').text();

                var num = Number(cnt);

                num--;
                //                        $("#heart_num").val(heart_check);
                $("#heart_num").text(num);
                //                        console.log(heart_check);
                return false;
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("실패");
        }
    });
});