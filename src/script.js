document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    header.addEventListener('click', function() {
        alert('Welcome to the Valentine Interactive Website!');
    });

    // Button resizing logic
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseleave', function() {
            button.style.transform = 'scale(1)';
        });
        button.addEventListener('mousedown', function() {
            button.style.transform = 'scale(0.9)';
        });
        button.addEventListener('mouseup', function() {
            button.style.transform = 'scale(1.1)';
        });
    });

    // GIF swapping logic
    const gifContainer = document.querySelector('.gif-container');
    const gifPaths = [
        'public/gif1.gif',
        'public/gif2.gif',
        'public/gif3.gif'
    ];
    let currentGifIndex = 0;

    function updateGif() {
        gifContainer.src = gifPaths[currentGifIndex];
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            currentGifIndex = index;
            updateGif();
        });
    });

    // Initialize with the first GIF
    updateGif();
});
