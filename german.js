var languageTranslator = (function(origTranslator){
  var translatedPhrase = [];

  var toGerman = {"merry":"Fröhe", 
  "christmas":"Weihnachten", 
  "and":"und", 
  "happy":"Frohes", 
  "new":"neues", 
  "year":"Jahr"};

  for(var i = 0; i <= translatedText.length; i++) {
    translatedPhrase.push(toGerman[translatedText[i]]);

    var reducedPhrase = translatedPhrase.reduce(function(prev, current) {
      return prev + " " + current;
    });

button.addEventListener("click", languageTranslator(function(event){
  output.innerHTML = translatedPhrase;
  };

}(languageTranslator || {}));
