let count = 1;

// Enemies our player must avoid
function Enemy(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x= -100;
    this.y= y;

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    this.update = (function(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.

        let speedFactor =1; //part of closure

        return function (dt) {
          if (this.x > 1000) {
            this.x = -100;
          }

          if (this.x=== -100) {
            speedFactor = Math.random();
          }

          this.x += (speedFactor * 400 * dt);
        };
    })();
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player(){
  this.x= 202;
  this.y= 405;
  this.sprite = 'images/char-boy.png';
  this.handleInput = function (key) {
    if (key === 'left' && this.x >= 10){
        this.x -= 101;
    } else if (key === 'up'  && this.y >= 10) {
        this.y -= 83;
    } else if (key === 'right' && this.x <= 400) {
        this.x += 101;
    } else if (key === 'down' && this.y <= 400) {
        this.y += 83;
    }
  };
  this.update = function() { //postponed until i found a job for it

  };
  this.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let enemy1 = new Enemy(60);
let enemy2 = new Enemy(60);
let enemy3 = new Enemy(145);
let enemy4 = new Enemy(145);
let enemy5 = new Enemy(230);
let enemy6 = new Enemy(230);
// let allEnemies = [enemy1, enemy2];
let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
