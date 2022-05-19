<?php

$arr;

foreach($arr as $value){
    
    
    $sql_2 = "select board. id,title,one_line,kind, board_detail. address, board_img_src. img1 FROM board INNER JOIN board_detail ON board.id = board_detail.id INNER JOIN board_img_src ON board_detail.id = board_img_src.id WHERE board.id = '$value'";
    $result_2 = mysqli_query($dbcon,$sql_2);
    $row_3 = mysqli_fetch_assoc($result_2); 
    
    
    
}

?>