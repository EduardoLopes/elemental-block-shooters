Game.init = function() {
  Game.c1 = document.getElementById('c1'),
  Game.c1ctx = Game.c1.getContext('2d');
  Game.c1.width = Game.width;
  Game.c1.height = Game.height;
  Game.sprites = document.getElementById('s');

  Game.currentState = 'play';

  Game.currentMap = new Game.Map();

  Game.loop();
};

Game.state = [];

Game.state['play'] = function() {

  Game.currentMap.draw();
  Game.currentMap.update();

};

Game.loop = function() {

  Game.c1.width = Game.width;

  Game.state[Game.currentState]();

  requestAnimationFrame(Game.loop);

};

window.addEventListener('load', function() {

  Game.init();

});