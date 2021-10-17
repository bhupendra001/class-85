canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_img=["mars1","mars2","mar3","mars.jpg"];
random_number=Math.floor(Math.random()*4);
background_img=nasa_img[random_number];
console.log("background_img="+background_img)
rover_img="rover.png";

rover_x=10;
rover_y=10;

rover_width=100;
rover_height=90;

function add(){

background_imgTag=new Image();
background_imgTag.onload=uploadbackground;
background_imgTag.src=background_img;

rover_imgTag=new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_img;

}

function uploadbackground(){

ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadrover(){

ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);


}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

keyPressed=e.keyCode;
console.log(keyPressed);

if (keyPressed=='37'){
left();
console.log("left")


}

if (keyPressed=='38'){
   up();
    console.log("up")
    
    
    }



if (keyPressed=='39'){
    right();
    console.log("right")
    
    
}
if (keyPressed=='40'){
    down();
    console.log("down")
    
    
    }

}

function up(){

if(rover_y >= 0){

rover_y=rover_y-10;
console.log("when up arrow is press x="+rover_x+"_y="+rover_y);
uploadbackground();
uploadrover();

}


}

function down(){

    if(rover_y <= 500){
    
    rover_y=rover_y+10;
    console.log("when down arrow is press x="+rover_x+"_y="+rover_y);
    uploadbackground();
    uploadrover();
    
    }
    
    
    }

    function left(){

        if(rover_x >= 0){
        
        rover_x=rover_x-10;
        console.log("when left arrow is press x="+rover_x+"_y="+rover_y);
        uploadbackground();
        uploadrover();
        
        
        }
        
        
        }
        function right(){

            if(rover_x <= 700){
            
            rover_x=rover_x+10;
            console.log("when right arrow is press x="+rover_x+"_y="+rover_y);
            uploadbackground();
            uploadrover();
            
            }
            
            
            }