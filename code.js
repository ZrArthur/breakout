var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["09b1d95e-ef9a-48f5-af12-5ff8d88a7c36"],"propsByKey":{"09b1d95e-ef9a-48f5-af12-5ff8d88a7c36":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"pQSsxORcGQhnoyqcjyb6xHrRa7MKPXPS","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/09b1d95e-ef9a-48f5-af12-5ff8d88a7c36.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
var score = 0
var  gameState = "serve";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

paddle=createSprite(200,390,100,20)
ball=createSprite(200,250,20,20)

    createEdgeSprites()
    
function draw() {
  background("yellow");
  textSize(20)
  fill("blue")
  stroke("blue")
  text("pontuação = " + score, 260, 20)
  
  if (gameState == "serve")
  {  
    stroke("blue")
     fill("blue")
     textSize(15)
     text("Bem-vindo! Pressione Enter para iniciar.", 30, 200)
  
     if (keyDown("enter")) 
     {
        ball.velocityY = 5
        ball.velocityX = 4
        gameState = "play"
     }
  } 
  if (gameState == "play") 
  {
    paddle.x = World.mouseX; 
    if (ball.isTouching(bottomEdge) || score == 16)
    {
      gameState = "end"
      
    }
    
    
  }
  
  if (gameState == "end")
  { 
    ball.velocityX = 0
    ball.velocityY = 0
    textSize(25)
  
    if (score == 16) {
      fill ("green")
      stroke ("green")
      text("Fim do jogo! Você GANHOU!", 40, 200)
    }
    else {
       fill ("red")
       stroke ("red")
       text("Fim do jogo! Você PERDEU!", 40, 200)
    }
  }
  ball.bounceOff(topEdge)
  ball.bounceOff(rightEdge)
  ball.bounceOff(leftEdge)
  ball.bounceOff(paddle)



  if (ball.isTouching(box1)){
 ball.bounceOff(box1)
  box1.destroy();
  
  score = score + 1
  }
  
  if (ball.isTouching(box2)){
   ball.bounceOff(box2)
  box2.destroy();
 
  score = score + 1
  }
 
  if (ball.isTouching(box3)){
   ball.bounceOff(box3)
  box3.destroy();

  score = score + 1
  }

  if (ball.isTouching(box4)){
   ball.bounceOff(box4)
  box4.destroy();
 
  score = score + 1
  }



 if (ball.isTouching(box5)){
  ball.bounceOff(box5)
  box5.destroy();
 
  score = score + 1
  }



 if (ball.isTouching(box6)){
   ball.bounceOff(box6)
  box6.destroy();

  score = score + 1
  }



  if (ball.isTouching(box7)){
  ball.bounceOff(box7)
  box7.destroy();
 
  score = score + 1
  }
  
  if (ball.isTouching(box8)){
  ball.bounceOff(box8)
  box8.destroy();
  
  score = score + 1
  }
  
  if (ball.isTouching(box9)){
  ball.bounceOff(box9)
  box9.destroy();

  score = score + 1
  }
  
  if (ball.isTouching(box10)){
  ball.bounceOff(box10)
  box10.destroy();
  
  score = score + 1
  }
  
  if (ball.isTouching(box11)){
  ball.bounceOff(box11)
  box11.destroy();
  
  score = score + 1
  }
  
  if (ball.isTouching(box12)){
  ball.bounceOff(box12)
  box12.destroy();
 
  score = score + 1
  }
  
   if (ball.isTouching(box13)){
 ball.bounceOff(box13)
  box13.destroy();
  
  score = score + 1
   }
   
   if (ball.isTouching(box14)){
  ball.bounceOff(box14)
  box14.destroy();
  
  score = score + 1
   }
   
   if (ball.isTouching(box15)){
 ball.bounceOff(box15)
  box15.destroy();
  
  score = score + 1
   }
   
   if (ball.isTouching(box16)){
    ball.bounceOff(box16)

  box16.destroy();
  score = score + 1
   }
  
  
   drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
