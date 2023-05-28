var btn = document.getElementById("btn");
var lampLight = document.getElementById("lamp-light");

function toggleBtn() {
    btn.classList.toggle("active");
    lampLight.classList.toggle("on-the-light");
} 


document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(anchorLink) {
      anchorLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  