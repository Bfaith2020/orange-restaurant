document.addEventListener("DOMContentLoaded", () => {
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
