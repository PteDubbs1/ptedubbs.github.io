<html>
<head>
<title>Blog Editor</title>
</head>
<body>
<form name="form"  method="GET">
<input name="time" id="time" type ="input" placeholder="DD/MM/YYYY"/>
<br>
<input name="title" id="title" type ="input" placeholder="Post title"/>
<br>
<textarea name="text" id="text" type ="input" placeholder="Post contents here" ></textarea>
<br>
<input type="submit" value="Upload"/>
</form>
<?php
$time = $_GET["time"];
$title = $_GET["title"];
$text = $_GET["text"];
$edit = fopen("blogContents.txt", "w");
fwrite($time);
fwrite($title);
fwrite($text);
fclose($edit);
?>

</body>
</html>
