$(document).ready(function(){


    $('article').append('<div class="link-collection"><h3>Links from article:</h3></div>');
    $('.link-collection').css({
      'text-align': 'center',
      'margin': '30px 0 100px'
    });
    $('article p a').each(function(a,b){
      $(b).css({
        'border': 'none',
        'box-shadow': 'none'
      });
      var pcolor = $('article p').css('color');
      $('article p a:hover').css('text-decoration','none');
      $('article p a:hover').css('color',pcolor);
      $(b).css('color', pcolor)
      var href = $(b).attr('href');
      var text = $(b).html();
      var anchor = '<a href="' + href + '" target="_blank">' + text + '</a>';
      $('.link-collection').append('<div>' + anchor + '</div>');
    });
    $('article p a').click(function(e){
      e.preventDefault();
    });

});
