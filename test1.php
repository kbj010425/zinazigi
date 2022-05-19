<?php
require_once('Snoopy.class.php');
$location = "https://www.mangoplate.com/search/%EC%A0%9C%EC%A3%BC%EB%8F%84".$_GET[img];
$snoopy = new Snoopy;
$snoopy -> fetch($location);
print $snoopy -> results;

?>