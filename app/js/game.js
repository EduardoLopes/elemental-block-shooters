function generateSprite (){

  Game.spriteCache = document.createElement('canvas');
  Game.spriteCacheCtx = Game.spriteCache.getContext('2d');

  Game.spriteCacheCtx.fillStyle = '#7ea862';
  Game.spriteCacheCtx.fillRect(Game.tileSize * 3,0, Game.tileSize, (Game.tileSize));
  Game.spriteCacheCtx.fillStyle = '#c8eba7';
  Game.spriteCacheCtx.fillRect((Game.tileSize * 3) + 2, 2, Game.tileSize - 4, (Game.tileSize) - 8);
  Game.spriteCacheCtx.fillStyle = '#90c170';
  Game.spriteCacheCtx.fillRect(Game.tileSize * 3, Game.tileSize - 4, Game.tileSize, 4);

  Game.spriteCacheCtx.fillStyle = '#7ea862';
  Game.spriteCacheCtx.fillRect(0,0, Game.tileSize * 3, Game.tileSize * 3);
  Game.spriteCacheCtx.fillStyle = '#c8eba7';
  Game.spriteCacheCtx.fillRect(2,2, (Game.tileSize * 3) - 4, (Game.tileSize * 3) - 8);
  Game.spriteCacheCtx.fillStyle = '#90c170';
  Game.spriteCacheCtx.fillRect(0, (Game.tileSize * 3) - 4, (Game.tileSize * 3), 4);

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
  Game.player = new Game.Player();

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