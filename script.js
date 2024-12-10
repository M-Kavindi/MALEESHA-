// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default behavior of anchor link

    // Scroll to the target element with smooth behavior
    const targetElement = document.querySelector(this.getAttribute('href'));

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling effect
        block: 'start'       // Align the top of the target element with the top of the viewport
      });
    }
  });
});
