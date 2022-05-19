function create_user_model() {
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({
        'width': maskWidth,
        'height': maskHeight
    });      
      $('#mask').fadeTo(0,0.7);    
    $('#create_model').show();
}
function create_user_model_close(){
    $('#create_model').hide();
    $('#mask, .window').hide();  
}

function login_user_model() {
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({
        'width': maskWidth,
        'height': maskHeight
    });      
      $('#mask').fadeTo(0,0.7);    
    $('#login_model').show();
}
function login_user_model_close(){
    $('#login_model').hide();
    $('#mask, .window').hide();  
}

function id_find_model() {      
    $('#find_id_model').show();
}
function id_find_model_close(){
    $('#find_id_model').hide();
}

function pw_find_model() {      
    $('#find_pw_model').show();
}
function pw_find_model_close(){
    $('#find_pw_model').hide();
}

$('#mask').click(function () {  
    $('#create_model').hide();
    $('#login_model').hide();
    $('#find_id_model').hide();
    $('#find_pw_model').hide();
    $(this).hide();  
    $('.window').hide();  
});