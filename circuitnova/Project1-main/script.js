document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("fade-out");
        document.querySelector(".main-content").style.display = "block";
    }, 3000); 
});



document.querySelector('form').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault(); 
        alert('Please fill out all fields.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});
document.querySelectorAll('.dropdown > a').forEach((dropdownLink) => {
dropdownLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    const dropdownMenu = dropdownLink.nextElementSibling;

    dropdownMenu.style.display =
        dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
});

document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");
    const heroTitle = document.querySelector(".hero-title");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        heroTitle.style.transform = `translateY(${scrollY * -0.3}px)`;

        if (scrollY > 100) {
            hero.classList.add("scrolled");
        } else {
            hero.classList.remove("scrolled");
        }
    });
});

 // Type the text
 document.addEventListener("DOMContentLoaded", function () {
    function typeText(text, element, speed = 50) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        element.innerHTML = ""; 
        type();
    }

    const textElement = document.getElementById("mymsg-text");
    
    if (textElement) {
        typeText(
            "Welcome to CircuitNova! 🚀 A place where technology enthusiasts, innovators, and problem solvers unite for an immersive experience. Get ready to explore, learn, and showcase your skills! ⚡",
            textElement
        );
    }
});





