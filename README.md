# Orange Restaurant Website

This repository contains the code for the Orange Restaurant website, a modern and interactive web project. Below is an explanation of how the provided code works and its key components.

---

## Table of Contents
1. [Overview](#overview)
2. [HTML Explanation](#html-explanation)
3. [CSS Explanation](#css-explanation)
4. [JavaScript Explanation](#javascript-explanation)
5. [Key Features](#key-features)

---

## Overview

The Orange Restaurant website uses:
- **HTML** for structuring the content
- **CSS** for styling the webpage and adding animations
- **JavaScript** for dynamic features like rising smoke effects

---

## HTML Explanation

### Structure
- **Header**: Contains the navigation bar (`<nav>`), logo, and restaurant name.
- **Main Content**:
  - **Welcome Section**: A hero banner with a welcoming message.
  - **Last Paragraph Section**: Contains a detailed description of the restaurant inside a styled box.

### Key Code:
```html
<div class="main-nav">
    <div class="logo"><img src="./asset/Screenshot (3).png" alt="logo"></div>
    <div class="r-name">
        <h1 id="r-big">ORANGE</h1>
        <p id="r-small">RESTAURANT</p>
    </div>
    <nav>
        <span class="nav-item"><a href="./index.html">Home</a></span>
        <span class="nav-item"><a href="#welcome">About Us</a></span>
        <span class="nav-item"><a href="./web-pages/Menu.html" target="_blank">Menu</a></span>
        <span class="nav-item">Order Online</span>
        <span class="nav-item"><a href="https://www.instagram.com/orange_restaurant_pta/" target="_blank">Contact</a></span>
    </nav>
</div>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}
.main-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 10px 50px;
    height: 80px;
    color: cornsilk;
    position: sticky;
    top: 0;
    z-index: 10;
}
.smoke {
    position: absolute;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 20%, transparent 70%);
    width: 30px;
    height: 30px;
    opacity: 0;
    border-radius: 50%;
    animation: rise 6s infinite ease-in-out;
}

@keyframes rise {
    0% {
        transform: translate(0, 0) scale(0.8);
        opacity: 1;
    }
    50% {
        opacity: 0.6;
    }
    100% {
        transform: translate(0, -200px) scale(1.5);
        opacity: 0;
    }
}
@media screen and (max-width: 768px) {
    .main-nav {
        flex-direction: column;
        padding: 20px;
        height: auto;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".last-p-container");

    function createSmoke() {
        const smoke = document.createElement("div");
        smoke.classList.add("smoke");

        const randomX = Math.random() * 100 - 50;
        const randomDelay = Math.random() * 2;

        smoke.style.left = `calc(50% + ${randomX}px)`;
        smoke.style.animationDelay = `${randomDelay}s`;

        container.appendChild(smoke);

        setTimeout(() => {
            smoke.remove();
        }, 6000);
    }

    setInterval(createSmoke, 500);
});
