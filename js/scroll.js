var keyScroll = 1;
window.onkeydown = function() {

                if (event.keyCode == 40) {

                    var offset = $("#main" + keyScroll).offset();
                    $('html,body').animate({
                        scrollTop: offset.top
                    }, 800);
                    $(".select_scroll").hide();
                    $("#select_scroll" + keyScroll).show();
                    $(".click_scroll").show();
                    $("#click_scroll" + keyScroll).hide();
                    keyScroll++;
                    event.preventDefault();
                  //  console.log(keyScroll);
                    if(keyScroll == 3){
                        keyScroll = 2;
                    }
                }
                if (event.keyCode == 38) {
                    keyScroll--;
                    var offset = $("#main" + keyScroll).offset();
                    $('html,body').animate({
                        scrollTop: offset.top
                    }, 800);
                    $(".select_scroll").hide();
                    $("#select_scroll" + keyScroll).show();
                    $(".click_scroll").show();
                    $("#click_scroll" + keyScroll).hide();
                    event.preventDefault();
                  //  console.log(keyScroll);
                    if(keyScroll == 0){
                        keyScroll = 1;
                    }
                    
                }
            };
//$("body").on("mousewheel", function(event, delta){
//    var moveTop = $(window).scrollTop();
//	if(delta>0){
//  	//마우스 휠 up
//    $('html,body').animate({scrollTop:'+100%'},600);
//  }else if(delta<0){
//  	//마우스 휠 down
//      $('html,body').animate({scrollTop:'+100%'},600);
//  }
//});
window.onload = function scoll_1() {
    
    var elm = ".scroll";
    var pageNum = '0';
    
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
    
    
    
         var element = document.getElementById('main1');
        var h = element.clientHeight;
        var totalH = h * 4;

        var scrollValue = $(document).scrollTop();
        
        var nowY = totalH / scrollValue;
        
    
    $("#logo_img").animate({margin: "2%", opacity: "1"},800);
    
    setTimeout(function(){
        if (nowY == 'Infinity' && nowY > 4) {
        $(".select_scroll").hide();
        $(".click_scroll").show();
        $("#click_scroll1").hide();
        $("#select_scroll1").show();
        $("#menu").fadeIn(300);
        $("#select_menu").fadeIn(800);
            keyScroll=2;
            //console.log(keyScroll);
    } else if (nowY <= 4 && nowY > 2) {
        $(".select_scroll").hide();
        $(".click_scroll").show();
        $("#click_scroll2").hide();
        $("#select_scroll2").show();
        $("#menu").fadeIn(500);
        $("#select_menu").fadeIn(800);
        keyScroll=3;
        //console.log(keyScroll);
    }     },1000);
    
    setTimeout(function(){
        $("#main_text").animate({top: "50%", opacity: "1"},800);
    },400);
    
    
    $("#click_scroll1").hover(
        function(){
            $(this).css("display","none");
            $("#select_scroll1").css("display","block");
            $("#select_text1").css("display", "block");
        },function(){
            $(this).css("display","block");
            $("#select_scroll1").css("display","none");
            $("#select_text1").css("display", "none");
        }
    );
    
    $("#click_scroll2").hover(
        function(){
            $(this).css("display","none");
            $("#select_scroll2").css("display","block");
            $("#select_text2").css("display", "block");
        },function(){
            $(this).css("display","block");
            $("#select_scroll2").css("display","none");
            $("#select_text2").css("display", "none");
        }
    );

    


}
