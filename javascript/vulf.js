$(document).ready(function(){


	$(".hills").hide();

	$("#announce").click(function(){
		$(".hills").show();
			});

	$("#video").hide();

	$(".logo").click(function(){
		$("#video").show();
		$(".logo").hide();
	});


})