var backgroundg;
var demon;
var character1;
var character2;
var backgroundimg;
var captainimg;
var log;
var logimg;
var log1;
var logimg1;
var logcircle;
var logcircleimg;
var hulkleft;
var hulkleftimg;
var hulkright;
var hulkrightimg;
var fireleft;
var fireleftimg;
var fireright;
var firerightimg;
var demon;
var demonimg;
var invisibleground;
var launcher,launcherimg;
var score=0;
var demongroup;




function preload() {
    backgroundg = loadImage("images/background.png")
    character1 = loadImage('images/hulk.png')
    log = loadImage("images/log.png")
    log1 = loadImage("images/log.png")
    logcircle = loadImage("images/woodcircle.png")
    hulkleft = loadImage("images/lhulk.png")
    hulkright = loadImage("images/rhulk.png")
    fireleft = loadImage("images/left-fire.png")
    fireright = loadImage("images/right-fire.png")
    demon = loadImage("images/demon.png")
    launcher = loadImage("images/origin.png")
}

    function setup() {
    createCanvas(1200,600);
    backgroundimg=createSprite(600,300)
    backgroundimg.addImage(backgroundg);
    logimg=createSprite(1000,400)
    logimg.addImage(log);
    logimg1=createSprite(300,400)
    logimg1.addImage(log);
    logcircleimg=createSprite(700,300)
    logcircleimg.addImage(logcircle);
    hulkimg = createSprite(900, 528)
    fireleftimg = createSprite(600,200)
    fireleftimg .addImage(fireleft);
    firerightimg = createSprite(600,528)
    firerightimg.addImage(fireright);
    invisibleground = createSprite(600,580,1200,40);
    invisibleground.visible = false;
    fireleftimg.visible=false;
    firerightimg.visible = false;
    launcherimg = createSprite(600,528)
    launcherimg.addImage(launcher);
    demongroup = createGroup()
    }

    function draw() {
    background('yellow');

   
    hulkimg.addImage(character1);
    

    if(keyDown("up") && hulkimg.y >= 435) {
    hulkimg.velocityY = -12;
    }
    
    hulkimg.velocityY = hulkimg.velocityY + 0.8


    
    // if (keyDown('up') && hulkimg.y>300) {
    //    hulkimg.velocityY=-6 

    // }

    if (hulkimg.y <300) {
       hulkimg.velocityY = hulkimg.velocityY+1
    }
   
    if (keyDown('left')) {
     lhulk();
    }
    if (keyDown('right')) {
    rhulk();
    }
    
    if ( keyDown('z') ) {
    lfire();
    fireleftimg.y = 528;
    }


    if ( keyDown('x') ) {
        rfire();
        
        }
        if (hulkimg.x > width) {
            hulkimg.x=1150
        }
        if (hulkimg.x < 0) {
            hulkimg.x = 10
        }

       demonspawn();
    
        
    hulkimg.collide(invisibleground);
    hulkimg.collide(logimg);
        hulkimg.collide(logimg1);
        drawSprites();
        textSize(25);
                textFont('Supercell-magic-webfont')
          fill('black')
        text('Score ' + ':' + score, 1070, 50) 
        if (demongroup.isTouching(fireleftimg) || demongroup.isTouching(firerightimg)) {
            score = score + 50;
            demonimg.visible = false;
            fireleftimg.visible = false;
            console.log(score)
        }

        
}

function lhulk() {
    
    hulkimg.addImage(hulkleft);
    hulkimg.x = hulkimg.x - 13
    
}



function rhulk() {
    hulkimg.addImage(hulkright);
    hulkimg.x = hulkimg.x + 13
    
}


function rfire(){
        firerightimg.visible  =  true;
   // firerightimg.x = hulkimg.x
   //firerightimg.y = hulkimg.y
firerightimg.velocityX=5;
}

function lfire(){
    fireleftimg.visible  =  true;
//fireleftimg.x = hulkimg.x
//fireleftimg.y = hulkimg.y
fireleftimg.velocityX=-5;
}





function demonspawn() {
    if (frameCount % 300 == 0) {
        var r = Math.round(random(50, 800))
        demonimg = createSprite(50, 528, 10, 10)
        demonimg.x = r
        demonimg.addImage(demon)

        if (demonimg.x < 350) {
            demonimg.velocityX = 4;

        }

        if (demonimg.x > 350) {
            demonimg.velocityX = -4;

        }

        demongroup.add(demonimg)
    }
}
   // function fireunlimit() {
    //fireleftimg=createSprite(hulkimg.x,hulkimg.y,10,10)
   // fireleftimg.velocityX=-9
   // fireleftimg.addImage(fireleftimg);
 //}



 //function demonfalse(){
  //   demonimg.visible = false;
 //}