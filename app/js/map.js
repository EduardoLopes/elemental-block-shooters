var w = 0, h = 0, i = 0;

var keys = {
  up: false,
  right: false,
  down: false,
  left: false,
  keydown: false
};

 /**
 * Map render
 *
 * @constructor
 */
Game.Map = function() {
  this.cols = 64;
  this.rows = 64;
  this.map = [];
  this.spriteCoords = [];
  this.camera = {x: 0, y: 0};
  this.viewport = {
    width: Game.width + 32,
    height: Game.height + 32
  };

  for (h = 0; h < Game.sprites.height / Game.tileSize; h++) {
    for (w = 0; w < Game.sprites.width / Game.tileSize; w++) {

      this.spriteCoords[i] = [w, h];
      i++;

    }
  }

  this.generate();

};

Game.Map.prototype.generate = function() {

  for (h = 0; h < this.rows; h++) {
    for (w = 0; w < this.cols; w++) {
      this.map[this.cols * h + w] = randomChoice([0,1,2,3]);
    }
  }

};

Game.Map.prototype.drawTile = function(w, h, type) {

  if(type > 0){
    Game.c1ctx.drawImage(
      Game.sprites,
      this.spriteCoords[type][0] * Game.tileSize,
      this.spriteCoords[type][1] * Game.tileSize,
      Game.tileSize,
      Game.tileSize,
      (w * Game.tileSize) - this.camera.x,
      (h * Game.tileSize) - this.camera.y,
      Game.tileSize,
      Game.tileSize
    );
  }

};


Game.Map.prototype.draw = function() {

  var lastRightCol = ((this.viewport.width + this.camera.x) / Game.tileSize) >> 0,
      lastRightRow = ((this.viewport.height + this.camera.y) / Game.tileSize) >> 0;

  h = (this.camera.y / Game.tileSize) >> 0;

  for ( ; h < lastRightRow; h++) {
    for ( w = ((this.camera.x / Game.tileSize) >> 0) ; w < lastRightCol; w++) {

        this.drawTile(w, h, this.map[this.cols * h + w]);

    };
  };

};

Game.Map.prototype.update = function() {

  if(keys.up){
    if(this.camera.y > 0) this.camera.y += -16;
  }

  if(keys.down){
    if( this.camera.y < (Game.tileSize * this.rows) - this.viewport.height ) this.camera.y += +16;
  }

  if(keys.right){
    if( this.camera.x < (Game.tileSize * this.cols) ) this.camera.x += +16;
  }

  if(keys.left){
    if( this.camera.x > 0) this.camera.x += -16;
  }

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
