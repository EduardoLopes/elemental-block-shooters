var w = 0, h = 0, i = 0;

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
  this.cameraPosition = {x: 0, y: 0};
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
      this.map[this.cols * h + w] = randomChoice([0,0,0,1]);
    }
  }

};

Game.Map.prototype.drawTile = function(w, h, type) {

  if(type > -1){
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

  this.camera.x += (this.cameraPosition.x - this.camera.x) * 0.1;
  this.camera.y += (this.cameraPosition.y - this.camera.y) * 0.1;

  this.camera.x = Math.max(0, this.camera.x);
  this.camera.x = Math.min(this.camera.x, Game.tileSize * this.cols);
  this.camera.y = Math.max(0, this.camera.y);
  this.camera.y = Math.min(this.camera.y, (Game.tileSize * this.rows) - this.viewport.height );

};


