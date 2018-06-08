//Declare Global Vars
var mainbg = {};
var uibg = {};
var mainClickImages = {};
var gameState;
var playBox1Col;
var playBox2Col;
var upgradeBoxCol;
var isUpgradeGuiOpen;
var finishedChangeImg;
var imgToClick;
var isMainMenuOpen;
var partsTotal;
var addParts;
var isClickXUpgradePurchased;
var isClickXUpgrade2Purchased;
var isAutoClicker1UpgradePurchased;
var upgradePurchased;
var autoClickInterval = window.setInterval(autoClickUpgradeLogic, 1000);
var secondsTimer;
var cpsCounter = new ClicksPerSecCounter();
var numClicks;
var secondsSpent;
var cpsCountDone;
var comboCount;
var comboReset;
var doubleParts;
var prevComboCount;
var comboCounting;

function setup() {
	var cnv = createCanvas(600, 800);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	gameState = "mainMenu";
	playBox1Col = 255;
	playBox2Col = 20;
	upgradeBoxCol = 90;
	isUpgradeGuiOpen = false;
	imgToClick = mainClickImages.img1;
	finishedChangeImg = true;
	isMainMenuOpen = true;
	partsTotal = 0;
	addParts = 1;
	isClickXUpgradePurchased = false;
	isClickXUpgrade2Purchased = false;
	upgradePurchased = 105;
	isAutoClicker1UpgradePurchased = false;
	numClicks = 0;
	secondsSpent = 0;
	cpsCountDone = false;
	comboReset = false;
	doubleParts = addParts * 2;
	comboCounting = false;
}

function draw() {
	if (gameState === "mainMenu") {
		drawMainMenu();
	} else if (gameState === "gameStart") {
		drawUI();
	}
	if (cpsCountDone === false && gameState === "gameStart") {
		cpsCountDone = true;
		for (let i = 0; i < 0; i++) {
			ClicksPerSecCounter();
		}
	}
}


function preload() {
	mainbg.img = loadImage("images/mainbg.png");
	uibg.img = loadImage("images/uibg.jpg");


	// Load Click Images
	mainClickImages.img1 = loadImage("images/1700k.png");
	mainClickImages.img2 = loadImage("images/gtx1080.png");
	mainClickImages.img3 = loadImage("images/h110m.png");
	mainClickImages.img4 = loadImage("images/tridentz.png");
	mainClickImages.img5 = loadImage("images/1000w.png");
	mainClickImages.img6 = loadImage("images/nzxt.png");
}


function mousePressed() {
	if (isUpgradeGuiOpen === false && mouseIsPressed && finishedChangeImg === true && isMainMenuOpen === false && mouseY > 100) {
		//Draw Image to click
		changeFinishedImgLogic();
	}
	if (isUpgradeGuiOpen === false && isMainMenuOpen === false) {
		changeImageLogic();
	}

	//Upgrades!!
	clickXUpgrade();
	autoClickUpgrade();
	clickXUpgrade2();
}

//logic for making a combo multiplier
function ClicksPerSecCounter() {
	secondsTimer = setInterval(secondsSpentPlus, 1000);
	prevComboTimer = setInterval(prevComboTimerRun, 5000);

}

//secondspent++
function secondsSpentPlus() {
	secondsSpent = secondsSpent + 1;
}

function prevComboTimerRun() {
	prevComboCount = comboCount;
}

function drawComboCount() {
	if (comboCount > 5) {
		fill(50);
		rect(225, 160, 170, 40);
		fill(255);
		text("2X COMBO", 230, 190);
		if (isClickXUpgradePurchased === false && comboCounting === true) {
			addParts = 2;
		} else if (isClickXUpgradePurchased === true && comboCounting === true) {
			addParts = 4;
		} else if (isClickXUpgrade2Purchased === true && comboCounting === true) {
			addParts = 8;
		}

		if (isClickXUpgradePurchased === false && comboCounting === false) {
			addParts = 1;
		} else if (isClickXUpgradePurchased === true && comboCounting === false) {
			addParts = 2;
		} else if (isClickXUpgrade2Purchased === true && comboCounting === false) {
			addParts = 4;
		}
	}
}
