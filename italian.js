var languageTranslator = (function(originalPhrase) {
  var italianLexicon = {
    "merry":"buon",
    "christmas":"Natale",
    "and":"e",
    "happy":"felice",
    "new":"nuovo",
    "year":"anno"
  };


  originalPhrase.toItalian = (function(userInput) {
  
  var translatedPhrase = [];
    
    var textArray = userInput.split(" ");
    for (i = 0; i < textArray.length; i++) {
        translatedPhrase.push(italianLexicon[textArray[i]])
      };

    translatedPhrase = translatedPhrase.reduce(
      function(prev, curr) {
        return prev + " " + curr;
      });

return translatedPhrase;
  
  });

}(languageTranslator || {}));
