var centerBubble;
var cBubble_d = 0;
var d ;
var alpha;
var minionBoubbleNo = 6;

var sideBubbles = [6];
var sBubble_d = 0;

var speed = 0;
var test = 0;

var mState = 0;
var stateCounter = 0;

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


function draw()
{
		background(30);
		centerX = windowWidth/2;
		centerY = windowHeight/2;
		cBubble_d = windowWidth/9;
		sBubble_d = windowWidth/6;
		speed = 50;

		centerBubble.setParameter(centerX,centerY,cBubble_d);

		bugubbleSelected = calcDistFromBub();
		if(bugubbleSelected > 0)
		{
			sideBubbles[bugubbleSelected-1].setColor(255,255,60)
		}
		else
		{
			setColorAllBubbles(255,255,160);
		}


		if(mState == 0)
		{
			animateShow();
		}
		else if(mState == 1)
		{
				setAllBubbles(sBubble_d, sBubble_d/2);
				drawAllBubbles();
		}
		else if(mState == 2)
		{
			animateHide();
		}

		textSize(25);
		fill(255);
		text('stateCounter', windowWidth-420, 100);
		text(stateCounter, windowWidth-200, 100);

		text('mState', windowWidth-420, 140);
		text(mState, windowWidth-200, 140);

		text('bugubbleSelected', windowWidth-420, 180);
		text(bugubbleSelected, windowWidth-200, 180);

		text('speed', windowWidth-420, 220);
		text(speed, windowWidth-200, 220);





}

function animateShow()
{
	if(stateCounter < sBubble_d)
	{
		stateCounter = stateCounter + speed;
	}
	if(stateCounter > sBubble_d)
	{
		mState = 1;
	}
	setAllBubbles(stateCounter, stateCounter/2);
	drawAllBubbles();
}

function animateHide()
{
				if(stateCounter > 0)
				{
					stateCounter = stateCounter - speed;
				}
				if(stateCounter == 0)
				{
						mState = 0;
				}

				setAllBubbles(stateCounter, stateCounter/2);
				drawAllBubbles();
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
		if (mState == 1)
		{
			mState = 2;
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
	this.textValue = "TEST";

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
		textSize(30);
		fill(0);
		textAlign(CENTER,CENTER);
		text(this.textValue, this.x, this.y);
  }

};
