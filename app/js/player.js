var keys = {
  up: false,
  right: false,
  down: false,
  left: false,
  keydown: false
};

 /**
 * Player
 *
 * @constructor
 */
Game.Player = function() {
  this.x = Game.width / 2;
  this.y = Game.height / 2;
  this.vx = 0;
  this.vy = 0;
  this.size = Game.tileSize / 2;
  this.speed = 2;
  this.maxSpeed = 20;
};

Game.Player.prototype.update = function() {

  this.vy *= 0.72;
  this.vx *= 0.72;
  this.y += this.vy;
  this.x += this.vx;

  if(this.x - Game.currentMap.camera.x > Game.width / 2){
    Game.currentMap.cameraPosition.x += this.vx;
  }

  if(this.x - Game.currentMap.camera.x < Game.width / 2){
    Game.currentMap.cameraPosition.x += this.vx;
  }

  if(this.y - Game.currentMap.camera.y > Game.width / 2){
    Game.currentMap.cameraPosition.y += this.vy;
  }

  if(this.y - Game.currentMap.camera.y < Game.width / 2){
    Game.currentMap.cameraPosition.y += this.vy;
  }

  if(keys.up && this.vy > -this.maxSpeed){
    this.vy -= this.speed;
  }

  if(keys.down && this.vy < this.maxSpeed){
    this.vy += this.speed;
  }

  if(keys.right && this.vx < this.maxSpeed){
    this.vx += this.speed;
  }

  if(keys.left && this.vx > -this.maxSpeed){
    this.vx -= this.speed;
  }

};

Game.Player.prototype.draw = function() {

  Game.c1ctx.fillStyle = '#181818';
  Game.c1ctx.fillRect(this.x - Game.currentMap.camera.x, this.y - Game.currentMap.camera.y, this.size, this.size);

};

document.addEventListener('keydown', function(e) {

  //38 up
  if(e.keyCode === 38){
    keys.up = true;
  }

  //39 right
  if(e.keyCode === 39){
    keys.right = true;
  }

  //40 bottom
  if(e.keyCode === 40){
    keys.down = true;
  }

  //37 left
  if(e.keyCode === 37){
    keys.left = true;
  }

});

document.addEventListener('keyup', function(e) {

   //38 up
  if(e.keyCode === 38){
    keys.up = false;
  }

  //39 right
  if(e.keyCode === 39){
    keys.right = false;
  }

  //40 bottom
  if(e.keyCode === 40){
    keys.down = false;
  }

  //37 left
  if(e.keyCode === 37){
    keys.left = false;
  }

});