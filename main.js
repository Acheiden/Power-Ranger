
var canvas = new fabric.Canvas("myCanvas")
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_image(getImage)
{
fabric.Image.fromURL(getImage, function(Img) {
	block_Image_object = Img;

	block_Image_object.scaleToWidth(blockImageWidth);
	block_Image_object.scaleToHeight(blockImageHeight);
	block_Image_object.set({
		top:blockY,
		left:blockX
	});
	canvas.add(block_Image_object);
});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') 
	{
		new_image("rr.jpg");
        console.log("r");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image("gr.png");
        console.log("v");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image("yr.png");
        console.log("a");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image("pr.png");
        console.log("r");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image("br.png");
        console.log("i");
	}
	
}

