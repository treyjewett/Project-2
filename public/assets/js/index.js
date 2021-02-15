$(document).ready(function () {
  const destName = $('#destination').html();
  console.log(destName)


  $.ajax('/api/pexels/' + destName, {
    type: "GET",
  }).then(function (response) {
    document.getElementById('image').src = response.photos[0].url
     console.log(response.photos[0].url)
  })



  $("#submit").on("click", function addTrip(event) {
    // Make sure to preventDefault on a submit event.
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

  $("#sortRating").on("click", function sortTrip(event) {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "/"
    }).then(function() {
      console.log('sorted!');
    })
  })
  
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

