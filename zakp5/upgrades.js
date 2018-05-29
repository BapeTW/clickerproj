//Upgrade function that basically gives the user two parts per click instead of one. can only be purchased once for 50 parts.
function clickXUpgrade() {
	if (isUpgradeGuiOpen === true && mouseIsPressed && mouseX > 70 && mouseX < 150 && mouseY > 150 && mouseY < 200 && partsTotal > 149 && isClickXUpgradePurchased === false) {
		//Reset total parts
		partsTotal = partsTotal - 150;
		//Set the upgraded variable
		addParts = addParts + 1;
		//Set the confirmation variable to true so the upgrade cannot be purchased again
		isClickXUpgradePurchased = true;
		//If the user does not have enough parts run this and alert them:
	} else if (isUpgradeGuiOpen === true && mouseIsPressed && mouseX > 70 && mouseX < 150 && mouseY > 150 && mouseY < 200 && partsTotal < 149 && isClickXUpgradePurchased === false) {
		alert("Insufficient Parts");
	}
}

//Add an auto clicker that adds one part to the users total parts every second. all the stuff inside the function is the same as the last
function autoClickUpgrade() {
	if (isUpgradeGuiOpen === true && mouseIsPressed && mouseX > 70 && mouseX < 150 && mouseY > 210 && mouseY < 260 && partsTotal > 49 && isAutoClicker1UpgradePurchased === false) {
		isAutoClicker1UpgradePurchased = true;
		partsTotal = partsTotal - 50;
	} else if (isUpgradeGuiOpen === true && mouseIsPressed && mouseX > 70 && mouseX < 150 && mouseY > 210 && mouseY < 260 && partsTotal < 50 && isAutoClicker1UpgradePurchased === false) {
		alert("Insufficient Parts");
	}
}

//a global variable runs this code once every second. this adds one point to parts total per second if the upgrade is purchased
function autoClickUpgradeLogic() {
	if (isAutoClicker1UpgradePurchased === true) {
		partsTotal = partsTotal + 1;
	}
}

//second click upgrade function
function clickXUpgrade2() {
	if (isUpgradeGuiOpen === true && mouseIsPressed && mouseX > 70 && mouseX < 150 && mouseY > 270 && mouseY < 320 && partsTotal > 1299 && isClickXUpgrade2Purchased === false) {
		//Reset total parts
		partsTotal = partsTotal - 1300;
		//Set the upgraded variable
		addParts = addParts + 2;
		//Set the confirmation variable to true so the upgrade cannot be purchased again
		isClickXUpgrade2Purchased = true;
		//If the user does not have enough parts run this and alert them:
	} else if (isUpgradeGuiOpen === true && mouseIsPressed && mouseX > 70 && mouseX < 150 && mouseY > 270 && mouseY < 320 && partsTotal < 1300 && isClickXUpgrade2Purchased === false) {
		alert("Insufficient Parts");
	}
}