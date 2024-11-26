document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.menu-section');
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2 }
    );
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  