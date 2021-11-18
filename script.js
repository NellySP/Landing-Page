(function () {
    const toggle = document.querySelector('.nav-toggle');
    
    toggle.addEventListener('click', function(e) {
      this.classList.toggle('opened');
    });
  })();