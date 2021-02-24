const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var bg,score=0;


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

   stand1 = new Ground (390,300,250,10);
   stand2 = new Ground (700,200,200,10);
    ground = new Ground(450,390,900,20);
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,235,30,40);

    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15= new Box(420,195,30,40);

    box16 = new Box(390,155,30,40);

    box17 = new Box(640,175,30,40);
    box18 = new Box(670,175,30,40);
    box19 = new Box(700,175,30,40);
    box20 = new Box(730,175,30,40);
    box21 = new Box(760,175,30,40);

    box22 = new Box(670,135,30,40);
    box23 = new Box(700,135,30,40);
    box24 = new Box(730,135,30,40);

    box25 = new Box(700,95,30,40);

    ball = new Bob(50,200,50);

    slingshot = new Slingshot (ball.body,{x:100, y:200});
}

function draw(){
    if(bg){
        background(bg);
    }else{
        background(0);
    }
   noStroke();
   textSize(25);
   fill ("white");
   text ("score: "+score,width-300,60);
    Engine.update(engine);
    stand1.display();
    stand2.display();
    ball.display();
    slingshot.display();
    fill ("salmon");
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   fill ("green");
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   fill ("purple");
   box13.display();
   box14.display();
   box15.display();
   fill ("blue");
   box16.display();
   fill ("pink");
   box17.display();
 
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   fill ("lightorange");
   box22.display();

   box23.display();
   box24.display();
   fill ("yellow");
   box25.display();




   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
   box7.score();
   fill ("green");
   box8.score();
   box9.score();
   box10.score();
   box11.score();
   box12.score();
   fill ("purple");
   box13.score();
   box14.score();
   box15.score();
   fill ("blue");
   box16.score();
   fill ("pink");
   box17.score();
 
   box18.score();
   box19.score();
   box20.score();
   box21.score();
   fill ("lightorange");
   box22.score();

   box23.score();
   box24.score();
   fill ("yellow");
   box25.score();







   ground.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed (){
    if (keyCode===32){
        slingshot.attach(ball.body);
    }
}
//asychronous function 
async function getbg (){
    var respone = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responeJSON =await respone.json();
    var dt = responeJSON.datetime;
    var hour = dt.slice(11,13);
   if (hour>= 06 && hour<= 19 ){
       bg="lightblue"
   } else{
       bg="darkblue"
   }

}