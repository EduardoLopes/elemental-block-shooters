var w = 0, h = 0, i = 0, spriteCoords = {x: 0, y: 0};

var types = [];
types[11] = 'wall';
types[4] = 'floor';

var type = {
  wall: {
    typeString: 'wall',
    defaultIndex: 11,
    rules: [
      {tileIndex: 0, map: {e: 'wall', s: 'wall',w: 'floor', n: 'floor' }},
      {tileIndex: 1, map: {e: 'wall', s: 'wall',w: 'wall', n: 'floor' }},
      {tileIndex: 2, map: {n: 'floor', e: 'floor',s: 'wall', w: 'wall' }},
      {tileIndex: 3, map: {e: 'floor', w: 'floor', s: 'floor', n: 'floor'}},
      {tileIndex: 10, map: {n: 'wall', e: 'wall',s: 'wall', w: 'floor' }},
      {tileIndex: 11, map: {e: 'wall', w: 'wall', s: 'wall', n: 'wall'}},
      {tileIndex: 12, map: {w: 'wall', s: 'wall', n: 'wall', e: 'floor'}},
      {tileIndex: 13, map: {n: 'floor', e: 'floor',s: 'wall', w: 'floor' }},
      {tileIndex: 20, map: {e: 'wall', s: 'floor', w: 'floor', n: 'wall' }},
      {tileIndex: 21, map: {e: 'wall', s: 'floor', w: 'wall', n: 'wall' }},
      {tileIndex: 22, map: {n: 'wall', e: 'floor',s: 'floor', w: 'wall' }},
      {tileIndex: 23, map: {n: 'wall', e: 'floor',s: 'wall', w: 'floor' }},
      {tileIndex: 30, map: {n: 'floor', e: 'wall',s: 'floor', w: 'floor' }},
      {tileIndex: 31, map: {n: 'floor', e: 'wall',s: 'floor', w: 'wall' }},
      {tileIndex: 32, map: {n: 'floor', e: 'floor',s: 'floor', w: 'wall' }},
      {tileIndex: 33, map: {n: 'wall', e: 'floor',s: 'floor', w: 'floor' }},
    ]
  },
  floor: {
    typeString: 'floor',
    defaultIndex: 4,
    rules: []
  }
}

/**
 * @constructor
 */
function MapNode(x,y,i) {

  this.solid = null;
  this.setModelType( randomChoice( [4, 4, 4, 11] ) );
  this.entity = [];
  this.x = x;
  this.y = y;
  this.i = i;
  this.adjacents = [];
  this.edges = [];

};

MapNode.prototype.setType = function(type) {

  this.typeID = type;
  this.solid = Game.solidTiles.indexOf(type) > -1;

};

MapNode.prototype.setModelType = function(type) {

  this.typeID = type;
  this.type = types[type];
  this.solid = Game.solidTiles.indexOf(type) > -1;

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
  this.camera = {x: 0, y: 0};
  this.cameraPosition = {x: 500, y: 500};
  this.viewport = {
    width: Game.width,
    height: Game.height
  };

  this.generate();

};

Game.Map.prototype.room = function(x,y,width,height) {
  for (h = x; h < width; h++) {
    for (w = y; w < height; w++) {
      this.map[this.cols * h + w].setModelType(11);
    }
  }
};

Game.Map.prototype.generate = function() {

  for (h = 0; h < this.rows; h++) {
    for (w = 0; w < this.cols; w++) {
      this.map[this.cols * h + w] = new MapNode(w, h, this.cols * h + w);

      //Walls
      if(h === 0) this.map[this.cols * h + w].setModelType(11);
      if(w === 0) this.map[this.cols * h + w].setModelType(11);
      if(h === this.rows - 1) this.map[this.cols * h + w].setModelType(11);
      if(w === this.cols - 1) this.map[this.cols * h + w].setModelType(11);

    }
  }

  this.room(5,5,15,15);
  this.room(14,14,25,25);


  this.findAdjacents();
  this.autoTile();

};

Game.Map.prototype.findAdjacents = function() {

  for (h = 0; h < this.rows; h++) {
    for (w = 0; w < this.cols; w++) {

      this.addAdjacents(this.map[this.cols * h + w], this.map[this.cols * (h + 1) + w]);
      this.addAdjacents(this.map[this.cols * h + w], this.map[this.cols * (h - 1) + w]);
      this.addAdjacents(this.map[this.cols * h + w], this.map[this.cols * (h) + (w + 1)]);
      this.addAdjacents(this.map[this.cols * h + w], this.map[this.cols * (h) + (w - 1)]);
      if(this.map[this.cols * h + w].solid){
        if(typeof this.map[this.cols * (h + 1) + w] !== 'undefined' && !this.map[this.cols * (h + 1) + w].solid){
          this.map[this.cols * h + w].edges.push('b');
        }

        if(typeof this.map[this.cols * (h - 1) + w] !== 'undefined' && !this.map[this.cols * (h - 1) + w].solid){
          this.map[this.cols * h + w].edges.push('t');
        }

        if(typeof this.map[this.cols * (h) + (w + 1)] !== 'undefined' && !this.map[this.cols * (h) + (w + 1)].solid){
          this.map[this.cols * h + w].edges.push('r');
        }

        if(typeof this.map[this.cols * (h) + (w - 1)] !== 'undefined' && !this.map[this.cols * (h) + (w - 1)].solid){
          this.map[this.cols * h + w].edges.push('l');

        }
      }


    }
  }

};

Game.Map.prototype.autoTile = function() {

  for (h = 0; h < this.rows; h++) {
    for (w = 0; w < this.cols; w++) {

      this.map[this.cols * h + w].setType( this.check(w, h) );

    }
  }

};

Game.Map.prototype.check = function(x, y) {

  var rules = type[this.map[this.cols * y + x ].type].rules;

  for (i = 0; i < rules.length; i++) {
    if(this.checkAdjacents(x, y, rules[i])){
      return rules[i].tileIndex;
    };
  };

  return type[this.map[this.cols * y + x].type].defaultIndex;

};

Game.Map.prototype.checkAdjacents = function(x,y, rules) {

  if( !this.checkTile(x - 1, y, rules.map.w) ) return false;
  if( !this.checkTile(x + 1, y, rules.map.e) ) return false;
  if( !this.checkTile(x, y - 1, rules.map.n) ) return false;
  if( !this.checkTile(x, y + 1, rules.map.s) ) return false;

  return true;

};

Game.Map.prototype.checkTile = function(x,y, rule) {

  if(x < 0 || y < 0 || x >= this.cols || y >= this.rows ){
    return true;
  }

  return (rule === this.map[this.cols * y + x].type);

};

Game.Map.prototype.addAdjacents = function(node, adjacent) {

  if(typeof adjacent !== 'undefined'){

    node.adjacents.push(adjacent);

  }

};

Game.Map.prototype.drawTile = function(w, h, type) {
  spriteCoords.y = Math.floor(type / 10);
  spriteCoords.x = (type - spriteCoords.y * 10);

  Game.c1ctx.drawImage(
    Game.spriteCache,
    spriteCoords.x * Game.tileSize,
    spriteCoords.y * Game.tileSize,
    Game.tileSize,
    Game.tileSize,
    (w * Game.tileSize) - this.camera.x,
    (h * Game.tileSize) - this.camera.y,
    Game.tileSize,
    Game.tileSize
  );

};


Game.Map.prototype.draw = function() {

  var lastRightCol = ((this.viewport.width + this.camera.x) / Game.tileSize) >> 0,
      lastRightRow = ((this.viewport.height + this.camera.y) / Game.tileSize) >> 0;

  h = (this.camera.y / Game.tileSize) >> 0;

  if(this.camera.x % Game.tileSize){
    lastRightCol+=1;
  }

  if(this.camera.y % Game.tileSize){
    lastRightRow+=1;
  }

  for ( ; h < lastRightRow; h++) {
    w = ((this.camera.x / Game.tileSize) >> 0);
    for ( ; w < lastRightCol && lastRightCol; w++) {

      this.drawTile(w, h, this.map[this.cols * h + w].typeID);

        //crazy stuff to show all edged that can collide
        // Game.c1ctx.fillStyle = '#CF2B2B';
        // if(this.map[this.cols * h + w].edges.indexOf('t') > -1){
        //   Game.c1ctx.fillRect((w * Game.tileSize) - this.camera.x, (h * Game.tileSize) - this.camera.y, Game.tileSize, 2);
        // }
        // if(this.map[this.cols * h + w].edges.indexOf('b') > -1){
        //   Game.c1ctx.fillRect((w * Game.tileSize) - this.camera.x, ((h * Game.tileSize) + (Game.tileSize - 2)) - this.camera.y, Game.tileSize, 2);
        // }
        // if(this.map[this.cols * h + w].edges.indexOf('l') > -1){
        //   Game.c1ctx.fillRect((w * Game.tileSize) - this.camera.x, (h * Game.tileSize) - this.camera.y, 2, Game.tileSize);
        // }
        // if(this.map[this.cols * h + w].edges.indexOf('r') > -1){
        //   Game.c1ctx.fillRect(((w * Game.tileSize) + (Game.tileSize - 2)) - this.camera.x, (h * Game.tileSize) - this.camera.y, 2, Game.tileSize);
        // }

    };
  };

};

Game.Map.prototype.update = function() {

  this.camera.x += Math.floor((this.cameraPosition.x - this.camera.x) * 0.05) >> 0;
  this.camera.y += Math.floor((this.cameraPosition.y - this.camera.y) * 0.05) >> 0;

  // this.camera.x += Math.floor((this.cameraPosition.x - this.camera.x) * 0.1);
  // this.camera.y += Math.floor((this.cameraPosition.y - this.camera.y) * 0.1);

  this.camera.x = Math.max(0, Math.min(this.camera.x, (Game.tileSize * this.cols) - Game.width));
  this.camera.y = Math.max(0, Math.min(this.camera.y, (Game.tileSize * this.rows) - Game.height));

};


