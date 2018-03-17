var dispDebug = 1;

var debugSlotsNo = 16;

var valuePos = 130;
var namePos = 420
var debugSlots = [debugSlotsNo];



function initDebug()
{
  for (index = 0; index < debugSlotsNo; index++)
  {
    debugSlots[index] = new debugLine();
  }
}

function showDebug()
{

  fill(5, 80);
  rect(windowWidth-450, 50, 400, 800);
  textSize(22);
  fill(255);
	textAlign(LEFT,CENTER);


  text('stateCounter', windowWidth-namePos , 100);
  text(stateCounter, windowWidth-valuePos, 100);

  text('mState', windowWidth-namePos, 140);
  text(mState, windowWidth-valuePos, 140);

  text('bugubbleSelected', windowWidth-namePos, 180);
  text(bugubbleSelected, windowWidth-valuePos, 180);

  text('speed', windowWidth-namePos, 220);
  text(speed, windowWidth-valuePos, 220);
}

function debugLine()
{
  this.name;
  this.value;

  this.display = function(Xpos, Ypos)
	{
    text(this.name, Xpos, Ypos);
    text(this.value, Xpos, Ypos);
  }

};
