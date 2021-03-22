var data = new Array();

window.onload = function()
{
	show_view();
	var submit = document.getElementById('submit');
	submit.addEventListener('click', function(){
		insert_data();
	});

	var delete_all = document.getElementById('delete_all');
	delete_all.addEventListener('click', function(){
		delete_all_data();
	});
	
}

function load_click_update()
{
	var item_update = document.getElementsByClassName('item_update');
	for(let i=0; i<item_update.length; ++i)
	{
		item_update[i].addEventListener('click', function(){
			show_update(i);
		});
	}
}

function load_update_item()
{
	var item_access_update = document.getElementsByClassName('item_access_update');

	for(let i=0; i<item_access_update.length; ++i){
		item_access_update[i].addEventListener('click', function(){
			update_item(i);
		});
	}
}

function load_delete_data()
{
	var del = document.getElementsByClassName('item_button');

	for(let i=0; i<del.length; ++i){
		del[i].addEventListener('click', function(){
			delete_data(i);
		});
	}
}
function show_update(stt)
{	var item_content = document.getElementsByClassName('item_content')[stt];
	var item_function = document.getElementsByClassName('item_function')[stt];
	var item_access_update = document.getElementsByClassName('item_access_update')[stt];
	var p = document.getElementsByClassName('the_p '+stt)[0];
	// tạo mới thẻ
	var input = document.createElement("input");
	input.type = "text";
	input.value = data[stt];
	// console.log(typeof p.innerHTML);
	input.setAttribute("class", "input_update "+stt);

	item_function.style.display = "none";
	item_access_update.style.display = "inline-block";
	item_content.replaceChild(input, p);
	
	// console.log(item_content);
}	

function insert_data()
{
	var content = document.getElementById('content');
	data.push(content.value);
	show_view();
	content.value = "";
}

function show_view()
{
	var in_html = "";
	var list = document.getElementById('list');

	for(let i=0; i<data.length; ++i){
		in_html += "<div class=item>"
				+"<div class=item_content>"
				+"<p class=\"the_p "+i+"\">"+(i+1)+" - "+data[i]+"</p>"
				+"</div>"
				+"<div class=\"item_function\">"
				+ "<a href=\"#\" class=\"item_update\">update</a>"
				+ "<div class=\"item_button\">X</div>"
				+"</div>"
				+"<div class=\"item_access_update\">OK</div>"
				+"</div>";
	}
	list.innerHTML = in_html;
	load_click_update();
	load_update_item();
	load_delete_data();
}
function delete_data(stt)
{
	var confirm1= confirm("Are you sure?");
	if(confirm1){

		var confirm2 = confirm("It is important to remind 2 times, you sure?");
		if(confirm2){
			if(data.length > 1){
				for(let i=stt; i<data.length; ++i){
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
	else{
		return false;
	}
}

function update_item(stt)
{
	var content = document.getElementsByClassName('input_update '+stt)[0];
	data[stt] = content.value;
	
	show_view();
}

function delete_all_data()
{
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
