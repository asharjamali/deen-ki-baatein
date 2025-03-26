document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', () => {
        alert('Welcome to Islamic Learning Hub! We are excited to have you join us on this journey of learning.');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add animation to features on scroll
    const features = document.querySelectorAll('.feature');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.5s ease-out';
        observer.observe(feature);
    });

    // Add animation to quotes
    const quotes = document.querySelectorAll('.quote-card');
    
    const quoteObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });

    quotes.forEach((quote, index) => {
        quote.style.opacity = '0';
        quote.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        quote.style.transition = 'all 0.8s ease-out';
        quoteObserver.observe(quote);
    });
});

function showDonationModal() {
    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'donation-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Support IlmVerse</h3>
            <p>Choose your preferred donation method:</p>
            <div class="donation-buttons">
                <a href="https://www.paypal.me/ilmverse" class="modal-btn paypal-btn" target="_blank">
                    <i class="fab fa-paypal"></i> PayPal
                </a>
                <button class="modal-btn crypto-btn" onclick="showCryptoAddresses()">
                    <i class="fas fa-coins"></i> Cryptocurrency
                </button>
            </div>
            <button class="modal-close" onclick="closeModal(this)">×</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function showCryptoAddresses() {
    const modal = document.createElement('div');
    modal.className = 'donation-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Cryptocurrency Donations</h3>
            <div class="crypto-addresses">
                <div class="crypto-item">
                    <i class="fab fa-bitcoin"></i>
                    <p>Bitcoin (BTC):</p>
                    <code class="address">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</code>
                    <button onclick="copyAddress(this)" class="copy-btn">Copy</button>
                </div>
                <div class="crypto-item">
                    <i class="fab fa-ethereum"></i>
                    <p>Ethereum (ETH):</p>
                    <code class="address">0x742d35Cc6634C0532925a3b844Bc454e4438f44e</code>
                    <button onclick="copyAddress(this)" class="copy-btn">Copy</button>
                </div>
            </div>
            <button class="modal-close" onclick="closeModal(this)">×</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal(element) {
    element.closest('.donation-modal').remove();
}

function copyAddress(button) {
    const address = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(address);
    button.textContent = 'Copied!';
    setTimeout(() => button.textContent = 'Copy', 2000);
}



function openmenu() {
    document.getElementById("sidmenu").style.display = "flex";
}

function closemenu() {
    document.getElementById("sidmenu").style.display = "none";
}

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});


function openmenu() {
    document.getElementById("sidmenu").style.display = "flex";
}

function closemenu() {
    document.getElementById("sidmenu").style.display = "none";
}

AOS.init({
    duration: 800,
    once: true,
});

function openmenu() {
    document.getElementById("sidmenu").style.display = "flex";
}

function closemenu() {
    document.getElementById("sidmenu").style.display = "none";
}

AOS.init({
    duration: 800,
    once: true,
});

// Menu Toggle Functions
function openmenu() {
    document.getElementById("sidmenu").classList.add("active");
}

function closemenu() {
    document.getElementById("sidmenu").classList.remove("active");
}

// Initialize AOS (if not already in your script.js)
AOS.init({
    duration: 1000,
    once: true
});





document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".animated-title");
    const button = document.querySelector(".dev-button");

    // Split title into individual characters for animation
    const text = title.textContent;
    title.textContent = "";
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.animation = `letterPop 0.5s ease forwards ${index * 0.1 + 1}s`;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        title.appendChild(span);
    });

    // Button click animation reset
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent immediate navigation for animation
        button.style.animation = "none"; // Reset animation
        void button.offsetWidth; // Trigger reflow
        button.style.animation = "bounceIn 0.5s ease forwards";
        setTimeout(() => {
            window.location.href = button.getAttribute("href"); // Navigate after animation
        }, 500);
    });
});

// Add letterPop animation dynamically
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes letterPop {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);(styleSheet);
