<script src="js/tab_menu.js" type="text/javascript" defer="defer"></script>

<?php $sql7 = "select * from review where id = '$id1'"; $result7 = mysqli_query($dbcon,$sql7); $review_num = mysqli_num_rows($result7); ?>
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
                            <td><?php echo "<img src='img/star_".$row7['star'].".png' class='star_imgs'>" ?></td></tr>
                        <tr><td><div class="time"><?php echo $row7['date']; ?>
                        <?php 
                            if(@$_SESSION['id'] == $row7['user_id'] || @$_SESSION['grade'] == '1'){ ?>
                        <button class="delete_button" onclick="location.href='map_review_delete.php?user_id=<?php echo $row7['user_id'] ?>&id=<?php echo $id1; ?>';"><img src="img/review_Delete_icon.png" class="review_delete"></button>
                        <?php  }
                        ?>

                    </div></td>
                            <td>
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
        <form action="map_review.php" method="post" enctype="multipart/form-data">
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
                        <?php echo "<input type='hidden' name='board_num' value='".$id1."' id='board_num'>" ?>
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