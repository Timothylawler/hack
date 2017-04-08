
$(function(){	
	fixIcons();
})


function getData(){
	/*
	$.ajax({url: "http://northack.crystalalarm.se/api/?lati=62.417949189425&longi=17.327530914444", 
		success: function(result){
			console.log(result);
		}});
	*/
}


function fixIcons(){
	
	document.getElementById("coffeeIcon");
	document.getElementById("waterIcon").style.fill = "#dcdcdc";
	document.getElementById("drinkIcon");
	
}