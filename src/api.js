var api = 'http://api.wordnik.com:80/v4/word.json/';
var searchFor = 'cat';
var settingsA = '/relatedWords?useCanonical=false&relationshipTypes=same-context&';
var settingsB = 'limitPerRelationshipType=6&api_key=';
var apiKey = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

var relatedWords = [6];

function wordnikAsk(){
	var url = api + searchFor + settingsA + settingsB + apiKey;
	loadJSON(url, gotData);
}

function gotData(data){
	inputData = data;
	print(data);

  parseJSON(inputData);
  setTextAllBubbles();

}

function parseJSON(inputData){
  relatedWords[0] = inputData[0].words[0];
  relatedWords[1] = inputData[0].words[1];
  relatedWords[2] = inputData[0].words[2];
  relatedWords[3] = inputData[0].words[3];
  relatedWords[4] = inputData[0].words[4];
  relatedWords[5] = inputData[0].words[5];
}
