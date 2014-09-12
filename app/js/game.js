function rect(x,y,w,h,color){
  Game.spriteCacheCtx.fillStyle = color;
  Game.spriteCacheCtx.fillRect(x,y,w,h);
}

function generateTerrainSprite(y, color1, color2, color3, color4, color5){

  rect(Game.tileSize * 3, Game.tileSize * y, Game.tileSize, (Game.tileSize), color1);
  rect((Game.tileSize * 3) + 2, (Game.tileSize * y) + 2, Game.tileSize - 4, (Game.tileSize) / 2,color2);
  rect(Game.tileSize * 3, (Game.tileSize * y) + 20, Game.tileSize, 12, color3);

  rect(Game.tileSize * 4,  Game.tileSize * (3 + y), Game.tileSize, (Game.tileSize), color4);

  rect(Game.tileSize * 5,  Game.tileSize * (3 + y), Game.tileSize, (Game.tileSize), color4);
  rect(Game.tileSize * 5 + 20, Game.tileSize * (3 + y) + 20, 2, 2, color2);
  rect(Game.tileSize * 5 +12, Game.tileSize * (3 + y) + 8, 2, 2, color2);
  rect(Game.tileSize * 5 + 8, Game.tileSize * (3 + y) + 15, 2, 2, color2);
  rect(Game.tileSize * 5 + 14, Game.tileSize * (3 + y) + 6, 2, 2, color2);

  rect(Game.tileSize * 6,  Game.tileSize * (3 + y), Game.tileSize, (Game.tileSize), color4);
  rect(Game.tileSize * 6 + 10, Game.tileSize * (3 + y) + 5, 2, 2, color2);
  rect(Game.tileSize * 6 +16, Game.tileSize * (3 + y) + 9, 2, 2, color2);
  rect(Game.tileSize * 6 + 12, Game.tileSize * (3 + y) + 10, 2, 2, color2);
  rect(Game.tileSize * 6 + 18, Game.tileSize * (3 + y) + 9, 2, 2, color2);

  rect(Game.tileSize * 8, Game.tileSize * (4 + y), Game.tileSize, (Game.tileSize), color1);
  rect((Game.tileSize * 8) + 2, (Game.tileSize * (4 + y)) + 2, Game.tileSize - 4, (Game.tileSize) / 2,color5);
  rect(Game.tileSize * 8, (Game.tileSize * (4 + y)) + 20, Game.tileSize, 12, color3);

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

  generateTerrainSprite(0, 'hsl(91, 29%, 52%)', 'hsl(91, 37%, 68%)', 'hsl(91, 40%, 60%)', 'hsl(91, 63%, 79%)', 'hsl(91, 23%, 49%)' );
  generateTerrainSprite(6, 'hsl(205, 29%, 52%)', 'hsl(205, 37%, 68%)', 'hsl(205, 40%, 60%)', 'hsl(205, 63%, 79%)', 'hsl(205, 23%, 49%)' );
  generateTerrainSprite(12, 'hsl(40, 27%, 48%)', 'hsl(40, 37%, 68%)', 'hsl(40, 40%, 60%)', 'hsl(40, 63%, 79%)', 'hsl(40, 23%, 49%)' );
  generateTerrainSprite(18, 'hsl(0, 29%, 52%)', 'hsl(0, 37%, 68%)', 'hsl(0, 40%, 60%)', 'hsl(0, 63%, 79%)', 'hsl(0, 23%, 49%)' );

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

  generateSprite();

  Game.currentState = 'menu';
  Game.player = new Game.Player(4*32,4*32);
  Game.particlePool = new Game.Pool();
  Game.currentMap = new Game.Map('air');
  Game.mode = null;


  Game.loop();
};

Game.state = [];

Game.state['play'] = {
  update: function() {

    if(Game.currentMap.enemies === 0 && Game.mode === 'survivor'){
      Game.currentMap.generated = false;
      Game.currentState = 'map';
    }

    Game.currentMap.update();

    Game.mouse.angle = angleCalc( Game.player.x - (Game.currentMap.camera.x), Game.player.y - (Game.currentMap.camera.y), Game.mouse.x - 8, Game.mouse.y - 8);

    if(Game.mouse.down && Game.tick%4 == 0 ){

      Game.particlePool.get(Game.player.x + ((Game.player.size / 2) - 4), Game.player.y + ((Game.player.size / 2) - 4), Game.mouse.angle, 10, 8, 'bullet', true);

      Game.currentMap.cameraShake.y += random(-1, 1);
      Game.currentMap.cameraShake.x += random(-1, 1);

      Game.player.gunForce.x -= Math.cos((Math.PI * 2) + Game.mouse.angle) * 4;
      Game.player.gunForce.y -= Math.sin((Math.PI * 2) + Game.mouse.angle) * 4;

    }

    Game.player.update();

    for (i = 0; i < Game.particlePool.elements.length; i++) {

      if(!Game.particlePool.elements[i].free){

        if(!Game.particlePool.elements[i].isDead()){

          Game.particlePool.elements[i][Game.particlePool.elements[i].type]();

        } else {

          Game.particlePool.free(Game.particlePool.elements[i]);

        }

      }

    };

    Game.tick++;

  },
  draw: function() {

    Game.currentMap.draw();
    Game.player.draw();


    for (i = 0; i < Game.particlePool.elements.length; i++) {

      if(!Game.particlePool.elements[i].free){

        Game.particlePool.elements[i].draw();

      }

    };

    Game.c1ctx.fillStyle = '#181818';
    Game.c1ctx.fillText(Game.currentMap.enemies, 18, 20);

    //mouse debug
    // Game.c1ctx.fillStyle = '#181818';
    // Game.c1ctx.fillText(Game.mouse.angle, 10, 10);
    // Game.c1ctx.fillText(Game.mouse.down, 10, 20);

  }
};

Game.state['menu'] = {
  fontSize1: 20,
  color1: '#FFFAB9',
  fontSize2: 20,
  color2: '#FFFAB9',
  update: function() {

    if(Game.mouse.x < Game.width / 2){
      this.fontSize2 += (20 - this.fontSize2) * 0.3;
      this.fontSize1 += (30 - this.fontSize1) * 0.3;
      this.color2 = '#e3e3e3';
      this.color1 = '#ECE894';

      if(Game.mouse.down){
        Game.mode = 'arcade';
        Game.currentState = 'map';
      }

    }

    if(Game.mouse.x > Game.width / 2){
     this.fontSize1 += (20 -this.fontSize1) * 0.3;
     this.fontSize2 += (30 -this.fontSize2) * 0.3;
     this.color2 = '#ECE894';
     this.color1 = '#e3e3e3';

      if(Game.mouse.down){
        Game.mode = 'survivor';
        Game.currentState = 'map';
      }

    }

  },
  draw: function() {

    Game.c1ctx.fillStyle = this.color1;
    Game.c1ctx.fillRect(0, 0, Game.width / 2, Game.height);
    Game.c1ctx.font = 'normal '+this.fontSize1+'px arial';
    Game.c1ctx.textAlign = 'center';
    Game.c1ctx.fillStyle = '#181818';
    Game.c1ctx.fillText('ARCADE', (Game.width / 2) / 2, Game.height / 2);

    Game.c1ctx.fillStyle = this.color2;
    Game.c1ctx.fillRect(Game.width / 2, 0, Game.width / 2, Game.height);
    Game.c1ctx.font = 'normal '+this.fontSize2+'px arial';
    Game.c1ctx.textAlign = 'center';
    Game.c1ctx.fillStyle = '#181818';
    Game.c1ctx.fillText('SURVIVOR', (Game.width / 2) + Game.width / 4, Game.height / 2);

    Game.c1ctx.fillRect((Game.width / 2) - 1, 0, 2, Game.height);

  }
};

Game.state['map'] = {
  dots: '.',
  update: function() {
    if(Game.currentMap.generated === true && Game.mouse.down){
      Game.currentState = 'play';
    }

    if(Game.currentMap.generated === false){

      if(Game.tick % 30 === 0){
        this.dots += '.';
      }

      if(this.dots.length > 25){
        this.dots = '.';
      }

    }

    if(Game.currentMap.generated === false && Game.mode === 'arcade'){

      Game.currentMap.generate();

    }

    if(Game.currentMap.generated === false && Game.mode === 'survivor'){
      Game.currentMap.reset();
    }

    Game.tick++;
  },
  draw: function() {

    Game.c1ctx.fillStyle = '#181818';
    Game.c1ctx.font = 'normal 25px arial';
    Game.c1ctx.clearRect(0,0,Game.width, Game.height);


    if(Game.currentMap.generated === false){

      Game.c1ctx.fillText('LOADING MAP', (Game.width / 2), Game.height / 2);
      Game.c1ctx.fillText(this.dots, (Game.width / 2), (Game.height / 2) + 8);
    }

    if(Game.currentMap.generated === true){
      Game.c1ctx.fillText('CLICK TO START!', (Game.width / 2), Game.height / 2);
    }

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