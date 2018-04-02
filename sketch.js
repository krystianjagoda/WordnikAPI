var canvWidth = 800;
var canHeight = 600;

// TO DO:
// > Fix Init colors - function to color on every iteration
// > Fix color selection - the color foes yellow and stays yellow
// 												( add color array with color for each bubble)
// > define range of colors - not to dark, cuz black text is not readable -
//                           calc color base on text, this way it will be
//                           alwasy the same for specific word
// > Add function to check if word is okay, don't display bubbles
//                           until the word is correct
// > Speed sacling - for smaller window reduce the Speed



function setup() {
	canvWidth = windowWidth;
	canHeight = windowHeight;
	speed = 50
	createCanvas(canvWidth, canHeight);

	frameRate(30);

	initDebug();
	initAllBubbles();
}


function draw()
{
		background(30);



		centerX = canvWidth/2;
		centerY = canHeight/2;

		if(inputMode == 1){
				if(windowWidth< 800){
					drawInputScreen(canvWidth-60, 180);
				}
				else{
					drawInputScreen(800, 180);
				}
		}
		else{

			if(canvWidth > canHeight){
				cBubble_d = canvWidth/9;
				sBubble_d = canvWidth/6;
			}
			else {
				cBubble_d = canHeight/9;
				sBubble_d = canHeight/6;
			}



			if(mState == 0){
				animateShow();
			}
			else if(mState == 1){
					setAllBubbles(sBubble_d, sBubble_d/2);
					drawAllBubbles();
			}
			else if(mState == 2){
				animateHide();
			}



		}

		centerBubble.setParameter(centerX,centerY,cBubble_d);
		bugubbleSelected = calcDistFromBub();

		if(bugubbleSelected > 0){
			sideBubbles[bugubbleSelected-1].setColor(255,255,60)
		}
		else{
			//setColorAllBubbles(255,255,160);
		}


		if(dispDebug == 1){
			showDebug();
		}


}


function windowResized() {
	canvWidth = windowWidth;
	canHeight = windowHeight;
}

function animateShow()
{
	if(stateCounter < sBubble_d){
		stateCounter = stateCounter + speed;
	}
	if(stateCounter > sBubble_d){
		mState = 1;
	}
	setAllBubbles(stateCounter, stateCounter/2);
	drawAllBubbles();
}

function animateHide()
{
	if(stateCounter > 0){
		stateCounter = stateCounter - speed;
	}
	if(stateCounter == 0){
			mState = 0;
	}

	setAllBubbles(stateCounter, stateCounter/2);
	drawAllBubbles();
}

function getRandomColor(){
	var r = random(255);
	var g = random(255);
	var b = random(255);
	return color(r, g, b);
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
	if(bugubbleSelected > 0){
		if (mState == 1){
			slectedWord = relatedWords[bugubbleSelected-1];
			wordnikAsk(slectedWord);
			searchWord = slectedWord;
			setRandColorAllBubbles();
			mState = 2;
		}
	}
}

function keyPressed(){
	if (keyCode == BACKSPACE){
		newSearchFlag = 1;
		inputData = "type a word...";
	}
	if (keyCode == ENTER){
		if(inputMode == 1){
			wordnikAsk(inputData);
			searchWord = inputData;
			typeDone();
		}
		else{
			typeStart();
		}

	}
}

function keyTyped(){
	if(inputMode){
		if(newSearchFlag){
			newSearchFlag = 0;
			inputData = "";
		}
		inputData += key;

	}

	if (key === 'd'){
		debugToggle();
	}

	return false;
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
