Game.mouse = {
  x: 0,
  y: 0,
  angle: 0,
  down: false
};

document.addEventListener('mousemove', function(e) {
  var rect = Game.c1.getBoundingClientRect();

  Game.mouse.x = e.clientX - rect.left;
  Game.mouse.y = e.clientY - rect.top;

});

document.addEventListener('mousedown', function(e) {

  Game.mouse.down = true;

});

document.addEventListener('mouseup', function(e) {

  Game.mouse.down = false;

});