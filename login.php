<meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/all.css">
        <link rel="stylesheet" type="text/css" href="css/create_user.css">
        <link rel="stylesheet" type="text/css" href="css/font.css">

<!--        <script type="text/javascript" src="js/jquery-1.12.3.js" defer="defer"></script>-->
        <script type="text/javascript" src="js/login.js" defer="defer"></script>
        <script src="js/model.js" type="text/javascript" defer="defer"></script>


    <div id="mask"></div>
<!--회원가입 모달창-->
        <div id="create_model">
<!--            <div class="model_img"></div>-->
            <div class="model_text">
               <div class="model_close">
                   <img src="img/close_button.png" class="close_button_img" onclick="create_user_model_close()">
               </div>
                <div class="sing_up">
                    SING UP
                </div>
                <form id="create_user" method="post" action="create_user.php">
                <div class="input">
                <table class="input_table">
                <tr><td>
                <span class="id_text">
                    <img src="img/id_img.png" class="id_img">
                </span><span class="id_text1">ID</span>
                    </td></tr>
                    <tr><td>
                        <input type="text" name="id" id="id" placeholder="아이디를 입력해주세요." autocomplete="off">
                        <span class="base" style="display: inline-block;">최소 6자 ~ 최대 16자까지 입력해주세요</span>
                        <span class="false" style="display: none;">아이디 중복</span>
            <span class="ture" style="display: none;">사용가능한 아이디</span>
                    </td></tr>
                    <tr><td>
                        <img src="img/password_img.png" class="id_img"><span class="id_text1">Password</span>
                    </td></tr>
                    <tr><td>
                        <input type="password" name="pw" placeholder="비밀번호를 입력해주세요." class="pw">
                        
                    </td></tr>
                    <tr><td>
                        <img src="img/password_check.png" class="id_img"><span class="id_text1">Confirm Password</span>
                    </td></tr>
                    <tr><td>
                        <input type="password" name="pw_check" placeholder="비밀번호를 확인해주세요." class="pw_check">
                        <span class="pw_ture" style="display: none;">비밀번호가 일치합니다.</span>
                        <span class="pw_false" style="display: none;">비밀번호가 일치하지않습니다.</span>
                    </td></tr>
                    <tr><td>
                        <img src="img/email.png" class="id_img"><span class="id_text1">Email</span>
                    </td></tr>
                    <tr><td>
                        <input type="text" name="email" id="email" placeholder="이메일을 입력해주세요." autocomplete="off">
                        <span class="base1" style="display: inline-block;">이메일을 입력해주세요</span>
                        <span class="ture1" style="display: none;">사용가능한 이메일입니다!</span>
                        <span class="false1" style="display: none;">이미 사용된 이메일입니다</span>
                        <span class="email_suess" style="display: none;">이메일이 발송되었습니다</span>
                        <button type="button" class="email_check" onclick="random_string();" style="display: none;">인증하기</button>
                        
                    </td></tr>
                    <tr><td style="display:none;" class="random">
                        <img src="img/email_check.png" class="id_img"><span class="id_text1">Verification Code</span>
                    </td></tr>
                    <tr><td style="display:none;" class="random">
                        <input type="text" name="email_in" id="email_input" placeholder="인증번호를 입력해주세요." autocomplete="off">
                    </td></tr>
                    </table>
                    <input type="submit" class="submit_login" value="SIGN UP">
                    <input type="hidden" value="" id="email_val">
                </div>
                </form>
            </div>
        </div>

<!--로그인 모달창-->
        <div id="login_model">
<!--            <div class="model_img1"></div>-->
            <div class="model_text1">
               <div class="model_close">
                   <img src="img/close_button.png" class="close_button_img" onclick="login_user_model_close()">
               </div>
                <div class="sing_up1">
                    LOGIN
                </div>
                <form method="post" action="login_check.php" id="login_modal_text">
                <div class="input">
                <table class="input_table1">
                    <tr><td>
                    <img src="img/id_img.png" class="id_img1">
                        <input type="text" name="login_id" placeholder="ID" autocomplete="off" class="id_input_text">
                    </td></tr>
                    <tr><td>
                        <img src="img/password_img.png" class="pw_img1">
                        <input type="password" name="login_pw" placeholder="Password" class="pw_input_text">
                        
                    </td></tr>


                    </table>
                    <input type="submit" value="LOGIN" class="submit_login">
                    <div class="fint_text">
                    <span class="id_find" onclick="id_find_model()">아이디 찾기</span>
                    <span class="pw_find" onclick="pw_find_model()">비밀번호찾기</span>
                    </div>
                </div>
                </form>
            </div>
        </div>

<!--아이디찾기 모달창-->
        <div id="find_id_model">
<!--            <div class="model_img1"></div>-->
            <div class="model_text1">
               <div class="model_close">
                   <img src="img/close_button.png" class="close_button_img" onclick="id_find_model_close()">
               </div>
                <div class="sing_up1">
                    Find ID
                </div>
                <form method="post" action="id_find.php" id="login_modal_text">
                    <input hidden="hidden" />
                <div class="input">
                <table class="input_table2">
                    <tr><td>
                        <img src="img/email.png" class="find_email_img">
                        <input type="text" name="find_id" placeholder="Email" class="pw_input_text" autocomplete="off" id="find_id_email">
                    
                    </td></tr>
                    <tr><td>
                        <span id="find_id_check"></span>
                        </td></tr>
                    </table>
                    <button type="button" class="find_id_check">find</button>
                </div>
                </form>
            </div>
        </div>



<!--비밀번호찾기 모달창-->
        <div id="find_pw_model">
<!--            <div class="model_img1"></div>-->
            <div class="model_text1">
               <div class="model_close">
                   <img src="img/close_button.png" class="close_button_img" onclick="pw_find_model_close()">
               </div>
                <div class="sing_up2">
                    Find Password
                </div>
                <form method="post" action="find_pw.php" id="login_modal_text" class="find_pw_form">
                <div class="input">
                <table class="input_table3">
                    <tr><td>
                    <div id="find_pw_susses3">
                    <img src="img/id_img.png" class="id_img5">
                        <input type="text" name="pw_find_id" placeholder="ID" autocomplete="off" class="id_input_text">
                        </div>
                    </td></tr>
                    <tr><td>
                       <div id="find_pw_susses2">
                        <img src="img/email.png" class="find_email_img1">
                        <input type="text" name="pw_find_email" placeholder="Email" class="pw_input_text" autocomplete="off">
                        <button type="button" class="email_check2" style="cursor: pointer;">인증하기</button>
                        <input type="hidden" value="" id="email_var1">
                        </div>
                    </td></tr>
                    

                    <tr><td>
                    <div id="find_hide_pw1">
                    <img src="img/password_img.png" class="id_img6">
                        <input type="password" name="pw1" placeholder="Password" autocomplete="off" class="id_input_text">
                        </div>
                    </td></tr>
                    <tr><td>
                       <div id="find_hide_pw2">
                        <img src="img/password_check.png" class="find_email_img3">
                        <input type="password" name="pw_check1" placeholder="Confirm Password" class="pw_input_text" autocomplete="off">
                        </div>
                    </td></tr>
                    <tr><td>
                       <span class="pw_ture1" style="display: none;">비밀번호가 일치합니다.</span>
                        <span class="pw_false1" style="display: none;">비밀번호가 일치하지않습니다.</span>
                    </td></tr>
                    </table>
                    <div class="email_check_text_1" id="find_pw_susses1">
                    <img src="img/email_check.png" class="id_img3">
                        <input type="text" name="email_check_1" placeholder="인증번호를 입력해주세요" autocomplete="off" class="id_input_text1" id="fnid_email_check_text">
                    </div>
                    <input type="submit" value="Find" class="find_pw_submit">
                </div>
                </form>
            </div>
        </div>