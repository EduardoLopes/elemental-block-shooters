function rect(x,y,w,h,color){
  Game.spriteCacheCtx.fillStyle = color;
  Game.spriteCacheCtx.fillRect(x,y,w,h);
}

function generateTerrainSprite(y, color1, color2, color3, color4){

  rect(Game.tileSize * 3, Game.tileSize * y, Game.tileSize, (Game.tileSize), color1);
  rect((Game.tileSize * 3) + 2, (Game.tileSize * y) + 2, Game.tileSize - 4, (Game.tileSize) / 2,color2);
  rect(Game.tileSize * 3, (Game.tileSize * y) + 20, Game.tileSize, 12, color3);

  rect(Game.tileSize * 4,  Game.tileSize * (3 + y), Game.tileSize, (Game.tileSize), color4);

  rect(0, Game.tileSize * y, Game.tileSize * 3, Game.tileSize * 3, color1);
  rect(2,(Game.tileSize * y) + 2, (Game.tileSize * 3) - 4, (Game.tileSize * 3) - 16, color2);
  rect(0, (Game.tileSize * (3 + y)) - 12, (Game.tileSize * 3), 12, color3);

  rect(0, (Game.tileSize * (3 + y)) , Game.tileSize * 3, Game.tileSize, color1);
  rect(2, (Game.tileSize * (3 + y)) + 2, (Game.tileSize * 3) - 4, Game.tileSize / 2, color2);
  rect(0, (Game.tileSize * (4 + y)) - 12, (Game.tileSize * 3), 12 , color3);

  rect(Game.tileSize * 3, (Game.tileSize * (1 + y)), Game.tileSize, Game.tileSize * 3, color1);
  rect((Game.tileSize * 3) + 2,(Game.tileSize * (1 + y)) + 2, Game.tileSize - 4, (Game.tileSize * 3) - 16, color2);
  rect(Game.tileSize * 3, (Game.tileSize * (4 + y)) - 12, Game.tileSize, 12, color3);

  rect(Game.tileSize * 4, Game.tileSize * y, Game.tileSize * 3, Game.tileSize * 3, color1);
  rect((Game.tileSize * 4) + 2, (Game.tileSize * y) + 2, (Game.tileSize * 3) - 4, (Game.tileSize * 3) - 16, color2);
  rect(Game.tileSize * 4, (Game.tileSize * (3 + y)) - 12, (Game.tileSize * 3), 12, color3);
  rect((Game.tileSize * 5) - 2, (Game.tileSize * (1 + y)) - 14, 4, 16, color1);
  rect((Game.tileSize * 5) - 2, (Game.tileSize * (2 + y)) - 14, 4, 16, color1);
  rect((Game.tileSize * 6) - 2, (Game.tileSize * (1 + y)) - 14, 4, 16, color1);
  rect((Game.tileSize * 6) - 2, (Game.tileSize * (2 + y)) - 14, 4, 16, color1);

  rect((Game.tileSize * 7), Game.tileSize * y, (Game.tileSize * 3), (Game.tileSize * 3), color2);
  rect((Game.tileSize * 8) - 2, (Game.tileSize * (1 + y)) - 14, 4, 16, color1);
  rect((Game.tileSize * 8) - 2, (Game.tileSize * (2 + y)) - 2, 4, 4, color1);
  rect((Game.tileSize * 9) - 2, (Game.tileSize * (1 + y)) - 14, 4, 16, color1);
  rect((Game.tileSize * 9) - 2, (Game.tileSize * (2 + y)) - 2, 4, 4, color1);

  rect((Game.tileSize * 7), (Game.tileSize * (3 + y)), (Game.tileSize * 3),Game.tileSize, color2);
  rect((Game.tileSize * 8) - 2, (Game.tileSize * (4 + y)) - 14, 4, 14, color1);
  rect((Game.tileSize * 8) - 2, (Game.tileSize * (3 + y)), 4, 2, color1);
  rect((Game.tileSize * 9) - 2, (Game.tileSize * (4 + y)) - 14, 4, 14, color1);
  rect((Game.tileSize * 9) - 2, (Game.tileSize * (3 + y)), 4, 2, color1);

  rect(0, (Game.tileSize * (4 + y)), (Game.tileSize * 6),Game.tileSize * 2, color2);

  rect(Game.tileSize - 2, (Game.tileSize * (5 + y)) - 14, 4, 16, color1);
  rect(0, (Game.tileSize * (4 + y)), Game.tileSize, 2, color1);
  rect((Game.tileSize * 2) - 2, (Game.tileSize * (4 + y)), 2, Game.tileSize, color1);
  rect(Game.tileSize, (Game.tileSize * (6 + y)) - 14, Game.tileSize, 2, color1);
  rect(Game.tileSize, (Game.tileSize * (6 + y)) - 12, Game.tileSize, 12, color3);
  rect(0, (Game.tileSize * (5 + y)), 2, Game.tileSize, color1);

  rect((Game.tileSize * 3) - 2, (Game.tileSize * (5 + y)) - 14, 4, 16, color1);
  rect((Game.tileSize * 3), (Game.tileSize * (4 + y)), Game.tileSize, 2, color1);
  rect((Game.tileSize * 2), (Game.tileSize * (4 + y)), 2, Game.tileSize, color1);
  rect(Game.tileSize * 2, (Game.tileSize * (6 + y)) - 14, Game.tileSize, 2, color1);
  rect(Game.tileSize * 2, (Game.tileSize * (6 + y)) - 12, Game.tileSize, 12, color3);
  rect((Game.tileSize * 4) - 2, (Game.tileSize * (5 + y)), 2, Game.tileSize, color1);

  rect((Game.tileSize * 5) - 2, (Game.tileSize * (5 + y)) - 14, 4, 16, color1);
  rect((Game.tileSize * 4), (Game.tileSize * (5 + y)) - 14, 2, 16, color1);
  rect((Game.tileSize * 6)-2, (Game.tileSize * (5 + y))- 14, 2, 16, color1);
  rect((Game.tileSize * 5)-2, (Game.tileSize * (4 + y)), 4, 2, color1);
  rect((Game.tileSize * 5)-2, (Game.tileSize * (6 + y)) - 14, 4, 14, color1);

  rect(Game.tileSize * 6, (Game.tileSize * (4 + y)), (Game.tileSize * 2),Game.tileSize, color2);
  rect((Game.tileSize * 6), (Game.tileSize * (5 + y)) - 14, 2, 14, color1);
  rect((Game.tileSize * 8) - 2, (Game.tileSize * (5 + y)) - 14, 2, 14, color1);
  rect((Game.tileSize * 7)-2, (Game.tileSize * (4 + y)), 4, 2, color1);

};

function generateSprite(){

  Game.spriteCache = document.createElement('canvas');
  Game.spriteCacheCtx = Game.spriteCache.getContext('2d');

  Game.spriteCache.width = 320;
  Game.spriteCache.height = 768;

  generateTerrainSprite(0, 'hsl(91, 29%, 52%)', 'hsl(91, 37%, 68%)', 'hsl(91, 40%, 60%)', 'hsl(91, 63%, 79%)' );
  generateTerrainSprite(6, 'hsl(205, 29%, 52%)', 'hsl(205, 37%, 68%)', 'hsl(205, 40%, 60%)', 'hsl(205, 63%, 79%)' );
  generateTerrainSprite(12, 'hsl(40, 27%, 48%)', 'hsl(40, 37%, 68%)', 'hsl(40, 40%, 60%)', 'hsl(40, 63%, 79%)' );
  generateTerrainSprite(18, 'hsl(0, 29%, 52%)', 'hsl(0, 37%, 68%)', 'hsl(0, 40%, 60%)', 'hsl(0, 63%, 79%)' );

  //debug
  //console.log(Game.spriteCache.toDataURL('image/png'));

}

Game.init = function() {
  Game.c1.width = Game.width;
  Game.c1.height = Game.height;
  Game.sprites = document.getElementById('s');
  Game.particles = [];
  Game.particlesMax = 50;
  Game.particlesIndex = 0;
  Game.tick = 10;

  //Game.spriteCacheCtx.drawImage(Game.sprites, 0, 0);

  generateSprite();

  Game.currentState = 'play';

  Game.currentMap = new Game.Map('air');
  Game.player = new Game.Player(4*32,4*32);

  Game.loop();
};

Game.state = [];

Game.state['play'] = {
  update: function() {

    Game.player.update();
    Game.currentMap.update();

    Game.mouse.angle = angleCalc( Game.player.x - Game.currentMap.camera.x, Game.player.y - Game.currentMap.camera.y, Game.mouse.x - 8, Game.mouse.y - 8);

    if(Game.mouse.down && Game.tick%10 == 0 ){

       Game.particles[(Game.particlesIndex++)%Game.particlesMax] = new Game.Particles(Game.player.x + ((Game.player.size / 2) - 4), Game.player.y + ((Game.player.size / 2) - 4), Game.mouse.angle);

    }

    for (i = 0; i < Game.particles.length; i++) {
      Game.particles[i].update();
    };

    Game.tick++;

  },
  draw: function() {

    Game.currentMap.draw();
    Game.player.draw();

    for (i = 0; i < Game.particles.length; i++) {
      Game.particles[i].draw();
    };

    //mouse debug
    // Game.c1ctx.fillStyle = '#181818';
    // Game.c1ctx.fillText(Game.mouse.angle, 10, 10);
    // Game.c1ctx.fillText(Game.mouse.down, 10, 20);

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