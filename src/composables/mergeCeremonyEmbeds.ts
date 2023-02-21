export const mergeCeremonyEmbeds = (ceremony: Ceremony, html: string) => {
  let mergedContent = html;

  for (const variable in ceremony) {
    if (variable === "spouses") continue;

    const value = ceremony[variable as keyof Ceremony];

    mergedContent = mergedContent.replace(
      new RegExp(`\\{\\{ceremony:${variable}\\}\\}`, "g"),
      `<b>${value}</b>`
    );
  }

  return mergedContent;
};
