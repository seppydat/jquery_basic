<?php  

class item_controller
{
	public function index_action ()
	{
		require 'views/template/view_bt_jquery.html';
	}

	public function show_action ()
	{
		$item_model = new item_model();
		$data = $item_model->show_all_item();

		echo(json_encode($data));
	}

	public function insert_action()
	{
		if (isset($_POST['content_item'])) {
			$content_item = $_POST['content_item'];
			$item_model = new item_model();
			$id_item = $item_model->select_id_item() + 1;

			$model = $item_model->insert_item($id_item, $content_item);
			$data = array(
				'id_item' => $id_item,
				'status' => $model
			);

			echo(json_encode($data));
		}
	}

	public function edit_action ()
	{
		if (isset($_POST['id']) && isset($_POST['content_new'])) {
			$id_item = $_POST['id'];
			$content_new = $_POST['content_new'];
			
			$item_model = new item_model();
			$status = $item_model->edit_item($id_item, $content_new);
			$data = array(
				'status' => $status
			);
			echo(json_encode($data));
		}
	}

	public function delete_action ()
	{
		if (isset($_POST['id_item'])) {
			$id_item = $_POST['id_item'];
			$item_model = new item_model();
			$status = $item_model->delete_item($id_item);

			echo($status);
		}
	}

	public function delete_all_action ()
	{
		$item_model = new item_model();
		$status = $item_model->delete_all_item();

		echo($status);
	}
}