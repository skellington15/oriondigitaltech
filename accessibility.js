// Adding function to the accessibility menu

//This code makes the hamburger icon open
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.accessibility-toggle');
    const optionsMenu = document.querySelector('.accessibility-options');

    toggleButton.addEventListener('click', function() {
        optionsMenu.classList.toggle('show');
    });
});


// Text Resize - Increase
document.querySelector('.accessibility-option[aria-label="Increase Text"]').addEventListener('click', function() {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    const newSize = currentSize + 2;
    body.style.fontSize = newSize + 'px';
});

// Text Resize - Decrease
document.querySelector('.accessibility-option[aria-label="Decrease Text"]').addEventListener('click', function() {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    const newSize = currentSize - 2;
    body.style.fontSize = newSize + 'px';
})
// Voice Reader
document.querySelector('.accessibility-option[aria-label="Voice Reader"]').addEventListener('click', function() {
    const utterance = new SpeechSynthesisUtterance(document.body.innerText);
    speechSynthesis.speak(utterance);})

document.querySelector('.accessibility-option[aria-label="SVoice Reader"]').addEventListener('click', function() {
        speechSynthesis.cancel();
    });

//Dark Mode & Light Mode

    const toggleThemeButton = document.getElementById('toggle-theme-button');
    toggleThemeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleThemeButton.textContent = 'Light Mode';
            toggleThemeButton.setAttribute('aria-label', 'Toggle Light Mode');
        } else {
            toggleThemeButton.textContent = 'Dark Mode';
            toggleThemeButton.setAttribute('aria-label', 'Toggle Dark Mode');
        }
    });