
$(document).ready(function(){
	
	const mapsKey = "AIzaSyBSMMWZrPn1juxZPWR3vgz1ve7_L9YRUMk";
	var markers = [];
	
	
	$('.modal').modal();
	
	$('#acceptBtn').click(function(){
		sessionStorage.setItem("currentRoute", 0);
		window.location.href = 'http://localhost:52884/route/routes';
	});
	
	function doStuff(data){
		
	}
	
});