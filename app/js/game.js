function rect(x,y,w,h,color){
  Game.spriteCacheCtx.fillStyle = color;
  Game.spriteCacheCtx.fillRect(x,y,w,h);
}

function generateSprite (){

  Game.spriteCache = document.createElement('canvas');
  Game.spriteCacheCtx = Game.spriteCache.getContext('2d');

  Game.spriteCache.width = 320;
  Game.spriteCache.height = 384;

  rect(Game.tileSize * 3,0, Game.tileSize, (Game.tileSize),'#7ea862');
  rect((Game.tileSize * 3) + 2, 2, Game.tileSize - 4, (Game.tileSize) / 2,'#aecc91');
  rect(Game.tileSize * 3, Game.tileSize - 12, Game.tileSize, 12,'#90c170');

  rect(Game.tileSize * 4,  Game.tileSize * 3, Game.tileSize, (Game.tileSize), '#c8eba7');

  rect(0, 0, Game.tileSize * 3, Game.tileSize * 3, '#7ea862');
  rect(2,2, (Game.tileSize * 3) - 4, (Game.tileSize * 3) - 16, '#aecc91');
  rect(0, (Game.tileSize * 3) - 12, (Game.tileSize * 3), 12, '#90c170');

  rect(0, (Game.tileSize * 3) , Game.tileSize * 3, Game.tileSize, '#7ea862');
  rect(2, (Game.tileSize * 3) + 2, (Game.tileSize * 3) - 4, Game.tileSize / 2, '#aecc91');
  rect(0, (Game.tileSize * 4) - 12, (Game.tileSize * 3), 12 , '#90c170');

  rect(Game.tileSize * 3, (Game.tileSize * 1), Game.tileSize, Game.tileSize * 3, '#7ea862');
  rect((Game.tileSize * 3) + 2,(Game.tileSize * 1) + 2, Game.tileSize - 4, (Game.tileSize * 3) - 16, '#aecc91');
  rect(Game.tileSize * 3, (Game.tileSize * 4) - 12, Game.tileSize, 12, '#90c170');

  rect(Game.tileSize * 4, 0, Game.tileSize * 3, Game.tileSize * 3, '#7ea862');
  rect((Game.tileSize * 4) + 2, 2, (Game.tileSize * 3) - 4, (Game.tileSize * 3) - 16, '#aecc91');
  rect(Game.tileSize * 4, (Game.tileSize * 3) - 12, (Game.tileSize * 3), 12, '#90c170');
  rect((Game.tileSize * 5) - 2, (Game.tileSize * 1) - 14, 4, 16, '#7ea862');
  rect((Game.tileSize * 5) - 2, (Game.tileSize * 2) - 14, 4, 16, '#7ea862');
  rect((Game.tileSize * 6) - 2, (Game.tileSize * 1) - 14, 4, 16, '#7ea862');
  rect((Game.tileSize * 6) - 2, (Game.tileSize * 2) - 14, 4, 16, '#7ea862');

  rect((Game.tileSize * 7), 0, (Game.tileSize * 3), (Game.tileSize * 3), '#aecc91');
  rect((Game.tileSize * 8) - 2, (Game.tileSize * 1) - 14, 4, 16, '#7ea862');
  rect((Game.tileSize * 8) - 2, (Game.tileSize * 2) - 2, 4, 4, '#7ea862');
  rect((Game.tileSize * 9) - 2, (Game.tileSize * 1) - 14, 4, 16, '#7ea862');
  rect((Game.tileSize * 9) - 2, (Game.tileSize * 2) - 2, 4, 4, '#7ea862');

  rect((Game.tileSize * 7), (Game.tileSize * 3), (Game.tileSize * 3),Game.tileSize, '#aecc91');
  rect((Game.tileSize * 8) - 2, (Game.tileSize * 4) - 14, 4, 14, '#7ea862');
  rect((Game.tileSize * 8) - 2, (Game.tileSize * 3), 4, 2, '#7ea862');
  rect((Game.tileSize * 9) - 2, (Game.tileSize * 4) - 14, 4, 14, '#7ea862');
  rect((Game.tileSize * 9) - 2, (Game.tileSize * 3), 4, 2, '#7ea862');

  rect(0, (Game.tileSize * 4), (Game.tileSize * 6),Game.tileSize * 2, '#aecc91');

  rect(Game.tileSize - 2, (Game.tileSize * 5) - 14, 4, 16, '#7ea862');
  rect(0, (Game.tileSize * 4), Game.tileSize, 2, '#7ea862');
  rect((Game.tileSize * 2) - 2, (Game.tileSize * 4), 2, Game.tileSize, '#7ea862');
  rect(Game.tileSize, (Game.tileSize * 6) - 14, Game.tileSize, 2, '#7ea862');
  rect(Game.tileSize, (Game.tileSize * 6) - 12, Game.tileSize, 12, '#90c170');
  rect(0, (Game.tileSize * 5), 2, Game.tileSize, '#7ea862');


  rect((Game.tileSize * 3) - 2, (Game.tileSize * 5) - 14, 4, 16, '#7ea862');
  rect((Game.tileSize * 3), (Game.tileSize * 4), Game.tileSize, 2, '#7ea862');
  rect((Game.tileSize * 2), (Game.tileSize * 4), 2, Game.tileSize, '#7ea862');
  rect(Game.tileSize * 2, (Game.tileSize * 6) - 14, Game.tileSize, 2, '#7ea862');
  rect(Game.tileSize * 2, (Game.tileSize * 6) - 12, Game.tileSize, 12, '#90c170');
  rect((Game.tileSize * 4) - 2, (Game.tileSize * 5), 2, Game.tileSize, '#7ea862');

  rect((Game.tileSize * 5) - 2, (Game.tileSize * 5) - 14, 4, 16, '#7ea862');
  rect((Game.tileSize * 4), (Game.tileSize * 5) - 14, 2, 16, '#7ea862');
  rect((Game.tileSize * 6)-2, (Game.tileSize * 5)- 14, 2, 16, '#7ea862');
  rect((Game.tileSize * 5)-2, (Game.tileSize * 4), 4, 2, '#7ea862');
  rect((Game.tileSize * 5)-2, (Game.tileSize * 6) - 14, 4, 14, '#7ea862');

  rect(Game.tileSize * 6, (Game.tileSize * 4), (Game.tileSize * 2),Game.tileSize, '#aecc91');
  rect((Game.tileSize * 6), (Game.tileSize * 5) - 14, 2, 14, '#7ea862');
  rect((Game.tileSize * 8) - 2, (Game.tileSize * 5) - 14, 2, 14, '#7ea862');
  rect((Game.tileSize * 7)-2, (Game.tileSize * 4), 4, 2, '#7ea862');



  // Game.spriteCacheCtx.fillStyle = '#c8eba7';
  // Game.spriteCacheCtx.fillRect(0, 0, Game.tileSize * 4, Game.tileSize * 2);

  console.log(Game.spriteCache.toDataURL('image/png'));

};

Game.init = function() {
  Game.c1 = document.getElementById('c1'),
  Game.c1ctx = Game.c1.getContext('2d');
  Game.c1.width = Game.width;
  Game.c1.height = Game.height;
  Game.sprites = document.getElementById('s');

  //Game.spriteCacheCtx.drawImage(Game.sprites, 0, 0);

  generateSprite();

  Game.currentState = 'play';

  Game.currentMap = new Game.Map();
  Game.player = new Game.Player(62*32,1*32);

  Game.loop();
};

Game.state = [];

Game.state['play'] = {
  update: function() {

    Game.player.update();
    Game.currentMap.update();

  },
  draw: function() {

    Game.currentMap.draw();
    Game.player.draw();

  }
}


Game.loop = function(timestamp) {
  Game.delta = timestamp - Game.last;

  Game.state[Game.currentState].update();

  //if (Game.delta > 1000 / 30){

    Game.state[Game.currentState].draw();

    Game.last = timestamp - (Game.delta % 1000 / 30);

  //}

  requestAnimationFrame(Game.loop);

};

window.addEventListener('load', function() {

  Game.init();

});