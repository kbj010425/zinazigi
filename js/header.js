var heart_list = 1;
$('.header_img_heart').click(function(){
    if(heart_list == 0){
        $('.modal_none').hide();
        $('.heart_mask').hide();
        heart_list = 1;
    }else{
        $('.modal_none').show();
        $('.heart_mask').show();
        heart_list = 0;
    }
});
$('.heart_mask').click(function(){
        $('.modal_none').hide();
        $('.heart_mask').hide();
        heart_list = 1;
});
//function heart_list(){
//    if(heart_list == 0){
//        $('.heart_content').hide();
//        console.log('누름');
//        heart_list++;
//    }else{
//        $('.heart_content').show();
//        heart_list = 0;
//        console.log('안누름');
//    }
//}