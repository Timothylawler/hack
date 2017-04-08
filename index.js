
$(document).ready(function(){
	
	const mapsKey = "AIzaSyBSMMWZrPn1juxZPWR3vgz1ve7_L9YRUMk";
	var markers = [];
	var currentMap = 0;
	var data = [];
	var kmls = [
		"CasinoCosmopol",
		"SundsvallsKommun",
		"Universitet"
	]
	
	getServerData();
	
	$('.modal').modal({
		complete: closeModal
	});
	
	$("#nextMapButton").click(function(){
		$('#map').addClass("slideMap");
		setTimeout(function(){
			$("#map").removeClass("slideMap");
		}, 300);
		
		setTimeout(function(){
			
		
			var uluru = {lat: 62.3897628, lng: 17.315805};
			document.getElementById('map').innerHTML = "";
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 11,
				center: uluru,

				disableDefaultUI: true
			});
			if(currentMap == 2){
				currentMap = -1;
			}
			var path = 'http://northack.crystalalarm.se/kml/' + kmls[++currentMap] + '.kml????';
			console.log(path);
			var ctaLayer = new google.maps.KmlLayer({
				url: path,
				map: map
			});
			doStuff();
		}, 200);
	});
	
	$('#acceptBtn').click(function(){
		console.log(currentMap);
		sessionStorage.setItem("currentRoute", currentMap);
		window.location.href = '/route/route.html';
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
			data = result;
			doStuff();
			
		}});
	}
	
	function doStuff(){
		//console.log("DATIS: ", data);
		document.getElementById("pageTitle").innerHTML = data[currentMap].name;
		document.getElementById("modal-header").innerHTML =data[currentMap].name;
		
	}
	
});