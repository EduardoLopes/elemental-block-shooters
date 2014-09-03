var Game = {
  width: 32 * 20,
  height: 32 * 12,
  tileSize: 32,
  now: 0,
  last: 0,
  delta: 0,
  solidTiles: [0,1,2,3,5,6,7,10,11,12,13,15,16,17,20,21,22,23,25,26,27,30,31,32,33]
};

function random( min, max ) {
  return Math.round(min + ( Math.random() * ( max - min ) ));
}

function randomChoice(array){
  return array[ random( 0, array.length - 1 ) ];
}