$(document).ready(function(){
  $.ajaxSetup({ cache: true });

  function loadContent(url, has_data) {
    var x,y;
    if (has_data) x = $.getJSON('content/'+url+'.json');
  
    y = $.get(url+'.mst');
    var rendered =''
    if(has_data) {
      $.when.apply($, [x,y]).done(function(json, template) {
        rendered = Mustache.render(template[0], json[0]);
        $('#target').html(rendered);
      });
    } else {
      y.done(function(template) {
        rendered = template
        $('#target').html(rendered);
      });
    }
  }

  $(".inner-link").click(function() {  //use a class, since your ID gets mangled
    data = $(this).attr('href'); //window.location.hash
    has_data = $(this).data('load-json') === true;
    loadContent(data.substring(1), has_data);
  });
});