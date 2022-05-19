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