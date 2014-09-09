var w = 0, h = 0, i = 0, spriteCoords = {x: 0, y: 0};

var types = [];
types[11] = 'w'; //walls
types[34] = 'f'; //floor

var type = [];
type['w'] = {
  typeString: 'w',
  defaultIndex: 11,
  rules: []
};
type['f'] =  {
  typeString: 'f',
  defaultIndex: [34, 34, 34, 35, 36],
  rules: []
};


function pushRules(i, r){
  type['w'].rules.push({tileIndex: i, map: r});
};
function pushRulesF(i, r){
  type['f'].rules.push({tileIndex: i, map: r});
};

//this is for save some bytes
pushRules([3,48], {e: '!w', w: '!w', s: '!w', n: '!w'});
pushRules(7, {n: 'w', ne: 'w', e: 'w', se: '!w', s: 'w', sw: 'w', w: 'w', nw: 'w' });
pushRules(4, {n: '!w', e: 'w', se: '!w', s: 'w', w: '!w'});
pushRules(9, {n: 'w', ne: 'w', e: 'w', se: 'w', s: 'w', sw: '!w', w: 'w', nw: 'w' });
pushRules(11,  {n: 'w', ne: 'w', e: 'w', se: 'w', s: 'w', sw: 'w', w: 'w', nw: 'w' });
pushRules(2, {n: '!w', e: '!w',s: 'w', w: 'w', sw: 'w' });
pushRules(0, {w: '!w', n: '!w', e: 'w', s: 'w', se: 'w'});
pushRules(27, {n: 'w', ne: '!w', e: 'w', se: 'w', s: 'w', sw: 'w', w: 'w', nw: 'w' });
pushRules(29, {n: 'w', ne: 'w', e: 'w', se: 'w', s: 'w', sw: 'w', w: 'w', nw: '!w' });
pushRules(28, {n: 'w', ne: '!w', e: 'w', se: 'w', s: 'w', sw: 'w', w: 'w', nw: '!w' });
pushRules(38, {n: 'w', ne: '!w', e: 'w', se: 'w', s: 'w', sw: 'w', w: 'w', nw: '!w' });
pushRules(1, {n: '!w', e: 'w', se:'w', s:'w', sw: 'w', w: 'w'});
pushRules(8, {n: 'w', ne: 'w', e: 'w', se: '!w', s: 'w', sw: '!w', w: 'w', nw: 'w' });
pushRules(5, {n: '!w', e: 'w', se: '!w', s: 'w',sw: '!w', w: 'w'});
pushRules(6, {n: '!w', e: '!w', s: 'w', sw: '!w', w: 'w'});
pushRules(39, {n: 'w', ne: 'w', e: 'w', se: 'w', s: 'w', sw: '!w', w: 'w', nw: '!w' });
pushRules(10, {n: 'w', ne: 'w', e: 'w',s: 'w', se: 'w', w: '!w'});
pushRules(12, {w: 'w', s: 'w', sw: 'w', n: 'w', nw: 'w', e: '!w'});
pushRules(13, {n: '!w', e: '!w',s: 'w', w: '!w' });
pushRules(37, {n: 'w', ne: '!w', e: 'w', se: '!w', s: 'w', sw: 'w', w: 'w', nw: 'w' });
pushRules(14, {n: 'w', ne: '!w', e: 'w', se: '!w', s: 'w', w: '!w' });
pushRules(16, {n: 'w', e: '!w',s: 'w', sw:'!w', w: 'w', nw: '!w' });
pushRules(17, {n: 'w', ne: '!w', e: 'w', se: '!w', s: 'w', sw: 'w', w: 'w', nw: 'w' });
pushRules(18, {n: 'w', ne: '!w', e: 'w', se: '!w', s: 'w', sw: '!w', w: 'w', nw: '!w' });
pushRules(19, {n: 'w', ne: 'w', e: 'w', se: 'w', s: 'w', sw: '!w', w: 'w', nw: '!w' });
pushRules(20, {n: 'w', ne: 'w', e: 'w', s: '!w', w: '!w'});
pushRules(21, {n: 'w', ne: 'w', e: 'w', s: '!w', w: 'w', nw: 'w'});
pushRules(22, {n: 'w', e: '!w',s: '!w', w: 'w', nw: 'w'});
pushRules(23, {n: 'w', e: '!w',s: 'w', w: '!w' });
pushRules(24, {n: 'w', ne:'!w', e: 'w', s: '!w', w: '!w' });
pushRules(25, {n: 'w', ne: '!w', e: 'w', s: '!w', w: 'w', nw: '!w' });
pushRules(26, {n: 'w', e: '!w', s: '!w', w: 'w', nw: '!w' });
pushRules(30, {n: '!w', e: 'w',s: '!w', w: '!w' });
pushRules(31, {n: '!w', e: 'w',s: '!w', w: 'w' });
pushRules(32, {n: '!w', e: '!w',s: '!w', w: 'w' });
pushRules(33, {n: 'w', e: '!w',s: '!w', w: '!w' });
pushRules(40, {n: '!w', e: 'w', se: '!w', s: 'w', sw: 'w', w: 'w'});
pushRules(41, {n: 'w', e: '!w', s: 'w', sw: '!w', w: 'w', nw: 'w' });
//pushRules(41, {n: 'w', ne: 'w', e: '!w', se: '!w', s: 'w', sw: '!w', w: 'w', nw: 'w' });
pushRules(42, {n: 'w', ne: 'w', e: 'w', se: '!w', s: 'w', w: '!w'});
pushRules(43, {n: '!w', e: 'w', se: 'w', s: 'w', sw: '!w', w: 'w'});
pushRules(44, {n: 'w', ne: '!w', e: 'w', se: '!w', s: 'w', sw: '!w', w: 'w', nw: 'w' });
pushRules(45, {n: 'w', ne: 'w', e: 'w', se: '!w', s: 'w', sw: '!w', w: 'w', nw: '!w' });
pushRules(46, {n: 'w', ne: '!w', e: 'w', se: 'w', s: 'w', sw: '!w', w: 'w', nw: 'w' });
pushRules(47, {n: 'w', ne: 'w', e: 'w', se: '!w', s: 'w', sw: 'w', w: 'w', nw: '!w' });
pushRules(50, {n: 'w', ne: '!w', e: 'w', se: 'w', s: 'w', w: '!w'});
pushRules(51, {n: 'w', ne: 'w', e: 'w', s: '!w', w: 'w', nw: '!w' });
pushRules(52, {n: 'w', ne: '!w', e: 'w', s: '!w', w: 'w', nw: 'w' });
pushRules(53, {n: 'w', e: '!w', s: 'w', sw: 'w', w: 'w', nw: '!w' });
pushRules(54, {n: 'w', ne: '!w', e: 'w', se: '!w', s: 'w', sw: 'w', w: 'w', nw: '!w' });
pushRules(55, {n: 'w', ne: '!w', e: 'w', se: 'w', s: 'w', sw: '!w', w: 'w', nw: '!w' });


/**
 * @constructor
 */
function MapNode(x,y,i) {

  this.solid = null;
  this.setModelType( randomChoice( [34, 34, 34, 11] ) );
  this.entity = [];
  this.x = x;
  this.y = y;
  this.i = i;
  this.adjacents = [];
  this.edges = [];

};

MapNode.prototype.setType = function(type) {

  this.typeID = type;

  if(type === 48 || type === 108 || type === 168 || type === 228){
    this.type = 'enemy';
  }

  this.solid = Game.solidTiles.indexOf(type) > -1;
};

MapNode.prototype['enemy'] = function() {

  this.typeID = 3 + (60 * Game.currentMap.type);
  this.type = 'w';

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
Game.Map = function(type) {
  this.cols = 64 * 4;
  this.rows = 64 * 4;
  this.map = [];
  this.camera = {x: 0, y: 0};
  this.cameraPosition = {x: 500, y: 500};
  this.viewport = {
    width: Game.width,
    height: Game.height
  };
  this.types = ['air', 'water', 'earth', 'fire'];
  this.type = this.types.indexOf( type );

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

  this.autoTile();

  this.findAdjacents();

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

      this.map[this.cols * h + w].setType( this.check(w, h) + (60 * this.type) );

    }
  }

};

Game.Map.prototype.check = function(x, y) {

  var rules = type[this.map[this.cols * y + x ].type].rules;

  for (i = 0; i < rules.length; i++) {
    if(this.checkAdjacents(x, y, rules[i])){
      if(rules[i].tileIndex instanceof Array){
        return randomChoice(rules[i].tileIndex);
      }
        return rules[i].tileIndex;
    };
  };

  if(type[this.map[this.cols * y + x].type].defaultIndex instanceof Array){
    return randomChoice(type[this.map[this.cols * y + x].type].defaultIndex);
  }

  return type[this.map[this.cols * y + x].type].defaultIndex;

};

Game.Map.prototype.checkAdjacents = function(x,y, rules) {

  if( !this.checkTile(x, y - 1, rules.map.n, x, y) ) return false; //n
  if( !this.checkTile(x + 1, y - 1, rules.map.ne, x, y) ) return false; //ne
  if( !this.checkTile(x + 1, y, rules.map.e, x, y) ) return false; //e
  if( !this.checkTile(x + 1, y + 1, rules.map.se, x, y) ) return false; //se
  if( !this.checkTile(x, y + 1, rules.map.s, x, y ) ) return false; //s
  if( !this.checkTile(x - 1, y + 1, rules.map.sw, x, y ) ) return false; //sw
  if( !this.checkTile(x - 1, y, rules.map.w, x, y ) ) return false; //w
  if( !this.checkTile(x - 1, y - 1, rules.map.nw, x, y  ) ) return false; //w

  return true;

};

Game.Map.prototype.checkTile = function(x,y, rule, w, h) {
  var type = this.map[this.cols * y + x];

  if(!type || x < 0 || y < 0 || x >= this.cols || y >= this.rows ) {

    type = this.map[this.cols * h + w];

  }

  if(!rule){
    return true;
  }

  if( /(!\w*)/.test(rule) ) return ~rule.indexOf(type.type) > -1;

  return (rule === type.type);
};

Game.Map.prototype.addAdjacents = function(node, adjacent) {

  if(typeof adjacent !== 'undefined'){

    node.adjacents.push(adjacent);

  }

};

Game.Map.prototype.drawTile = function(w, h, type) {
  spriteCoords.y = type / 10 >> 0;
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

  this.camera.x += (this.cameraPosition.x - this.camera.x) * 0.05 >> 0;
  this.camera.y += (this.cameraPosition.y - this.camera.y) * 0.05 >> 0;

  // this.camera.x += Math.floor((this.cameraPosition.x - this.camera.x) * 0.1);
  // this.camera.y += Math.floor((this.cameraPosition.y - this.camera.y) * 0.1);

  this.camera.x = Math.max(0, Math.min(this.camera.x, (Game.tileSize * this.cols) - Game.width));
  this.camera.y = Math.max(0, Math.min(this.camera.y, (Game.tileSize * this.rows) - Game.height));

};


