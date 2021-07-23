// variable declare
var tooth1, tooth1Img
var tooth4, tooth4Img
var tooth6, tooth6Img
var tooth9, tooth9Img
var star1, star2, star3, star4, star5, star6, star7, star8, starImg

function preload(){
  tooth1Img = loadImage("teeth1.png");
  tooth4Img = loadImage("teeth4.png");
  tooth6Img = loadImage("teeth6.png");
  tooth9Img = loadImage("teeth9.png");
  starImg = loadImage("star.png");
}


function setup(){
  createCanvas(1000,1200);

  tooth1 = createSprite(350, 450, 20, 20);
  tooth1.addImage(tooth1Img)
  tooth1.scale = 1.5;

  tooth4 = createSprite(400, 900, 20, 20);
  tooth4.addImage(tooth4Img)
tooth4.scale = 1.5;

  tooth6 = createSprite(500, 300, 20, 20);
  tooth6.addImage(tooth6Img)
tooth6.scale = 1.5;

  tooth9 = createSprite(700, 800, 20, 20);
  tooth9.addImage(tooth9Img)
  tooth9.scale = 1.5;




  star1= createSprite(900, 900, 30, 30);
  star1.addImage(starImg);
  star1.scale = 0.1;

  star2 = createSprite(450, 1000, 30, 30);
  star2.addImage(starImg);
  star2.scale = 0.1;

  star3 = createSprite(200, 250, 30, 30);
  star3.addImage(starImg);
  star3.scale = 0.1;

  star4 = createSprite(500, 300, 30, 30);
  star4.addImage(starImg);
  star4.scale = 0.1;

  star5 = createSprite(200, 1100,30, 30);
  star5.addImage(starImg);
  star5.scale = 0.1;

  star6 = createSprite(100, 400, 30, 30);
  star6.addImage(starImg);
  star6.scale = 0.1;

  star7 = createSprite(100, 1000, 30, 30);
  star7.addImage(starImg);
  star7.scale = 0.1;

  star8 = createSprite(600, 50, 30, 30);
  star8.addImage(starImg);
  star8.scale = 0.1;
  
  
}

function draw() {
  background(67, 133, 164);
  
  drawSprites()

  textSize(40)
  fill("white")
  text("Lets play tooth ache!", 250, 400);
  text("Complete the maze without", 200, 450);
  text("getting bitten by the decayed tooth zombies.", 50, 500);
  text("If you do get bitten, quickly ", 200, 550);
  text("make your way to one or the dentists, you only ", 50, 600);
  text("have 10 seconds to find a dentist ", 200, 650);
  text("Get bitten too many times and you may get given ", 50, 700);
text("a quick fire question to help you ", 200, 750);
text("remember how to avoid getting a tooth ache!", 50, 800)

  strokeWeight(5)
  textSize(100)
  stroke("white")
  fill("white")
  text("TOOTH ACHE!!", 150, 200);

  
  
}

// User defined functions
