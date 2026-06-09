const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");
const badge = document.querySelector(".badge");

// Handle the "Absolutely" click 
yesBtn.addEventListener("click", () => {
    badge.innerHTML = "MISSION ACCOMPLISHED";
    badge.style.background = "rgba(245, 158, 11, 0.15)";
    badge.style.color = "#f59e0b";
    badge.style.borderColor = "rgba(245, 158, 11, 0.3)";

    question.innerHTML = "Welcome to the top 1%. Let's secure the future! 🚀";
    gif.src = "https://media.tenor.com/D97I_b7scYgAAAAi/gold-money.gif";

    // Smoothly remove user choices
    btnGroup.style.display = "none";

    // Run the luxury celebration effect
    fireSuccessConfetti();
});

// Move the "Not Ready" button dynamically inside the card
const moveNoButton = () => {
    noBtn.classList.add("moving");

    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const paddingBuffer = 30; 
    const maxX = wrapperRect.width - noBtnRect.width - paddingBuffer;
    const maxY = wrapperRect.height - noBtnRect.height - paddingBuffer;

    const randomX = Math.max(paddingBuffer, Math.floor(Math.random() * maxX));
    const randomY = Math.max(paddingBuffer, Math.floor(Math.random() * maxY));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("focus", moveNoButton); 
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); 
    moveNoButton();
});

// Custom Gold and Emerald Confetti Theme
function fireSuccessConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;
    // Luxury Colors: Emerald Green, Gold, Mint, Diamond White
    const luxuryColors = ['#10b981', '#f59e0b', '#34d399', '#ffffff']; 

    (function frame() {
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: luxuryColors
        });
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: luxuryColors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}