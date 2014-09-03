var keys = {
  up: false,
  right: false,
  down: false,
  left: false,
  keydown: false
};

 /**
 * @constructor
 */
Game.Player = function(x,y) {

  this.size = 16;
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.speed = 0.8;
  this.maxSpeed = 20;
  this.overlaping = [];
  this.nextX = this.x;
  this.nextY = this.y;
  this.colliding = [];

};

Game.Player.prototype.update = function() {

  this.vy *= 0.72;
  this.vx *= 0.72;

  this.x = this.nextX;
  this.y = this.nextY;

  this.previousy = this.y;
  this.previousx = this.x;

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

  this.nextX += this.vx;
  this.nextY += this.vy;

  this.overlaping.length = 0;
  //this.colliding.length = 0;
  //console.log();
  this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.nextY) / Game.tileSize) + Math.floor((this.nextX) / Game.tileSize)]);
  this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.nextY + this.size) / Game.tileSize) + Math.floor((this.nextX + this.size) / Game.tileSize)]);
  this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.nextY + this.size) / Game.tileSize) + Math.floor((this.nextX) / Game.tileSize)]);
  this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.nextY) / Game.tileSize) + Math.floor((this.nextX + this.size) / Game.tileSize)]);

  for (var i = 0; i < this.overlaping.length; i++) {

    if(this.intercects(this.overlaping[i])){
      //COLLISION DETECTION DEBUG
      //this.colliding.push(this.overlaping[i]);

       if(this.overlaping[i].edges.indexOf('r') > -1 && this.intercectsRight( this.overlaping[i] ) ){

        var x = Math.floor(this.nextX);

        while(!this.intercectsRight(this.overlaping[i], x)){

          x++;

        }

        this.nextX = x;
        this.vx = 0;

      }

      if(this.overlaping[i].edges.indexOf('t') > -1 && this.intecectsTop(this.overlaping[i])){

        var y = Math.floor(this.nextY);

        while(!this.intecectsTop(this.overlaping[i], y)){
          y--;
        }

        this.nextY = y;
        this.vy = 0;

      }

       if(this.overlaping[i].edges.indexOf('b') > -1 && this.intercectsBottom(this.overlaping[i])){

        var y = Math.floor(this.nextY);

        while(!this.intercectsBottom(this.overlaping[i], y)){
          y++;
        }

        this.nextY = y;
        this.vy = 0;

      }

       if ( this.overlaping[i].edges.indexOf('l') > -1 && this.intercectsLeft( this.overlaping[i] ) ){

        var x = Math.floor(this.nextX);

        while(!this.intercectsLeft(this.overlaping[i], x)){

          x--;

        }

        this.nextX = x;
        this.vx = 0;

      }

    };
  };

  if(this.x - Game.currentMap.camera.x > Game.width / 2 ||
    this.x - Game.currentMap.camera.x < Game.width / 2){
    Game.currentMap.cameraPosition.x = this.x - (Game.width / 2) + (this.size / 2);
  }

  if(this.y - Game.currentMap.camera.y > Game.width / 2 ||
     this.y - Game.currentMap.camera.y < Game.width / 2 ){
    Game.currentMap.cameraPosition.y = this.y - (Game.height / 2) + (this.size / 2);
  }

};

Game.Player.prototype.addOverlaping = function(node) {

  if(this.overlaping.indexOf(node) === -1){
    this.overlaping.push(node);
  }

};


Game.Player.prototype.intercects = function(obj){
  if(obj && obj.solid){

    if((obj.x * Game.tileSize) < this.nextX + this.size && (obj.y * Game.tileSize) < this.nextY + this.size &&
       (obj.x * Game.tileSize) + Game.tileSize > this.nextX && (obj.y * Game.tileSize) + Game.tileSize > this.nextY ){

      return true;
    }
  }
  return false;
};

Game.Player.prototype.intecectsTop = function(obj, y) {
  y = y || this.y;
  if((obj.x * Game.tileSize) <= this.x + this.size &&
     (obj.x * Game.tileSize) + Game.tileSize >= this.x && (obj.y * Game.tileSize) >= y + this.size){
    return true;
  }
  return false;

};

Game.Player.prototype.intercectsRight = function(obj, x) {
  x = x || this.x;
  if((obj.x * Game.tileSize) + Game.tileSize <= x){
    return true;
  }

  return false;
};

Game.Player.prototype.intercectsLeft = function(obj, x) {
  x = x || this.x;
  if((obj.x * Game.tileSize) >= x + this.size){
    return true;
  }

  return false;

};

Game.Player.prototype.intercectsBottom = function(obj, y) {
  y = y || this.y;

  if((obj.x * Game.tileSize) + Game.tileSize >= this.x && (obj.y * Game.tileSize) + Game.tileSize <= y){
    return true;
  }

  return false;

};


Game.Player.prototype.draw = function() {

  Game.c1ctx.fillStyle = '#181818';
  Game.c1ctx.fillRect(this.x - Game.currentMap.camera.x, this.y - Game.currentMap.camera.y, this.size, this.size);

  //DEBUG: SHOW THE ID OF THE CURRENT TILE
  //Game.c1ctx.fillText(Game.currentMap.cols * Math.floor((this.nextY + this.size) / Game.tileSize) + Math.floor((this.nextX + this.size) / Game.tileSize), 10,10);

  //COLLSION DETECTION DEBUG
  // Game.c1ctx.fillStyle = 'rgba(24,24,24,0.5)';
  // for (var i = 0; i < this.overlaping.length; i++) {
  //   Game.c1ctx.fillRect((this.overlaping[i].x * 32) - Game.currentMap.camera.x, (this.overlaping[i].y * 32) - Game.currentMap.camera.y, 32, 32);
  // };
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