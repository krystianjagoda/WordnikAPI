newSearchFlag = 1;

function drawInputScreen(sizeX, sizeY)
{
  var margin = 30

  fill(49, 42, 40);
  rect(centerX - sizeX/2, centerY - sizeY/2, sizeX, sizeY );

  // Text Window
  fill(255);
  rect(centerX - sizeX/2 + margin, centerY-50, sizeX - margin*2, 40 );



  fill(50);
  textAlign(CENTER,CENTER);
  textSize(20);
  text(inputData, centerX, centerY-30);

  fill(255);
  text("Press Enter to begin", centerX, centerY+30);
}

function typeDone(){
  inputMode = 0;
  mState = 0;
}

function typeStart(){
  mState = 2;
  inputMode = 1;
}
