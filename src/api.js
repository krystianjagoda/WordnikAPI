var api = 'http://api.wordnik.com:80/v4/word.json/';
var searchFor = 'cat';
var settingsA = '/relatedWords?useCanonical=true&relationshipTypes=same-context&';
var settingsB = 'limitPerRelationshipType=6&api_key=';
var apiKey = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

var relatedWords = [6];



function checkIfWordOK(){

}

function wordnikAsk(word){
	var url = api + word + settingsA + settingsB + apiKey;
	loadJSON(url, gotData);
}

function gotData(data){
	wordnikData = data;
	print(data);

  parseJSON(wordnikData);
  setTextAllBubbles();
}

function parseJSON(data){
  relatedWords[0] = data[0].words[0];
  relatedWords[1] = data[0].words[1];
  relatedWords[2] = data[0].words[2];
  relatedWords[3] = data[0].words[3];
  relatedWords[4] = data[0].words[4];
  relatedWords[5] = data[0].words[5];
}
