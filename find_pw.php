<?php

include 'db.php';

$id = htmlentities(trim($_POST['pw_find_id']));
$pw = htmlentities(trim(password_hash($_POST['pw1'], PASSWORD_DEFAULT)));
$email = htmlentities(trim($_POST['pw_find_email']));

$stmt = $dbcon ->prepare("UPDATE create_user SET pw = ? WHERE id = ? and email = ?");
$stmt -> bind_param('sss',$pw,$id,$email);
$stmt -> execute();

$result = $stmt->fetch();

echo "<script>alert('비밀번호가 변경되었습니다.'); window.location.href='index.html'</script>"
?>