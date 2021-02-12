
const destName = $('#destination').html();
const imageContainer = $('#image').html();
console.log(destName)


  $.ajax('/api/pexels/'+destName , {
    type:"GET",
    data: destName
  }).then(function(response) {
    console.log(response)
  })



$(function () {
  $(".trip-form").on("submit", function (event) {

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
        location.reload();
      }
    );
  });
});

