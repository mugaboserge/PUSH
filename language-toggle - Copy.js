// Select the buttons and content
const englishButton = document.getElementById('english-btn');
const frenchButton = document.getElementById('french-btn');
const englishContent = document.querySelectorAll('.text-english');
const frenchContent = document.querySelectorAll('.text-french');

// Event listener for English button
englishButton.addEventListener('click', () => {
    // Show English content, hide French content
    englishContent.forEach(el => el.style.display = 'block');
    frenchContent.forEach(el => el.style.display = 'none');
});

// Event listener for French button
frenchButton.addEventListener('click', () => {
    // Show French content, hide English content
    frenchContent.forEach(el => el.style.display = 'block');
    englishContent.forEach(el => el.style.display = 'none');
});
// Set language preference in localStorage
englishButton.addEventListener('click', () => {
    localStorage.setItem('language', 'english');
    showEnglish();
});

frenchButton.addEventListener('click', () => {
    localStorage.setItem('language', 'french');
    showFrench();
});

// Show content based on language stored in localStorage
function showEnglish() {
    englishContent.forEach(el => el.style.display = 'block');
    frenchContent.forEach(el => el.style.display = 'none');
}

function showFrench() {
    frenchContent.forEach(el => el.style.display = 'block');
    englishContent.forEach(el => el.style.display = 'none');
}

// Check the language preference on page load
window.onload = function() {
    const language = localStorage.getItem('language');
    if (language === 'french') {
        showFrench();
    } else {
        showEnglish();
    }
};
