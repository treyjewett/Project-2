$('.addTrip').on("click", function(event) {
    console.log('js file works')
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
    $.ajax("/api/cats", {
      type: "POST",
      data: newTrip
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

