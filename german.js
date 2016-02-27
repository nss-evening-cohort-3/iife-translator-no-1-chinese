var languageTranslator = (function(origTranslator){
  var translatedText = [];

  var toGerman = {"merry":"Fröhe", "christmas":"Weihnachten", "and":"und", "happy":"Frohes", "new":"neues", "year":"Jahr"}

origTranslator.getGerman: function() {
  return toGerman;
}
origTranslator.addGerman = function(input) {
  toGerman.push(input);
}

  return origTranslator;
}(languageTranslator || {}));

console.log("German", );