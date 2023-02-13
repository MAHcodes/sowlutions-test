const isValidBracketSequence = (brackets) => {
  const bracketsMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // if bracket is closed
  const bracketsStatus = {
    "(": false,
    "[": false,
    "{": false,
  };

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "(" || brackets[i] === "[" || brackets[i] === "{") {
      bracketsStatus[brackets[i]] = true;
    }
    if (brackets[i] === ")" || brackets[i] === "]" || brackets[i] === "}") {
      if (brackets[i] !== bracketsMap[brackets[i - 1]]) {
        return false;
      }
      bracketsStatus[brackets[i - 1]] = false;
    }
  }

  return !Object.values(bracketsStatus).includes(true);
};

console.log(isValidBracketSequence("()[]{}")); // true
console.log(isValidBracketSequence("([{}])")); // true
console.log(isValidBracketSequence("(")); // false
console.log(isValidBracketSequence("[(]")); // false
console.log(isValidBracketSequence("{[}]")); // false
