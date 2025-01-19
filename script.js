const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done."
];

// Références aux éléments HTML
const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById('generate');
const shareButton = document.getElementById('share');

// Générer une citation aléatoire
generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});

// Partager la citation sur Twitter
shareButton.addEventListener('click', () => {
    const quote = quoteElement.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}&hashtags=Quotes,Inspiration`;
    window.open(twitterUrl, '_blank');
});
