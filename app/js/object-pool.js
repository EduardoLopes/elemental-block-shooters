/**
* @constructor
*/
function Pool(){

  this.elements = [];
  this.freeElements = new Game.LinkedList();

}

Pool.prototype.grow = function() {

  var oldLength = this.elements.length,
      newLength = oldLength + 2;

  this.elements.length = newLength;

  for(i = oldLength; i < newLength; i++){
    this.elements[i] = new Particles(0, 0, 0, 0, i);
    this.freeElements.push( i );
  }

};

Pool.prototype.get = function(x,y,angle, size) {

  if(this.freeElements.length === 0){
    this.grow();
  }

  this.elements[ this.freeElements.head.data ].free = true;
  this.elements[ this.freeElements.head.data ].init(x,y,angle, size);

  this.freeElements.shift();

};

Pool.prototype.free = function(obj) {

  if(obj.free){
    obj.free = false;
    obj.dead = false;
    this.freeElements.push( obj.ID );
  }

};

Game.Pool = Pool;