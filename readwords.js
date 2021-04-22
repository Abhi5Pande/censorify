var censor  = require("censorifyv");
console.log(censor.getCensoredWord());
console.log(censor.censor("Some very sad , bad , bad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWord);
console.log("today is avery gloomy day");