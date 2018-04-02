var api = 'http://api.wordnik.com:80/v4/word.json/';
var searchFor = 'cat';
var settingsA = '/relatedWords?useCanonical=true&relationshipTypes=same-context&';
var settingsB = 'limitPerRelationshipType=6&api_key=';
var apiKey = 'b557bdb350691892790520c938f69a27c85f1a6b01fb24803';

var relatedWords  = ["", "", "", "", "", ""];


function wordnikAsk(word){
	var url = api + word + settingsA + settingsB + apiKey;
	loadJSON(url, gotData);
}

function gotData(data){
	wordnikData = data;
	print(data);

  if(data.length == 0){
    wordOK = 0;
  }
  else{
    parseJSON(wordnikData);
    setTextAllBubbles();
    wordOK = 1;
  }
}

function parseJSON(data){
  relatedWords[0] = data[0].words[0];
  relatedWords[1] = data[0].words[1];
  relatedWords[2] = data[0].words[2];
  relatedWords[3] = data[0].words[3];
  relatedWords[4] = data[0].words[4];
  relatedWords[5] = data[0].words[5];
}
