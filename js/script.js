var addPost = "<div class=\"col-3 bg-flat2 mx-1 my-4\" id=\"inputPost\"><div class=\"row text-center bg-flat1\"><span class=\"wFull h5 pt-2\"><input class=\"NoStyledInput\" type=\"text\" placeholder=\"Titulo\" id=\"titleToAdd\"></span></div><div class=\"row text-justify\"><span class=\"px-4 pt-3 pb-1\"><textarea rows=\"4\" cols=\"40\" class=\"NoStyledTextArea form-control\" id=\"textToAdd\"></textarea></span></div><div class=\"row\"><span class=\"wFull pb-2\"><div id=\"delete\"><span class=\"float-left\"><i class=\" ml-4 fas fa-times fa-sm deleteBottom\"></i></span></div><div id=\"add\"><span class=\"float-right\"><i class=\" mr-4 fas fa-check fa-sm addBottom\"></i></span></div></span></div></div>";
var title = "Title";
var text = "";
var addNote = "<div class=\"col-3 bg-flat2 mx-1 my-4\"><div class=\"row text-center bg-flat1\"><span class=\"wFull h5 pt-1\">" + title + "<span class=\"float-right\" id=\"deletePost\"><i class=\" mr-2 fas fa-times fa-xs deleteBottom2\"></i></span></span></div><div class=\"row text-justify\"><span class=\"px-4 py-2\">" + text + "</span></div></div>"

$("#guineapig").click(function(){
	$("#inputPost").show();
	$("#guineapig").hide();
});

$("#add").click(function(){
	title = $("#titleToAdd").val();
	text = $("#textToAdd").val();
	text = text.replace(/\n/g, "<br />");

	addNote = "<div class=\"col-3 bg-flat2 mx-1 my-4\"><div class=\"row text-center bg-flat1\"><span class=\"wFull h5 pt-1\">" + title + "<span class=\"float-right\" id=\"deletePost\"><i class=\" mr-2 fas fa-times fa-xs deleteBottom2\"></i></span></span></div><div class=\"row text-justify\"><span class=\"px-4 py-2\">" + text + "</span></div></div>";
	$("#inputPost").hide();
	$("#titleToAdd").val("");
	$("#textToAdd").val("");
	$("#inputPost").before(addNote);
	$("#guineapig").show();
});

$("#delete").click(function(){
	$("#inputPost").hide();
	$("#titleToAdd").val("");
	$("#textToAdd").val("");
	$("#guineapig").show();
});

$('body').on('click','#deletePost',function(){
   $(this).parent().parent().parent().remove();
});
