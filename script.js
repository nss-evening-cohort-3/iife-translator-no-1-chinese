var userInput = document.getElementById("input").value;
var button = document.getElementById("button");
var output = document.getElementById("output");
var splitInput = userInput.split(" ");


// function returnText(userInput){
// 	var splitInput = userInput.split(" ");
// 	return splitInput;
// 	console.log(returnText);
// }

var languageTranslator = (function() {
	if(document.getElementById("dropdown").value == welsh) {
		languageTranslator.translateToWelsh();
	}
}

button.addEventListener("click", languageTranslator(function){

}));