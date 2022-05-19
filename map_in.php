<!DOTYPEhtml>
    <html>

    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/all.css">
        <link rel="stylesheet" type="text/css" href="css/map_in.css">

        <script src="js/jquery-1.12.3.js" type="text/javascript" defer></script>
        <script src="js/map_in.js" type="text/javascript" defer></script>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2dca9bd630f5b7e45907a9b67a8002c2&libraries=services"></script>
        <script src="js/kakao_map.js" type="text/javascript" defer></script>
    </head>
    <?php
            include "header.php";
            include "db.php";           
//        $query_string = getenv("QUERY_STRING");
//        $phpself = $_SERVER["PHP_SELF"];
//        echo $phpself;
//        echo $query_string;
//        $actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
//        echo $actual_link;
        ?>

    <body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
        <div class="select_mask" onclick="hide_select_box()"></div>
        <div id="body_wrap">
            <div class="select_bar">제주도 > <span class="address_text" onclick="address_click()"><?php echo $_GET['address']; ?>
                    <div class="address_select_box">
                        <a href="map_in.php?address=제주시&kind=restaurant&page=1">
                            <div class="select_address_text_user">제주시</div>
                        </a>
                        <a href="map_in.php?address=서귀포시&kind=restaurant&page=1">
                            <div class="select_address_text_user">서귀포시</div>
                        </a>

                        <a href="map_in.php?address=구좌읍&kind=restaurant&page=1">
                            <div class="select_address_text_user">구좌</div>
                        </a>

                        <a href="map_in.php?address=조천읍&kind=restaurant&page=1">
                            <div class="select_address_text_user">조천</div>
                        </a>

                        <a href="map_in.php?address=성산읍&kind=restaurant&page=1">
                            <div class="select_address_text_user">성산</div>
                        </a>

                        <a href="map_in.php?address=표선읍&kind=restaurant&page=1">
                            <div class="select_address_text_user">표선</div>
                        </a>

                        <a href="map_in.php?address=남원읍&kind=restaurant&page=1">
                            <div class="select_address_text_user">남원</div>
                        </a>
                        <a href="map_in.php?address=중문&kind=restaurant&page=1">
                            <div class="select_address_text_user">중문</div>
                        </a>
                        <a href="map_in.php?address=안덕면&kind=restaurant&page=1">
                            <div class="select_address_text_user">안덕</div>
                        </a>
                        <a href="map_in.php?address=대정읍&kind=restaurant&page=1">
                            <div class="select_address_text_user">대정</div>
                        </a>
                        <a href="map_in.php?address=한경면&kind=restaurant&page=1">
                            <div class="select_address_text_user">한경</div>
                        </a>
                        <a href="map_in.php?address=한림읍&kind=restaurant&page=1">
                            <div class="select_address_text_user">한림</div>
                        </a>
                        <a href="map_in.php?address=애월읍&kind=restaurant&page=1">
                            <div class="select_address_text_user">애월</div>
                        </a>
                        <a href="map_in.php?address=우도&kind=restaurant&page=1">
                            <div class="select_address_text_user">우도</div>
                        </a>
                        <a href="map_in.php?address=비양&kind=restaurant&page=1">
                            <div class="select_address_text_user">비양</div>
                        </a>
                        <a href="map_in.php?address=추자&kind=restaurant&page=1">
                            <div class="select_address_text_user">추자</div>
                        </a>
                        <a href="map_in.php?address=가파&kind=restaurant&page=1">
                            <div class="select_address_text_user">가파</div>
                        </a>
                        <a href="map_in.php?address=마라&kind=restaurant&page=1">
                            <div class="select_address_text_user">마라</div>
                        </a>
                    </div>
                </span> <?php if(!isset($_GET['title'])){}else{echo "> ".$_GET['title'];} ?>
            </div>
            <div class="body_wrap_content">
                <div class="body_wrap_content_left">
                    <?php 
                        $address = $_GET['address'];
                        $kind = $_GET['kind'];
                        $sql = "select board. id,title,one_line,kind, board_detail. address, board_img_src. img1 FROM board INNER JOIN board_detail ON board.id = board_detail.id INNER JOIN board_img_src ON board_detail.id = board_img_src.id where KIND = '$kind' AND address LIKE '%$address%' ORDER BY id DESC";
                        $result = mysqli_query($dbcon,$sql);
                        $num = mysqli_num_rows($result);
                        $page = ($_GET['page'])?$_GET['page']:1;
                        $list = 4;         //페이지당 데이터 수
                        $block = 5;         // 블록 당 페이지 수
            
                        $pageNum = ceil($num/$list);            //총 페이지
                        $blockNum = ceil($pageNum/$block);      //총 블록
                        $nowBlock = ceil($page/$block);              //현재 페이지가 위치한 블록번호
                        //echo $nowBlock;
                        $s_page = ($nowBlock * $block) - ($block - 1);
            
                        if($s_page <= 1){
                            $s_page - 1;
                        }
                        $e_page = $nowBlock*$block;
                        if($pageNum <= $e_page){
                           $e_page = $pageNum;
                        }
                        $s_point = ($page-1) * $list;
                        $sql1 = "select board. id,title,one_line,kind, board_detail. address, board_img_src. img1 FROM board INNER JOIN board_detail ON board.id = board_detail.id INNER JOIN board_img_src ON board_detail.id = board_img_src.id where KIND = '$kind' AND address LIKE '%$address%' ORDER BY id ASC LIMIT $s_point,$list ";
                        $result1 = mysqli_query($dbcon,$sql1);
                        $pageNow = $_GET['page'];
                        if($pageNow == '1'){
                            $num = 1;
                        }else{
                        $num = $pageNow - 1;
                        $num = $num * 10 + 1;
                    }
                    ?>
                    <input type="hidden" value="<?php echo $kind ?>" class="kind_check">
                    <a href="map_in.php?address=<?php echo $address ?>&kind=restaurant&page=1&id=<?php echo $_GET['id']; ?>&title=<?php echo $_GET['title']; ?>"><div class="tap_left">주변 맛집</div></a>
                    <a href="map_in.php?address=<?php echo $address ?>&kind=cafe&page=1&id=<?php echo $_GET['id']; ?>&title=<?php echo $_GET['title']; ?>"><div class="tap_right">주변 카페</div></a>
                    <?php while($row = mysqli_fetch_array($result1)){ ?>
                    <a href="map_in.php?address=<?php echo $address; ?>&kind=<?php echo $row['kind']; ?>&page=<?php echo $_GET['page'] ?>&id=<?php echo $row['id']; ?>&title=<?php echo $row['title']; ?>">
                    <div class="res_list">
                        <table class="list_table">
                            <tr>
                                <td rowspan="3" class="title_img">
                                    <img src="<?php echo $row['img1'] ?>" class="list_img"></td>
                                <td class="table_img_title_text"><span class="title_list"><?php echo $row['title']; ?></span></td>
                                <td class="heart_count_td"><img src="img/hart_count_icon.png" class="heart_count_icon"><span class="heart_count">
                                    <?php
                                        $id=$row['id'];
                                        $sql2 = "select count(*) from heart where id = '$id'";
                                        $result2 = mysqli_query($dbcon,$sql2);
                                        $row1 = mysqli_fetch_array($result2);
                                        echo $row1[0];
                                    ?>
                                    </span></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="address"><?php echo $row['address']; ?></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="one_line_text"><?php echo mb_substr($row['one_line'],0,25,'UTF-8'); ?>....</td>
                            </tr>
                        </table>
                    </div>
                    <?php $num++ ?>
                    </a>
                    <?php } ?>
                    <?php @$id1 = $_GET['id']; ?>
                    <input type="hidden" id="now_page" value="<?php echo $_GET['page']; ?>">
                    <div id="pg_wrap">
                        <a href="<?php echo "map_in.php?address=".$address."&kind=".$kind; ?>&page=<?php echo $s_page-1; ?>&id=<?php echo $id1; ?>&title=<?php echo $_GET['title']; ?>"><button class="pg pg_back">이전</button></a>
                        <?php for($p=$s_page; $p<= $e_page; $p++){ ?>
                        <a href="<?php echo "map_in.php?address=".$address."&kind=".$kind; ?>&page=<?php echo $p; ?>&id=<?php echo $id1; ?>&title=<?php echo $_GET['title']; ?>"><button id="zxdsa" class="pg pg_back pg_<?php echo $p; ?>"><?=$p?></button></a>
                        <?php } ?>
                        <a href="<?php echo "map_in.php?address=".$address."&kind=".$kind; ?>&page=<?php echo $e_page+1; ?>&id=<?php echo $id1; ?>&title=<?php echo $_GET['title']; ?>"><button class="pg pg_back">다음</button></a>
                    </div>
                </div>
                
                
                
                <div class="body_wrap_content_right">
                    <?php 
                        $sql3 = "select board. id,title,one_line, kind, board_detail. address, phone, business_hours, menu, text, board_img_src. img1, img2, img3, img4, img5 FROM board INNER JOIN board_detail ON board.id = board_detail.id INNER JOIN board_img_src ON board_detail.id = board_img_src.id where board.id = '$id1'";
                        $result3 = mysqli_query($dbcon,$sql3);
                        while($row2 = mysqli_fetch_array($result3)){
                    ?>
                    <?php
                        $sql4 = "select ROUND(avg(star),1) from review where id = '$id1'";
                        $result4 = mysqli_query($dbcon,$sql4);
                        $row3 = mysqli_fetch_row($result4);
                    ?>
                    <form action="heart.php" method="post" id="heart_form">
                    <div class="content_right_header">
                        <span class="content_right_header_title title_text"><a href="list_in.php?id=<?php echo $row2['id']; ?>"><?php echo $row2['title']; ?></a></span>
                        <span class="content_right_header_reivew">
                            <?php if($row3[0] == ''){ ?>
                                    0.0
                            <?php  }else{ ?>
                                    <?php echo $row3[0]; ?>
                            <?php  } ?>
                        </span>
                        
<!--                        <img src="img/basic_hart.png" class="heart_basic">-->
                         <?php
                            @$sql9 = "select * from heart where id = '$id1' and user_id = '".$_SESSION['id']."'";
                            $result9 = mysqli_query($dbcon,$sql9);
                            $row9 = mysqli_fetch_row($result9);
                        ?>
                        <?php if(!isset($row9[0]) && !isset($row9[1])){ ?>
                        <img src='img/basic_hart.png' class='heart heart_basic'>
                        <input type="hidden" class="heart_check" name='heart_check' value="0"> 
                        <?php }else{ ?>
                        <img src='img/hart_event.png' class='heart heart_basic'>
                        <input type="hidden" class="heart_check heart_basic" name='heart_check' value="1">  
                        <?php } ?>
                            <?php if(!isset($_SESSION['id'])){ ?>
                            <input type="hidden" name='user_id' value="0">
                            <input type="hidden" class="heart_check" name='heart_check' value="0">
                            <?php }else{ ?>
                            <input type="hidden" name='user_id' value="<?php echo $_SESSION['id']; ?>">                          
                            <?php  } ?>
                            <input type="hidden" name='id' value="<?php echo $_GET['id']; ?>">
                        
                        <br>
                        <div class="count_img_title"><span class="img_padding"><img src="img/hart_count_icon.png" class="count_icon_heart"></span>
                            <span class="count_heart_text" id="heart_num"><?php $sql5="select count(*) from heart where id = $id1";
                            $result5 = mysqli_query($dbcon,$sql5);
                            $row4 = mysqli_fetch_array($result5);
                            echo $row4[0];
                        ?>
                                <input type="hidden" value="<?php echo $row4[0]; ?>" name="heart_count_1">
                            </span>
                            <span class="count_heart_text">
                            <img src='img/write_count_icon.png' class="count_icon_heart">
                            <?php 
                            $sql6 = "select count(*) from review where id = $id1";
                            $result6 = mysqli_query($dbcon,$sql6);
                            $row5 = mysqli_fetch_array($result6);
                            echo $row5[0];
                        ?>
                            </span>
                        </div>
                        <span onclick="tab_1();" class="information_button">정보보기</span>
                         <?php echo "<input type='hidden' class='coordinates' value='".$row2['address']."'>"; ?>
                        <div class="tab_content">
                            <table class="tab_1">
                        <?php if($row2['phone'] == '--'){}else{ ?>
                        <tr>
                            <td class='td_padding'><img src='img/call_icon.png' class='img_icon'></td>
                            <?php echo "<td class='table_width'>".$row2['phone']."</td></tr>"; ?>
                            <?php } ?>
                        <tr>
                            <td class='td_padding'><img src='img/rocation_icon.png' class='img_icon'></td>
                            <?php if($row2['address'] == '0'){}else{ ?>
                            <?php echo "<td class='table_width'>". $row2['address']."</td></tr>"; ?>
                        <tr>
                            <?php } ?>
                            <?php if($row2['business_hours'] == '0'){}else{ ?>
                            <td class='td_padding'><img src="img/time_icon.png" class="img_icon"></td>
                            <?php echo "<td class='table_width'>".$row2['business_hours']."</td></tr>"; ?>
                            <?php } ?>
                            <?php if($row2['menu'] == '0'){}else{ ?>
                        <tr>
                            <td class="menu_1"><img src="img/list_icon.png" class="img_icon"></td>
                            <?php echo "<td class='table_width'>".$row2['menu']."</td></tr>"; ?>
                            <?php } ?>
                    </table><br>
                    <div id="map" style="width:280px; height: 186px; float: right; margin-top: 20px; margin-left: 0px; font-size: 20px;"></div>
                        </div>
                    </div>
                    </form>
                    <div class="wrap_right_content">
                        <table class="img_table">
                            <tr>
                                <td class="main_img_td" onclick="show_img('1')" colspan="4"><img src="<?php echo $row2['img1']; ?>" class="wrap_right_content_img"></td>
                            </tr>
                            <tr>
                                <td class="sub_img_td2" onclick="show_img('2')"><img src="<?php echo $row2['img2']; ?>" class="wrap_right_content_img_sub"></td>
                                <td class="sub_img_td2" onclick="show_img('3')"><img src="<?php echo $row2['img3']; ?>" class="wrap_right_content_img_sub"></td>
                                <td class="sub_img_td2" onclick="show_img('4')"><img src="<?php echo $row2['img4']; ?>" class="wrap_right_content_img_sub"></td>
                                <td class="sub_img_td1" onclick="show_img('5');"><img src="<?php echo $row2['img5']; ?>" class="wrap_right_content_img_sub"></td>
                            </tr>
                        </table>
                        <div class="show_img_box">
                            <img src="<?php echo $row2['img1']; ?>" class="img_show_1">
            <img src="<?php echo $row2['img2']; ?>" class="img_show_2">
            <img src="<?php echo $row2['img3']; ?>" class="img_show_3">
            <img src="<?php echo $row2['img4']; ?>" class="img_show_4">
            <img src="<?php echo $row2['img5']; ?>" class="img_show_5">
        </div>
                        <div class="img_mask">
                            <img src="img/X.png" class="x_img" onclick="x_img()">
                            <img src="img/prev.png" class="img_prev" onclick="img_prev()">
                            <img src="img/next.png" class="img_next" onclick="img_next()">
                        </div>
                        <span class="wrap_right_content_text"><?php echo $row2['text'] ?></span>
                        <?php 
                    if(@$_SESSION['grade'] == '1'){ ?>
                <button class="board_revise" onclick="location.href='revise_board.html?id=<?php echo $_GET['id']; ?>&kind=<?php echo $row['kind']; ?>';"><img src="img/contant_crystal_icon.png" class="contant_delete"></button>
                <button class="board_delete" onclick="location.href='board_delete.php?id=<?php echo $_GET['id']; ?>';"><img src="img/contant_Delete_icon.png" class="contant_delete"></button>
                <?php } ?>
                    </div>
                    <?php } ?>
                </div>
            </div>
            <div class="modal_back" onclick="modal_mask();"></div>
            <?php include "review_box.php"; ?>
        </div>
    </body>
        <?php include "footer.php"; ?>
        <?php include "login.php"; ?>
    </html>