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
    debugSlots[5].set("word_A",empty);
    debugSlots[6].set("word_B",empty);
    debugSlots[7].set("word_C",empty);
    debugSlots[8].set("word_D",empty);
    debugSlots[9].set("word_E",empty);
    debugSlots[10].set("word_F",empty);
    debugSlots[11].set("EMPTY",empty);
    debugSlots[12].set("EMPTY",empty);
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
