$(document).ready(function () {
  const tripCard = $('.cards').html();
  // console.log(destName)

  //pexels api
  // $.ajax('/api/pexels/' + destName, {
  //   type: "GET",
  // }).then(function (response) {
  //   $('.image').first().append($(`<img src="${response.photos[0].src.landscape}">`))

    // document.getElementById('image').src = response.photos[0].url
    //  console.log(response.photos[0].url)
  // })

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

