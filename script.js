var button = document.getElementById("button");

button.addEventListener("click", translate); 

function translate() {

  var userInput = document.getElementById("input").value;
  var output = document.getElementById("output");
  var dropdown = document.getElementById("dropdown")

    if(dropdown.value === "welsh") {
      var finalPhrase = languageTranslator.toWelsh(userInput);

    } else if(dropdown.value === "italian") {
      finalPhrase = languageTranslator.toItalian(userInput);

    } else if (dropdown.value === "german") {
      finalPhrase = languageTranslator.toGerman(userInput);
    };

  output.innerHTML = finalPhrase;

}