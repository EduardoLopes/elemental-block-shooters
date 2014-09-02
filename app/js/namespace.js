var Game = {
  width: 32 * 20,
  height: 32 * 12,
  tileSize: 32,
  now: 0,
  last: 0,
  delta: 0,
  solidTiles: [0,1,2,3,10,12,20,21,22]
};

function random( min, max ) {
  return Math.round(min + ( Math.random() * ( max - min ) ));
}

function randomChoice(array){
  return array[ random( 0, array.length - 1 ) ];
}