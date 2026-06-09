const catImage = document.querySelector('.site-image');

catImage.addEventListener('click', () => {
    const randomX = Math.random() * (window.innerWidth - catImage.width);
    const randomY = Math.random() * (window.innerHeight - catImage.height);

    catImage.style.position = 'fixed';
    catImage.style.left = randomX + 'px';
    catImage.style.top = randomY + 'px';
});