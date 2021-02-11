
$(function () {
  $(".trip-form").on("submit", function (event) {

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
      function () {
        console.log("Added new trip");

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

