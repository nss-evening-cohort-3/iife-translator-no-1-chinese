var languageTranslator = (function(originalPhrase){

  var germanLexicon = {
  "merry":"Fröhe", 
  "christmas":"Weihnachten", 
  "and":"und", 
  "happy":"Frohes", 
  "new":"neues", 
  "year":"Jahr"
};

// german iife
originalPhrase.toGerman = (function(userInput) {
  var translatedPhrase = [];
// restructure phrase
  var textArray = userInput.split(" ");

  for(var i = 0; i < textArray.length; i++) {
    translatedPhrase.push(germanLexicon[textArray[i]])};
    translatedPhrase = translatedPhrase.reduce(function(prev, curr) {
      return prev + " " + curr;
    });

return translatedPhrase;
});

return originalPhrase;
}(languageTranslator || {} ));
