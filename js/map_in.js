var address_check = 0;

function address_click(){
    if(address_check == 1){
    $(".address_select_box").hide();
    $(".select_mask").hide();
        address_check = 0;
    }else{
        $(".address_select_box").show();
        $(".select_mask").show();
        address_check++;
    }
}
function hide_select_box(){
    $(".address_select_box").hide();
    $(".select_mask").hide();
    address_check = 0;
}

$(document).ready(function(){
    var kind_cehck = $('.kind_check').val();
    if(kind_cehck == 'restaurant'){
        $('.tap_left').css({'color':'#8eddff','border-bottom':'3px solid #8eddff'});
        $('.tap_right').css({'color':'lightgray','border-bottom':'3px solid lightgray'});
    }else{
        $('.tap_right').css({'color':'#8eddff','border-bottom':'3px solid #8eddff'});
        $('.tap_left').css({'color':'lightgray','border-bottom':'3px solid lightgray'});
    }
});
var Coordinates = $('.coordinates').val();
var title = $('.title_text').text();

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//        draggable : false,
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 


// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();


// 주소로 좌표를 검색합니다
geocoder.addressSearch( Coordinates, function(result, status) {

    // 정상적으로 검색이 완료됐으면 
     if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:0px 0;">'+title+'</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    } 
});

window.onload = function () {
    $('#map').css('display', 'none');
}

function tab_1() {
    if (tab_check == 0) {
        $('.tab_content').css('display','none');
        $('.tab_1').hide();
        $('#map').css('display', 'none');
        $('.information_button').text('정보보기');
        tab_check = 1;
    } else {
        $('.tab_content').css('display','block');
        $('.tab_1').show();
        $('#map').css('display', 'block');
        $('.information_button').text('정보닫기');
        tab_check = 0;
    }
}

$('.heart').on('click', function () {
    function createData6() {
        // 1. 자바스크립트 객체 형태로 전달
        //var sendData = {id:$('#id').val()};

        // 2. jQuery serialize함수를 사용해서 전달
        var sendData = $('#heart_form').serialize();

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
img_slide_check = 1;
function show_img(seq){
    $(".img_show_1").hide();
    $(".img_show_2").hide();
    $(".img_show_3").hide();
    $(".img_show_4").hide();
    $(".img_show_5").hide();
    $(".img_mask").show();
    $(".show_img_box").show();
    $(".img_show_"+seq).fadeIn();
    img_slide_check = seq;
}
function img_prev(){
    if(img_slide_check == 1){
        img_slide_check = 5;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }else if(img_slide_check == 5){
        img_slide_check --;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }else if(img_slide_check == 4){
        img_slide_check --;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }else if(img_slide_check == 3){
        img_slide_check --;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }else if(img_slide_check == 2){
        img_slide_check --;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }
}
function img_next(){
    if(img_slide_check == 1){
        img_slide_check ++;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }else if(img_slide_check == 5){
        img_slide_check = 1;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }else if(img_slide_check == 4){
        img_slide_check ++;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }else if(img_slide_check == 3){
        img_slide_check ++;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }else if(img_slide_check == 2){
        img_slide_check ++;
        $(".img_show_1").hide();
        $(".img_show_2").hide();
        $(".img_show_3").hide();
        $(".img_show_4").hide();
        $(".img_show_5").hide();
        $(".img_show_"+img_slide_check).fadeIn();
    }
}
function x_img(){
    $(".img_mask").hide();
    $(".show_img_box").hide();
}