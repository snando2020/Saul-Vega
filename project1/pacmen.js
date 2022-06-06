let position = 0;
const pacArray = [
    ['./project1/images/PacMan1.png', './project1/images/PacMan2.png'],
    ['./project1/images/PacMan3.png', './project1/images/PacMan4.png']
];
var direction = 0;
const pacMen = []; // This array holds all the pacmen        
function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}

function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);
    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = './project1/images/PacMan1.png';
    newimg.width = 100;
    //
    // set position here 
    //
    newimg.style.left = position.x + 'px';
    newimg.style.top = position.y + 'px';

    // add new Child image to game
    game.appendChild(newimg);
    // return details in an object
    return {
        position,
        velocity,
        newimg,
        direction
    }
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;
        item.newimg.style.left = item.position.x + 'px';
        item.newimg.style.top = item.position.y + 'px';
        if (item.velocity.x > 0) {
            item.newimg.direction = 0;
        } else {
            item.newimg.direction = 1;
        }
        item.newimg.src = pacArray[item.newimg.direction][(Math.random() >= 0.5) ? 1 : 0];
    })
    setTimeout(update, 100);
}

function checkCollisions(item) {
    if (item.position.x + item.velocity.x + item.newimg.width > document.getElementById('game').clientWidth || item.position.x + item.velocity.x < 0) {
        item.velocity.x = -item.velocity.x;
    }
    if (item.position.y + item.velocity.y + item.newimg.height > document.getElementById('game').clientHeight || item.position.y + item.velocity.y < 0) {
        item.velocity.y = -item.velocity.y;
    }
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}