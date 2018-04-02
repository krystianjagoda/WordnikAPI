var dispDebug = 1;  //0 to hide Debug button and window

var openDebug = 1;

var debugSlotNo = 16;
var debugSlots = [debugSlotNo];
var slotsToDisply = 0;
var empty = "EMPTY";

var xPos = 380;
var yPos = 80;
var spacing = 30;
var debugTextSize = 18;


function showDebug(){
  var xLocation = canvWidth-xPos;

  if(openDebug == 0){
    fill(5, 80);
    rect(canvWidth-170, yPos-50, 120, 20);
    fill(255);
  	textAlign(CENTER,CENTER);
    textSize(16);
    text("Show Debug [d]", canvWidth-110, yPos-40);
  }
  else{
    fill(5, 80);
    rect(canvWidth-170, yPos-50, 120, 20);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(16);
    text("Hide Debug [d]", canvWidth-110, yPos-40);

    debugSlots[0].set("stateCounter",stateCounter);
    debugSlots[1].set("mState",mState);
    debugSlots[2].set("bugubbleSelected",bugubbleSelected);
    debugSlots[3].set("speed",speed);
    debugSlots[4].set("slotsToDisply",slotsToDisply);
    debugSlots[5].set("inputData",inputData);
    debugSlots[6].set("slectedWord",slectedWord);
    debugSlots[7].set("relatedWords[0]",relatedWords[0]);
    debugSlots[8].set("relatedWords[1]",relatedWords[1]);
    debugSlots[9].set("relatedWords[2]",relatedWords[2]);
    debugSlots[10].set("relatedWords[3]",relatedWords[3]);
    debugSlots[11].set("relatedWords[4]",relatedWords[4]);
    debugSlots[12].set("relatedWords[5]",relatedWords[5]);
    debugSlots[13].set("EMPTY",empty);
    debugSlots[14].set("EMPTY",empty);
    debugSlots[15].set("EMPTY",empty);

    slotsToDisply = 0;
    for (index = 0; index < debugSlotNo; index++){
      if(debugSlots[index].value != empty){
          slotsToDisply++;
      }
    }

    fill(5, 80);
    rect(canvWidth-xPos-20, yPos-30, 350, 30+30*slotsToDisply);
    fill(255);
    textSize(debugTextSize);
    textAlign(LEFT,CENTER);

    for (index = 0; index < slotsToDisply; index++){
      debugSlots[index].display(xLocation, yPos+index*spacing);
    }

  }

}

function debugLine(name, value){
  this.name = name;
  this.value = value;

  this.display = function(Xpos, Ypos){
    text(this.name, Xpos, Ypos);
    text(this.value, Xpos+200, Ypos);
  };

  this.set = function(name, value){
    this.name = name;
    this.value = value;
  }

};


function initDebug(){
  for (index = 0; index < debugSlotNo; index++){
    debugSlots[index] = new debugLine("EMPTY", "EMPTY");
  }
}


function debugToggle(){
  openDebug = !openDebug;
}
