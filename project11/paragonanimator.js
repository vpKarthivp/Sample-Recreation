/*
How to choose selectors in the plugin?
# - for ID;
@ - for class;
null - for tag name;
onstart function prstrt and endstart function prend;
{} don't use in css properties


eg: panmatr("#headlinezone",null,"{opacity:0.5;transform:translate(100px,-10px) scale(2,2) rotate(-360deg);backgroundColor:red;}","ease-out",2,1,{"prend":test1});
*/

function rele(x){
var s = x.split(""), setT, getT, creT = new Array(), CreO = new Object(), fele = x.substring(1, x.length);
if(s[0] == "#" || s[0] == "@"){if(s[0] == "#"){setT = document.getElementById(fele);getT="s";}if(s[0] == "@"){setT = document.getElementsByClassName(fele);getT="a";}}else{setT = document.getElementsByTagName(x);getT="a";}
if(getT != "a"){CreO.tp = "id";CreO.ele = setT; return CreO;}else{for(var i=0;i<setT.length;i++){creT.push(setT[i]);} CreO.tp = "cls/tgn";CreO.ele = creT; return CreO;}
}
function spljnfltr(s){var e; e = s.substring(1, (s.length-1)); return e;}
function crtestyle(z,j){
	var l,k = new Object();l = z.split(";"); 	
	for(var i=0;i<l.length;i++){if(l[i] != ""){if(l[i].split(":")[0] != "transform"){k[l[i].split(":")[0]] = l[i].split(":")[1];}else{k['WebkitTransform'] = l[i].split(":")[1];k['msTransform'] = l[i].split(":")[1];k['transform'] = l[i].split(":")[1];}}} 	
	if(j==1){var m = [];for(var i=0;i<l.length;i++){if(l[i] != ""){	m.push(l[i].split(":")[0]);	}}var a = m.join();k['WebkitTransitionProperty'] = a;k['transitionProperty'] = a;}return k;	
	}
function panmatr(elm,cs,t,tmfn,dur,del,fn){
	var e = rele(elm), mainArr = [], paraobj = new Object(), toProp = crtestyle(spljnfltr(t),1);		
	if(cs != null){ var cssProp = crtestyle(cs,0);}mainArr = [toProp,cssProp];
	
	for(var t=0;t<mainArr.length;t++){for(x in mainArr[t]){paraobj[x] = mainArr[t][x];}}
	paraobj["WebkitTransitionDuration"] = dur.toString()+"s";paraobj["transitionDuration"] = dur.toString()+"s";paraobj["WebkitTransitionTimingFunction"] = tmfn.toString();paraobj["transitionTimingFunction"] = tmfn.toString();	
	setTimeout(function(){for (y in paraobj){if(e.tp != "cls/tgn"){e.ele.style[y] = paraobj[y];}else{for(var i=0;i<e.ele.length;i++){e.ele[i].style[y] = paraobj[y];}}}},del*1000);		
	if(fn){if(fn.hasOwnProperty('prstart')){setTimeout(fn["prstart"],del*1000);}else{if(fn.hasOwnProperty('prend')){setTimeout(fn["prend"],(del+dur)*1000);}}}
}


 //Updated common functions
 /* 
$setInnerHTML ==> syntax: $setInnerHTML(query,txt or array); -> it will set the inner HTML values
$setInnerTEXT ==> syntax: $setInnerTEXT(query,txt or array); -> it will set the inner TEXT values
$ge ==> syntax:$ge(query); -> it will return the array of elements. 
$ce ==> syntax:$ce("div","id","class","style") -> it will return new element, here class & style are optional.
$cssToObject ==> syntax:$cssToObject(cssString) -> it will convert the css string to object and return.
$cssToArray ==> syntax:$cssToArray(cssString or cssObject) -> it will convert the css string or object to Array and return.
$setStyle ==> syntax:$setStyle(query or element, cssString or cssObject) -> it will set all the css value to all the query elements.
$getStyle ==> syntax:$getStyle(queryor element, cssProperties) -> it will returns the array of elements value.
*/
var $setAttribute=function(query, obj){ var Es=$ge(query); for(var e=0;e<Es.length;e++){  for(o in obj){ Es[e][o]=obj[o];    }   } } 
var $setInnerHTML=function(query, txtArray){ var Es=$ge(query); for(var e=0;e<Es.length;e++){ if(Array.isArray(txtArray)){ Es[e].innerHTML = txtArray[e];}else{ Es[e].innerHTML = txtArray; }} }
var $setInnerTEXT=function(query, txtArray){ var Es=$ge(query); for(var e=0;e<Es.length;e++){ if(Array.isArray(txtArray)){ Es[e].innerText = txtArray[e];}else{ Es[e].innerText = txtArray; }} }
var $ge=function(query){var els=document.querySelectorAll(query); return els;}
var $ce=function(eType,eId,eclass,estyle){ 
	var e=document.createElement(eType);
	if(eId){
	if(!eclass){eclass=eId;}
	e.setAttribute("id",eId); 
	e.setAttribute("class",eclass); 
	if(estyle){e.setAttribute("style",estyle);}
	}
	return e;}	
var $cssToObject=function(cs){  
	var csA= cs.split(";"); var csObject= new Object();
	for(var i=0; i<csA.length; i++){if(csA[i].trim() && csA[i].indexOf(":")!=-1 ){ csObject[csA[i].split(":")[0].trim()] = csA[i].split(":")[1].trim();}}
	return csObject; }
var $objectToCss=function(o){ var s=""; for(op in o){s+=op+":"+ o[op] +";"} return s;} 	
var $cssToArray=function(css){ 
	var ap,p=[],v =[]; 
	if(typeof(css)=="string") { ap=css.split(";"); for(var i=0; i<ap.length; i++){ if(ap[i].trim() && ap[i].indexOf(":")!=-1){ p.push(ap[i].split(":")[0].trim()); v.push(ap[i].split(":")[1]); }}  } 
	else{ for(c in css){p.push(c); v.push(css[c]);} } 
	return [p,v];}
var $setStyle=function(query, css){ 
	var cssObject=new Object(); var els;
	if(typeof(css)=="string") {cssObject=$cssToObject(css); } else{ cssObject=css; } 
	switch(typeof(query)){case "string": els=$ge(query); break; case "object": if(query.id){els=[query];} else {els=query;} break;}
	for(var i=0; i<els.length;i++){
		for(c in cssObject){ els[i].style[c]=cssObject[c]; 
			if(els[i].style.hasOwnProperty('-webkit-'+c)){ els[i].style['-webkit-'+c]=cssObject[c]; }  }}}
var $getStyle=function(query, properties){ 
	var nArray=[]; var ps=properties.split(","); var els;
	switch(typeof(query)){case "string": els=$ge(query); break; case "object": if(query.id){els=[query];} else {els=query;} break;} 
	for(var i=0; i<els.length;i++){ var nObject = new Object();  for(var j=0;j<ps.length;j++){ nObject[ps[j]] = window.getComputedStyle(els[i], null).getPropertyValue(ps[j]);} nArray.push(nObject);  }
	return nArray;}