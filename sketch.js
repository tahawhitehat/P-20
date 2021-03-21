var cat,catImage,catImage2
var mouse,mouseImage,mouseImage2
var background,bi
function preload() {
    //load the images here
    catImage=loadImage("cat1.png")
    catImage2=loadImage("cat2.png")
    bi=loadImage("garden.png")
    mouseImage=loadImage("mouse2.png")
    mouseImage2=loadImage("mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite(500,400,1000,800)
    background.addImage("background",bi)
    cat = createSprite(600,700,50,50)
    cat.addImage("cat",catImage)
    cat.scale = 0.09
    cat.debug = true

    mouse = createSprite(400,700,50,50)
    mouse.addImage("mouse",mouseImage)
    mouse.scale = 0.09
    mouse.debug = true
    
    
    
}

function draw() {
    //Write condition here to evalute if tom and jerry collide
/*    if (cat.isTouching === mouse){
        mouse.addAnimation("mouse_Teasing",mouseImage2)
        mouse.changeAnimation("mouse_Teasing")
        }*/
        if (cat.x - mouse.x < mouse.width/2 + cat.width/2 &&
            mouse.x - cat.x < mouse.width/2 + cat.width/2 &&
            cat.y - mouse.y < mouse.height/2 + cat.height/2 &&
            mouse.y - cat.y < mouse.height/2 + cat.height/2){
                mouse.addAnimation("mouse_Teasing",mouseImage2)
                mouse.changeAnimation("mouse_Teasing")
            }
            else { 
                mouse.changeAnimation("mouse",mouseImage)
            }        
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("cat_running",catImage2)
     cat.changeAnimation("cat_running")
    
   
}


}

