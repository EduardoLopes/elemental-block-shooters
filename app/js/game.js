Game.init = function() {
  Game.c1 = document.getElementById('c1'),
  Game.c1ctx = Game.c1.getContext('2d');
  Game.c1.width = Game.width;
  Game.c1.height = Game.height;
  Game.sprites = document.getElementById('s');

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