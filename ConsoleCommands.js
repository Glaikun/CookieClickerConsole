var tid = setInterval(clickForProducts, 250);
function clickForProducts() {
Game.Earn(1000000000000); 
  for (let i = 0; i < 20; i++) {
    $('#product' + i).click();
  }
 
}

var tid = setInterval(clickForUpgrades, 250);
function clickForUpgrades() {
 for (let i = 0; i < Game.UpgradesInStore.length ; i++) {
    $('#upgrade' + i).click();
  }
}
