const balls1 = document.getElementsByClassName('ball1');
const balls2 = document.getElementsByClassName('ball2');
document.onmousemove = (event) => {
    const x = ((event.clientX * 100) / window.innerWidth);
    const y = ((event.clientY * 100) / window.innerHeight);

    balls1.style.left = str(x) + 'px';
    balls1.style.top = str(y) + 'px';
    balls1.transform = `translate(-${x},-${y})`;
    balls2.style.left = str(x) + 'px';
    balls2.style.top = str(y) + 'px';
    balls2.transform = `translate(-${x},-${y})`;
}