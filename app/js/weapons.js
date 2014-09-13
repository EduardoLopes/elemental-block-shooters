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
  speedVariation: [10],
  damage: 1
}

Game.weapons['pistol'] = {
  size: 10,
  speed: 8,
  force: 2,
  smoothForce: true,
  timeBetween: 16,
  angleVariationMin: 0,
  angleVariationMax: 0,
  quantity: 1,
  speedVariation: [8],
  damage: 1
}

Game.weapons['revolver'] = {
  size: 10,
  speed: 26,
  force: 8,
  smoothForce: true,
  timeBetween: 26,
  angleVariationMin: 0,
  angleVariationMax: 0,
  quantity: 1,
  speedVariation: [8],
  damage: 5
}

Game.weapons['rockedLauncher'] = {
  size: 16,
  speed: 10,
  force: 16,
  smoothForce: true,
  timeBetween: 32,
  angleVariationMin: 0,
  angleVariationMax: 0,
  quantity: 1,
  speedVariation: [12],
  damage: 10
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