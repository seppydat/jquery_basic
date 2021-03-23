<?php  

class item_model extends db_model
{
	public function show_all_item ()
	{
		$connect = $this->connect_db();
		$sql_show_all_item = "SELECT * FROM `item_ajax`";
		$query_show_all_item = mysqli_query($connect, $sql_show_all_item);
		$data = array();
		while ($result = mysqli_fetch_array($query_show_all_item)) {
			$data[] = array(
				'id' => $result['id'],
				'content' => $result['content']
			);
		}
		return $data;
		$this->close_db();
	}

	public function select_id_item ()
	{
		$connect = $this->connect_db();
		$sql_select_id = "SELECT id FROM `item_ajax` ORDER BY id DESC LIMIT 1 OFFSET 0";
		$query_select_id = mysqli_query($connect, $sql_select_id);
		$result_id = mysqli_fetch_array($query_select_id);

		if ($result_id == null) {
			$result_id['id'] = 0;
		}
		return $result_id['id'];
		$this->close_db();
	}

	public function insert_item ($id, $content)
	{
		$connect = $this->connect_db();
		$sql_insert_item = "INSERT INTO `item_ajax` (`id`, `content`) VALUES ($id, '$content')";
		return mysqli_query($connect, $sql_insert_item);
		$this->close_db();
	}

	public function delete_item ($id)
	{
		$connect = $this->connect_db();
		$sql_delete_item = "DELETE FROM `item_ajax` WHERE id = $id";

		return mysqli_query($connect, $sql_delete_item);
		$this->close_db();
	}

	public function edit_item ($id, $content)
	{
		$connect = $this->connect_db();
		$sql_edit_item = "UPDATE `item_ajax` SET `content` = '$content' WHERE `id` = '$id'";

		return mysqli_query($connect, $sql_edit_item);
		$this->close_db();
	}

	public function delete_all_item ()
	{
		$connect = $this->connect_db();
		$sql_delete_all = "DELETE FROM `item_ajax`";

		return mysqli_query($connect, $sql_delete_all);
	}
}