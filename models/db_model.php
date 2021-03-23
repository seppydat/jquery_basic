<?php  

class db_model
{
	public function connect_db ()
	{
		$connect = mysqli_connect('localhost', 'root', '', 'form_web');
		if (!$connect) {
			die('connect error');
		}

		return $connect;
	}

	public function close_db ()
	{
		mysqli_close($connect);
	}
}