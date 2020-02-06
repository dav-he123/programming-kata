let makeCase = function(input, condition) {
  inputArray = input.split("");
  let ans = "";

  if (condition.indexOf("camel") !== -1) {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === " ") {
        inputArray[i] = "";
        inputArray[i + 1] = inputArray[i + 1].toUpperCase();
      }
    }
    ans = inputArray.join("");
  }

  if (condition.indexOf("pascal") !== -1) {
    inputArray[0] = inputArray[0].toUpperCase();

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === " ") {
        inputArray[i] = "";
        inputArray[i + 1] = inputArray[i + 1].toUpperCase();
      }
    }
    ans = inputArray.join("");
  }

  if (condition.indexOf("snake") !== -1) {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === " ") {
        inputArray[i] = "_";
      }
    }
    ans = inputArray.join("");
  }

  if (condition.indexOf("kebab") !== -1) {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === " ") {
        inputArray[i] = "-";
      }
    }
    ans = inputArray.join("");
  }

  if (condition.indexOf("title") !== -1) {
    inputArray[0] = inputArray[0].toUpperCase();

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === " ") {
        inputArray[i + 1] = inputArray[i + 1].toUpperCase();
      }
    }
    ans = inputArray.join("");
  }

  if (condition.indexOf("vowel") !== -1) {
    for (let i = 0; i < inputArray.length; i++) {
      if (
        inputArray[i] === "a" ||
        inputArray[i] === "e" ||
        inputArray[i] === "i" ||
        inputArray[i] === "o" ||
        inputArray[i] === "u"
      ) {
        inputArray[i] = inputArray[i].toUpperCase();
      }
    }
    ans = inputArray.join("");
  }

  if (condition.indexOf("consonant") !== -1) {
    for (let i = 0; i < inputArray.length; i++) {
      if (
        inputArray[i] === "a" ||
        inputArray[i] === "e" ||
        inputArray[i] === "i" ||
        inputArray[i] === "o" ||
        inputArray[i] === "u"
      ) {
        inputArray[i] = inputArray[i].toLowerCase();
      } else {
        inputArray[i] = inputArray[i].toUpperCase();
      }
    }
    ans = inputArray.join("");
  }

  if (condition.indexOf("upper") !== -1) {
    for (let i = 0; i < inputArray.length; i++) {
      inputArray[i] = inputArray[i].toUpperCase();
    }
    ans = inputArray.join("");
  }

  return ans;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
