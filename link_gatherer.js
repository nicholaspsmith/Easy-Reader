docReady(function(){
    document.getElementsByTagName('article')[0].innerHTML += '<div class="link-collection"><h3>Links from article:</h3></div>';
    var lc = document.getElementsByClassName('link-collection')[0];
    lc.style.textAlign = 'center';
    lc.style.margin = '30px 0 100px';


    var p = document.querySelectorAll('article p')[0];
    var pColor = getComputedStyle(p)['color'];
    var css1='article p a{color:' + pColor + ';}';
    var css2='article p a:hover{text-decoration:none !important;color:' + pColor + ' !important;background: none !important;opacity:1 !important;cursor:text;}';
    var css3='article p a:active{text-decoration:none !important;color:' + pColor + ' !important;background: none !important;opacity:1 !important;cursor:text;}';
    var css4='article p a:focus{text-decoration:none !important;color:' + pColor + ' !important;background: none !important;opacity:1 !important;cursor:text;}';
    style=document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText=css1;
      style.styleSheet.cssText=css2;
      style.styleSheet.cssText=css3;
      style.styleSheet.cssText=css4;
    }
    else {
      style.appendChild(document.createTextNode(css1));
      style.appendChild(document.createTextNode(css2));
      style.appendChild(document.createTextNode(css3));
      style.appendChild(document.createTextNode(css4));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    var ars = document.querySelectorAll('article p a');
    for (var i = 0; i < ars.length; i++) {
      ars[i].style.border = 'none';
      ars[i].style.boxShadow = 'none';
      var href = ars[i].href;
      var text = ars[i].text;
      var anchor = '<div><a href="' + href + '" target="_blank">' + text + '</a></div>';
      lc.innerHTML += anchor;
      ars[i].addEventListener('click', function (e){
        e.preventDefault();
      });
    }

});
