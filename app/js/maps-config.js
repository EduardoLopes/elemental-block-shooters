Game.mapsConfig = [];

Game.mapsConfig['arcade'] = [];

Game.mapsConfig['arcade'][0] = {
  enemyWeapons: [],
  rowsMin: 20,
  rowsMax: 25,
  colsMin: 20,
  colsMax: 25,
  dropWeapons: []
};

Game.mapsConfig['survivor'] = [];

Game.mapsConfig['survivor'][0] = {
  enemyWeapons: ['pistol'],
  rowsMin: 20,
  rowsMax: 25,
  colsMin: 20,
  colsMax: 25,
  dropProbability: [true, false],
  dropWeapons: ['machineGun'],
  enemyHealth: 4
};

Game.mapsConfig['survivor'][1] = {
  enemyWeapons: ['pistol'],
  rowsMin: 22,
  rowsMax: 28,
  colsMin: 22,
  colsMax: 28,
  dropProbability: [true, false],
  dropWeapons: ['machineGun', 'shotGun'],
  enemyHealth: 6
};

Game.mapsConfig['survivor'][2] = {
  enemyWeapons: ['machineGun', 'shotGun'],
  rowsMin: 25,
  rowsMax: 32,
  colsMin: 25,
  colsMax: 32,
  dropProbability: [true, false, false],
  dropWeapons: ['machineGun', 'shotGun', 'revolver'],
  enemyHealth: 8
};

Game.mapsConfig['survivor'][3] = {
  enemyWeapons: ['machineGun', 'shotGun', 'revolver'],
  rowsMin: 25,
  rowsMax: 32,
  colsMin: 25,
  colsMax: 32,
  dropProbability: [true, false, false],
  dropWeapons: ['machineGun', 'shotGun', 'revolver', 'rockedLauncher'],
  enemyHealth: 10
};

Game.mapsConfig['survivor'][4] = {
  enemyWeapons: ['machineGun', 'shotGun', 'revolver', 'rockedLauncher'],
  rowsMin: 30,
  rowsMax: 35,
  colsMin: 30,
  colsMax: 34,
  dropProbability: [true, false, false],
  dropWeapons: ['machineGun', 'shotGun', 'revolver', 'rockedLauncher'],
  enemyHealth: 10
};

Game.mapsConfig['survivor'][5] = {
  enemyWeapons: ['machineGun', 'shotGun', 'revolver', 'rockedLauncher'],
  rowsMin: 40,
  rowsMax: 45,
  colsMin: 40,
  colsMax: 45,
  dropProbability: [true, false, false],
  dropWeapons: ['machineGun', 'shotGun', 'revolver', 'rockedLauncher'],
  enemyHealth: 10
};

Game.mapsConfig['survivor'][6] = {
  enemyWeapons: ['machineGun', 'shotGun', 'revolver', 'rockedLauncher'],
  rowsMin: 20,
  rowsMax: 50,
  colsMin: 20,
  colsMax: 50,
  dropProbability: [true, false, false],
  dropWeapons: ['machineGun', 'shotGun', 'revolver', 'rockedLauncher'],
  enemyHealth: 10
};