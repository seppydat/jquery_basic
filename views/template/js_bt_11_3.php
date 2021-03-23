<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>bài tập</title>
	<link rel="stylesheet" type="text/css" href="../css/js_bt_11_3.css">
	<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
	<script src="../js/jquery_part2.js"></script>
</head>
<body>
	<div id="all">
			<form onsubmit="return false">
				New task: <input type="text" id="content">
				<input type="submit" id="submit" value="submit">
			</form>
		<div id="list">
			<div class="item">
				<div class="item_content">
					<p>ahihi</p>
				</div>
				<div class="item_function">
					<a href="#" class="edit">edit</a>
					<div class="delete">&time</div>
				</div>
				<div class="item_ok">OK</div>
			</div>
		</div>
		<div id="delete_all">Delete all</div>
	</div>
</body>
</html>