// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-it").on("click", function(event) {
      let id = $(this).data("id");
  
      let eaten = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eaten
      }).then(
        function() {
          console.log("burger eaten");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        name: $("#ca").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("new burger added");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  