function place() {
    $('.text_1').text("제주 명소");
    $('.text_2').text('"지나지기에서 사랑받는 제주 명소"');
    location.href = "list_page.php?kind=attraction&page=1";
}

function restaurant() {
    $('.text_1').text("제주 맛집");
    $('.text_2').text('"지나지기에서 사랑받는 제주 맛집"');
    location.href = "list_page.php?kind=restaurant&page=1";
}

function cafe() {
    $('.text_1').text("제주 카페");
    $('.text_2').text('"지나지기에서 사랑받는 제주 카페"');
    location.href = "list_page.php?kind=cafe&page=1";
}

var page = $("#now_page").val();

function page_css() {
    $("pg_" + page).removeClass('pg_back');
    $("pg_" + page).addClass('pg_over');
}

//$(document).ready(function () {
//    var page = $("#now_page").val();
//    function page_css(page) {
//        $("pg_" + page).removeClass('pg_back');
//        $("pg_" + page).addClass('pg_over');
//    }
//});

function heart(seq){
    var gimg_src = $(".img_"+seq).attr('src');
    var gtitle = $(".title_"+seq).text();
    var gone = $(".one_"+seq).text();
    function createData6() {
        // 1. 자바스크립트 객체 형태로 전달
        //var sendData = {id:$('#id').val()};

        // 2. jQuery serialize함수를 사용해서 전달
        var sendData = $('#heart'+seq).serialize();

        //console.log(sendData);

        return sendData;

        // 3. 객체를 json 문자열로 만들어서 전달
        //var sendData = JSON.stringify({name:$('#name').val(), email:$('#email').val()});
        //console.log(sendData);
        //return {"data" : sendDta};
    }
    var heart_check = $('input[name=heart_count_1]').val();
    var id = $('.row').val();
    

    var login_check = $('.row_id'+seq).val();

    $.ajax({
        type: "POST",
        url: "heart.php?mode=POST",
        data: createData6(),
        dataType: "text",
        success: function (data, status, xhr) {
            $('#find_id_check').text(data);
            if (data == '0') {
                alert("로그인을 해주세요.");
                return false;
            } else if (data == '1') {
                $(".heart_heart"+seq).attr("src", "img/hart_event.png");
                $(".heart_check"+seq).val('1');
                $(".heart_list_modal").append("<div class='heart_lists append"+seq+"'><a href='list_in.php?id="+id+"'><table class='heart_table'><tr><td rowspan='2'><img src='"+gimg_src+"' class='heart_list_img'></td><td class='heart_margin'>"+gtitle+"</td></tr><tr><td class='color_lightgray heart_margin'> "+gone+"...</td></tr></table></a></div>");
                return false;
            } else if (data == '2') {
                $(".heart_heart"+seq).attr("src", "img/basic_hart.png");
                $(".heart_check"+seq).val('0');
                var append = $(".append"+seq);
                $("div").remove(".append"+seq);
                return false;
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            alert("실패");
        }
    });
}