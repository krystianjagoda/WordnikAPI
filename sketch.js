var centerBubble;
var d ;
var alpha;
var minionBoubbleNo = 6;

var sideBubbles = [6];

var speed = 50;
var test = 0;
var value = 0;

var showFlag = 0;

var centerX;
var centerY;

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(30);
	frameRate(30);

	initAllBubbles();

}

function draw() {
		centerX = windowWidth/2;
		centerY = windowHeight/2
		centerBubble.setParameter(centerX,centerY,250);

		if(calculateMouse() > 0)
		{
			background(100);
		}
		else
		{
			background(30);
		}


	if(value == 0)
	{
		animateShow();
	}
	else
	{
		animateHide();
	}
}



function calculateMouse()
{
	var returnValue = 0;
	var distance = int(dist(centerBubble.x, centerBubble.y, mouseX, mouseY));

	if(distance < centerBubble.d/2)
	{
			returnValue = 1;
	}
	else
	{
			returnValie = 0;
	}

	return returnValue;
}

function mousePressed() {
		if (value === 0) {
			value = 255;
		} else {
			value = 0;
		}
}

function animateReShow()
{
		animateHide()
}

function animateShow()
{
				if(test < 300)
				{
					test = test + speed;
				}
				if(test > 300)
				{
					showFlag = 1;
				}

				setAllBubbles(test, test/2);
				drawAllBubbles();
}

function animateHide()
{
				if(test > 0)
				{
					test = test - speed;
				}
				if(test == 0)
				{
						value = 0;
				}

				setAllBubbles(test, test/2);
				drawAllBubbles();
}


function setAllBubbles(distance, radius)
{
	for (index = 0; index < minionBoubbleNo; index++)
	{
		sideBubbles[index].setParameter(centerBubble.x + distance * cos(index*alpha),
																		centerBubble.y + distance * sin(index*alpha),
																		radius);
	}
}


function drawAllBubbles()
{

		for (index = 0; index < minionBoubbleNo; index++)
		{
			sideBubbles[index].display();
		}
		centerBubble.display();
}

function initAllBubbles()
{
		alpha = PI / 3.0;	// 60

		centerBubble = new Bubble;
		for (index = 0; index < minionBoubbleNo; index++)
		{
			sideBubbles[index] = new Bubble;
		}
}



// Bubble class
function Bubble(x, y, d)
{
  this.x;
  this.y;
  this.d;

	this.setParameter = function(x,y,d)
	{
		this.x = x;
		this.y = y;
		this.d = d;
	};

  this.display = function()
	{
		fill(200,200,0);
		ellipse(this.x, this.y, this.d, this.d);
  }

};
