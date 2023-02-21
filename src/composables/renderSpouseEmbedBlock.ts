import { mergeSpouseEmbeds } from "./mergeSpouseEmbeds";

export const renderSpouseEmbedBlock = (
  spouses: Spouse[],
  children: string,
  className: string
) => {
  let range = Number();

  if (className === "repeat") {
    range = spouses.length;
  } else {
    range = 1;
  }

  let mergedBlock = "";

  for (let i = 0; i < range; i++) {
    const firstSpouse = [spouses[i]];
    const otherSpouses = [...spouses.slice(0, i), ...spouses.slice(i + 1)];

    const mergedContent = mergeSpouseEmbeds(
      otherSpouses,
      "other",
      mergeSpouseEmbeds(firstSpouse, "first", children)
    );

    mergedBlock += mergedContent;
  }

  return mergedBlock;
};
