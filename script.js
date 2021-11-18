(function () {
    const toggle = document.querySelector('.nav-toggle');
    
    toggle.addEventListener('click', function(e) {
      this.classList.toggle('opened');
    });
  })();

//   (function () {
//     const toggle = document.querySelector('.myLinks');
    
//     toggle.addEventListener('click', function(e) {
//       this.classList.toggle('opened');
//     });
//   })();
//   hidden menu

function hidden() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }