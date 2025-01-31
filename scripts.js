
document.addEventListener("DOMContentLoaded", () => {
    const scrollWheel = document.querySelector('.orange-scroll-wheel');
    const aboutSection = document.getElementById('welcome');
    
    // Animate wheel rotation on scroll
    let rotation = 0;
    
    // Click handler
    scrollWheel.addEventListener('click', () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Mouse wheel handler
    window.addEventListener('wheel', (e) => {
        rotation += e.deltaY * 0.1;
        scrollWheel.querySelector('.orange-wheel').style.transform = `rotate(${rotation}deg)`;
        
        // Scroll to section on wheel interaction
        if(e.deltaY > 0) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // Touch support for mobile
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchmove', (e) => {
        const touchEndY = e.touches[0].clientY;
        const deltaY = touchEndY - touchStartY;
        
        rotation += deltaY * 0.1;
        scrollWheel.querySelector('.orange-wheel').style.transform = `rotate(${rotation}deg)`;
        
        if(deltaY < 0) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    const container = document.querySelector(".last-p-container");

    // Function to generate smoke particles
    function createSmoke() {
        const smoke = document.createElement("div");
        smoke.classList.add("smoke");

        // Randomize initial position
        const randomX = Math.random() * 100 - 50; // Random between -50px to 50px
        const randomDelay = Math.random() * 2; // Random delay up to 2s

        smoke.style.left = `calc(50% + ${randomX}px)`; // Position smoke relative to center
        smoke.style.animationDelay = `${randomDelay}s`;

        container.appendChild(smoke);

        // Remove smoke after animation ends
        setTimeout(() => {
            smoke.remove();
        }, 6000);
    }

    // Generate smoke particles at intervals
    setInterval(createSmoke, 500); // New smoke every 0.5 seconds
});

    // existing code for menu sections
    const sections = document.querySelectorAll('.menu-section');
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

