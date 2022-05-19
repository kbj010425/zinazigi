function createData() {
    // 1. 자바스크립트 객체 형태로 전달
    //var sendData = {id:$('#id').val()};

    // 2. jQuery serialize함수를 사용해서 전달
    var sendData = $('#id').serialize();

    //console.log(sendData);

    return sendData;

    // 3. 객체를 json 문자열로 만들어서 전달
    //var sendData = JSON.stringify({name:$('#name').val(), email:$('#email').val()});
    //console.log(sendData);
    //return {"data" : sendDta};
}

function createData1() {
    // 1. 자바스크립트 객체 형태로 전달
    //var sendData = {id:$('#id').val()};

    // 2. jQuery serialize함수를 사용해서 전달
    var sendData = $('form').serialize();

    //console.log(sendData);

    return sendData;

    // 3. 객체를 json 문자열로 만들어서 전달
    //var sendData = JSON.stringify({name:$('#name').val(), email:$('#email').val()});
    //console.log(sendData);
    //return {"data" : sendDta};
}

function createData2() {
    // 1. 자바스크립트 객체 형태로 전달
    //var sendData = {id:$('#id').val()};

    // 2. jQuery serialize함수를 사용해서 전달
    var sendData = $('#email').serialize();

    //console.log(sendData);

    return sendData;

    // 3. 객체를 json 문자열로 만들어서 전달
    //var sendData = JSON.stringify({name:$('#name').val(), email:$('#email').val()});
    //console.log(sendData);
    //return {"data" : sendDta};
}

function createData3() {
    // 1. 자바스크립트 객체 형태로 전달
    //var sendData = {id:$('#id').val()};

    // 2. jQuery serialize함수를 사용해서 전달
    var sendData = $('#find_id_email').serialize();

    //console.log(sendData);

    return sendData;

    // 3. 객체를 json 문자열로 만들어서 전달
    //var sendData = JSON.stringify({name:$('#name').val(), email:$('#email').val()});
    //console.log(sendData);
    //return {"data" : sendDta};
}
function createData4() {
    // 1. 자바스크립트 객체 형태로 전달
    //var sendData = {id:$('#id').val()};

    // 2. jQuery serialize함수를 사용해서 전달
    var sendData = $('.find_pw_form').serialize();

    //console.log(sendData);

    return sendData;

    // 3. 객체를 json 문자열로 만들어서 전달
    //var sendData = JSON.stringify({name:$('#name').val(), email:$('#email').val()});
    //console.log(sendData);
    //return {"data" : sendDta};
}

$(document).ready(function () {
      var id_check = "0";
    var email_check1 = "0";

    $('input[name="pw"]').keyup(function(){
        var pw1 = $('input[name="pw"]').val();
       // console.log(pw1);
        var pw_check = $('input[name="pw_check"]').val();
      //  console.log(pw_check);
        if(pw1 == pw_check){
            $('.pw_ture').show();
            $('.pw_false').hide();
        }else{
            $('.pw_false').show();
            $('.pw_ture').hide();
        }
    });
    
    $('input[name="pw1"]').keyup(function(){
        var pw1 = $('input[name="pw1"]').val();
       // console.log(pw1);
        var pw_check1 = $('input[name="pw_check1"]').val();
      //  console.log(pw_check);
        if(pw1 == pw_check1){
            $('.pw_ture1').show();
            $('.pw_false1').hide();
        }else if(pw1 == ''){
            $('.pw_ture1').hide();
            $('.pw_false1').hide();
        }else{
            $('.pw_false1').show();
            $('.pw_ture1').hide();
        }
    });
    
    $('input[name="pw_check1"]').keyup(function(){
        var pw1 = $('input[name="pw1"]').val();
       // console.log(pw1);
        var pw_check1 = $('input[name="pw_check1"]').val();
      //  console.log(pw_check);
        if(pw1 == pw_check1){
            $('.pw_ture1').show();
            $('.pw_false1').hide();
        }else if(pw_check1 == ''){
            $('.pw_ture1').hide();
            $('.pw_false1').hide();
        }else{
            $('.pw_false1').show();
            $('.pw_ture1').hide();
        }
    });
    
    var pw1 = "";
    var pw_check = "1";
    
    $('input[name="pw_check"]').keyup(function(){
        var pw1 = $('input[name="pw"]').val();
       // console.log(pw1);
        var pw_check = $('input[name="pw_check"]').val();
      //  console.log(pw_check);
        if(pw1 == pw_check){
            $('.pw_ture').show();
            $('.pw_false').hide();
        }else{
            $('.pw_false').show();
            $('.pw_ture').hide();
        }
    });
      
    $("#id").keyup(function () {
        var length = $('#id').val().length;

        if (length <= 5) {
            $('.base').show();
            $('.false').hide();
            $('.ture').hide();
            id_check = "2";
        } else {
            $.ajax({
                type: "POST",
                url: "id_check.php?mode=POST",
                data: createData(),
                dataType: "text",
                success: function (data, status, xhr) {
                    if (data == 1) {
                        $('.false').show();
                        $('.ture').hide();
                        $('.base').hide();
                        id_check = "1";
                    } else {
                        $('.ture').show();
                        $('.false').hide();
                        $('.base').hide();
                        id_check = "0";
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert("실패");
                }
            });
        }
        
    });
/*    $("#email2").on("click", function () {
        $.ajax({
            type: "POST",
            url: "email_check.php?mode=POST",
            data: createData1(),
            dataType: "text",
            success: function (data, status, xhr) {
                if (data == 1) {
                    $('.false1').show();
                    $('.ture1').hide();
                    $('.base1').hide();
                    $('.email_check').hide();
                    email_check = '1';
                } else {
                    $('.ture1').show();
                    $('.false1').hide();
                    $('.base1').hide();
                    $('.email_check').show();
                    email_check = '0';
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                alert("실패");
            }
        });
    });*/


    $("#email").keyup(function () {
        var length1 = $('#email').val().length;

        if (length1 < "1") {
            $('.base1').show();
            $('.false1').hide();
            $('.ture1').hide();
            $('.email_check').hide();
            email_check = '1';
        } else {
            var emailVal = $("#email").val();
         var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
         if (emailVal.match(regExp) != null) {
             $('.email_check').show();
         } else {
             $('.email_check').hide();
             return false;
         }
            $.ajax({
                type: "POST",
                url: "email_check.php?mode=POST",
                data: createData1(),
                dataType: "text",
                success: function (data, status, xhr) {
                    if (data == 1) {
                        $('.false1').show();
                        $('.ture1').hide();
                        $('.base1').hide();
                        $('.email_check').hide();
                        email_check = '1';
                    } else {
                        $('.ture1').show();
                        $('.false1').hide();
                        $('.base1').hide();
                        $('.email_check').show();
                        email_check = '0';
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert("실패");
                }
            });
        }
    });

    $('#create_user').bind('submit', function () {

       

        if ($('input[name="id"]').val() == '') {
            alert('아이디를 입력해주세요');
            $('input[name="id"]').focus();
            return false;
        } else if (id_check == '1') {

            alert("이미 중복된 아이디입니다.");
            $('input[name="id"]').focus();
            return false;

        } else if (id_check == '2') {
            alert("최소 6자 ~ 최대 16자까지 입력해주세요");
            $('input[name="id"]').focus();
            return false;
        }

        if ($('input[name="pw"]').val() == '') {
            alert("비밀번호를 입력해주세요");
            $('input[name="pw"]').focus();
            return false;
        }
        if($('.pw').val() == $('.pw_check').val()){
        }else{
            alert("비밀번호가 일치하지않습니다");
            $('input[name="pw"]').focus();
            return false;
        }


        if($('#email_input').val() == ''){
            alert("이메일 인증을 해주세요");
            return false; 
        }
        if ($('input[name="email"]').val() == '') {
            alert("이메일를 입력해주세요");
            $('input[name="email"]').focus();
            return false;
        } else if (email_check == '1') {
            alert("이미 중복된 이메일입니다.");
            $('input[name="email"]').focus();
            return false;
        }
        
        if ($('#email_val').val() == $('#email_input').val()){
            
        }else{
            alert("이메일 인증번호가 틀립니다.");
            $('input[name="email_input"]').focus();
            return false;
        }
        
        if($('#email_input').length() != '4'){
            alert("인증번호를 확인해주세요");
            $('input[name="email_in"]').focus();
            return false;            
        }else{
        }
        
    });
    
    $('.email_check').on('click', function(){
        $(this).hide();
        $('.email_suess').show();
        $('.ture1').hide();
        $('.random').show();
        email_check1 = 1;
        $.ajax({
                type: "POST",
                url: "email_go.php?mode=POST",
                data: createData2(),
                dataType: "text",
                success: function (data, status, xhr) {
                    $('#email_val').val(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert("실패");
                }
            });
    });
    
    $('.email_check2').on('click', function(){

        $.ajax({
                type: "POST",
                url: "id_email_check.php?mode=POST",
                data: createData4(),
                dataType: "text",
                success: function (data, status, xhr) {
                    if(data == 0){
                        alert("아이디와 이메일이 일치하는 계정이 없습니다.");
                    }else{
                        alert("인증메일이 발송되었습니다. 인증번호를 입력해주세요");
                        $('.email_check2').hide();
                        $.ajax({
                            type: "POST",
                            url: "find_email_go.php?mode=POST",
                            data: createData4(),
                            dataType: "text",
                            success: function (data, status, xhr) {
                                $('#email_var1').val(data);
                                $('.email_check_text_1').show();
                            },
                            error: function (xhr, textStatus, errorThrown) {
                                alert("실패");
                            }
                        });
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert("실패");
                }
            });
    });
    
    
    
    $('.find_id_check').on('click', function(){

        $.ajax({
                type: "POST",
                url: "id_find.php?mode=POST",
                data: createData3(),
                dataType: "text",
                success: function (data, status, xhr) {
                    $('#find_id_check').text(data);
                    if(data == ''){
                        $('#find_id_check').text("이메일에 일치하는 아이디가 존재하지 않습니다.");
                    }else{
                        $('#find_id_check').text("이메일에 일치하는 아이디는"+data+"입니다.");
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert("실패");
                }
            });
    });

    var email_check_var = 0;
    
    $('.find_pw_form').bind('submit', function () {
        
                var pw1 = $('input[name="pw1"]').val();
                var pw_check1 = $('input[name="pw_check1"]').val();
        
            if($('#fnid_email_check_text').val() == $('#email_var1').val() && email_check_var == 0){
                alert('인증되었습니다.');
                $('#find_pw_susses3').hide();
                $('#find_pw_susses2').hide();
                $('#find_pw_susses1').hide();
                $('#find_hide_pw1').show();
                $('#find_hide_pw2').show();
                email_check_var = 1;
                return false;
            }else if($('#fnid_email_check_text').val() == $('#email_var1').val() && email_check_var == 1){
                
                if(pw1 == pw_check1){
                    
                }else{
                    alert('비밀번호가 틀립니다.');
                    return false;
                }
            }else{
                alert('인증번호가 틀립니다.');
                return false;
            }
            
        
        
    });
    var page = $("#now_page").val();
    var block_num = $("#zxdsa").text();
    page_css(page);
    function page_css(page) {
        $(".pg_" + page).removeClass('pg_back');
        $(".pg_" + page).addClass('pg_over');
    }
});