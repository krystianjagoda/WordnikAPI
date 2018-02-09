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

var bugubbleSelected;

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

		background(30);

		bugubbleSelected = calcDistFromBub();
		if(bugubbleSelected > 0)
		{
			sideBubbles[bugubbleSelected-1].setColor(255,255,60)
		}
		else
		{
			setColorAllBubbles(255,255,160);
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

function calcDistFromBub()
{
		var returnValue = 0;

		for (index = 0; index < minionBoubbleNo; index++)
		{
				var distance = int(dist(sideBubbles[index].x, sideBubbles[index].y, mouseX, mouseY));

				if(distance < sideBubbles[index].d/2)
				{
						returnValue = index+1;
						break;
				}
				else
				{
						returnValue = 0;
				}
		}


		return returnValue;

}

function mousePressed() {
	if(bugubbleSelected > 0)
	{
		if (value === 0)
		{
			value = 255;
		}
		else
		{
			value = 0;
		}
	}

}

function calculateMouse()
{
	var returnValue = 0;
	var distance = int(dist(centerBubble.x, centerBubble.y, mouseX, mouseY));

	if(distance < centerBubble.d/2)
	{
			returnValue = 99;
	}
	else
	{
			returnValue = 0;
	}

	return returnValue;
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

function setColorAllBubbles(r,g,b)
{
		centerBubble.setColor(r,g,b);
		for (index = 0; index < minionBoubbleNo; index++)
		{
			sideBubbles[index].setColor(r,g,b);
		}
}



// Bubble class
function Bubble(x, y, d)
{
  this.x;
  this.y;
  this.d;

	this.col = color(255, 255 , 255);

	this.setColor = function(r,g,b)
	{
		this.col = color(r, g, b);
	};

	this.setParameter = function(x,y,d)
	{
		this.x = x;
		this.y = y;
		this.d = d;
	};

  this.display = function()
	{
		fill(this.col);
		ellipse(this.x, this.y, this.d, this.d);
  }

};
