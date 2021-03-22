var data = new Array('demo');

$(document).ready(function () {
	show_view();
	$('#submit').click(function () {
		insert_data();
	});

	$('#delete_all').click(function () {
		delete_all_data();
	});

	$('.item_button').click(function () {
		console.log($(this));
	});
});

function show_view () {
	var in_html = "";
	$(data).each(function(index, data){
		in_html += "<div class=item>"
				+"<div class=item_content>"
				+"<p class=\"the_p "+index+"\">"+(index+1)+" - "+data+"</p>"
				+"</div>"
				+"<div class=\"item_function\">"
				+ "<a href=\"#\" class=\"item_update\">update</a>"
				+ "<div class=\"item_button\">X</div>"
				+"</div>"
				+"<div class=\"item_access_update\">OK</div>"
				+"</div>";
	});
	$('#list').html(in_html);
		// load_event_delete();
		// load_event_update();
		// load_event_access_update();
}

function insert_data () {
	data.push($('#content').val());
	show_view();
	$('#content').val('');
}

function load_event_delete () {
	$('.item_button').each(function (index, value) {
		$(this).click(function () {
			delete_data(index);
		});
	});
}
function load_event_update () {
	$('.item_update').each(function (index, value) {
		$(this).click(function () {
			show_update(index);
		});
	});
}
function load_event_access_update () {
	$('.item_access_update').each(function (index, value) {
		$(this).click(function () {
			access_update(index);
		});
	});
}
function delete_data (index) {
	var check = confirm("Are you sure?");

	if(check){
		if(data.length > 1){
			for(let i=index; i<data.length; ++i){
				data[i] = data[i+1];
			}
			data.pop();
		}
		else{
			data.pop();
		}
		show_view();
	}
	else{
		return false;
	}
}

function delete_all_data () {
	confirm_all = confirm("Are you sure?");
	if(confirm_all){
		for(let i=data.length; i>=0; --i){
			data.pop();
		}
		show_view();
	}
	else{
		return false;
	}
}
function show_update (index) {
	var item_function = $('.item_function')[index];
	var item_access_update = $('.item_access_update')[index];
	var item_content = $('.item_content')[index];
	// tạo mới thẻ
	var input = $('<input>').addClass('input_update '+index);
	$(input).attr('type', 'text');
	$(input).val(data[index]);

	$(item_function).css('display', 'none');
	$(item_access_update).css('display', 'inline-block');
	$(item_content).html(input);
}

function access_update (index) {
	var item_content = $('.item_content')[index]
	var input = $('.input_update.'+index)[0];
	var p = $('<p>').addClass('the_p '+index);
	var item_function = $('.item_function')[index];
	var item_access_update = $('.item_access_update')[index];
	
	data[index] = $(input).val();
	p.html((index+1) + ' - ' + data[index]);
	$(item_content).html(p);
	$(item_function).css('display', 'inline-block');
	$(item_access_update).css('display', 'none');
}

function delete_all_data () {
	confirm_all = confirm("Are you sure?");
	if(confirm_all){
		for(let i=data.length; i>=0; --i){
			data.pop();
		}
		show_view();
	}
	else{
		return false;
	}
}