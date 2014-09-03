var Game = {
  width: 32 * 20,
  height: 32 * 12,
  tileSize: 32,
  now: 0,
  last: 0,
  delta: 0,
  solidTiles: []
};

for (var i = 0; i < 34; i++) {
  Game.solidTiles.push(i);
};

function random( min, max ) {
  return Math.round(min + ( Math.random() * ( max - min ) ));
}

function randomChoice(array){
  return array[ random( 0, array.length - 1 ) ];
}