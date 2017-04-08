
$(document).ready(function(){
	
	const mapsKey = "AIzaSyBSMMWZrPn1juxZPWR3vgz1ve7_L9YRUMk";
	var markers = [];
	
	getServerData();
	
	$('.modal').modal({
		complete: closeModal
	});
	
	$('#acceptBtn').click(function(){
		sessionStorage.setItem("currentRoute", 0);
		window.location.href = 'http://localhost:50417/route/route.html';
	});
	
	$('#showModalBtn').click(function(){
		$("#acceptBtn").addClass("hidden");
		$("#nextMapButton").addClass("hidden");
		$("#showModalBtn").addClass("hidden");
	});
	
	$('#hideModalBtn').click(function(){
		$('#modal1').modal('close');
		closeModal();
	});
	
	function closeModal(){
		
		$("#acceptBtn").removeClass("hidden");
		$("#nextMapButton").removeClass("hidden");
		$("#showModalBtn").removeClass("hidden");
	}
	
	function getServerData(){
		$.ajax({url: "http://northack.crystalalarm.se/api/?lati=62.417949189425&longi=17.327530914444", success: function(result){
			console.log("ruttisar", result);
			doStuff(result);
		}});
	}
	
	function doStuff(data){
		console.log("DATIS: ", data);
		document.getElementById("pageTitle").innerHTML = data[0].name;
		document.getElementById("modal-header").innerHTML =data[0].name;
		
	}
	
});