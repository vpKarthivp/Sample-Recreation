var logoimg=[];
var productimg=[];
var productname=[];
var productwasprice=[];
var productnowprice=[];
var productnamecolor=[];
var productdetailbgcolor=[];
var producthovercolor=[];
var productwaspricecolor=[];
var productnowpricecolor=[];
var ctatxt=[];
var ctatxtcolor=[];
var ctabgcolor=[];
var ctaimg=[];
var exiturl=[];
var pne=[];
var prdShortTxt = [];


function fnalert() {createdom();}

function createdom()
{
	
	productnamedot(); 
	priceTxt()
	    $ge("#main-container")[0].style.display="block";
		$ge("#logoimg")[0].src  = logoimg[0];
		$ge("#productimg1")[0].src  = productimg[0];
		$ge("#productimg2")[0].src  = productimg[1];
		$ge("#productimg3")[0].src  = productimg[2];
		$ge("#productimg4")[0].src  = productimg[3];
		$ge("#productimg5")[0].src  = productimg[4];
		$ge("#productimg6")[0].src  = productimg[5];
		$ge("#copytxt1")[0].innerHTML=prdShortTxt[0];
		$ge("#copytxt2")[0].innerHTML=prdShortTxt[1];
		$ge("#copytxt3")[0].innerHTML=prdShortTxt[2];
		$ge("#copytxt4")[0].innerHTML=prdShortTxt[3];
		$ge("#copytxt5")[0].innerHTML=prdShortTxt[4];
		$ge("#copytxt6")[0].innerHTML=prdShortTxt[5];
		
		$setStyle(".test",{backgroundColor:"red !important"});
	    $ge("#copytxtH1")[0].innerHTML=productname[0];
		$ge("#copytxtH2")[0].innerHTML=productname[1];
		$ge("#copytxtH3")[0].innerHTML=productname[2];
		$ge("#copytxtH4")[0].innerHTML=productname[3];
		$ge("#copytxtH5")[0].innerHTML=productname[4];
		$ge("#copytxtH6")[0].innerHTML=productname[5];
		
		
		$ge("#waspricetxt1")[0].innerHTML=productwasprice[0];
		$ge("#waspricetxt2")[0].innerHTML=productwasprice[1];
		$ge("#waspricetxt3")[0].innerHTML=productwasprice[2];
		$ge("#waspricetxt4")[0].innerHTML=productwasprice[3];
		$ge("#waspricetxt5")[0].innerHTML=productwasprice[4];
		$ge("#waspricetxt6")[0].innerHTML=productwasprice[5];
		$ge("#nowpricetxt1")[0].innerHTML=productnowprice[0];
		$ge("#nowpricetxt2")[0].innerHTML=productnowprice[1];
		$ge("#nowpricetxt3")[0].innerHTML=productnowprice[2];
		$ge("#nowpricetxt4")[0].innerHTML=productnowprice[3];
		$ge("#nowpricetxt5")[0].innerHTML=productnowprice[4];
		$ge("#nowpricetxt6")[0].innerHTML=productnowprice[5];		
		$setStyle(".copytxt",{color:productnamecolor[0]});
		$setStyle(".waspricetxt",{color:productwaspricecolor[0]});
		$setStyle(".nowpricetxt",{color:productnowpricecolor[0]});
		$setStyle("#ctatxt1",{color:ctatxtcolor[0]});
		$setStyle("#ctatxt2",{color:ctatxtcolor[1]});
		$setStyle("#ctaparent1",{backgroundColor:ctabgcolor[0]});
		$setStyle("#ctaparent2",{backgroundColor:ctabgcolor[1]});
		$ge("#ctaimg")[0].src  = ctaimg[0];
	    $ge("#ctatxt1")[0].innerHTML=ctatxt[0];
		$ge("#ctatxt2")[0].innerHTML=ctatxt[1];
		$setStyle(".productdetail",{backgroundColor:productdetailbgcolor[0]});
		$setStyle(".indicator",{backgroundColor:producthovercolor[0]});
		
		newfontresize($ge("#ctaparent2")[0],$ge("#ctatxt2")[0],$ge("#ctatxt2")[0]); 
		newfontresize($ge("#ctaparent1")[0],$ge("#ctatxt1")[0],$ge("#ctatxt1")[0]); 
		newfontresize($ge("#copyparent1")[0],$ge("#copytxt1")[0],$ge("#copytxt1")[0]); 
		newfontresize($ge("#copyparent2")[0],$ge("#copytxt2")[0],$ge("#copytxt2")[0]); 
		newfontresize($ge("#copyparent3")[0],$ge("#copytxt3")[0],$ge("#copytxt3")[0]); 
		newfontresize($ge("#copyparent4")[0],$ge("#copytxt4")[0],$ge("#copytxt4")[0]); 
		newfontresize($ge("#copyparent5")[0],$ge("#copytxt5")[0],$ge("#copytxt5")[0]); 
		newfontresize($ge("#copyparent6")[0],$ge("#copytxt6")[0],$ge("#copytxt6")[0]); 
		
		newfontresize($ge("#waspriceparent1")[0],$ge("#waspricetxt1")[0],$ge("#waspricetxt1")[0]); 
		newfontresize($ge("#waspriceparent2")[0],$ge("#waspricetxt2")[0],$ge("#waspricetxt2")[0]); 
		newfontresize($ge("#waspriceparent3")[0],$ge("#waspricetxt3")[0],$ge("#waspricetxt3")[0]); 
		newfontresize($ge("#waspriceparent4")[0],$ge("#waspricetxt4")[0],$ge("#waspricetxt4")[0]); 
		newfontresize($ge("#waspriceparent5")[0],$ge("#waspricetxt5")[0],$ge("#waspricetxt5")[0]); 
		newfontresize($ge("#waspriceparent6")[0],$ge("#waspricetxt6")[0],$ge("#waspricetxt6")[0]); 
		
	 	newfontresize($ge("#nowpriceparent1")[0],$ge("#nowpricetxt1")[0],$ge("#nowpricetxt1")[0]); 
		newfontresize($ge("#nowpriceparent2")[0],$ge("#nowpricetxt2")[0],$ge("#nowpricetxt2")[0]); 
		newfontresize($ge("#nowpriceparent3")[0],$ge("#nowpricetxt3")[0],$ge("#nowpricetxt3")[0]); 
		newfontresize($ge("#nowpriceparent4")[0],$ge("#nowpricetxt4")[0],$ge("#nowpricetxt4")[0]); 
		newfontresize($ge("#nowpriceparent5")[0],$ge("#nowpricetxt5")[0],$ge("#nowpricetxt5")[0]); 
		newfontresize($ge("#nowpriceparent6")[0],$ge("#nowpricetxt6")[0],$ge("#nowpricetxt6")[0]);  
			
	   	 anim();
}

function productnamedot(){
	
	for(var i=0;i<productname.length;i++){
		
		if(productname[i].length>30){
			prdShortTxt.push(productname[i].substr(0,30)+". . .");
		}else{
			prdShortTxt.push(productname[i]);
		}		
	}	
	
}

function priceTxt(){
	
	for(i=0;i<productnowprice.length;i++){
		
	if(Number(productwasprice[i])){
		productwasprice[i] = "<sup class='botmm'>was</sup> £"+splitdotprce(productwasprice[i]);
		productnowprice[i] = "<sup class='botmm'>now</sup> £"+splitdotprce(productnowprice[i]);
	}else{
		productwasprice[i] = "";
		productnowprice[i] = "£"+splitdotprce(productnowprice[i]);
	}	
		
		
	}
	
}

function splitdotprce(Cvalue){
	
	var Cvalue = Cvalue.split(".");
	if(Number(Cvalue[1])){
		Cvalue[1] = '<sup>'+Cvalue[1]+'</sup>';
	}else{
		Cvalue[1] = "";
	}
	
	return Cvalue[0]+Cvalue[1];	
	
}

function anim(){
 	var tl = new TimelineMax({repeat:1});
	tl.to("#indicator2", 0, {backgroundColor:"#a89da3"})	
    tl.to(".animImg123", 0.8, {opacity:1,x:-160},"+=2")	
	tl.to("#indicator2", 0, {backgroundColor:"#ec008c"},"-=0.8")
	tl.to("#indicator1", 0, {backgroundColor:"#a89da3"},"-=0.8")
	tl.to(".cls456", 0, {zIndex:"2"},"-=0.8")
	tl.to(".animPro123", 0.8, {opacity:1,x:160},"-=0.8")
	tl.to(".animImg123", 0.8, {opacity:1,x:0},"+=2")	
	tl.to(".animPro123", 0.8, {opacity:1,x:0},"-=0.8")
	tl.to("#indicator2", 0, {backgroundColor:"#a89da3"},"-=0.8")
	tl.to("#indicator1", 0, {backgroundColor:"#ec008c"},"-=0.8")
	tl.to(".cls456", 0, {zIndex:"0"},"-=0.8")
    var $indicator2 = $('#indicator2'),$indicator1 = $('#indicator1'),$animImg456 = $('.animImg456'),$animPro456 = $('.animPro456'),$xindex456 = $('.cls456'),$xindex123 = $('.cls123'),$animImg123 = $('.animImg123'),$animPro123 = $('.animPro123');
	
$indicator1.on('click', function(e){
	
	TweenLite.to($indicator1, 0.5, {backgroundColor:'#ec008c'}); 
	TweenLite.to($xindex456, 0, {zIndex:'0'}); 
	TweenLite.to($indicator2, 0.5, {backgroundColor:'#a89da3'});
	TweenLite.to($animImg123, 0.8, {x:'=0px'}); 
	TweenLite.to($animPro123, 0.8, {x:'=0px'});
	tl.kill();
	
	});

	
$indicator2.on('click', function(e){
	TweenLite.to($indicator2, 0.5, {backgroundColor:'#ec008c'}); 
	TweenLite.to($xindex456, 0, {zIndex:'2'}); 
	TweenLite.to($indicator1, 0.5, {backgroundColor:'#a89da3'});
	move(); 
	tl.kill();
	});

$(".test").hover(over, out);

function over(){ TweenMax.to(this, 0.2, {opacity:"1"})  }    

function out(){  TweenMax.to(this, 0.2, {opacity:"0"})  }

function move(){	
var xte = document.getElementsByClassName("animImg123");

xte[0].style.transform = "translate("+pne[0]+",0px)";
xte[1].style.transform = "translate("+pne[0]+",0px)";
xte[2].style.transform = "translate("+pne[0]+",0px)";
xte[0].style.WebkitTransform = "translate("+pne[0]+",0px)";
xte[1].style.WebkitTransform = "translate("+pne[0]+",0px)";
xte[2].style.WebkitTransform = "translate("+pne[0]+",0px)";
xte[0].style.msTransform = "translate("+pne[0]+",0px)";
xte[1].style.msTransform = "translate("+pne[0]+",0px)";
xte[2].style.msTransform = "translate("+pne[0]+",0px)";
xte[0].style.transitionDuration  = "0.8s";
xte[1].style.transitionDuration  = "0.8s";
xte[2].style.transitionDuration  = "0.8s";


var xte1 = document.getElementsByClassName("animPro123");

xte1[0].style.transform = "translate("+pne[1]+",0px)";
xte1[1].style.transform = "translate("+pne[1]+",0px)";
xte1[2].style.transform = "translate("+pne[1]+",0px)";
xte1[3].style.transform = "translate("+pne[1]+",0px)";
xte1[0].style.transitionDuration  = "0.8s";
xte1[1].style.transitionDuration  = "0.8s";
xte1[2].style.transitionDuration  = "0.8s";	
xte1[3].style.transitionDuration  = "0.8s";	
}	
	
}


var adderf = 0;
function newfontresize(x,y,z){
	var t = y;var tp = x; var ct = z; 
	var cfsize = window.getComputedStyle(z, null).getPropertyValue("font-size");
	var scfsize = cfsize.split("px");
	var nscfsize = Number(scfsize[0]);
	var th = window.getComputedStyle(t, null).getPropertyValue("height"); 
	th=Number(th.split("px")[0]);
	var tph = window.getComputedStyle(tp, null).getPropertyValue("height"); 
	tph=Number(tph.split("px")[0]);
	var tw = window.getComputedStyle(t, null).getPropertyValue("width"); 
	tw=Number(tw.split("px")[0]);
	var tpw = window.getComputedStyle(tp, null).getPropertyValue("width"); 
	tpw=Number(tpw.split("px")[0]);
	console.log(th+' '+tph);
	if(th<=(tph)&& tw<=(tpw)){t.style.fontSize= (nscfsize)+"px";adderf+=1;if(adderf==2){loadafter(); console.log(adderf);}}else{cnfsize(tp,t,ct,nscfsize);}
}

function cnfsize(a,b,c,bf){	
	c.style.fontSize = (bf-1)+"px";
	setTimeout(function(){newfontresize(a,b,c)},10);
}

var LoadAdder=0;
function loadafter(){ LoadAdder++; if(LoadAdder==2){ console.log(LoadAdder); animcontrol();}  }
function animcontrol(){ 
	panmatr("#main-container",null,"{opacity:1;}","ease-in",0.5,0);
	
}


function init() {
  if (Enabler.isPageLoaded()) {
    pageLoadedHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
  }
   logoimg.push("Logo.png");
   productimg.push("Product1.jpg");
   productimg.push("Product2.jpg");
   productimg.push("Product3.jpg");
   productimg.push("Product4.jpg");
   productimg.push("Product5.jpg");
   productimg.push("Product6.jpg");
   productname.push("DYSON BIG BALL CINETIS ANIMAL2 TEST"); /* Elizabeth Arden Eight Hour Cream All Over Miracle Oil 100ml */
   productname.push("MONSOON KRAFT SWIMSHORT TEST"); /* Elizabeth Arden Eight Hour Cream Skin Protectant 50ml */
   productname.push("SAMSUNG FRENCH DOOR FROST TEST"); /* Elizabeth Arden Visible Difference Skin Balancing Lotion SPF */
   productname.push("Decleor Aroma Lisse Energising TEST");
   productname.push("Elizabeth Arden Green Tea TEST");
   productname.push("L'Oreal Paris L'Oréal");
   productwasprice.push("439.98");//"<sub>Was</sub>   £439<sup>.98</sup>");
   productwasprice.push("0.00");//("<sub>Was</sub>   £16<sup>.00</sup>");
   productwasprice.push("");//("<sub>Was</sub>   £26<sup>.00</sup>");
   productwasprice.push("55.00");//("<sub>Was</sub>   £55<sup>.00</sup>");
   productwasprice.push("14.00");//("<sub>Was</sub>   £14<sup>.00</sup>");
   productwasprice.push("22.00");//("<sub>Was</sub>   £22<sup>.00</sup>");
   productnowprice.push("339.99");//("<sub>Now</sub>   £339<sup>.99</sup>");
   productnowprice.push("16.50");//("<sub>Now</sub>   £16<sup>.00</sup>");
   productnowprice.push("22");//("<sub>Now</sub>   £22<sup>.00</sup>");
   productnowprice.push("50.00");//("<sub>Now</sub>   £50<sup>.00</sup>");
   productnowprice.push("10.0");//("<sub>Now</sub>   £10<sup>.00</sup>");
   productnowprice.push("18.00");//("<sub>Now</sub>   £18<sup>.00</sup>");
   productnamecolor.push("#fff");
   productdetailbgcolor.push("#77797F");
   producthovercolor.push("#EC008C");
   productwaspricecolor.push("#fff");
   productnowpricecolor.push("#fff");
   ctatxt.push("SHOP NOW");
   ctatxt.push("BLACK FRIDAY DEALS NOW ON");
   ctatxtcolor.push("#EC008C");
   ctatxtcolor.push("#EC008C");
   ctabgcolor.push("#fff");
   ctabgcolor.push("#000");
   ctaimg.push("");
   
   pne.push("-160px");
   pne.push("160px");
   exiturl.push("https://www.very.co.uk");
   exiturl.push("https://www.very.co.uk/elizabeth-arden-prevage-day-ultra-protection-anti-ageing-moisturizer-spf-30-50ml/1000194869.prd");
   exiturl.push("https://www.very.co.uk/elizabeth-arden-prevage-day-ultra-protection-anti-ageing-moisturizer-spf-30-50ml/1000194869.prd");
   exiturl.push("https://www.very.co.uk/elizabeth-arden-prevage-day-ultra-protection-anti-ageing-moisturizer-spf-30-50ml/1000194869.prd");
   exiturl.push("https://www.very.co.uk/elizabeth-arden-prevage-day-ultra-protection-anti-ageing-moisturizer-spf-30-50ml/1000194869.prd");
   exiturl.push("https://www.very.co.uk/elizabeth-arden-prevage-day-ultra-protection-anti-ageing-moisturizer-spf-30-50ml/1000194869.prd");
   exiturl.push("https://www.very.co.uk/elizabeth-arden-prevage-day-ultra-protection-anti-ageing-moisturizer-spf-30-50ml/1000194869.prd");
   fnalert(); 
}

function exitClickHandler() {
  //Enabler.exitOverride("main-container", exiturl[0]);
}

function pageLoadedHandler() {
  document.getElementById('main-container').addEventListener('click', exitClickHandler, false);
}
function preInit() {
  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT,init);
  }
}
window.addEventListener('load', preInit); 


