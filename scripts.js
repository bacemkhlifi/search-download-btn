$(".spinner-grow").hide()
$( ".btn" ).click(function() {
    $( this ).replaceWith(  "<h3>Downloading</h3>"  );
    $(".spinner-grow").show();

  });