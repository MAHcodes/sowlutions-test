const validateEmail = (email) => {
  const emailLength = email.length;
  // check for type
  if (typeof email !== "string") return false;
  // check for length
  if (emailLength === 0 || emailLength > 256) return false;
  // check for spaces
  if (email[0] === " " || email[emailLength] === " ") return false;
  // check for @ character
  let atFound = false;

  for (let i = 0; i < emailLength; i++) {
    // look only for @ character
    if (email[i] === "@") {
      if (atFound) return false;
      atFound = true;
      // check for @ index
      if (i === 0 || i === emailLength - 1) return false;

      // check for @ character before and after
      if (email[i - 1] === "." || email[i + 1] === ".") return false;
    }
  }
  return true;
};

console.log(validateEmail("john.doe@gmail.com"));
console.log(validateEmail("john@doe@gmail.com"));
console.log(validateEmail("john@gmail.c"));
console.log(validateEmail("john@.com"));
