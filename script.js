// JavaScript to change the displayed GIF based on button hover
document.getElementById("noButton").addEventListener("mouseenter", function () {
    document.getElementById("gifDisplay").src = "./images/no.gif";
  });
  document.getElementById("noButton").addEventListener("mouseleave", function () {
    document.getElementById("gifDisplay").src = "/images/willyou.gif";
  });
  
  document.getElementById("yesButton").addEventListener("mouseenter", function () {
    document.getElementById("gifDisplay").src = "./images/yes.gif";
  });
  document.getElementById("yesButton").addEventListener("mouseleave", function () {
    document.getElementById("gifDisplay").src = "/images/willyou.gif";
  });
  
  document.getElementById("maybeButton").addEventListener("mouseenter", function () {
    document.getElementById("gifDisplay").src = "./images/maybe.gif";
  });
  document.getElementById("maybeButton").addEventListener("mouseleave", function () {
    document.getElementById("gifDisplay").src = "/images/willyou.gif";
  });
  