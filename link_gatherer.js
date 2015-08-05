docReady(function(){
  var article = document.getElementsByTagName('article');
  if (typeof article !== 'undefined') {
    article[0].innerHTML += '<div class="link-collection"><h3>Collected Links</h3></div>';
  }
  var lc = document.getElementsByClassName('link-collection');
  if (typeof lc !== 'undefined') {
    lc = lc[0];
    lc.style.textAlign = 'center';
    lc.style.margin = '30px 0 0';
  }
  var p = document.querySelectorAll('article p');
  if (typeof p !== 'undefined') {
    p = p[0];
    if (typeof p !== 'undefined') {
      var pColor = getComputedStyle(p)['color'];
    }
  }
  var maxHeight = window.innerHeight;
  maxHeight /= 2;
  var css1='article p a{color:' + pColor + ';}';
  var css2='article p a:hover {text-decoration:none !important;color:' + pColor + ' !important;background: none !important;opacity:1 !important;cursor:text;}article p a:active {text-decoration:none !important;color:' + pColor + ' !important;background: none !important;opacity:1 !important;cursor:text;} article p a:focus {text-decoration:none !important;color:' + pColor + ' !important;background: none !important;opacity:1 !important;cursor:text;}';
  var css3='.link-collection {border-top: 4px solid #333;background: #fff;transition:all .8s ease-in-out;width:100%;max-height:60px;overflow:scroll;position: fixed;right: 0;bottom: 0;text-align: center;padding: 10px 50px;z-index: 999;margin-bottom: 0;font-size:14px;}';
  var css4='.link-collection h3 {margin: 10px !important;color: #333;} .link-collection:hover {max-height:' + maxHeight + 'px;background: #fff;border-top: 8px solid #333;}';
  var allcss = css1 + css2 + css3 + css4;
  style=document.createElement('style');
  if (style.styleSheet) {
    style.styleSheet.cssText=allcss;
  }
  else {
    style.appendChild(document.createTextNode(allcss));
  }
  document.getElementsByTagName('head')[0].appendChild(style);
  var ars = document.querySelectorAll('article p a');
  if (typeof ars !== 'undefined') {
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
  }
});
