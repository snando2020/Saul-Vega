const balls = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    balls1.style.left = x;
    balls1.style.top = y;
    balls1.transform = `translate(-${x},-${y})`;
    balls2.style.left = x;
    balls2.style.top = y;
    balls2.transform = `translate(-${x},-${y})`;
}