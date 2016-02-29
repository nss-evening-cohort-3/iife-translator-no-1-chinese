// Translator IIFE containing Welsh lexicon
var languageTranslator = (function (originalPhrase) {
var welshLexicon = {
		"merry": "Llawen",
		"christmas": "Nadolig",
		"and": "ac",
		"happy": "Hapus",
		"new": "Newydd",
		"year": "Blwyddyn"
	};

// translate function - converts input to a split array, translates each word, then pushes back into a string
originalPhrase.toWelsh = (function(userInput) {
  var translatedPhrase = [];
  var textArray = userInput.split(" ");
    for (i = 0; i < textArray.length; i++) {
        translatedPhrase.push(welshLexicon[textArray[i]])
      };

     translatedPhrase = translatedPhrase.reduce(
      function(prev, curr) {
        return prev + " " + curr;
      });

return translatedPhrase;
  
  });
return originalPhrase;
}(languageTranslator || {}));