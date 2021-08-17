 var playerimg, wall1img, wall2img, bgimg, bgimg2, zombieimg, arrowimg, pitchforkimg, sound1, sound2;
function preload() {
 bgimg = loadImage("img/wall30.png");
 bgimg2 = loadImage("img/medow0.png");
 playerimg = loadImage("img/person0.png");
 wall1img = loadImage("img/wall10.png");
 wall2img = loadImage("img/wall20.png");
zombieimg = loadImage("img/zombie0.png");
arrowimg = loadImage("img/arrow0.png");
pitchforkimg = loadImage("img/pitchfork0.png");
sound1 = loadSound("audio_8c54bcbfa2.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
    sound1.play()
}

function draw() {
  background(bgimg);
}