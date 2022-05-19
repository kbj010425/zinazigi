<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" type="text/css" href="./slick/slick.css">
    <link rel="stylesheet" type="text/css" href="./slick/slick-theme.css">
    <link rel="stylesheet" type="text/css" href="css/list_in.css">
    <link rel="shortcut icon" href="img/logo.png" type="image/x-icon" />
    <link rel="icon" href="img/logo.png" type="image/x-icon" />

    <script src="js/jquery-1.12.3.js" type="text/javascript"></script>
    <script src="./slick/slick.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/img_slide.js" type="text/javascript" defer="defer"></script>
    <script src="js/tab_menu.js" type="text/javascript" defer="defer"></script>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2dca9bd630f5b7e45907a9b67a8002c2&libraries=services"></script>
    <script src="js/kakao_map.js" type="text/javascript" defer></script>
</head>

<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">

    <div id="wrap">
        <?php include 'header.php'; ?>

        <?php
        include 'db.php';
        $id = $_GET['id'];
        $sql = "select board. id,title,one_line, kind, board_detail. address, phone, business_hours, menu, text, board_img_src. img1, img2, img3, img4, img5 FROM board INNER JOIN board_detail ON board.id = board_detail.id INNER JOIN board_img_src ON board_detail.id = board_img_src.id where board.id = '$id'";
        $result = mysqli_query($dbcon,$sql);
        ?>
        <?php while($row = mysqli_fetch_array($result)){?>
        <section class="center slider">
            <?php 
                    if($row['img1'] == '0'){    
                    }else{
                    echo "<div class='header_imgs''>";
                    echo "<img src=".$row['img1']." class='header_slider_img' onclick='modal_open(1);'>"; 
                    echo "</div>";
                    }
                ?>
            <?php 
                    if($row['img2'] == '0'){   
                    }else{
                    echo "<div class='header_imgs''>";
                    echo "<img src=".$row['img2']." class='header_slider_img' onclick='modal_open(2);'>"; 
                    echo "</div>";
                    }
                ?>
            <?php 
                    if($row['img3'] == '0'){    
                    }else{
                    echo "<div class='header_imgs''>";
                    echo "<img src=".$row['img3']." class='header_slider_img' onclick='modal_open(3);'>"; 
                    echo "</div>";
                    }
                ?>
            <?php 
                    if($row['img4'] == '0'){   
                    }else{
                    echo "<div class='header_imgs''>";
                    echo "<img src=".$row['img4']." class='header_slider_img' onclick='modal_open(4);'>"; 
                    echo "</div>";
                    }
                ?>
            <?php 
                    if($row['img5'] == '0'){
                    }else{
                    echo "<div class='header_imgs''>";
                    echo "<img src=".$row['img5']." class='header_slider_img' onclick='modal_open(5);'>"; 
                    echo "</div>";
                    }
                ?>
        </section>

        <div class="slider_modal">
            <div class="X" onclick="modal_close();">
                <img src="img/X.png">
            </div>
            <!--                        <section class="lazy slider" data-sizes="40vw">-->
            <div class="prev" onclick="prev();"><img src="img/prev.png"></div>
            <div class="next" onclick="next();"><img src="img/next.png"></div>
            <div class="modal_slider">
                <div class="img_1">
                    <?php echo "<img src=".$row['img1']." class='modal_img'>"; ?>
                </div>
                <div class="img_2">
                    <?php echo "<img src=".$row['img2']." class='modal_img'>"; ?>
                </div>
                <div class="img_3">
                    <?php echo "<img src=".$row['img3']." class='modal_img'>"; ?>
                </div>
                <div class="img_4">
                    <?php echo "<img src=".$row['img4']." class='modal_img'>"; ?>
                </div>
                <div class="img_5">
                    <?php echo "<img src=".$row['img5']." class='modal_img'>"; ?>
                </div>
            </div>
        </div>
        <div class="modal_back" onclick="modal_mask();"></div>
        <?php  $sql1 = "select ROUND(avg(star),1) from review where id = '$id'";
                $result1 = mysqli_query($dbcon,$sql1);
                $row1 = mysqli_fetch_row($result1);
        ?>
        <?php echo "<input type='hidden' class='coordinates' value='".$row['address']."'>"; ?>
        <div class="contant">
            <div class="title">
                <div class="titles">
                    <form action="heart.php" method="post" id="heart">
                    <spen class="title_text"><?php echo $row['title'];?></spen><span class="Rating"><?php echo $row1[0]; ?></span>
                    <div class="heart_postion">
                        <?php
                            @$sql2 = "select * from heart where id = '$id' and user_id = '".$_SESSION['id']."'";
                            $result2 = mysqli_query($dbcon,$sql2);
                            $row2 = mysqli_fetch_row($result2);
                        ?>
                        <?php if(!isset($row2[0]) && !isset($row2[1])){ ?>
                        <img src='img/basic_hart.png' class='heart'>
                        <input type="hidden" class="heart_check" name='heart_check' value="0"> 
                        <?php }else{ ?>
                        <img src='img/hart_event.png' class='heart'>
                        <input type="hidden" class="heart_check" name='heart_check' value="1">  
                        <?php } ?>
                            <?php if(!isset($_SESSION['id'])){ ?>
                            <input type="hidden" name='user_id' value="0">
                            <input type="hidden" class="heart_check" name='heart_check' value="0">
                            <?php }else{ ?>
                            <input type="hidden" name='user_id' value="<?php echo $_SESSION['id']; ?>">                          
                            <?php  } ?>
                            <input type="hidden" name='id' value="<?php echo $_GET['id']; ?>">
                    </div><br>
                    <span class="star_reivew_num">
                        <img src="img/hart_count_icon.png" class="count">
                        <span class="count_text" id="heart_num">
                        <?php $sql3="select count(*) from heart where id = $id";
                            $result3 = mysqli_query($dbcon,$sql3);
                            $row3 = mysqli_fetch_array($result3);
                            echo $row3[0];
                        ?>
                            <input type="hidden" value="<?php echo $row3[0]; ?>" name="heart_count_1">
                        </span>
                        <img src="img/write_count_icon.png" class="count1">
                        <span class="count_text">
                        <?php 
                            $sql4 = "select count(*) from review where id = $id";
                            $result4 = mysqli_query($dbcon,$sql4);
                            $row4 = mysqli_fetch_array($result4);
                            echo $row4[0];
                        ?>
                        </span>
                    </span>
                    </form>
                </div>
                <div class="tab_btn_1"><span onclick="tab_1();" class="information_button">정보보기</span></div>
                <div class="tab_content">
                    <!--
                    <ul class="tab_1">
                        <br><br>
                        <li>
                            <?php echo "<img src='img/call_icon.png' class='img_icon'>&nbsp&nbsp"; ?> 
                            <span class="img_icon_text"><?php echo $row['phone'];?></span>
                            
                        </li><br>
                        <li><?php echo "<img src='img/rocation_icon.png' class='img_icon'>&nbsp&nbsp"; ?><span class="img_icon_text"><?php echo $row['address'];?></span></li><br>
                        
                        <li>
                            <?php if($row['business_hours'] == '0'){}else{ ?>
                            <?php echo "<img src='img/time_icon.png' class='img_icon'>&nbsp&nbsp"; ?><span class="img_icon_text">
                            <?php echo $row['business_hours']; ?> </span>
                            <?php } ?>
                        </li><br>
                        <li>
                            <?php if($row['menu'] == '0'){}else{ ?>
                            <?php echo "<img src='img/list_icon.png' class='img_icon'>&nbsp&nbsp"; ?><span class="img_icon_text">
                            <?php echo $row['menu']; ?></span>
                            <?php } ?>
                        </li>
                    </ul>
-->
                    <table class="tab_1">
                        <?php if($row['phone'] == '--'){}else{ ?>
                        <tr>
                            <td class='td_padding'><img src='img/call_icon.png' class='img_icon'></td>
                            <?php echo "<td class='table_width'>".$row['phone']."</td></tr>"; ?>
                            <?php } ?>
                        <tr>
                            <td class='td_padding'><img src='img/rocation_icon.png' class='img_icon'></td>
                            <?php if($row['address'] == '0'){}else{ ?>
                            <?php echo "<td class='table_width'>". $row['address']."</td></tr>"; ?>
                        <tr>
                            <?php } ?>
                            <?php if($row['business_hours'] == '0'){}else{ ?>
                            <td class='td_padding'><img src="img/time_icon.png" class="img_icon"></td>
                            <?php echo "<td class='table_width'>".$row['business_hours']."</td></tr>"; ?>
                            <?php } ?>
                            <?php if($row['menu'] == '0'){}else{ ?>
                        <tr>
                            <td class="menu_1"><img src="img/list_icon.png" class="img_icon"></td>
                            <?php echo "<td class='table_width'>".$row['menu']."</td></tr>"; ?>
                            <?php } ?>
                    </table>
                    <div id="map" style="width:500px; height: 300px; float: right; margin-top: 28px; margin-left: 40px;"></div>
                </div>
            </div>
            <div class="clear"></div>

            <div class="text">
                <div class="text_img"><?php echo "<img src='".$row['img1']."' class='content_img'>" ?></div>
                <span class="text_text"><?php echo $row['text'];?></span>
                <?php 
                    if(@$_SESSION['grade'] == '1'){ ?>
                <button class="board_revise" onclick="location.href='revise_board.html?id=<?php echo $id; ?>&kind=<?php echo $row['kind']; ?>';"><img src="img/contant_crystal_icon.png" class="contant_delete"></button>
                <button class="board_delete" onclick="location.href='board_delete.php?id=<?php echo $id; ?>';"><img src="img/contant_Delete_icon.png" class="contant_delete"></button>
                <?php } ?>
            </div>
        </div>
        <?php }?>
        <?php $sql7 = "select * from review where id = '$id'"; $result7 = mysqli_query($dbcon,$sql7); $review_num = mysqli_num_rows($result7); ?>
        <div class="review">
            <div class="review_header">
                <spen class="review_title">리뷰</spen>
                <spen class="review_count">(<?php echo $review_num; ?>)</spen>
                <?php if(isset($_SESSION['id'])){ ?>
                <div class="review_write_button" onclick='modal_open2();'><img src="img/review_write_icon.png" class="reivew_write"></div>
                <?php }else{ ?>
                <?php } ?>
            </div>
            <div class="review_contant">
                <?php 
                if(mysqli_num_rows($result7)){
                }else{
                    echo "<div class='no_review'>아직 리뷰가 없습니다! 리뷰를 작성해주세요!</div>";
                }
                while($row7 = mysqli_fetch_array($result7)){
            ?>
                <div class="review_text">
                    <table class="review_table">
                        <tr><td class="td_name"><div class="name"><?php echo $row7['user_id'];?></div></td>
                            <td class="content_td"><?php echo "<img src='img/star_".$row7['star'].".png' class='star_imgs'>" ?></td></tr>
                        <tr><td><div class="time"><?php echo $row7['date']; ?>
                        <?php 
                            if(@$_SESSION['id'] == $row7['user_id'] || @$_SESSION['grade'] == '1'){ ?>
                        <button class="delete_button" onclick="location.href='review_delete.php?user_id=<?php echo $row7['user_id'] ?>&id=<?php echo $id; ?>';"><img src="img/review_Delete_icon.png" class="review_delete"></button>
                        <?php  }
                        ?>

                    </div></td>
                            <td class="content_td">
                        <?php echo $row7['text']; ?><br>
                        <?php if($row7['img1'] == '0'){}else{ ?>
                        <?php echo "<img class='review_img' src='".$row7['img1']."'>" ?>
                        <?php } ?>
                        <?php if($row7['img2'] == '0'){}else{ ?>
                        <?php echo "<img class='review_img' src='".$row7['img2']."'>" ?>
                        <?php } ?>
                        <?php if($row7['img3'] == '0'){}else{ ?>
                        <?php echo "<img class='review_img' src='".$row7['img3']."'>" ?>
                        <?php } ?>
                        <?php if($row7['img4'] == '0'){}else{ ?>
                        <?php echo "<img class='review_img' src='".$row7['img4']."'>" ?>
                        <?php } ?>
                            </td>
                        </tr>
                    </table>

<!--
                    <div class="name"><?php echo $row7['user_id'];?>
                        <?php echo "<img src='img/star_".$row7['star'].".png' class='star_imgs'>" ?></div>
                    <div class="time"><?php echo $row7['date']; ?>
                        <?php 
                            if(@$_SESSION['id'] == $row7['user_id'] || @$_SESSION['grade'] == '1'){ ?>
                        <button class="delete_button" onclick="location.href='map_review_delete.php?user_id=<?php echo $row7['user_id'] ?>&id=<?php echo $id1; ?>';"><img src="img/review_Delete_icon.png" class="review_delete"></button>
                        <?php  }
                        ?>

                    </div>
                    <div class="review_contant_text">
                        <?php echo $row7['text']; ?></div>

                    <div class="review_img_list">
                        <?php if($row7['img1'] == '0'){}else{ ?>
                        <?php echo "<img class='review_img' src='".$row7['img1']."'>" ?>
                        <?php } ?>
                        <?php if($row7['img2'] == '0'){}else{ ?>
                        <?php echo "<img class='review_img' src='".$row7['img2']."'>" ?>
                        <?php } ?>
                        <?php if($row7['img3'] == '0'){}else{ ?>
                        <?php echo "<img class='review_img' src='".$row7['img3']."'>" ?>
                        <?php } ?>
                        <?php if($row7['img4'] == '0'){}else{ ?>
                        <?php echo "<img class='review_img' src='".$row7['img4']."'>" ?>
                        <?php } ?>
                    </div>
-->

                </div>
                <?php } ?>
            </div>
        </div>
        <form action="review.php" method="post" enctype="multipart/form-data">
            <div class="review_write"><span class="review_write_title">리뷰쓰기</span>
                <div class="X2" onclick="modal_close2();">
                    <img src="img/X.png" width="20px;">
                </div>
                <div class="review_write_Rating">평점
                    <div class="starRev">
                        <span class="starR on" id="star_1">별1</span>
                        <span class="starR" id="star_2">별2</span>
                        <span class="starR" id="star_3">별3</span>
                        <span class="starR" id="star_4">별4</span>
                        <span class="starR" id="star_5">별5</span>
                        <input type="hidden" name="star" value="1" id="click_star">
                        <?php echo "<input type='hidden' name='board_num' value='".$id."' id='board_num'>" ?>
                    </div>
                </div>
                <div class="file_box"><span class="photo_text">사진</span>
                    <div class="photo">
                        <label for="ex_filename1">첨부하기</label>
                        <input class="upload-name1" value="파일선택..." disabled="disabled1">
                        <input type="file" id="ex_filename1" class="upload-hidden1" name="img1" value="">
                        <br>
                        <label for="ex_filename2">첨부하기</label>
                        <input class="upload-name2" value="파일선택..." disabled="disabled2">
                        <input type="file" id="ex_filename2" class="upload-hidden2" name="img2" value="">
                        <br>
                        <label for="ex_filename3">첨부하기</label>
                        <input class="upload-name3" value="파일선택..." disabled="disabled3">
                        <input type="file" id="ex_filename3" class="upload-hidden3" name="img3" value="">
                        <br>
                        <label for="ex_filename4">첨부하기</label>
                        <input class="upload-name4" value="파일선택..." disabled="disabled4">
                        <input type="file" id="ex_filename4" class="upload-hidden4" name="img4" value="">
                    </div>
                </div>
                <div class="review_write_text"><span class="review_text_title">리뷰</span>

                </div>
                <textarea class="review_text_text" name="review" placeholder="리뷰를 작성해주세요..."></textarea>
                <div class="submit_button_review">
                <input type="submit" class="review_complet" value="등록">
                </div>
            </div>
        </form>
    </div>
    <?php 
                include 'footer.php';
                include 'login.php';
            ?>
</body>

</html>