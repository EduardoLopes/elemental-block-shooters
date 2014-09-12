Game.key = {
  up: false,
  right: false,
  down: false,
  left: false,
  keydown: false,
  keydownPressed: false,
  esc: false
};

document.addEventListener('keydown', function(e) {

  //38 up
  if(e.keyCode === 38 || e.keyCode === 87){
    Game.key.up = true;
  }

  //39 right
  if(e.keyCode === 39 || e.keyCode === 68){
    Game.key.right = true;
  }

  //40 bottom
  if(e.keyCode === 40 || e.keyCode === 83){
    Game.key.down = true;
  }

  //37 left
  if(e.keyCode === 37 || e.keyCode === 65){
    Game.key.left = true;
  }

  if(e.keyCode === 27){
    Game.key.esc = true;
  }

  Game.keydown = true;

});

document.addEventListener('keyup', function(e) {

   //38 up
  if(e.keyCode === 38 || e.keyCode === 87){
    Game.key.up = false;
  }

  //39 right
  if(e.keyCode === 39 || e.keyCode === 68){
    Game.key.right = false;
  }

  //40 bottom
  if(e.keyCode === 40 || e.keyCode === 83){
    Game.key.down = false;
  }

  //37 left
  if(e.keyCode === 37 || e.keyCode === 65){
    Game.key.left = false;
  }

  if(e.keyCode === 27){
    Game.key.esc = false;
  }

  Game.keydown = false;
  Game.keydownPressed = false;

});