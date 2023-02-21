export const convertToPronouns = (pronounSeries: PronounSeries) => {
  const pronouns = {} as Pronouns;
  switch (pronounSeries) {
    case "they":
      pronouns.subjectPronoun = "they";
      pronouns.objectPronoun = "them";
      pronouns.possessivePronoun = "their";
      pronouns.possessiveAdjective = "theirs";
      pronouns.reflexivePronoun = "themself";
      break;
    case "she":
      pronouns.subjectPronoun = "she";
      pronouns.objectPronoun = "her";
      pronouns.possessivePronoun = "her";
      pronouns.possessiveAdjective = "hers";
      pronouns.reflexivePronoun = "herself";
      break;
    case "he":
      pronouns.subjectPronoun = "he";
      pronouns.objectPronoun = "him";
      pronouns.possessivePronoun = "his";
      pronouns.possessiveAdjective = "his";
      pronouns.reflexivePronoun = "himself";
  }
  return pronouns;
};
