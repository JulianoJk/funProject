document.getElementById('valentineButton').addEventListener('click', function() {
    var response = prompt("Will you be my Valentine?");
    if (response !== null && response.trim() !== "") {
      document.getElementById('response').innerHTML = "Your response: " + response;
    } else {
      document.getElementById('response').innerHTML = "Please enter a response!";
    }
  });
  