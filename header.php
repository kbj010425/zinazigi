<?php 
session_start();
include "db.php";
?>
<link rel="shortcut icon" href="img/logo.png" type="image/x-icon" />
<link rel="icon" href="img/logo.png" type="image/x-icon" />
<link rel="stylesheet" type="text/css" href="css/header.css">
<link rel="stylesheet" type="text/css" href="css/font.css">
<link rel="stylesheet" type="text/css" href="css/all.css">
<title>지나지기</title>
<script src="js/header.js" type="text/javascript" defer></script>
<div id="header">
            <div class="page_back" onclick="history.back(-1);">
                <img src="img/page_back_icon.png" class="back_icon">
            </div>
            <div class="header_contant" onclick="location.href='index.html'">
                ZNZG
            </div>
            <div class="header_icon">
                <?php if(!isset($_SESSION['id'])){ ?>    
                    <span class="menu_button" onclick='login_user_model()'>로그인</span>
                    <span class="menu_button" onclick='create_user_model()'>회원가입</span> 
               <?php }else if($_SESSION['grade'] == 0){ ?>
                    <div class="menu_button_heart"><img src="img/header_hart_icon.png" class="logout_icon header_img_heart">
                        <div class="heart_content">
                            <div class="modal_none">
                            <span class="triangle"></span>
                        <div class="heart_list_modal">
                            <div class="heart_text">찜한페이지<span class="heart_text_count" >
                                <?php
                                    $sql_1 = "select * from heart where user_id = '$_SESSION[id]'";
                                    $result_1 = mysqli_query($dbcon,$sql_1);
                                    $row_1 = mysqli_num_rows($result_1);
                                    echo "(".$row_1.")";
                                    
                                ?>
                                </span></div>
                                    <?php while($row_2 = mysqli_fetch_array($result_1)){ ?>
                                    <?php 
                                    
                                    
                                $id = $row_2['id']; 

                                $sql_2 = "select board. id,title,one_line,kind, board_detail. address, board_img_src. img1 FROM board INNER JOIN board_detail ON board.id = board_detail.id INNER JOIN board_img_src ON board_detail.id = board_img_src.id WHERE board.id = '$id'";
                                $result_2 = mysqli_query($dbcon,$sql_2);
                                $row_3 = mysqli_fetch_assoc($result_2); 
                                ?>

                            <div class="heart_lists">
                                <a href="list_in.php?id=<?php echo $id; ?>">
                            <table class="heart_table">
                                <tr>
                                    <td rowspan="2">
                                        <img src="<?php echo $row_3['img1'] ?>" class="heart_list_img">
                                    </td>
                                    <td class="heart_margin"><?php
                                            echo $row_3['title'];
                                        ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="color_lightgray heart_margin">
                                        <?php echo mb_substr($row_3['one_line'],0,17,'UTF-8'); ?>...
                                    </td>
                                </tr>
                            </table>
                                </a>
                            </div>
                            <?php } ?>
                            
                           <br>
                        </div>
                            </div>
                        </div>
                </div>
                    <span class="menu_button" onclick='window.location.href="logout.php"'><img src="img/Logout_icon.png" class="logout_icon1"></span>
               <?php }else{ ?>
                    <span class="menu_button_1 menu_text_1">관리자님</span>
                    <span class="menu_button" onclick='window.location.href="create_board.html"'><img src="img/write_count_icon.png" class="logout_icon"></span>
                    <span class="menu_button" onclick='window.location.href="logout.php"'><img src="img/Logout_icon.png" class="logout_icon1"></span>
                <?php }?>
            </div>
    <div class="heart_mask"></div>
        </div>