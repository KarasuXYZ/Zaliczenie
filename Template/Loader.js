window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0'; // Dodaje
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 800); 
});