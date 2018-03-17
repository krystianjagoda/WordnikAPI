var centerBubble;
var cBubble_d = 0;
var d ;
var alpha;
var minionBoubbleNo = 6;

var sideBubbles = [6];
var sBubble_d = 0;

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
