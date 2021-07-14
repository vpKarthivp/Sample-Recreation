 window.onload = function() {
    var refresherButton = document.getElementById('iframeRefresher');
    if (refresherButton.addEventListener)
        refresherButton.addEventListener('click', test, false);
    else
        refresherButton.attachEvent('click', test);
}

/* function refreshIframe() {
    var ifr = document.getElementById('p1');
    ifr.src = ifr.src;
}  */

function test(){
document.querySelectorAll('.iframe').forEach(function(iframe) {
   iframe.src = iframe.src;
});}
