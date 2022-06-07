const balls = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    for (let i = 0; i < 2; i++) {
        balls[i].styles.left = x + 'px';
        balls[i].styles.top = y + 'px';
        balls[i].transform = `translate(-${x},-${y})`;
    }
};