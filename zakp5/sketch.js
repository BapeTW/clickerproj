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
var isAutoClicker1UpgradePurchased;
var upgradePurchased;
var autoClickInterval = window.setInterval(autoClickUpgradeLogic, 1000);

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
	imgToClick = mainClickImages.img1
	finishedChangeImg = true;
	isMainMenuOpen = true;
	partsTotal = 0;
	addParts = 1;
	isClickXUpgradePurchased = false;
	upgradePurchased = 105;
	isAutoClicker1UpgradePurchased = false;
}

function draw() {
	if (gameState === "mainMenu") {
		drawMainMenu();
	} else if (gameState === "gameStart") {
		drawUI();
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
}

