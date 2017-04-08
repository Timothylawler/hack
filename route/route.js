
$(function(){	
	fixIcons();
})


function getData(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "northack.crystalalarm.se/api", true);
  xhttp.send();
}


function fixIcons(){
	
	document.getElementById("coffeeIcon");
	document.getElementById("waterIcon").style.fill = "#dcdcdc";
	document.getElementById("drinkIcon");
	
}