$(function(){

  $.getJSON('productos.json', function(data) {

    for(var i = 0; i < data.productos.length; i++) {
      var $e = $(".cajita-de-producto").first().clone();
      $e.find(".nombre").html(data.productos[i].nombre);
      $e.find(".precio").html(data.productos[i].precio);
      $e.find(".cantidad").html(data.productos[i].cantidad);
      $e.find(".caja-imagen img").attr('src', data.productos[i].imagen);
      $(".productos").append($e);
    }

  });

});
