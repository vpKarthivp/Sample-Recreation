function setup(){
	var parent = document.body;
	var controlparent = ce("controlparent","div");
	controlparent.setAttribute("style","width:400px;height:100%;position:absolute;right:0px;top:0px;background-color:#325873;");
	
	
	parent.appendChild(controlparent);
	console.log(controlparent);
}

function ce(n,ele){var t = document.createElement(ele); t.setAttribute("id",n); return t;}
window.addEventListener("load",setup);