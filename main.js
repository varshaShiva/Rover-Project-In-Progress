canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

nasa_img=["nasa1img.png","nasa2img.png","nasa3img.png","nasa4img.png"];
random_no=Math.floor(Math.random()*4);
console.log(random_no);
rover_width=100;
rover_height=90;
rover_img="rover.png";
console.log("roverimg1test");
background_img=nasa_img[random_no];
console.log("backgroundImage:"+background_img);
roverX=10;
roverY=10;

function add()
{
    background_imgtag= new Image();
    background_imgtag.onload=upload_bg;
    background_imgtag.src=background_img;

    rover_imgtag=new Image();
    rover_imgtag.onload=upload_rover;
    rover_imgtag.src=rover_img;
}

function upload_bg()
{
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function upload_rover()
{
    ctx.drawImage(rover_imgtag,roverX,roverY,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=='37')
    {
      left();
      console.log("left");
    }
    if (keyPressed=='38')
    {
      up();
      console.log("up");
    }
    if (keyPressed=='39')
    {
      right();
      console.log("right");
    }
    if (keyPressed=='40')
    {
      down();
      console.log("down");
    }
}

function left()
{
  if (roverX>=0)
  {
    roverX=roverX-10;
    console.log("left key pressed|| RoverX:"+roverX+"RoverY:"+roverY);
    upload_bg();
    upload_rover();
  }
}
function right()
{
  if (roverX<=700)
  {
    roverX=roverX+10;
    console.log("Right key pressed|| RoverX:"+roverX+"RoverY:"+roverY);
    upload_bg();
    upload_rover();
  }
}
function up()
{
  if (roverY>=0)
  {
    roverY=roverY-10;
    console.log("Up key pressed|| RoverX:"+roverX+"RoverY:"+roverY);
    upload_bg();
    upload_rover();
  }
}
function down()
{
  if (roverY<=600)
  {
    roverY=roverY+10;
    console.log("Down key pressed|| RoverX:"+roverX+"RoverY:"+roverY);
    upload_bg();
    upload_rover();
  }
}