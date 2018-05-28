// Main Menu (Game Start/Exit To Main Menu)
function drawMainMenu() {
	// Background
	image(mainbg.img, 0, 0);

	// Top Header Text + Box
	noStroke();
	fill(10, 15, 100);
	rect(75, 45, 450, 110, 30);
	fill(20, 30, 112);
	rect(75, 25, 450, 110, 15);
	fill(90);
	textAlign(CENTER);
	textFont("Gabriola");
	textSize(75);
	text("PC Part Clicker", 300, 98);
	fill(220);
	text("PC Part Clicker", 302, 100);

	// Main Menu Play Button
	fill(playBox1Col);
	rect(189, 340, 220, 120, 35);
	fill(playBox2Col);
	rect(200, 350, 200, 100, 35);
	fill(255);
	text("PLAY", 300, 420);

	// Play button logic
	if (mouseX > 190 && mouseY > 340 && mouseX < 409 && mouseY < 460 && mouseIsPressed) {
		playBox2Col = 150;
	} else if (playBox2Col === 150) {
		isMainMenuOpen = false;
		gameState = "gameStart";
	}
}


// USER INTERFACE (main game)
function drawUI() {
	//Main Background Draw
	noStroke();
	image(uibg.img, 0, 0)

	//Header Background
	fill(30);
	rect(0, 0, width, 100);

	//Header PartsCounter Background
	fill(80);
	rect(10, 10, 350, 80);

	//"parts:" text
	textAlign(LEFT);
	textFont("Arial");
	fill(255);
	textSize(30);
	text("Parts:", 15, 38);

	//partsTotal background
	fill(10, 15, 100);
	rect(13, 50, 344, 36);

	//partsTotal counter
	fill(255);
	text(partsTotal, 15, 78);

	//upgrades Bg1 + Bg2
	fill(80);
	rect(370, 10, 222, 80);
	fill(upgradeBoxCol)
	rect(375, 15, 212, 70);

	//upgrades text
	textAlign(CENTER);
	fill(255);
	text("UPGRADES", 481, 60);

	//reset textAlign
	textAlign(LEFT);

	//Draw Ellipse Transparent
	fill(0, 0, 0, 99);
	ellipse(300, 450, 380, 380);
	
	// Draw Image To Click
	tint(255,255);
	image(imgToClick, 150, 300);
	
	//Upgrade button logic
	if (mouseX > 370 && mouseY > 10 && mouseX < 592 && mouseY < 90 && mouseIsPressed && isUpgradeGuiOpen === false) {
		upgradeBoxCol = 150;
		isUpgradeGuiOpen = true;
	} else if (upgradeBoxCol === 150 && isUpgradeGuiOpen === true) {
		openUpgradeUI();
	}
}

//draw upgrade user interface
function openUpgradeUI() {
	// BG 1 + 2
	fill(20, 30, 112);
	rect(50, 90, 500, 700);
	fill(10, 15, 100);
	rect(60, 100, 480, 680);
	
	//Exit Button
	textAlign(CENTER);
	fill("red");
	rect(500, 100, 40, 40);
	fill("255");
	text("x", 520, 125);
	
	//Upgrades header text
	rect(60, 100, 440, 40);
	fill(0);
	text("Upgrade Menu", 265, 130);
	
	//Exit Button Logic
	if (mouseX > 500 && mouseX < 540 && mouseY > 100 && mouseY < 140 && mouseIsPressed && isUpgradeGuiOpen === true) {
		isUpgradeGuiOpen = false;
	}
}

//Logic for drawClickImage
function changeFinishedImgLogic() {
	finishedChangeImg = false;
}

// More logic for changing the image when you click (bugged + incomplete)
function changeImageLogic() {
	let randnum = Math.random();
	if (randnum < 0.166 && finishedChangeImg === false) {
		if (imgToClick === mainClickImages.img1) {
			changeImageLogic();
		} else {
			imgToClick = mainClickImages.img1;
			partsTotal = addParts + partsTotal;
		}
	} else if (randnum < 0.333 && finishedChangeImg === false) {
		if (imgToClick === mainClickImages.img2) {
			changeImageLogic();
		} else {
			imgToClick = mainClickImages.img2;
			partsTotal = addParts + partsTotal;
		}
	} else if (randnum < 0.5 && finishedChangeImg === false) {
		if (imgToClick === mainClickImages.img3) {
			changeImageLogic();
		} else {
			imgToClick = mainClickImages.img3;
			partsTotal = addParts + partsTotal;
		}
	} else if (randnum < 0.666 && finishedChangeImg === false) {
		if (imgToClick === mainClickImages.img4) {
			changeImageLogic();
		} else {
			imgToClick = mainClickImages.img4;
			partsTotal = addParts + partsTotal;
		}
	} else if (randnum < 0.833 && finishedChangeImg === false) {
		if (imgToClick === mainClickImages.img5) {
			changeImageLogic();
		} else {
			imgToClick = mainClickImages.img5;
			partsTotal = addParts + partsTotal;
		}
	} else if (randnum < 1 && finishedChangeImg === false) {
		if (imgToClick === mainClickImages.img6) {
			changeImageLogic();
		} else {
			imgToClick = mainClickImages.img6;
			partsTotal = addParts + partsTotal;
		}
	}
	finishedChangeImg = true;
}
