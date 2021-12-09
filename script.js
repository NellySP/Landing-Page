// burger

function MyFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let menuButton = document.getElementById("nav-toggle");
menuButton.addEventListener("click", function (e) {
  MyFunction();
});
