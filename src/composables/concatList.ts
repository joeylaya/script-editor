export const concatList = (list: string[]) => {
  const len = list.length;

  if (len == 1) return list[0];

  if (len == 2) return `${list[len - 2]} & ${list[len - 1]}`;

  const end = `${list[len - 2]}, & ${list[len - 1]}`;
  const slice = list.slice(0, -2);
  const start = slice.join(", ");

  return start.concat(end);
};
