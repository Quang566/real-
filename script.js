document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('flowerButton');
    button.addEventListener('click', shootFlowers);
});

function shootFlowers(event) {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';

        flower.style.left = `${buttonX}px`;
        flower.style.top = `${buttonY}px`;

        const randomRotation = Math.random() * 360 + 'deg';
        const randomX = (Math.random() - 0.5) * 200 + 'px';
        const randomY = (Math.random() - 0.5) * 200 + 'px';
        const randomXEnd = (Math.random() - 0.5) * 400 + 'px';
        const randomRotationEnd = Math.random() * 360 + 'deg';

        flower.style.setProperty('--x', randomX);
        flower.style.setProperty('--y', randomY);
        flower.style.setProperty('--x-end', randomXEnd);
        flower.style.setProperty('--rotate', randomRotation);
        flower.style.setProperty('--rotate-end', randomRotationEnd);

        console.log(`Flower ${i} created at (${flower.style.left}, ${flower.style.top})`);

        document.body.appendChild(flower);

        setTimeout(() => flower.remove(), 3000);
    }
}
