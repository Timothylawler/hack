
$(function(){
	getData();
})
//Global id
const id = sessionStorage.getItem("currentRoute");

function getData(){
	
	$.ajax({url: "http://northack.crystalalarm.se/api/?lati=62.417949189425&longi=17.327530914444&id="+id,
		success: function(result){
			console.log(result);

			fixIcons(result);
		}
	});
}


function fixIcons(result){
	
	if(result[id].dricka){
		document.getElementById("drinkIcon").style.fill = "#ff00ff";
	}else{
		document.getElementById("drinkIcon").style.fill = "#bebebe";
	}
	
	
	if(result[id].kaffe){
		document.getElementById("coffeeIcon").style.fill = "#ff00ff";
	}else{
		document.getElementById("coffeeIcon").style.fill = "#bebebe";
	}
	
	
	if(result[id].vatten){
		document.getElementById("waterIcon").style.fill = "#ff00ff";
	}else{
		document.getElementById("waterIcon").style.fill = "#bebebe";
	}
}