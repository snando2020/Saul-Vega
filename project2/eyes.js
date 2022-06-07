const balls = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    balls1.style.left = x + 'px';
    balls1.style.top = y + 'px';
    balls1.transform = `translate(-${x},-${y})`;
    balls2.style.left = x + 'px';
    balls2.style.top = y + 'px';
    balls2.transform = `translate(-${x},-${y})`;
}