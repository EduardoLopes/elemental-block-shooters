var Game = (function() {

  var canvas = document.getElementById('c1'),
      ctx = canvas.getContext('2d'),
      minimap = document.createElement('canvas'),
      minimapCtx = minimap.getContext('2d');


  return {
    width: 32 * 20,
    height: 32 * 12,
    tileSize: 32,
    now: 0,
    last: 0,
    delta: 0,
    solidTiles: [],
    c1: canvas,
    c1ctx: ctx,
    minimap: minimap,
    minimapCtx: minimapCtx
  }

}());

function addSolids(index){
  for (i = 0 + index; i < 34 + index; i++) {
    Game.solidTiles.push(i);
  };

  for(i = 37 + index; i < 56 + index; i++) {
    Game.solidTiles.push(i);
  };
}

//air
addSolids(0);
//water
addSolids(60);
//earth
addSolids(120);
//fire
addSolids(180);

function angleCalc(sx, sy, tx, ty) {
  return Math.atan2(ty - sy, tx - sx);
};

function random( min, max ) {
  return Math.round(min + ( Math.random() * ( max - min ) ));
}

function randomChoice(array){
  return array[ random( 0, array.length - 1 ) ];
}

function distance(ax, ay, bx, by) {
  return Math.sqrt(Math.pow( ax - bx, 2) + Math.pow( ay - by, 2));
}

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};