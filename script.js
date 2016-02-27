var userInput = document.getElementById("input").value;
var button = document.getElementById("button");
var output = document.getElementById("output");
var splitInput = userInput.split(" ");

var languages = [" ", " "];

var languageTranslator = (function() {
  if(document.getElementById("dropdown").value == welsh) {
    languageTranslator.toWelsh;
  } else if(document.getElementById("dropdown").value == italian) {
    languageTranslator.toItalian;
  } else {
    languageTranslator.toGerman;
  }

});
