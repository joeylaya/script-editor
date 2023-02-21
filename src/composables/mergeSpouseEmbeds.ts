import { concatList } from "./concatList";

export const mergeSpouseEmbeds = (
  spouses: Spouse[],
  type: "first" | "other",
  html: string
) => {
  const embeds = html.matchAll(
    new RegExp(`(?<=\{\{${type}:)(.+?)(?=\}\})`, "gi")
  );

  let mergedContent = html;

  for (const embed of embeds) {
    const variable = embed[0] as keyof Spouse;

    const values = spouses.map((spouse) => {
      return spouse[variable];
    });

    mergedContent = mergedContent.replace(
      new RegExp(`\{\{${type}:${variable}\}\}`, "g"),
      `<b>${concatList(values)}</b>`
    );
  }

  return mergedContent;
};
