//const { response } = require("express");

const destName = $('#destination').html();
const imageContainer = $('#image').html();
console.log(destName)


  $.ajax('/api/pexels/'+destName , {
    type:"GET",
    data: destName
  }).then(function(response) {
    console.log(response)
  })

$(".create-trip").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTrip = {
      author: $("#auth").val().trim(),
      destination: $("#dest").val().trim(),
      description: $("#description").val().trim(),
      rating: $("#rating").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/trips", {
      type: "POST",
      data: newTrip
    }).then(
      function() {
        console.log("created new trip");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  