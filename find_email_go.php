<?php

$email = trim($_POST['pw_find_email']);

 //echo $email;

 function GenerateString($length)  
{  
    $characters  = "0123456789";  
    $characters .= "abcdefghijklmnopqrstuvwxyz";  
    $characters .= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
    $characters .= "_";  
      
    $values = "";  
      
    $nmr_loops = $length;  
    while ($nmr_loops--)  
    {  
        $values .= $characters[mt_rand(0, strlen($characters) - 1)];  
    }  
      
    return $values;
} 

$val = GenerateString(4);
echo $val;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "./PHPMailer/src/PHPMailer.php";
require "./PHPMailer/src/SMTP.php";
require "./PHPMailer/src/Exception.php";

$mail = new PHPMailer(true);

try {

    // 서버세팅    
    $mail -> SMTPDebug = 0;    // 디버깅 설정
    $mail -> isSMTP();               // SMTP 사용 설정

    $mail -> Host = "smtp.naver.com";                      // email 보낼때 사용할 서버를 지정
    $mail -> SMTPAuth = true;                                // SMTP 인증을 사용함
    $mail -> Username = "zinazigi@naver.com";  // 메일 계정
    $mail -> Password = "wlskwlrl!";                   // 메일 비밀번호
    $mail -> SMTPSecure = "ssl";                             // SSL을 사용함
    $mail -> Port = 465;                                        // email 보낼때 사용할 포트를 지정
    $mail -> CharSet = "utf-8";                                // 문자셋 인코딩

    // 보내는 메일
    $mail -> setFrom("zinazigi@naver.com", "지나지기");

    // 받는 메일
    $mail -> addAddress($email, "receive01");
    $mail -> addAddress($email, "receive02");
    
    // 첨부파일
   // $mail -> addAttachment("./test.zip");
    //$mail -> addAttachment("./anjihyn.jpg");

    // 메일 내용
    $mail -> isHTML(true);                                                         // HTML 태그 사용 여부
    $mail -> Subject = "지나지기 회원가입 인증메일입니다.";                  // 메일 제목
    $mail -> Body = "인증번호는 <span style='font-size: 30px;'>".$val."</span> 입니다.";    // 메일 내용
    
    // 메일 전송
    $mail -> send();
    
//    echo "Message has been sent";
//    echo $pwd;

} catch (Exception $e) {
 //   echo "Message could not be sent. Mailer Error : ", $mail -> ErrorInfo;
}
?>