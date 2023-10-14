var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

// to create a sprite --> createSprite()

// to add an image into the sprite
// step 1 --> load the image inside the preload func using loadImage()
// step 2 --> add the image into the sprite

// Homework --> load all the images for different sprites and create the sprites

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  carImage = loadImage("assets/car.png")
  obstacle1_Image = loadImage("assets/obstacle1.png")
  obstacle2_Image = loadImage("assets/obstacle2.png")
  coin_Image = loadImage("assets/goldCoin.png")
  blast_Image = loadImage("assets/goldCoin.png")
  reset_Image = loadImage("assets/reset.png")
  title_Image = loadImage("assets/title.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  car = createSprite(windowWidth/2 , windowHeight/2)
  car.addImage(carImage)

  obstacle1 = createSprite(windowWidth/2 , windowHeight/2)
  obstacle1.addImage(obstacle1_Image)

  obstacle2 = createSprite(windowWidth/2 , windowHeight/2)
  obstacle2.addImage(obstacle2_Image)

  coin = createSprite(windowWidth/2 , windowHeight/2)
  coin.addImage(coin_Image)

  blast = createSprite(windowWidth/2 , windowHeight/2)
  blast.addImage(blast_Image)

  reset = createSprite(windowWidth/2 , windowHeight/2)
  reset.addImage(reset_Image)

  title = createSprite(windowWidth/2 , windowHeight/2)
  title.addImage(title_Image)

  // to make any sprite smaller we've scale
  car.scale = 0.1
  obstacle1.scale = 0.1
  obstacle2.scale = 0.1
  coin.scale = 0.1
  blast.scale = 0.1
  reset.scale = 0.1
}

function draw() {

  background(backgroundImage);

  drawSprites()
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
