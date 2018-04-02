var centerBubble;
var cBubble_d = 0;
var d ;
var minionBoubbleNo = 6;

var sideBubbles = [6];
var sBubble_d = 0;

function Bubble(x, y, d){
  this.x;
  this.y;
  this.d;

	this.col = color(255, 255 , 255);
	this.textValue = "";

  this.setText = function(inputText){
	   this.textValue = inputText;
  };

	this.setColor = function(r,g,b){
		this.col = color(r, g, b);
	};

	this.setParameter = function(x,y,d){
		this.x = x;
		this.y = y;
		this.d = d;
	};

  this.display = function(){
		fill(this.col);
		ellipse(this.x, this.y, this.d, this.d);
		textSize(sBubble_d/10);
		fill(0);
		textAlign(CENTER,CENTER);
		text(this.textValue, this.x, this.y);
  };

};

function setAllBubbles(distance, radius)
{
  alphaShift = PI / 3.0;	// 60

	for (index = 0; index < minionBoubbleNo; index++)
	{
		sideBubbles[index].setParameter(centerBubble.x + distance * cos(index*alphaShift),
																		centerBubble.y + distance * sin(index*alphaShift),
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


		centerBubble = new Bubble;
		for (index = 0; index < minionBoubbleNo; index++)
		{
			sideBubbles[index] = new Bubble;
		}
}

function setRandColorAllBubbles()
{
		centerBubble.setColor(getRandomColor());
		for (index = 0; index < minionBoubbleNo; index++)
		{
			sideBubbles[index].setColor(getRandomColor());
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

function setTextAllBubbles()
{
		centerBubble.setText(searchWord);
		for (index = 0; index < minionBoubbleNo; index++)
		{
			sideBubbles[index].setText(relatedWords[index]);
		}
}
