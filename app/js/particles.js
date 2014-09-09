var minX = minY = maxX = maxY = 0, lastOverlapping, node;

/**
* @constructor
*/
function Particles(x,y,angle, size, i, type, camera) {
  this.x = this.y = this.size = this.angle = 0;

  this.next = {
    x: this.x,
    y: this.y
  };
  this.speed = 8;
  this.init(x, y, angle, size);
  this.overlaping = [];
  this.dead = false;
  this.free = true;
  this.ID = i;
  this.type = type;
  this.camera = camera || true;

};

Particles.prototype.init = function(x,y,angle, size, type, camera) {

  this.x = x;
  this.y = y;
  this.next.x = this.x;
  this.next.y = this.y;
  this.size = size || 8;
  this.angle = angle;
  this.free = false;
  this.type = type;
  this.camera = camera;

};

Particles.prototype.checkCollision = function() {

     // while (this.overlaping.length > 0) {
    //   this.overlaping.pop();
    // }

    minX = (this.next.x / Game.tileSize) >> 0;
    maxX = (this.next.x + this.size) / Game.tileSize >> 0;
    minY = (this.next.y / Game.tileSize) >> 0;
    maxY = (this.next.y + this.size) / Game.tileSize >> 0;

    // this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.next.y) / Game.tileSize) + Math.floor((this.next.x) / Game.tileSize)]);
    // this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.next.y + this.size) / Game.tileSize) + Math.floor((this.next.x + this.size) / Game.tileSize)]);
    // this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.next.y + this.size) / Game.tileSize) + Math.floor((this.next.x) / Game.tileSize)]);
    // this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.next.y) / Game.tileSize) + Math.floor((this.next.x + this.size) / Game.tileSize)]);

    for (h = minY; h <= maxY && h >= 0; h++) {

      for (w = minX; w <= maxX && w >= 0; w++) {

        node = Game.currentMap.map[Game.currentMap.cols * h + w];

        if(lastOverlapping !== node.i){

          if(this.intercects(node)){

            if(node.type === 'enemy'){

              node[node.type]();
            }

            this.dead = true;
          }

          lastOverlapping = node.i;
        }

      }
    }

    // for (var i = 0; i < this.overlaping.length; i++) {

    //   if(this.intercects(this.overlaping[i])){
    //     this.dead = true;
    //   }

    // }

};

Particles.prototype['bullet'] = function() {

  if(this.dead) return false;

    this.next.x += Math.cos((Math.PI * 2) + this.angle) * this.speed;
    this.next.y += Math.sin((Math.PI * 2) + this.angle) * this.speed;

    this.checkCollision();

    this.x = this.next.x;
    this.y = this.next.y;

};

Particles.prototype['orb'] = function() {

  if(this.dead) return false;

    this.x += (16 - this.x) * 0.1;
    this.y += (16 - this.y) * 0.1;

    if(this.x < 18 && this.y < 18){
      this.dead = true;
    }



};

Particles.prototype.intercects = function(obj){
  if(obj && obj.solid){

    if((obj.x * Game.tileSize) < this.next.x + this.size && (obj.y * Game.tileSize) < this.next.y + this.size &&
       (obj.x * Game.tileSize) + Game.tileSize > this.next.x && (obj.y * Game.tileSize) + Game.tileSize > this.next.y ){

      return true;
    }
  }
  return false;
};

// Particles.prototype.addOverlaping = function(node) {

//   if(typeof node !== 'undefined' && this.overlaping.indexOf(node) === -1){
//     this.overlaping.push(node);
//   }

// };

Particles.prototype.draw = function() {

  if(this.dead) return false;

  if(this.camera){
    Game.c1ctx.fillRect((this.x - Game.currentMap.camera.x), (this.y - Game.currentMap.camera.y), this.size, this.size);
  } else {
    Game.c1ctx.fillRect((this.x), (this.y), this.size, this.size);
  }

};

Particles.prototype.isDead = function() {
  return this.dead;
};

Game.Particles = Particles;
