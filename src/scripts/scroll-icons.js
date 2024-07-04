document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll('.icon-info');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    icons.forEach(icon => {
      observer.observe(icon);
    });
  });