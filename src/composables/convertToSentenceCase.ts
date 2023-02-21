export const convertToSentenceCase = (str: string) => {
  if (!str) return "";

  str = str.replace(/[\s\_]/g, "-");
  str = str.replace(/[A-Z]/g, "-$1");

  let words = str.toLowerCase().split("-");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
};
