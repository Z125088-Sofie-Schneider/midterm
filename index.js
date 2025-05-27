// Function to set the --vh custom CSS property based on the actual viewport height
function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Initial call to set --vh
setVH();

// Update --vh on window resize to handle mobile browser UI resizing
window.addEventListener('resize', setVH);

// Wait until the DOM is fully loaded before running the typewriter effect
document.addEventListener("DOMContentLoaded", function () {
  const heroText = "SOFIE SCHNEIDER"; // Main headline text
  const subText = "Welcome to my website about me, my travels and the books I love."; // Subtitle text

  const heroTitle = document.getElementById("hero-title");
  const heroSubtext = document.getElementById("hero-subtext");

  // Clear any existing content before typing starts
  heroTitle.textContent = "";
  heroSubtext.textContent = "";

  let index = 0;

  // Typewriter effect for the main headline
  const typeInterval = setInterval(() => {
    heroTitle.textContent += heroText.charAt(index);
    index++;

    // Once the main text is fully typed
    if (index === heroText.length) {
      clearInterval(typeInterval);

      // Start typing the subtext after a short pause (400ms)
      setTimeout(() => {
        let subIndex = 0;

        const subInterval = setInterval(() => {
          heroSubtext.textContent += subText.charAt(subIndex);
          subIndex++;

          // Stop typing when full subtext is written
          if (subIndex === subText.length) {
            clearInterval(subInterval);
          }
        }, 45); // Slightly faster typing for the subtext
      }, 400);
    }
  }, 60); // Typing speed in milliseconds per letter for main text
});
