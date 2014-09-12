Game.weapons = {};

Game.weapons['machineGun'] = {
  size: 10,
  speed: 8,
  force: 7,
  smoothForce: false,
  timeBetween: 4,
  angleVariationMin: -2,
  angleVariationMax: 2,
  quantity: 1,
  speedVariation: [8],
  damage: 1
}

Game.weapons['shotGun'] = {
  size: 10,
  speed: 8,
  force: 12,
  smoothForce: false,
  timeBetween: 20,
  angleVariationMin: -20,
  angleVariationMax: 20,
  quantity: 3,
  speedVariation: [8, 10],
  damage: 1
};