export const convertCase = (string: string, type: CaseType) => {
  if (!string) return "";

  string = string.replace(/[\s\_]/g, "-");
  string = string.replace(/\B[A-Z]/g, "-$&");

  const lowerCaseString = string.toLowerCase();

  if (type === "kebab") {
    return lowerCaseString;
  }

  let words = lowerCaseString.split("-");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (type === "camel" && i === 0) {
      continue;
    }
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  if (type === "sentence") {
    return words.join(" ");
  } else {
    return words.join("");
  }
};
