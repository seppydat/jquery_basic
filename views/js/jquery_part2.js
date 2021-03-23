$(document).ready(function () {
	$('#submit').on('click', function () {
		insert_data();
	});

	$('#delete_all').on('click', function () {
		if (confirm("Are you sure?")) {
			$.ajax({
				url: '?controller=item&action=delete_all',
				type: 'POST',
				dataType: 'text'
			}).done( function (result) {
				if (result) {
					$('.item').remove();
				}
				else{
					alert("error");
				}
			});
		}
	});

	show_all_item();
});

function show_all_item ()
{
	$.ajax({
		url: '?controller=item&action=show',
		type: 'POST',
		dataType: 'json',
		data:{}
	}).done( function (result) {
		$(result).each(function (index, value) {
			var div_item = $('<div>').addClass('item');
			//div content
			var item_content = $('<div>').addClass('item_content');
			var p = $('<p>').html(value['content']);
			$(item_content).append(p);
			//div item function
			var item_function = $('<div>').addClass('item_function');
			var edit = $('<a href="#">').html('edit');
			$(edit).addClass('edit');
			var delete_item = $('<div>').addClass('delete');
			$(delete_item).html('&times;');
			$(item_function).append(edit, delete_item);
			//div item ok
			var item_ok = $('<div>').addClass('item_ok');
			$(item_ok).html('OK');
			// append element to div_item
			$(div_item).append(item_content, item_function, item_ok);
			$(div_item).attr('data-id_item', value['id']);
       		// show 
			$('#list').append(div_item);
		});
	});
}

function insert_data ()
{
	var content = $('#content').val();
	
	// add item to database
	$.ajax({
		url: '?controller=item&action=insert',
		type: 'POST',
		dataType: 'json',
		data: {
			content_item: content
		}
	}).done(function (result) {
       if (result['status'] === true) {
       		var div_item = $('<div>').addClass('item');
			//div content
			var item_content = $('<div>').addClass('item_content');
			var p = $('<p>').html(content);
			$(item_content).append(p);
			//div item function
			var item_function = $('<div>').addClass('item_function');
			var edit = $('<a href="#">').html('edit');
			$(edit).addClass('edit');
			var delete_item = $('<div>').addClass('delete');
			$(delete_item).html('&times;');
			$(item_function).append(edit, delete_item);
			//div item ok
			var item_ok = $('<div>').addClass('item_ok');
			$(item_ok).html('OK');
			// append element to div_item
			$(div_item).append(item_content, item_function, item_ok);
			$(div_item).attr('data-id_item', result['id_item']);
       		// show 
			$('#list').append(div_item);
			$('#content').val("");
       }
       else{
       		alert('error insert item');
       		return false;
       }
    });
}

$(document).on('click', '.delete', function () {
	if (confirm('Are you sure?')) {
		var click = $(this);
		var id = $(click).parent().parent().attr('data-id_item');
		$.ajax({
			url: '?controller=item&action=delete',
			type: 'POST',
			dataType: 'text',
			data: {
				id_item: id
			}
		}).done( function (result) {
			if (result) {
				$(click).parent().parent().remove();
			}
			else{
				alert("error");
			}
		});
	}
});

$(document).on('click', '.item_ok', function () {
	var content = $(this).parent()[0].children[0];
	var item_function = $(this).parent()[0].children[1];
	var content_item = $($(content)[0].children[0]).val();
	var id_item = $($(this).parent()[0]).attr('data-id_item');
	var ok = $(this);

	$.ajax({
		url: '?controller=item&action=edit',
		type: 'POST',
		dataType: 'json',
		data: {
			id: id_item,
			content_new: content_item
		}
	}).done(function (result) {
		if (result['status'] == true) {
			var p = $('<p>').text(content_item);
			$(content).html(p);
			$(ok).css('display', 'none');
			$(item_function).css('display', 'inline-block');
		}
		else{
			alert('false');
		}
	});
});

$(document).on('click', '.edit', function () {
	var item_function = $(this).parent().parent()[0].children[1];
	var item_access_update = $(this).parent().parent()[0].children[2];
	var content = $(this).parent().parent()[0].children[0];
	var input = $('<input>').addClass('input_update');
	$(input).val($(content).text());
	$(content).html(input);
	$(item_function).css('display', 'none');
	$(item_access_update).css('display', 'inline-block');
});
