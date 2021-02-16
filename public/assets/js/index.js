$(document).ready(function () {
  const tripCard = $('.cards').html();
  // console.log(destName)


  $('.destination').each(function(i) {
    let destCount = $(this).html();
    console.log(destCount)
    //pexels api
    let self = this;
    $.ajax('/api/pexels/' + destCount, {
      type: "GET",
    }).then(function (response) {
        $(self).parent().parent().parent().children("#"+destCount+"-image").append($(`<img src="${response.photos[0].src.landscape}">`))
    })
  }); 

  //add trip route
  $("#submit").on("click", function addTrip(event) {
    event.preventDefault();

    var newTrip = {
      author: $("#auth").val().trim(),
      name: $("#dest").val().trim(),
      summary: $("#description").val().trim(),
      rating: $("#rating").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/trips", {
      type: "POST",
      data: newTrip
    }).then(
      function () {
        console.log("Added new trip");

        // Reload the page to get the updated list
        location.replace("/");
      }
    );
  });

  //delete route
  $(".delete").on("click", function deleteTrip(event) {
    event.preventDefault();
    console.log('clicked');
    var id = $(this).data("id");
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "/api/trips/" + id
    }).then(function () {
      console.log('deleted trip');
      location.reload();
    })
  })
});