// Parallax effekti üçün JavaScript
window.addEventListener('scroll', function() {
  const parallax = document.querySelectorAll('.parallax-img');
  parallax.forEach(function(image) {
    let offset = window.pageYOffset * 0.5;
    image.style.transform = 'translateY(' + offset + 'px)';
  });
});
