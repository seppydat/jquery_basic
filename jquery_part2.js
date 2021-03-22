$(document).ready(function () {
	$('#submit').on('click', function () {
		insert_data();
	});

	$('#delete_all').on('click', function () {
		if (confirm("Are you sure?")) {
			$('.item').remove();
		}
	});
});

function insert_data () {
	var in_html = "";
	in_html += " <div class=\"item\">"
			+	"<div class=\"item_content\">"
			+		"<p>"+ $('#content').val() +"</p>"
			+	"</div>"
			+	"<div class=\"item_function\">"
			+		"<a href=\"#\" class=\"update\">edit</a>"
			+		"<div class=\"delete\">X</div>"
			+	"</div>"
			+	"<div class=\"item_access_update\">OK</div>"
			+ "</div>";
	$('#list').append(in_html);
	$('#content').val("");
}

$(document).on('click', '.delete',function () {
	if (confirm('Are you sure?')) {
		$(this).parent().parent().remove();
	}
});

$(document).on('click', '.item_access_update', function () {
	var content = $(this).parent()[0].children[0];
	var item_function = $(this).parent()[0].children[1];
	var p = $('<p>').text($($(content)[0].children[0]).val());
	$(content).html(p);
	$(this).css('display', 'none');
	$(item_function).css('display', 'inline-block');
});

$(document).on('click', '.update', function () {
	var item_function = $(this).parent().parent()[0].children[1];
	var item_access_update = $(this).parent().parent()[0].children[2];
	var content = $(this).parent().parent()[0].children[0];
	var input = $('<input>').addClass('input_update');
	$(input).val($(content).text());
	$(content).html(input);
	$(item_function).css('display', 'none');
	$(item_access_update).css('display', 'inline-block');
});
