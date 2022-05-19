<!DOTYPE html>

    <html>

    <head>
        <link rel="shortcut icon" href="img/logo.png" type="image/x-icon" />
        <link rel="icon" href="img/logo.png" type="image/x-icon" />
        <link rel="stylesheet" type="text/css" href="css/list_page.css">
        <script src="js/jquery-1.12.3.js" type="text/javascript" defer="defer"></script>
        <script src="js/list_page.js" type="text/javascript" defer="defer"></script>
    </head>

    <body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
        <div id="wrap">
            <?php include 'header.php'; $kind = $_GET['kind']; ?>
            <div id="banner-wrap">
                <div class="banner-container">
                    <h1 class="text_1">
                        제주
                        <?php if($kind == 'restaurant'){
                            echo '맛집';
                        }else if($kind == 'attraction'){
                            echo '명소';
                        }else{
                            echo '카페';
                        } ?>
                    </h1>
                    <h2 class="text_2">"지나지기에서 사랑받는 제주
                        <?php if($kind == 'attraction'){
                        echo '명소';
                        }else if($kind == 'restaurant'){
                        echo '맛집';
                        }else{
                        echo '카페';
                        } ?>"
                    </h2>
                </div>
            </div>


            <div id="category-wrap">
                <div class="category-container">
                    <div class="category">
                        <?php if($kind == 'restaurant'){
                            echo "<div class='place' onclick='place();''># 명소</div>
                        <div class='restaurant' onclick='restaurant();'><span class='color_kind'># 맛집</span></div>
                        <div class='festiva'' onclick='cafe();''># 카페</div>";
                            }else if($kind == 'cafe'){
                            echo "<div class='place' onclick='place();'># 명소</div>
                        <div class='restaurant' onclick='restaurant();'># 맛집</div>
                        <div class='festiva'' onclick='cafe();'><span class='color_kind'># 카페</span></div>";
                            }else if($kind == 'attraction'){
                            echo "<div class='place' onclick='place();'><span class='color_kind'># 명소</span></div>
                        <div class='restaurant' onclick='restaurant();'># 맛집</div>
                        <div class='festiva'' onclick='cafe();'># 카페</div>";
                            } ?>
                    </div>
                </div>
            </div>
            <?php
                include 'db.php';
                $sql = "select board. id,title,one_line,kind, board_detail. address, board_img_src. img1 FROM board INNER JOIN board_detail ON board.id = board_detail.id INNER JOIN board_img_src ON board_detail.id = board_img_src.id where kind='$kind' ORDER BY id ASC";
                $result = mysqli_query($dbcon,$sql);
                $num = mysqli_num_rows($result);
                //echo $num;
                $page = ($_GET['page'])?$_GET['page']:1;
                $list = 10;         //페이지당 데이터 수
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
                $sql1 = "select board. id,title,one_line,kind, board_detail. address, board_img_src. img1 FROM board INNER JOIN board_detail ON board.id = board_detail.id INNER JOIN board_img_src ON board_detail.id = board_img_src.id where kind='$kind' ORDER BY id ASC LIMIT $s_point,$list ";
                $result1 = mysqli_query($dbcon,$sql1);
                ?>

            <div id="list-wrap">
                <div class="list-container">
<!--
                    <?php
                    $pageNow = $_GET['page'];
                    if($pageNow == '1'){
                        $num = 1;
                    }else{
                    $num = $pageNow - 1;
                    $num = $num * 10 + 1;
                    }
                    ?>
-->                     <?php $seq = 0; ?>
                    <?php while($row = mysqli_fetch_array($result1)){ ?>
                    
                    
                    
                    <div class='list1'>
                        <?php echo "<a href='list_in.php?id=".$row["id"]."'>";?>
                        <form action="heart.php" method="post" id="heart<?php echo $seq; ?>">
                        <table class="list_table border_bottom">
                            <tr>
                                <td rowspan="3"  class='list_table_img'><div class="img1">
                                    <?php echo "<img src=".$row["img1"]." class='img_".$seq."'> " ?></div></td>
                                <td class="list_table_td_1"><div class="title1 title_<?php echo $seq; ?>">
<!--                            <?php echo $num."."; ?> -->
                            <?php echo $row["title"];?></div>
                                    
                                    <?php
                                $id = $row['id'];
                                $sql2 = "select ROUND(avg(star),1) from review where id = '$id'";
                                $result2 = mysqli_query($dbcon,$sql2);
                                $row1 = mysqli_fetch_row($result2);
                                if($row1[0] == ''){ ?>
                                    <span class="Rating">0.0</span>
                            <?php  }else{ ?>
                                    <span class="Rating"><?php echo $row1[0]; ?> </span>
                            <?php  } ?>
                                    <?php
                            @$sql3 = "select * from heart where id = '".$row['id']."' and user_id = '".$_SESSION['id']."'";
//                                                                     echo $sql3;
                            $result3 = mysqli_query($dbcon,$sql3);
                            $row3 = mysqli_fetch_row($result3);
                        ?> 
                                    
                                    
                        <?php if(!isset($row3[0]) && !isset($row3[1])){ ?>
                        <img src='img/basic_hart.png' class='heart_heart heart_heart<?php echo $seq; ?>' onclick="heart(<?php echo $seq; ?>)">
                        <input type="hidden" class="heart_check<?php echo $seq; ?>" name='heart_check' value="0"> 
                        <?php }else{ ?>
                        <img src='img/hart_event.png' class='heart_heart heart_heart<?php echo $seq; ?>' onclick="heart(<?php echo $seq; ?>)">
                        <input type="hidden" class="heart_check<?php echo $seq; ?>" name='heart_check' value="1">  
                        <?php } ?>
                                    <?php if(!isset($_SESSION['id'])){ ?>
                            <input type="hidden" name='user_id' value="0">
                            <input type="hidden" class="heart_check" name='heart_check' value="0">
                            <?php }else{ ?>
                            <input type="hidden" name='user_id' value="<?php echo $_SESSION['id']; ?>">                          
                            <?php  } ?>
                            <input type="hidden" name='id' class="row" value="<?php echo $row['id']; ?>">
                                </td>
                            </tr>
                            <tr>
                                <td class="list_table_td_2"><div class="address"> <?php echo $row["address"];?></div></td>
                            </tr>
                            <tr>
                                <td class="list_table_td_3"><div class="Introduction one_<?php echo $seq; ?>">
                                    <?php
                                        if(mb_strlen($row['one_line'],'utf-8') >= 38){
//                                            echo $row['one_line'];
                                            echo mb_substr($row["one_line"],0,38,'utf-8');
                                            echo "...";
                                        }else{
                                            echo $row['one_line'];
                                        }
                                    ?>
                                    </div></td>
                            </tr>
                        </table>
                        </form>
                        <?php echo "</a>"; ?>
                    </div>
                    
                    
                    
                    
                    
                    
                    
<!--
                    <div class='list1'>
                        <?php echo "<a href='list_in.php?id=".$row["id"]."'>";?>
                        <div class="img1"><?php echo "<img src=".$row["img1"].">" ?></div>
                        <div class="title1">
                            <?php echo $num."."; ?> 
                            <?php echo $row["title"];?></div>
                            <?php
                                $id = $row['id'];
                                $sql2 = "select ROUND(avg(star),1) from review where id = '$id'";
                                $result2 = mysqli_query($dbcon,$sql2);
                                $row1 = mysqli_fetch_row($result2);
                                if($row1[0] == ''){ ?>
                                    <span class="Rating">0.0</span>
                            <?php  }else{ ?>
                                    <span class="Rating"><?php echo $row1[0]; ?> </span>
                            <?php  } ?>
                            <br>
                        <div class="address"> <?php echo $row["address"];?></div><br>
                        <div class="Introduction"><?php echo $row["one_line"];?></div>
                        <?php echo "</a>"; ?>
                    </div>
-->
<!--                    <?php $seq++; $num++; ?>-->
                    <?php } ?>
                    <input type="hidden" id="now_page" value="<?php echo $_GET['page']; ?>">
                    <div id="pg_wrap">
                        <a href="<?php echo "list_page.php?kind=".$kind; ?>&page=<?php echo $s_page-1; ?>"><button class="pg pg_back">이전</button></a>
                            <?php for($p=$s_page; $p<= $e_page; $p++){ ?>
                        <a href="<?php echo "list_page.php?kind=".$kind; ?>&page=<?php echo $p; ?>"><button id="zxdsa" class="pg pg_back pg_<?php echo $p; ?>"> <?=$p?></button></a>
                            <?php } ?>
                        <a href="<?php echo "list_page.php?kind=".$kind; ?>&page=<?php echo $e_page+1; ?>"><button class="pg pg_back">다음</button></a>
                    </div>

                </div>

            </div>
        </div>

        <?php include 'footer.php'; ?>
        <?php 
include "login.php";
?>
    </body>

    </html>