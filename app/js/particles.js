/**
* @constructor
*/
function Particles(x,y,angle, size) {

  this.x = x;
  this.y = y;
  this.next = {
    x: this.x,
    y: this.y
  };
  this.size = size || 8;
  this.angle = angle;
  this.overlaping = [];
  this.speed = 10;
  this.dead = false;

};

Particles.prototype.update = function() {

  if(this.dead) return false;

    this.overlaping.length = 0;

    this.next.x += (Math.cos((Math.PI * 2) + this.angle) * this.speed);
    this.next.y += (Math.sin((Math.PI * 2) + this.angle) * this.speed);

    this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.next.y) / Game.tileSize) + Math.floor((this.next.x) / Game.tileSize)]);
    this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.next.y + this.size) / Game.tileSize) + Math.floor((this.next.x + this.size) / Game.tileSize)]);
    this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.next.y + this.size) / Game.tileSize) + Math.floor((this.next.x) / Game.tileSize)]);
    this.addOverlaping(Game.currentMap.map[Game.currentMap.cols * Math.floor((this.next.y) / Game.tileSize) + Math.floor((this.next.x + this.size) / Game.tileSize)]);


    for (var i = 0; i < this.overlaping.length; i++) {

      if(this.intercects(this.overlaping[i])){
        this.dead = true;
      }

    }

    this.x = this.next.x;
    this.y = this.next.y;

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

Particles.prototype.addOverlaping = function(node) {

  if(typeof node !== 'undefined' && this.overlaping.indexOf(node) === -1){
    this.overlaping.push(node);
  }

};

Particles.prototype.draw = function() {

  if(this.dead) return false;

  Game.c1ctx.fillRect((this.x - Game.currentMap.camera.x), (this.y - Game.currentMap.camera.y), this.size, this.size);

};

Game.Particles = Particles;
